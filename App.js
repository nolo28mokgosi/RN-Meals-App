import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';

import RecipeNavigator from './navigation/RecipeNavigator';
// import {enableScreens } from 'react-native-screens'; //Ensures RN uses native optimised screen components, great for performance
// useScreens();
import mealsReducer from './store/reducers/meals';
import MealsNavigator from './navigation/MealsNavigator';

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

export default function App() {
  return (
    // <Provider store={store}> <RecipeNavigator /></Provider> );
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
