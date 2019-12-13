import { SET_SHOP_CATEGORIES, SET_SHOP_ID } from "../types"

export const setShopCategories = (data) => {
    return {
        type: SET_SHOP_CATEGORIES,
        payload: data
    }
}

export const setShopID = (data) => {
    return {
        type: SET_SHOP_ID,
        payload: data
    }
}