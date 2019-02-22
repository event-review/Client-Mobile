import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomNav from './BottomNavigator'
import Home from "../screens/Home";

const SwitchNav = createSwitchNavigator({
  App: BottomNav,
  Home: Home
},{
  initialRouteName: 'App'
})

export default createAppContainer(SwitchNav)