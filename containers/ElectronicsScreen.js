import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {electronics} from '../Data';
import Products from '../components/Products';

class ElectronicsScreen extends Component{

    static navigationOptions = {
        headerTitle: 'Electronics'
    }
    render(){
        return (
            <View style={styles.container}>
                <Products products = {electronics} />
            </View>
        );
    }
}
export default ElectronicsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});