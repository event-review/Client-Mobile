import React from 'react';
import { createStackNavigator } from 'react-navigation'

import MyEventScreen from '../screens/MyEvent'
import DetailMyEvent from '../screens/DetailMyEvent'

const stackHome = createStackNavigator({
  MyEvent: MyEventScreen,
  DetailMyEvent: DetailMyEvent
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  {
    initialRouteName: 'MyEvent'
  })

export default stackHome