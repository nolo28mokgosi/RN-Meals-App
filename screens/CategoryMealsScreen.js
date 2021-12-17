import React from 'react';
import {View,Text,StyleSheet,FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = ({route,navigation}) => {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return(<MealList listData={displayedMeals} navigation={navigation} />);
};

export const screenOptions = (navigationData) => {
    const catId = navigationData.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id = catId);

    return{
        headerTitle: selectedCategory.title,
       
    }
};

const styles = StyleSheet.create({
   
});

export default CategoryMealScreen;