import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground
} from "react-native";

import startMainTabs from "../MainTabs/startMainTab";
import DefaultInput from "../../UI/DefaultInput/DefaultInput";
import HeadingText from "../../UI/HeadingText/HeadingText";
import MainText from "../../UI/MainText/MainText";
import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <Button title="Switch To Login" onPress={() => alert('clicked!')} />
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your Email" />
            <DefaultInput placeholder="Password" />
            <DefaultInput placeholder="Confirm Password" />
          </View>
          <Button title="Submit" onPress={this.loginHandler} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "85%"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  }
});

export default AuthScreen;
