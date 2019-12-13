import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FormScreen from '../screens/FormScreen';
import OTPScreen from '../screens/OTPScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import CreditScreen from '../screens/CreditScreen';
import ServiceScreen from '../screens/ServiceScreen';
import NotificationScreen from '../screens/NotificationScreen';

const AppTabs = createBottomTabNavigator({
  ID: { screen: QRCodeScreen },
  Credits: { screen: CreditScreen },
  Services: { screen: ServiceScreen },
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#00000080',
    },
  }
})


export default createAppContainer(
  createStackNavigator({
    Noti: { screen: NotificationScreen },
    App: { screen: AppTabs },
    Form: { screen: FormScreen },
    OTP: { screen: OTPScreen },
  }, {
    defaultNavigationOptions: {
      header: null
    }
  })
);
