import React, {useState, useEffect, useCallback } from 'react';
import {View,Text,StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';


import HeaderButton from '../components/headerButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals'

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                    trackColor={{true: Colors.primaryColor}}
                    thumbColor={Colors.primaryColor}
                    value={props.state}
                    onValueChange={props.onChange}/>
            </View>
    );
}

const FilterScreen = props => {
    const {navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const dispatch = useDispatch()

    const saveFilters = useCallback(() =>{
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegeterian
        }
        dispatch(setFilters(appliedFilters))
    },[isGlutenFree, isLactoseFree, isVegan, isVegeterian,dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters })
    },[saveFilters]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/Restrictions</Text>
                <FilterSwitch 
                    label="Gluten-free" 
                    state={isGlutenFree}
                    onChange={ newValue => setIsGlutenFree(newValue) }/>
                <FilterSwitch 
                    label="Lactose-free" 
                    state={isLactoseFree}
                    onChange={ newValue => setIsLactoseFree(newValue) }/>
                <FilterSwitch 
                    label="Vegan" 
                    state={isVegan}
                    onChange={ newValue => setIsVegan(newValue) }/>
                <FilterSwitch 
                    label="Vegetarian" 
                    state={isVegeterian}
                    onChange={ newValue => setIsVegeterian(newValue) }/>
        </View>
        
    )
};

FilterScreen.navigationOptions =  navData => {
    return{
        headerTitle: "Filter Meals",
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>),
        headerRight:() => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Save" 
                iconName='ios-save' 
                onPress={
                    () =>{}
                    //navData.route.params.save
                }/>
        </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center'
    },
    title:{
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
});

export default FilterScreen;