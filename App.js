import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
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
          style={styles.buttonInput}
          onPress={this.placeSubmitHandler} />
      </View>
      <View style={styles.listContainer}>
        {placesOutput}
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
  },
  listContainer: {
    width: "100%"
  }
});
