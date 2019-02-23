import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import store from './store/index'
import { Font, AppLoading } from 'expo'

import Navigation from './navigators/SwitchNavigator'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
