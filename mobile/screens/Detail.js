import React, { Component } from 'react'
import { MapView, Constants } from 'expo'
import { View, Image, StyleSheet, WebView } from 'react-native'
import { Container, Content, Button, Text, Card, CardItem, } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import HTML from 'react-native-render-html'

export default class Detail extends Component {
  join = () => {
    console.log('join event')
    alert('join event')
  }

  render() {
    let { name, date, place, price, status, imageUrl, promotor } = this.props.navigation.state.params.data

    return (
      <Container>
        <View style={styles.statusBar} />
        <Content style={{ margin: 10 }}>
          {
            (name) && (
              <View >
                <View style={{ margin: 15 }}>
                  <Image source={{ uri: imageUrl }} style={styles.imagePoster} />
                </View>
                <HTML html={'<hr>'} />
                <View style={styles.titlePoster}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
                  <Text>by {promotor.name}</Text>
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
                  <Icon name="check" size={25} style={styles.icon} />
                  <Text> {status}</Text>
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
          <Text style={styles.title}>Organizer</Text>
          <Text>{promotor.name}</Text>
          <HTML html={'<br><hr>'} />
          <Button style={{ backgroundColor: "#f75611", width: '100%', justifyContent: 'center' }} onPress={() => this.join()}>
            <Text>Join Event</Text>
          </Button>
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
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 10 },
  map: { flex: 1, height: 200, width: '100%', marginTop: 20, marginBottom: 20 },
  description: { marginBottom: 20, flexDirection: 'row', marginLeft: 10 },
  imagePoster: { width: '100%', height: 400, borderRadius: 15 },
  icon: { marginRight: 15 },
  titlePoster: { marginBottom: 20, marginLeft: 10 }
})