import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import CircularHue from './src/CircularHue';
import HorizontalHsbSliders from './src/HsbHorizontal';
import HorizontalHslSliders from './src/HslHorizontal';
import HorizontalRgbSliders from './src/RgbHorizontal';
import Panel1Example from './src/Panel1';
import Panel2Brightness from './src/Panel2Brightness';
import Panel2Saturation from './src/Panel2Saturation';
import WheelBrightness from './src/Panel3Brightness';
import WheelSaturation from './src/Panel3Saturation';
import Panel4Example from './src/Panel4';
import Panel5Example from './src/Panel5';
import VerticalHsbSliders from './src/HsbVertical';
import VerticalHslSliders from './src/HslVertical';
import VerticalRgbSliders from './src/RgbVertical';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent />

      <View style={[styles.container, { paddingTop: 20, backgroundColor: '#202124' }]}>
        <ScrollView contentContainerStyle={[styles.container, { width: 240, alignSelf: 'center' }]}>
          <Panel1Example />

          <Panel2Saturation />
          <Panel2Brightness />

          <WheelSaturation />
          <WheelBrightness />

          <Panel4Example />

          <Panel5Example />

          <CircularHue />

          <HorizontalHsbSliders />
          <VerticalHsbSliders />

          <HorizontalHslSliders />
          <VerticalHslSliders />

          <HorizontalRgbSliders />
          <VerticalRgbSliders />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});