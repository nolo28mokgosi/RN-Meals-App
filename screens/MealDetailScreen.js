import React from 'react';
import {View,Text,StyleSheet } from 'react-native';

const MealDetailsScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button title="Go to Meals" onPress={() =>{
                props.navigation.pop();
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;