import React, { Component } from 'react'
import { MapView, Constants } from 'expo'
import { AsyncStorage, View, Image, StyleSheet, WebView, Modal, Dimensions } from 'react-native'
import { Container, Content, Button, Text, Card, CardItem, } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import HTML from 'react-native-render-html'
import api from '../actions/api'

export default class Detail extends Component {
  state = {
    modalVisibleMessage: false,
    message: ''
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.data)
  }

  render() {
    let { name, date, place, price, status, imageUrl, promotorId, _id } = this.props.navigation.state.params.data

    return (
      <Container>
        <View style={styles.statusBar} />
        <Content style={{ margin: 10 }}>
          {
            (name) && (
              <View >
                <View style={{ margin: 15 }}>
                  <Text>Your Ticket</Text>
                  <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Qr-4.png' }} style={styles.imagePoster} />
                  <Text>Scan This QR Code Before Enter The Venue</Text>
                </View>
                <HTML html={'<hr>'} />
                <View style={styles.titlePoster}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
                </View>
                <View style={styles.description}>
                  <Icon name="calendar" size={25} style={styles.icon} />
                  <Text> {new Date(date).toLocaleDateString()}</Text>
                </View>
                <View style={styles.description}>
                  <Icon name="map-marker" size={25} style={styles.icon} />
                  <Text> {place}</Text>
                </View>
                <View style={styles.description}>
                  <Icon name="ticket" size={25} style={styles.icon} />
                  <Text> IDR. {price}</Text>
                </View>
                <HTML html={'<hr>'} />
              </View>
            )}
          <Text style={styles.title}>Location</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <HTML html={'<hr>'} />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 10 },
  map: { flex: 1, height: 200, width: '100%', marginTop: 20, marginBottom: 20 },
  description: { marginBottom: 20, flexDirection: 'row', marginLeft: 10 },
  imagePoster: { width: '100%', height: 400, borderRadius: 15 },
  icon: { marginRight: 15 },
  titlePoster: { marginBottom: 20, marginLeft: 10 }
})