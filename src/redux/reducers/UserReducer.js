import { SET_USER_ID, SET_COMPANY_ID, SET_USER_TYPE } from "../types";

const initialState = {
    userID: "",
    companyID: "",
    userType: ""
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userID: action.payload
            }
        case SET_COMPANY_ID:
            return {
                ...state,
                companyID: action.payload
            }
        case SET_USER_TYPE:
            return {
                ...state,
                userType: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;