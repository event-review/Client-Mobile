import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomNav from './BottomNavigator'
import Home from "../screens/Home";
import LoginScreen from "../screens/Login";
import QRScreen from "../screens/TestQRCode";

const SwitchNav = createSwitchNavigator({
  App: BottomNav,
  // Home: Home,
  Login: LoginScreen,
}, {
    initialRouteName: 'App'
  })

export default createAppContainer(SwitchNav)