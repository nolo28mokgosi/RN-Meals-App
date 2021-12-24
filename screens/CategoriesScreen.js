import React from 'react';
import {View,Text,StyleSheet,Button, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/headerButton';

const CategoriesScreen = ({navigation}) => {
    const renderGridItem = (itemData) => {
        return(
           
            <CategoryGridTile 
                title={itemData.item.title}  
                color ={itemData.item.color}
                onSelect={()=> {
                // navigation.navigate({routeName: 'CategoryMeals', params:{
                //     categoryId: itemData.item.id}})    
                navigation.navigate('CategoryMeals',{
                    categoryId: itemData.item.id
                });
            }}/>
          
        );
    }

    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
};

export const screenOptions = navData => {
    return{
    headerTitle: "Meal Categories",
    headerLeft:() => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;