import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BookScreen'

class ShoopingCart extends Component{
    render(){
        return(
            <AppStackNavigator />
        );
    }
}
export default ShoopingCart;

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});