import React, { useContext } from 'react';
import { I18nManager } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import Thumb from '.././Thumb/Thumb';
import { CTX } from '../../ColorPicker';
import { clamp, getStyle, hsva2Hsla } from '../../utils';

import type { LayoutChangeEvent } from 'react-native';
import type { SliderProps } from '../../types';
import type { PanGestureHandlerEventPayload } from 'react-native-gesture-handler';

const isRtl = I18nManager.isRTL;

export function BrightnessSlider({
  adaptSpectrum = false,
  thumbShape: localThumbShape,
  thumbSize: localThumbSize,
  thumbColor: localThumbColor,
  renderThumb: localRenderThumb,
  thumbStyle: localThumbStyle,
  thumbInnerStyle: localThumbInnerStyle,
  style = {},
  vertical = false,
  reverse = false,
}: SliderProps) {
  const {
    brightnessValue,
    hueValue,
    saturationValue,
    onGestureChange,
    onGestureEnd,
    sliderThickness,
    thumbSize: globalThumbSize,
    thumbShape: globalThumbShape,
    thumbColor: globalThumbColor,
    renderThumb: globalRenderThumb,
    thumbStyle: globalThumbStyle,
    thumbInnerStyle: globalThumbInnerStyle,
  } = useContext(CTX);

  const thumbShape = localThumbShape ?? globalThumbShape,
    thumbSize = localThumbSize ?? globalThumbSize,
    thumbColor = localThumbColor ?? globalThumbColor,
    renderThumb = localRenderThumb ?? globalRenderThumb,
    thumbStyle = localThumbStyle ?? globalThumbStyle ?? {},
    thumbInnerStyle = localThumbInnerStyle ?? globalThumbInnerStyle ?? {};

  const borderRadius = getStyle(style, 'borderRadius') ?? 5,
    getWidth = getStyle(style, 'width'),
    getHeight = getStyle(style, 'height');

  const width = useSharedValue(vertical ? sliderThickness : typeof getWidth === 'number' ? getWidth : 0),
    height = useSharedValue(!vertical ? sliderThickness : typeof getHeight === 'number' ? getHeight : 0);

  const handleScale = useSharedValue(1);

  const handleStyle = useAnimatedStyle(() => {
    const length = vertical ? height.value : width.value,
      percent = (brightnessValue.value / 100) * length,
      pos = (reverse ? length - percent : percent) - thumbSize / 2,
      posY = vertical ? pos : height.value / 2 - thumbSize / 2,
      posX = vertical ? width.value / 2 - thumbSize / 2 : pos;
    return {
      transform: [{ translateY: posY }, { translateX: posX }, { scale: handleScale.value }],
    };
  }, [localThumbSize, vertical, reverse]);

  const activeColorStyle = useAnimatedStyle(() => ({
    backgroundColor: hsva2Hsla(hueValue.value, adaptSpectrum ? saturationValue.value : 100, 100),
  }));

  const onGestureUpdate = (event: PanGestureHandlerEventPayload) => {
    'worklet';
    const posX = clamp(event.x, width.value),
      posY = clamp(event.y, height.value),
      percentX = posX / width.value,
      percentY = posY / height.value,
      valX = reverse ? 100 - Math.round(percentX * 100) : Math.round(percentX * 100),
      valY = reverse ? 100 - Math.round(percentY * 100) : Math.round(percentY * 100);

    brightnessValue.value = vertical ? valY : valX;

    runOnJS(onGestureChange)();
  };
  const onGestureBegin = (event: PanGestureHandlerEventPayload) => {
    'worklet';
    handleScale.value = withTiming(1.2, { duration: 100 });
    onGestureUpdate(event);
  };
  const onGestureFinish = () => {
    'worklet';
    handleScale.value = withTiming(1, { duration: 100 });
    runOnJS(onGestureEnd)();
  };

  const pan = Gesture.Pan().onBegin(onGestureBegin).onUpdate(onGestureUpdate).onEnd(onGestureFinish);
  const tap = Gesture.Tap().onTouchesUp(onGestureFinish);
  const longPress = Gesture.LongPress().onTouchesUp(onGestureFinish);
  const composed = Gesture.Exclusive(pan, tap, longPress);

  const onLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    if (!vertical) width.value = withTiming(Math.round(layout.width), { duration: 5 });
    if (vertical) height.value = withTiming(Math.round(layout.height), { duration: 5 });
  };

  const imageStyle = useAnimatedStyle(() => {
    const imageRotate = vertical ? (reverse ? '270deg' : '90deg') : reverse ? '180deg' : '0deg';
    const imageTranslateY =
      (reverse && isRtl) || (!reverse && !isRtl) ? height.value / 2 - width.value / 2 : -height.value / 2 + width.value / 2;
    return {
      width: vertical ? height.value : width.value,
      height: vertical ? width.value : height.value,
      borderRadius,
      transform: [
        { rotate: imageRotate },
        { translateX: vertical ? (reverse ? -height.value / 2 + width.value / 2 : height.value / 2 - width.value / 2) : 0 },
        { translateY: vertical ? imageTranslateY : 0 },
      ],
    };
  }, [vertical, reverse, sliderThickness]);

  const thicknessStyle = vertical ? { width: sliderThickness } : { height: sliderThickness };

  return (
    <GestureDetector gesture={composed}>
      <Animated.View
        onLayout={onLayout}
        style={[{ borderRadius }, style, { position: 'relative', borderWidth: 0, padding: 0 }, thicknessStyle, activeColorStyle]}
      >
        <Animated.Image source={require('../../assets/Brightness.png')} style={imageStyle} />
        <Thumb
          {...{
            channel: 'v',
            thumbShape,
            thumbSize,
            thumbColor,
            renderThumb,
            handleStyle,
            innerStyle: thumbInnerStyle,
            style: thumbStyle,
            vertical,
            adaptSpectrum,
          }}
        />
      </Animated.View>
    </GestureDetector>
  );
}