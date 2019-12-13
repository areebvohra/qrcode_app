import { SET_LATITUDE, SET_LONGITUDE } from "../types";

export const setLongitude = (data) => {
    return {
        type: SET_LONGITUDE,
        payload: data
    }
}

export const setLatitude = (data) => {
    return {
        type: SET_LATITUDE,
        payload: data
    }
}