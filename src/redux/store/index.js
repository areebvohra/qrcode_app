import { createStore, combineReducers } from 'redux'
import UserReducer from '../reducers/UserReducer'
import AreaReducer from '../reducers/AreaReducer'

import ShopCategoryReducer from '../reducers/ShopCategoryReducer'
import SurveyReducer from '../reducers/SurveyReducer'
import LocationReducer from '../reducers/LocationReducer'

const rootReducers = combineReducers({
    area: AreaReducer,
    user: UserReducer,
    shop: ShopCategoryReducer,
    imagename: SurveyReducer,
    location: LocationReducer
})

const configureStore = () => {
    const store = createStore(rootReducers)
    return { store }
}

export default configureStore;