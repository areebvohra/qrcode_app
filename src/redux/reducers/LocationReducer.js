import { SET_LATITUDE, SET_LONGITUDE } from "../types";

const intialState = {
    longitude: "",
    latitude: ""
}

const LocationReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_LONGITUDE:
            return {
                ...state,
                longitude: action.payload
            }
        case SET_LATITUDE:
            return {
                ...state,
                latitude: action.payload
            }
        default:
            return state;
    }
}

export default LocationReducer;