import { setArea } from "../actions/AreaAction"
import { setCompanyId, setUserId, setUserType } from "../actions/UserAction"
import { setShopCategories, setShopID } from "../actions/ShopCategoryAction"
import { setImageName, setQrCode } from "../actions/SurvayAction"
import { setLongitude, setLatitude } from "../actions/LocationAction"

const mapStateToProps = (state) => {
    return {
        areas: state.area.areas,
        userID: state.user.userID,
        companyID: state.user.companyID,
        userType: state.user.userType,
        shopcategories: state.shop.shopCategories,
        imageNames: state.imagename.imageNames,
        qrcode: state.imagename.qrCode,
        shopID: state.shop.shopID,
        longitude: state.location.longitude,
        latitude: state.location.latitude
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setArea: (data) => dispatch(setArea(data)),
        setUserId: (ID) => dispatch(setUserId(ID)),
        setCompanyId: (ID) => dispatch(setCompanyId(ID)),
        setUserType: (ID) => dispatch(setUserType(ID)),
        setShopCategories: (data) => dispatch(setShopCategories(data)),
        setShopID: (ID) => dispatch(setShopID(ID)),
        setImageName: (names) => dispatch(setImageName(names)),
        setQrCode: (code) => dispatch(setQrCode(code)),
        setLongitude: (loc) => dispatch(setLongitude(loc)),
        setLatitude: (loc) => dispatch(setLatitude(loc))
    }
}

export { mapStateToProps, mapDispatchToProps }
