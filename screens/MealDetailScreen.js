import React from 'react';
import {View,Text,StyleSheet, Button } from 'react-native';
import {HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/headerButton';

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go to Meals" onPress={() =>{
                props.navigation.pop();
            }}/>
        </View>
    )
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id = mealId);
    return {
        headerTitle: selectedMeal.title,
        // headerRight: <Text>FAV!</Text>
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => {
                console.log('Logging FAV');
            }} />
        </HeaderButtons>
    }
};



const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;