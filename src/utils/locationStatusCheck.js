import { getLocationPermission, checkLocationService, requestLocationService } from '../constants/Permissions';
import * as Location from 'expo-location';

export const locationStatusCheck = async () => {
    await getLocationPermission();
    let serviceStatus = await checkLocationService()
    if (serviceStatus)
        return await Location.getCurrentPositionAsync({});
    else {
        const status = await requestLocationService();
        if (status === "granted" || status) {
            return await Location.getCurrentPositionAsync({});
        } else return;
    }
};

export default locationStatusCheck;