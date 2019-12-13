import { SET_SHOP_CATEGORIES, SET_SHOP_ID } from "../types";

const intialState = {
    shopCategories: new Array(),
    shopID: ""
}

const ShopCategoryReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            return {
                ...state,
                shopCategories: [...action.payload]
            }
        case SET_SHOP_ID:
            return {
                ...state,
                shopID: action.payload
            }
        default:
            return state;
    }
}

export default ShopCategoryReducer;