import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';

import placeImage from './src/assets/sample.jpg';

export default class App extends React.Component {

  state = {
    places: []
  }

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: this.state.places.concat({ key: Math.random(), name: placeName, image: placeImage })
      }
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return place.key !== key;
        })
      }
    }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput onPlaceAdded={this.placeAddedHandler} />
        <PlacesList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});