import { SET_USER_ID, SET_COMPANY_ID, SET_USER_TYPE } from "../types";

export const setUserId = (data) => {
    return {
        type: SET_USER_ID,
        payload: data,
    }
}

export const setCompanyId = (data) => {
    return {
        type: SET_COMPANY_ID,
        payload: data,
    }
}

export const setUserType = (data) => {
    return {
        type: SET_USER_TYPE,
        payload: data,
    }
}