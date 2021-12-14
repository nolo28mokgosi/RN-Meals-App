import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoriteScreen from '../screens/FavoritesScreen';

 const MealsNavigator = createStackNavigator({
    Categories: { 
        screen: CategoriesScreen,
        // headerStyle: {
        //     backgroundColor: Colors.primaryColor
        // },
        // headerTintColor: 'white'
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
        
    },
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
}});

const tabScreenConfig = {
    Meals: { screen: MealsNavigator, navigationOptions:{
        tabBarLabel: 'Meals!',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.primaryColor
    }},
    Favorites: { screen: FavoriteScreen, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.accentColor
    }}
};

const MealsFavTabNavigator = Platform.OS === 'android'? 
createMaterialBottomTabNavigator(
    tabScreenConfig,{
        activeTintColor: 'white',
        shifting: true
    })
: createBottomTabNavigator(
    tabScreenConfig,{
    tabBarOptions:{
        activeTintColor: Colors.accentColor
    }
});
 

// export default createAppContainer(MealsNavigator);
export default createAppContainer(MealsFavTabNavigator);