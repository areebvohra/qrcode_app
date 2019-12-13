import { SET_IMAGE_NAMES, SET_QRCODE } from "../types"

export const setImageName = (names) => {
    return {
        type: SET_IMAGE_NAMES,
        payload: names
    }
}

export const setQrCode = (code) => {
    return {
        type: SET_QRCODE,
        payload: code
    }
}