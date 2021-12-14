import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

 const MealsNavigator = createStackNavigator({
    Categories: { 
        screen: CategoriesScreen,
        // headerStyle: {
        //     backgroundColor: Colors.primaryColor
        // },
        // headerTintColor: 'white'
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
        
    },
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
}});

export default createAppContainer(MealsNavigator);