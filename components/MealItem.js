import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.OnSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}} >
                <ImageBackground source={{uri: props.image}} style={styles.bgimage}>
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={1}  style={styles.title}>{props.title}</Text>
                    </View>                        
                </ImageBackground>
                
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetails}}>
                <Text>{props.duration}</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    mealRow:{
        flexDirection: 'row'
    },
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader:{
        height: '85%'
    },
    mealDetails:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgimage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    }
});

export default MealItem;