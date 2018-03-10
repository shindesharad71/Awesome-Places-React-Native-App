import React, { Component } from "react";
import { View, Image, Button, StyleSheet, Text, Dimensions } from "react-native";
import MapView from 'react-native-maps';

class PickLocation extends Component {

  state = {
    focusedLocation: {
      latitude: 37.7900,
      longitude: -122.40,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
    },
    locationChosen: false
  }

  pickLocatioHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
    this.props.onLocationPick({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  }

  getLoacationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos =>{
      const coordsEvent ={
        nativeEvent: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }
      };
      this.pickLocatioHandler(coordsEvent);
    }, err => {
      alert('Fetching location failed pick manually');
    })
  }

  render() {

    let marker = null;

    if(this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }

    return (
      <View style={styles.container}>
        <MapView 
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocatioHandler}
          ref={ref => this.map = ref}
          >
          {marker}
          </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.getLoacationHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  map: {
    width: "100%",
    height: 250
  }
});

export default PickLocation;
