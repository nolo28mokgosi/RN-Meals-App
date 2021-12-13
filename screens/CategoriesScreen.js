import React from 'react';
import {View,Text,StyleSheet,Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';



const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return(
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate('CategoryMeals')
            }}>
            <View>
             <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    return(
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem:{
        flex: 1,
        margin: 15,

    }
});

export default CategoriesScreen;