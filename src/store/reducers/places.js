import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({ key: Math.random(), name: action.placeName, image: {
                    uri: "https://images.pexels.com/photos/34950/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
                  } })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place, i) => {
                    return place.key !== state.selectedPlace.key;
                  })
            };
        
        default:
            return state;
    }
};

export default reducer;