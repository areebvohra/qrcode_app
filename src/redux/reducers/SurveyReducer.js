import { SET_IMAGE_NAMES, SET_QRCODE } from "../types";

const intialState = {
    imageNames: new Array(),
    qrCode: ""
}

const SurveyReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_IMAGE_NAMES:
            return {
                ...state,
                imageNames: [...action.payload]
            }
        case SET_QRCODE:
            return {
                ...state,
                qrCode: action.payload
            }
        default:
            return state;
    }
}

export default SurveyReducer;