import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {books} from '../Data'
import Products from '../components/Products'

class BookScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Products products={books} />
            </View>
        );
    }
}
export default BookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});