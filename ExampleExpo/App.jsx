import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import CircularHue from './src/CircularHue';
import HorizontalHsbSliders from './src/HorizontalHsbSliders';
import HorizontalHslSliders from './src/HorizontalHslSliders';
import HorizontalRgbSliders from './src/HorizontalRgbSliders';
import Panel1Example from './src/Panel1Example';
import Panel2Brightness from './src/Panel2Brightness';
import Panel2Saturation from './src/Panel2Saturation';
import WheelBrightness from './src/Panel3Brightness';
import WheelSaturation from './src/Panel3Saturation';
import Panel4Example from './src/Panel4Example';
import Panel5Example from './src/Panel5Example';
import VerticalHsbSliders from './src/VerticalHsbSliders';
import VerticalHslSliders from './src/VerticalHslSliders';
import VerticalRgbSliders from './src/VerticalRgbSliders';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent />

      <View style={[styles.container, { paddingTop: 20, backgroundColor: '#202124' }]}>
        <View style={[styles.container, { width: 240, alignSelf: 'center' }]}>
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
        </View>
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
