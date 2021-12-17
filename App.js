import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RecipeNavigator from './navigation/RecipeNavigator';
// import {enableScreens } from 'react-native-screens'; //Ensures RN uses native optimised screen components, great for performance
// useScreens();

export default function App() {
  return (
    <RecipeNavigator /> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
