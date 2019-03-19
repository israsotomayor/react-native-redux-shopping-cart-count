import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class BookScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>BookScreen</Text>
            </View>
        );
    }
}
export default BookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});