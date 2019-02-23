import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from 'react-navigation'
import Home from '../screens/Home'
import StackHome from '../navigators/StackHome'
import Logout from '../screens/Logout'

const bottomNav = createBottomTabNavigator({
  Home: {
    screen: StackHome,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="home" size={25}/>
      ),
    },
  },
  Search: {
    screen: Logout,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="search" size={25}/>
      ),
    },
  },
  Profile: {
    screen: Logout,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="ellipsis-v" size={25}/>
      ),
    },
  }
}, {
    initialRouteName: 'Home'
  })

export default bottomNav