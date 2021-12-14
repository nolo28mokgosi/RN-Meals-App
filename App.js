import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';
// import {enableScreens } from 'react-native-screens'; //Ensures RN uses native optimised screen components, great for performance
// useScreens();

export default function App() {
  return (
    <MealsNavigator /> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
