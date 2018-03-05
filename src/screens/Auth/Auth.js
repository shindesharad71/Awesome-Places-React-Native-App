import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";

import startMainTabs from "../MainTabs/startMainTab";
import DefaultInput from "../../UI/DefaultInput/DefaultInput";
import HeadingText from "../../UI/HeadingText/HeadingText";
import MainText from "../../UI/MainText/MainText";
import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {

  state = {
    respStyles: {
      pwContainerDirection: "column",
      pwContainerJustifyContent: "flex-start",
      pwWrapperWidth: "100%"
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", dims => {
      this.setState({
        respStyles: {
          pwContainerDirection: Dimensions.get("window").height > 500 ? "column" : "row",
          pwContainerJustifyContent: Dimensions.get("window").height > 500 ? "flex-start" : "space-between",
          pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "45%"
        }
      });
    });
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;

    if (Dimensions.get("window").height > 500) {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <Button title="Switch To Login" onPress={() => alert("clicked!")} />
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your Email" />
            <View
              style={{ 
                flexDirection: this.state.respStyles.pwContainerDirection,
                justifyContent: this.state.respStyles.pwContainerJustifyContent
               }}
            >
              <View style={{
                width: this.state.respStyles.pwWrapperWidth
              }}>
                <DefaultInput placeholder="Password" />
              </View>
              <View style={{
                width: this.state.respStyles.pwWrapperWidth
              }}>
                <DefaultInput placeholder="Confirm Password" />
              </View>
            </View>
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
  },
  passwordContainer: {
    flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
    width: Dimensions.get("window").height > 500 ? "100%" : "45%"
  }
});

export default AuthScreen;
