import React, { ReactNode, useContext } from 'react';
import { I18nManager, StyleSheet, View } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import styles, { CTX } from '../GlobalStyles';

import type { SharedValue, AnimatedStyleProp } from 'react-native-reanimated';
import type { ViewStyle } from 'react-native';
import type { thumbShapeType } from '../types';
import colorKit from '../colorKit';

const isRtl = I18nManager.isRTL;

export type ThumbProps = {
  width: number;
  height: number;
  borderRadius: number;
  thumbColor?: string;
  inverted: SharedValue<string>;
  handleStyle: {};
  innerStyle?: {};
  style?: {};
  solidColor: AnimatedStyleProp<ViewStyle>;
  renderThumb?: (props: ThumbProps) => JSX.Element;
  vertical?: boolean;
};

const Thumbs = {
  Ring: ({ width, height, borderRadius, thumbColor, inverted, handleStyle, innerStyle, solidColor, style }: ThumbProps) => {
    const thumb_Color = thumbColor ? colorKit.HEX(thumbColor) : undefined;
    const computedStyle = {
      width,
      height,
      borderRadius,
      backgroundColor: (thumb_Color || '#ffffff') + 50,
      borderColor: thumbColor,
      borderWidth: 1,
    };
    const invertedStyle = useAnimatedStyle(() => ({
      backgroundColor: (thumbColor && thumbColor + '50') || (inverted.value === '#ffffff' ? '#ffffff50' : '#00000050'),
      borderColor: thumbColor || inverted.value,
    }));
    return (
      <Animated.View style={[styles.handle, style, computedStyle, invertedStyle, handleStyle]}>
        <Animated.View style={[styles.handleInner, styles.shadow, { borderRadius, zIndex: 100 }, solidColor, innerStyle]} />
      </Animated.View>
    );
  },
  Solid: ({ width, height, borderRadius, thumbColor, inverted, handleStyle, style }: ThumbProps) => {
    const computedStyle = { width, height, borderRadius, backgroundColor: thumbColor || 'gray', borderWidth: 1 };
    const invertedStyle = useAnimatedStyle(() => ({ borderColor: inverted.value }));
    return <Animated.View style={[styles.handle, computedStyle, style, styles.shadow, invertedStyle, handleStyle]} />;
  },
  Hollow: ({ width, height, borderRadius, thumbColor, inverted, handleStyle, innerStyle, style }: ThumbProps) => {
    const computedStyle = { width, height, borderRadius, borderWidth: 2 };
    const invertedStyle = useAnimatedStyle(() => ({ borderColor: thumbColor || inverted.value }));
    const invertedBgStyle = useAnimatedStyle(() => ({ backgroundColor: thumbColor || inverted.value }));
    return (
      <Animated.View style={[styles.handle, style, computedStyle, invertedStyle, handleStyle]}>
        <Animated.View style={[{ width: 4, height: 4, borderRadius: 2 }, invertedBgStyle, styles.shadow, innerStyle]} />
      </Animated.View>
    );
  },
  Line: ({ width, height, borderRadius, thumbColor, inverted, handleStyle, innerStyle, style, vertical }: ThumbProps) => {
    const thikcness = 3;
    const computedStyle = { width, height };
    const lineStyle = {
      borderRadius,
      backgroundColor: thumbColor,
      width: vertical ? '100%' : thikcness,
      height: vertical ? thikcness : '100%',
    };
    const invertedStyle = useAnimatedStyle(() => ({ backgroundColor: thumbColor || inverted.value }));

    return (
      <Animated.View style={[styles.handle, style, computedStyle, handleStyle]}>
        <Animated.View style={[lineStyle, styles.shadow, invertedStyle, innerStyle]} />
      </Animated.View>
    );
  },
  Pill: ({ width, height, borderRadius, thumbColor, inverted, handleStyle, innerStyle, style, vertical }: ThumbProps) => {
    const computedStyle = { width, height };
    const pillStyle = {
      borderRadius,
      borderColor: thumbColor,
      borderWidth: 2,
      width: vertical ? '100%' : 10,
      height: vertical ? 10 : '100%',
    };
    const invertedStyle = useAnimatedStyle(() => ({ borderColor: thumbColor || inverted.value }));
    return (
      <Animated.View style={[styles.handle, computedStyle, style, handleStyle]}>
        <Animated.View style={[pillStyle, styles.shadow, invertedStyle, innerStyle]} />
      </Animated.View>
    );
  },
  Plus: ({ width, height, borderRadius, thumbColor, inverted, handleStyle, innerStyle, style, vertical }: ThumbProps) => {
    const thikcness = 2;
    const computedStyle = { width, height, borderRadius, borderWidth: thikcness };
    const line1 = {
      borderRadius,
      position: 'absolute' as const,
      width: vertical ? '100%' : thikcness,
      height: vertical ? thikcness : '100%',
    };
    const line2 = {
      borderRadius,
      width: vertical ? thikcness : '100%',
      height: vertical ? '100%' : thikcness,
    };
    const invertedStyle = useAnimatedStyle(() => ({ backgroundColor: thumbColor || inverted.value }));
    const invertedBorderStyle = useAnimatedStyle(() => ({ borderColor: thumbColor || inverted.value }));

    return (
      <Animated.View style={[styles.handle, style, computedStyle, invertedBorderStyle, handleStyle]}>
        <Animated.View style={[line1, styles.shadow, invertedStyle, innerStyle]} />
        <Animated.View style={[line2, styles.shadow, invertedStyle, innerStyle]} />
      </Animated.View>
    );
  },
  TriangleUp: ({ width, height, thumbColor, inverted, handleStyle, innerStyle, style, vertical }: ThumbProps) => {
    const computedStyle = {
      width,
      height,
      ...(vertical
        ? { justifyContent: 'center', alignItems: isRtl ? 'flex-end' : 'flex-start' }
        : { justifyContent: 'flex-end' }),
    };
    const triangleStyle = {
      borderBottomWidth: width / 2,
      borderLeftWidth: width / 4,
      borderRightWidth: width / 4,
      transform: [{ rotate: vertical ? '90deg' : '0deg' }],
    };
    const invertedStyle = useAnimatedStyle(() => ({ borderBottomColor: thumbColor || inverted.value }));
    return (
      <Animated.View style={[styles.handle, style, computedStyle, handleStyle]}>
        <Animated.View style={[shapes.triangle, triangleStyle, invertedStyle, innerStyle]} />
      </Animated.View>
    );
  },
  TriangleDown: ({ width, height, thumbColor, inverted, handleStyle, innerStyle, style, vertical }: ThumbProps) => {
    const computedStyle = {
      width,
      height,
      ...(vertical
        ? { justifyContent: 'center', alignItems: isRtl ? 'flex-start' : 'flex-end' }
        : { justifyContent: 'flex-start' }),
    };
    const triangleStyle = {
      borderBottomWidth: width / 2,
      borderLeftWidth: width / 4,
      borderRightWidth: width / 4,
      transform: [{ rotate: vertical ? '270deg' : '180deg' }],
    };
    const invertedStyle = useAnimatedStyle(() => ({ borderBottomColor: thumbColor || inverted.value }));
    return (
      <Animated.View style={[styles.handle, style, computedStyle, handleStyle]}>
        <Animated.View style={[shapes.triangle, triangleStyle, invertedStyle, innerStyle]} />
      </Animated.View>
    );
  },
  DoubleTriangle: ({ width, height, thumbColor, inverted, handleStyle, innerStyle, style, vertical }: ThumbProps) => {
    const computedStyle = {
      width,
      height,
      flexDirection: vertical ? (isRtl ? 'row' : 'row-reverse') : 'column',
    };
    const triangleUpStyle = {
      borderBottomWidth: 10,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      transform: [{ rotate: vertical ? '90deg' : '0deg' }],
    };
    const triangleDownStyle = {
      borderBottomWidth: 10,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      transform: [{ rotate: vertical ? '270deg' : '180deg' }],
    };
    const invertedStyle = useAnimatedStyle(() => ({ borderBottomColor: thumbColor || inverted.value }));
    return (
      <Animated.View style={[styles.handle, style, computedStyle, handleStyle]}>
        <Animated.View style={[shapes.triangle, triangleDownStyle, invertedStyle, innerStyle]} />
        <View style={{ width: '50%', height: '50%' }} />
        <Animated.View style={[shapes.triangle, triangleUpStyle, invertedStyle, innerStyle]} />
      </Animated.View>
    );
  },
  Rect: ({ width, height, inverted, handleStyle, innerStyle, style, vertical, solidColor }: ThumbProps) => {
    const computedStyle = { width, height };
    const pillStyle = {
      borderWidth: 1,
      width: vertical ? '100%' : 14,
      height: vertical ? 14 : '100%',
    };
    const invertedStyle = useAnimatedStyle(() => ({ borderColor: inverted.value }));
    return (
      <Animated.View style={[styles.handle, style, computedStyle, handleStyle]}>
        <Animated.View style={[pillStyle, styles.shadow, invertedStyle, solidColor, innerStyle]} />
      </Animated.View>
    );
  },
  Circle: ({ width, height, borderRadius, inverted, handleStyle, innerStyle, solidColor, style }: ThumbProps) => {
    const computedStyle = { width, height };
    const pillStyle = {
      borderRadius,
      borderWidth: 1,
      width: '100%',
      height: '100%',
    };
    const invertedStyle = useAnimatedStyle(() => ({ borderColor: inverted.value }));
    return (
      <Animated.View style={[styles.handle, style, computedStyle, handleStyle]}>
        <Animated.View style={[pillStyle, styles.shadow, invertedStyle, solidColor, innerStyle]} />
      </Animated.View>
    );
  },
};

type Props = Omit<ThumbProps, 'borderRadius' | 'height' | 'inverted' | 'width' | 'solidColor'> & {
  channel?: 'h' | 's' | 'v' | 'a';
  thumbShape?: thumbShapeType;
  thumbSize: number;
};

export default function Thumb({
  handleStyle,
  innerStyle,
  style,
  thumbColor,
  renderThumb,
  thumbShape = 'ring',
  thumbSize,
  vertical = false,
  channel,
}: Props) {
  const { width, height, borderRadius } = { width: thumbSize, height: thumbSize, borderRadius: thumbSize / 2 };
  const { hueValue, saturationValue, brightnessValue, alphaValue } = useContext(CTX);

  const resultColor = useSharedValue('#ffffff');
  const solidColor = useAnimatedStyle(() => ({ backgroundColor: resultColor.value }));
  const setResultColor = (color: { h: number; s: number; v: number; a?: number }) => {
    resultColor.value = colorKit.HEX(color);
  };

  const inverted = useSharedValue('#ffffff');
  const setInverted = (color1: { h: number; s: number; v: number; a?: number }) => {
    const color = inverted.value === '#ffffff' ? '#000000' : '#ffffff';
    const contrast = colorKit.contrastRatio(color1, inverted.value);
    inverted.value = contrast < 4.5 ? color : inverted.value;
  };

  // When the values of channels change
  useDerivedValue(() => {
    const values =
      channel === 'h'
        ? { h: hueValue.value, s: 100, v: 100 }
        : channel === 'v'
        ? { h: hueValue.value, s: 100, v: brightnessValue.value }
        : channel === 's'
        ? { h: hueValue.value, s: saturationValue.value, v: 70 }
        : channel === 'a'
        ? { h: hueValue.value, s: alphaValue.value * 100, v: 70 }
        : { h: hueValue.value, s: saturationValue.value, v: brightnessValue.value };

    runOnJS(setInverted)(values);
    runOnJS(setResultColor)({ h: hueValue.value, s: saturationValue.value, v: brightnessValue.value });
  });

  const thumbProps: ThumbProps = {
    width,
    height,
    borderRadius,
    vertical,
    solidColor,
    inverted,
    handleStyle,
    innerStyle,
    style,
    thumbColor,
  };

  if (renderThumb) {
    return renderThumb(thumbProps);
  }

  const thumb_Shape = (thumbShape.toLowerCase().charAt(0).toUpperCase() + thumbShape.slice(1)) as keyof typeof Thumbs;
  const Element = () => (Thumbs.hasOwnProperty(thumb_Shape) ? Thumbs[thumb_Shape](thumbProps) : Thumbs.Ring(thumbProps));

  return <Element />;
}

const shapes = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
