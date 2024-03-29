import React from 'react';
import {View,Text,StyleSheet,FlatList } from 'react-native';
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
    // const catId = route.params.categoryId;
    const catId = props.navigation.getParam('categoryId');
   
    
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if(displayedMeals.length ===0 || !displayedMeals)
    {
        return(
            <View style={styles.content}>
                <Text>No meals found, maybe check filters</Text>
            </View>
        )
    }
    return(<MealList listData={displayedMeals} navigation={props.navigation} />);
};

//export const screenOptions = (navigationData) => {
CategoryMealScreen.navigationOptions = (navigationData) => {
    // const catId = navigationData.route.params.categoryId;
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id = catId);

    return{
        headerTitle: selectedCategory.title,
       
    }
};

const styles = StyleSheet.create({
   content:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});

export default CategoryMealScreen;