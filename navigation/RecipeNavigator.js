import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen, { screenOptions as categoriesScreenOptions} from '../screens/CategoriesScreen';
import CategoryMealScreen, { screenOptions as categoryMealScreenOptions}  from '../screens/CategoryMealsScreen';
import MealDetailsScreen, { screenOptions as mealDetailScreenOptions}  from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FilterScreen, {screenOptions as filterScreenOptions} from '../screens/FilterScreen';
import FavoritesScreen, {screenOptions as favoritesScreenOptions}  from '../screens/FavoritesScreen';



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

const MealStack = createNativeStackNavigator();
const MealsNavigator = () =>{
    return(
        <MealStack.Navigator screenOptions={defaultStackNavOptions}>
            <MealStack.Screen name="Categories" component={CategoriesScreen} options={categoriesScreenOptions} />
            <MealStack.Screen name="CategoryMeals" component={CategoryMealScreen} options={categoryMealScreenOptions} />
            <MealStack.Screen name="MealDetail" component={MealDetailsScreen} options={mealDetailScreenOptions} />
      </MealStack.Navigator>
    );
}

const FavStack = createNativeStackNavigator();
const FavNavigator = () =>{
    return(
        <FavStack.Navigator screenOptions={defaultStackNavOptions}>
            <FavStack.Screen name="Favorites" component={FavoritesScreen} options={favoritesScreenOptions}/>
            <FavStack.Screen name="MealDetail" component={MealDetailsScreen} options={mealDetailScreenOptions}/>
        </FavStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const MealsFavTabNavigator = () =>{
    return(
    <Tab.Navigator>
        <Tab.Screen name="Mealss" component={MealsNavigator} options={{ 
            headerShown: false,
            tabBarLabel: 'Meals!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
            }}/>
        <Tab.Screen name="Favorites" component={FavNavigator} options={{
            headerShown: false,
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }} />
    </Tab.Navigator>
    );
}

const FilterStack = createNativeStackNavigator();
const FilterNavigator = () => {
    return(
        <FilterStack.Navigator screenOptions={defaultStackNavOptions}>
            <FilterStack.Screen name="Filters" component={FilterScreen} options={filterScreenOptions}/>
        </FilterStack.Navigator>
    );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () =>{
    return(
    <Drawer.Navigator  initialRouteName="MealsFav">
         <Drawer.Screen name="MealsFav" component={MealsFavTabNavigator} options={{ headerShown: false}}/>
        <Drawer.Screen name="Filter" component={FilterNavigator} options={{ headerShown: false}}/>
    </Drawer.Navigator>
    );
}

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
}

///CreateSwitchNavigator in latest
//**Create Auth Stack */
export default AppNavigator;