import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomNav from './BottomNavigator'
import Home from "../screens/Home";
import { LoginScreen } from "../screens/Login";

const SwitchNav = createSwitchNavigator({
  App: BottomNav,
  Home: Home,
  Login: LoginScreen
}, {
    initialRouteName: 'Login'
  })

export default createAppContainer(SwitchNav)