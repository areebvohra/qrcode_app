import { SET_AREA } from "../types";

const intialState = {
    areas: new Object(),
}

const AreaReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_AREA:
            return {
                ...state,
                areas: action.payload
            }
        default:
            return state;
    }
}

export default AreaReducer;