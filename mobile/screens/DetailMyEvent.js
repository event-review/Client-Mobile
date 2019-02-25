import React, { Component } from 'react'
import { Constants, MapView } from 'expo'
import { AsyncStorage, View, Image, StyleSheet, WebView, Modal, Dimensions } from 'react-native'
import { Container, Content, Button, Text, Card, CardItem, } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import HTML from 'react-native-render-html'
import api from '../actions/api'
import QRCode from 'react-native-qrcode';
// import MapView from 'react-native-maps'

export default class Detail extends Component {
  state = {
    modalVisibleMessage: false,
    message: '',
    text: `http://localhost:3000/users/attend/${this.props.navigation.state.params.userId}/${this.props.navigation.state.params.data._id}`
    // text: `https://www.facebook.com`
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.data)
  }

  render() {
    let { name, date, place, price, latitude, longitude } = this.props.navigation.state.params.data

    return (
      <Container>
        <View style={styles.statusBar} />
        <Content style={{ margin: 10 }}>
          {
            (name) && (
              <View >
                <View style={{ margin: 15 }}>
                  <View style={{justifyContent: "center", alignItems: "center", marginBottom: 15}}>
                    <QRCode
                      value={this.state.text}
                      size={300}
                      bgColor='black'
                      fgColor='white' />
                  </View>
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
            region={{
              latitude: Number(latitude),
              longitude: Number(longitude),
              latitudeDelta: 0.009,
              longitudeDelta: 0.01,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: Number(latitude),
                longitude: Number(longitude)
              }}
              title={"title"}
              description={"description"}
            />
          </MapView>
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