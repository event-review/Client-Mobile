import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from 'react-navigation'
import Home from '../screens/Home'
import StackHome from '../navigators/StackHome'
import StackMyEvent from '../navigators/stackMyEvent'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Logout from '../screens/Logout'
import MyEventScreen from '../screens/MyEvent';
import StackProfile from '../navigators/StackProfile'

const bottomNav = createBottomTabNavigator({
  Home: {
    screen: StackHome,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="home" size={25} style={{color: 'gray'}}/>
      ),
    },
  },
  // Search: {
  //   screen: Search,
  //   navigationOptions: {
  //     tabBarIcon: ({ tintColor, focused }) => (
  //       <Icon name="search" size={25}/>
  //     ),
  //   },
  // },
  MyEvent: {
    screen: StackMyEvent,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="heart" size={25} style={{color: 'gray'}}/>
      ),
    },
  },
  Profile: {
    screen: StackProfile,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="ellipsis-v" size={25} style={{color: 'gray'}}/>
      )
    }
  }
}, {
    initialRouteName: 'Home'
  })

export default bottomNav