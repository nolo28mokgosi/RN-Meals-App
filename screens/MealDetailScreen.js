import React, { useCallback, useEffect } from 'react';
import {View,Text,StyleSheet, Button, ScrollView, Image } from 'react-native';
import {HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/headerButton';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return(
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state => state.meals.meals)
    const currentMealIsFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );

    // const mealId = route.params.mealId;
   
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() =>{

        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    // Use effect avoids unending loop
    useEffect(() => {
        // props.navigation.setParams({mealTitle : selectedMeal.title});
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    },[toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealIsFavorite })
    },[currentMealIsFavorite]);
    

    return(
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}/>
            <View style={styles.details}>
                <Text>{selectedMeal.duration}</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingridients</Text>
            {selectedMeal.ingridients.map(ingridient =>(
                <ListItem key={ingridient}>{ingridient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step =>(
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    )
};

// export const screenOptions = (navigationData) => {
MealDetailsScreen.navigationOptions = (navigationData) => {
    //const mealId = navigationData.route.params.mealId;
    // const mealId = navigationData.navigation.getParam('mealId');

    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite= navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav');
    // const selectedMeal = MEALS.find(meal => meal.id = mealId);

    return {
        headerTitle: mealTitle,
        // headerRight: <Text>FAV!</Text>
        headerRight:() => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName={isFavorite? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite} />
        </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 200
    },
    details:{
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title:{
        fontSize: 22,
        textAlign: 'center'
    },
    listItem:{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }

});

export default MealDetailsScreen;