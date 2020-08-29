import React from 'react'
import { Navigation } from "react-native-navigation"
import messaging from '@react-native-firebase/messaging'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store'
import Loading from './src/components/Loading'

import SideMenu from './src/components/Menu/SideMenu'

import GetStartedScreen from "./src/screens/GetStartedScreen"
import HomeScreen from "./src/screens/HomeScreen"
import AuthScreen from './src/screens/AuthScreen'
import PhoneConfirmScreen from './src/screens/AuthScreen/PhoneConfirmScreen'
import NotificationScreen from "./src/screens/NotificationScreen"
import ProfileScreen from './src/screens/ProfileScreen'
import SearchPlaceModal from './src/components/Modals/SearchPlaceModal'
import ProfileUpdateModal from './src/components/Profile/ProfileUpdateModal'

import OptionsModal from './src/components/Home/OptionsModal'
import StationListModal from './src/components/Home/StationListModal'
import StationModal from './src/components/Home/StationModal'
import OrderListModal from './src/components/Home/OrderListModal'
import OrderDetailModal from './src/components/Home/OrderDetailModal'
import CustomAlert from './src/components/CustomAlert'

import SignupScreen from './src/screens/AuthScreen/SignupScreen'
import LoginScreen from './src/screens/AuthScreen/LoginScreen'

ReduxProvider = Component => {
  return props => (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  )
}

// Side Menu
Navigation.registerComponent(
  'SideMenu',
  () => ReduxProvider(SideMenu),
  () => SideMenu,
)
// 

// Screens
Navigation.registerComponent(
  'GetStartedScreen',
  () => ReduxProvider(GetStartedScreen),
  () => GetStartedScreen,
)

Navigation.registerComponent(
  'AuthScreen',
  () => ReduxProvider(AuthScreen),
  () => AuthScreen,
)

Navigation.registerComponent(
  'PhoneConfirmScreen',
  () => ReduxProvider(PhoneConfirmScreen),
  () => PhoneConfirmScreen,
)

Navigation.registerComponent(
  'NotificationScreen',
  () => ReduxProvider(NotificationScreen),
  () => NotificationScreen,
)

Navigation.registerComponent(
  'HomeScreen',
  () => ReduxProvider(HomeScreen),
  () => HomeScreen,
)

Navigation.registerComponent(
  'ProfileScreen',
  () => ReduxProvider(ProfileScreen),
  () => ProfileScreen,
)
// 

// Modals
Navigation.registerComponent(
  'OptionsModal',
  () => ReduxProvider(OptionsModal),
  () => OptionsModal,
)

Navigation.registerComponent(
  'StationListModal',
  () => ReduxProvider(StationListModal),
  () => StationListModal,
)

Navigation.registerComponent(
  'FilterServiceModal',
  () => ReduxProvider(FilterServiceModal),
  () => FilterServiceModal,
)

Navigation.registerComponent(
  'StationModal',
  () => ReduxProvider(StationModal),
  () => StationModal,
)

Navigation.registerComponent(
  'OrderListModal',
  () => ReduxProvider(OrderListModal),
  () => OrderListModal,
)

Navigation.registerComponent(
  'OrderDetailModal',
  () => ReduxProvider(OrderDetailModal),
  () => OrderDetailModal,
)

Navigation.registerComponent(
  'SearchPlaceModal',
  () => ReduxProvider(SearchPlaceModal),
  () => SearchPlaceModal,
)

Navigation.registerComponent(
  'ProfileUpdateModal',
  () => ReduxProvider(ProfileUpdateModal),
  () => ProfileUpdateModal,
)
//

// OVERLAY
Navigation.registerComponent(
  'CustomAlert',
  () => ReduxProvider(CustomAlert),
  () => CustomAlert,
)
//

Navigation.registerComponent(
  'SignupScreen',
  () => ReduxProvider(SignupScreen),
  () => SignupScreen,
)

Navigation.registerComponent(
  'LoginScreen',
  () => ReduxProvider(LoginScreen),
  () => LoginScreen,
)

console.disableYellowBox = true;

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log("BRM: ", remoteMessage)
})

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'GetStartedScreen'
      }
    }
  })
})