import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground } from 'react-native'
import { Button, Container, Content } from 'native-base'
import { Constants } from 'expo';

export default class WelcomeScreen extends Component {

  componentDidMount() {
    // console.log(this.props.navigation)
  }

  render() {
    return (
      <Container>
        <View style={styles.statusBar} />
        <ImageBackground source={{ uri: 'http://www.darklandmusic.com/wp-content/uploads/2017/12/Who-is-a-Good-Publicity-Event-Photographers.jpg' }} style={{ width: '100%', height: '100%' }}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to</Text>
            <Image
              style={{ width: 250, height: 60, resizeMode: 'stretch', marginBottom: 20 }}
              source={require('../assets/EreviewdLogo.png')}
            />
            <View style={styles.button}>
              <Button primary onPress={() => this.props.navigation.navigate('Login')} style={{ width: 100, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: 'white' }}>Sign Here</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#f75611',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
});