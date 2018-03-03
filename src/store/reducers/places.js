import { ADD_PLACE, SELECT_PLACE, DELETE_PLACE, UNSELECT_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: this.state.places.concat({ key: Math.random(), name: action.placeName, image: {
                    uri: "https://images.pexels.com/photos/34950/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
                  } })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place, i) => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null
            };

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                    })
            };

        case UNSELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        
        default:
            return state;
    }
};

export default reducer;