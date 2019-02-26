import React from 'react';
import { createStackNavigator } from 'react-navigation'

import ProfileScreen from '../screens/Profile'
import DetailProfileScreen from '../screens/DetailProfile'

const stackProfile = createStackNavigator({
  Profile: ProfileScreen,
  DetailProfile: DetailProfileScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  {
    initialRouteName: 'Profile'
  })

export default stackProfile