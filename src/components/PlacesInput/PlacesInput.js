import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class PlacesInput extends Component {
    state = {
        placeName: ''
    }

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.setState(prevState => {
            this.props.onPlaceAdded(this.state.placeName);
        })
    }
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="Enter your favourite place!"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button style={styles.placeBtn} title="Add" onPress={this.placeSubmitHandler} />
            </View>)
    }
}
export default PlacesInput;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeBtn: {
        width: "30%"
    },
})