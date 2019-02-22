import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Dimensions } from 'react-native';
export default class LogoutScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.logout()
    // setTimeout(() => {
      // this.props.navigation.navigate('AuthLoading')
    // }, 100);
  }

  logout = () => {
    // setTimeout(() => {
    //   this.props.navigation.navigate('AuthLoading')
    // }, 1);
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff"/>
          <Button title="Logout..." onPress={() => this.logout()}/>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: Dimensions.get('window').width / 2 - 200,
    marginTop: Dimensions.get('window').height / 2
  }
})