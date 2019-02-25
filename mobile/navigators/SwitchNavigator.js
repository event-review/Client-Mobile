import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomNav from './BottomNavigator'
import Home from "../screens/Home";
import LoginScreen from "../screens/Login";
import QRScreen from "../screens/TestQRCode";

const SwitchNav = createSwitchNavigator({
  App: BottomNav,
  QR: QRScreen,
  Login: LoginScreen,
}, {
    initialRouteName: 'Login'
  })

export default createAppContainer(SwitchNav)