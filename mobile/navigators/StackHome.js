import React from 'react';
import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screens/Home'
import Detail from '../screens/Detail'

const stackHome = createStackNavigator({
  Home: HomeScreen,
  Detail: Detail
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  {
    initialRouteName: 'Home'
  })

export default stackHome