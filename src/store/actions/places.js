import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => {
    return dispatch => {
        const placeData = {
            placeName: placeName,
            location: location
        };
        fetch("https://awesome-places-r-1520617147968.firebaseio.com/places.json", {
            method: "POST",
            body: JSON.stringify(placeData)
        }).catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
        });
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};
