import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class ShoopingCart extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>ShoopingCart</Text>
            </View>
        );
    }
}
export default ShoopingCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});