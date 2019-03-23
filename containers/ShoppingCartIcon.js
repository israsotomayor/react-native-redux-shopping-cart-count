import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const ShoppingCartIcon = (props) => (
    <View style = {styles.container}>
        <Text>ShoppingCartIcon</Text>
    </View>
)
export default ShoppingCartIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});