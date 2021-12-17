import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';



import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoriteScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTitleStyle:{

    },
    headerBackTitleStyle:{

    },
    headerTintColor: 'white',
    headerTitle: 'A Screen'
};

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
    defaultNavigationOptions:defaultStackNavOptions
});


const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: { screen: MealsNavigator, navigationOptions:{
        tabBarLabel: 'Meals!',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.primaryColor
    }},
    Favorites: { screen: FavNavigator, navigationOptions:{
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

const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
},{
    navigationOptions:{
        drawerLabel: 'Filter'
    },
    defaultNavigationOptions: defaultStackNavOptions
});
 
const MainNavigator = createDrawerNavigator({
    MealFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filter: FilterNavigator
},{
    contentOptions:{
        activeTintColor: Colors.accentColor
    }
});

 export default createAppContainer(MainNavigator);//MainNavigator);