import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTab';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
import HeadingText from '../../UI/HeadingText/HeadingText';
import MainText from '../../UI/MainText/MainText';

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
                <Button title="Switch To Login"/>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your Email" />
                    <DefaultInput placeholder="Password" />
                    <DefaultInput placeholder="Confirm Password" />
                </View>
                <Button title="Submit" onPress={this.loginHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "85%"
    }
});

export default AuthScreen;