import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: ''
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          value={this.state.placeName} 
          placeholder="An Awesome Place"
          onChangeText={this.placeNameChangeHandler} />
        <Button 
          title="Add"
          style={styles.buttonInput} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer : {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  placeInput: {
    width: "70%"
  },
  buttonInput: {
    width: "30%"
  }
});
