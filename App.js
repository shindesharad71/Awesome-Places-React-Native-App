import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';

export default class App extends React.Component {

  state = {
    places: []
  }

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        //TODO better uniqueId
        places: this.state.places.concat({ key: Math.random(), value: placeName })
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