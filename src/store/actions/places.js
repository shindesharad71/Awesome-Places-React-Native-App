import { SET_PLACES } from "./actionTypes";
import { uiStartLoading, uiStopLoading, authGetToken } from "./index";

export const addPlace = (placeName, location, image) => {

  dispatch(uiStartLoading());
  dispatch(authGetToken())
  return dispatch => {
    fetch(
      "https://us-central1-awesome-places-r-1520617147968.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({
          image: image.base64
        }),
        headers: {
            "Authorization": "Bearer "+token
        }
      }
    )
      .catch(err => {
        console.log(err);
        dispatch(uiStopLoading());
        alert("Something went wrong try again!");
      })
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          placeName: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch(
          "https://awesome-places-r-1520617147968.firebaseio.com/places.json?auth="+token,
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        )
          .catch(err => {
            console.log(err);
            dispatch(uiStopLoading());
            alert("Something went wrong try again!");
          })
          .then(res => res.json())
          .then(parsedRes => {
            console.log(parsedRes);
            dispatch(uiStopLoading());
          });
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch(
          "https://awesome-places-r-1520617147968.firebaseio.com/places.json?auth=" +
            token
        )
          .catch(err => {
            alert("Something went wrong, try again!");
          })
          .then(res => res.json())
          .then(parsedRes => {
            const places = [];
            for (let key in parsedRes) {
              places.push({
                ...parsedRes[key],
                key: key,
                image: {
                  uri: parsedRes[key].image
                }
              });
            }
            dispatch(setPlaces(places));
          });
      })
      .catch(() => {
        alert("No valid token found");
      });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  };
};

export const deletePlace = key => {
    dispatch(authGetToken())
      .then(token => {
        return
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
