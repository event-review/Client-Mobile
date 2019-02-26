import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomNav from './BottomNavigator'
import Home from "../screens/Home";
import LoginScreen from "../screens/Login";
import WelcomeScreen from "../screens/Welcome";
import QRScreen from "../screens/TestQRCode";

const SwitchNav = createSwitchNavigator({
  Welcome: WelcomeScreen,
  App: BottomNav,
  QR: QRScreen,
  Login: LoginScreen,
}, {
    initialRouteName: 'Welcome'
  })

export default createAppContainer(SwitchNav)