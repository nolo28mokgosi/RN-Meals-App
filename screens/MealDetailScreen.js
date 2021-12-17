import React from 'react';
import {View,Text,StyleSheet, Button, ScrollView, Image } from 'react-native';
import {HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/headerButton';

const ListItem = props => {
    return(
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailsScreen = ({route,navigation}) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

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

export const screenOptions = (navigationData) => {
    const mealId = navigationData.route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id = mealId);
    return {
        headerTitle: selectedMeal.title,
        // headerRight: <Text>FAV!</Text>
        headerRight:() => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => {
                console.log('Logging FAV');
            }} />
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