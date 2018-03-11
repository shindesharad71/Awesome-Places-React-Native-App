import { ADD_PLACE, DELETE_PLACE } from './actionTypes';
import {uiStartLoading, uiStopLoading} from './index';

export const addPlace = (placeName, location, image) => {
    dispatch(uiStartLoading());
    return dispatch => {
        fetch("https://us-central1-awesome-places-r-1520617147968.cloudfunctions.net/storeImage", {
            method: "POST",
            body: JSON.stringify({
                image: image.base64
            })
        }).catch(err => {
            console.log(err);
            dispatch(uiStopLoading());
        })
        .then(res => res.json())
        .then(parsedRes => {
            const placeData = {
                placeName: placeName,
                location: location,
                image: parsedRes.imageUrl
            };
            return fetch("https://awesome-places-r-1520617147968.firebaseio.com/places.json", {
                method: "POST",
                body: JSON.stringify(placeData)
            })
            .catch(err => {
                console.log(err);
                dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                dispatch(uiStopLoading());
            });
        });
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};
