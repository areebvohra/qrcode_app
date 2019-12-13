import { SET_AREA } from "../types"

export const setArea = (data) => {
    return {
        type: SET_AREA,
        payload: data
    }
}