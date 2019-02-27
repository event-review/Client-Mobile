import React, { Component } from 'react'
import { MapView, Constants, Marker } from 'expo'
import { AsyncStorage, View, Image, StyleSheet, WebView, Modal, Dimensions } from 'react-native'
import { Container, Content, Button, Text } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import HTML from 'react-native-render-html'
import api from '../actions/api'
import { connect } from 'react-redux'
import { getMyEventAction } from '../actions/user';

export class Detail extends Component {
  state = {
    modalVisibleMessage: false,
    message: ''
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params.data)
  }

  join = async (eventId) => {
    // alert(eventId)
    try {
      const userToken = await AsyncStorage.getItem('token');
      const { data } = await api({
        method: 'put',
        url: '/users/join/' + eventId,
        headers: { token: userToken }
      })
      this.setState({ message: data.message }, () => {
        this.setState({ modalVisibleMessage: true }, () => {
          setTimeout(() => {
            this.props.getMyEvent(userToken)
            this.setState({
              modalVisibleMessage: false,
              message: '',
            })
          }, 2000)
        })
      })
    } catch (error) {
      this.setState({ message: error.response.data.message }, () => {
        this.setState({ modalVisibleMessage: true }, () => {
          setTimeout(() => {
            this.setState({
              modalVisibleMessage: false,
              message: '',
            })
          }, 2000)
        })
      })
    }
  }

  render() {
    let { name, date, place, price, status, imageUrl, promotorId, _id, latitude, longitude, description } = this.props.navigation.state.params.data

    return (
      <Container>
        <View style={styles.statusBar} />
        <Content style={{ margin: 10 }}>
          <Modal
            animationType="slide"
            transparent={true}
            animationType="fade"
            visible={this.state.modalVisibleMessage}
            onRequestClose={() => this.setState({ modalVisibleMessage: false })}>
            <View style={{ backgroundColor: 'rgba(240,240,240,0.8)', width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
              <View style={{ ...styles.container, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.state.message}</Text>
              </View>
            </View>
          </Modal>
          {
            (name) && (
              <View >
                <View style={{ margin: 15 }}>
                  <Image source={{ uri: imageUrl }} style={styles.imagePoster} />
                </View>
                <HTML html={'<hr>'} />
                <View style={styles.titlePoster}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
                  <Text>by {promotorId.name}</Text>
                </View>
                <View style={styles.description}>
                  <Icon name="calendar" size={25} style={styles.icon} />
                  <Text> {new Date(date).toDateString()}</Text>
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
          <Text style={styles.title}>Organizer</Text>
          <Text>{promotorId.name}</Text>
          <HTML html={'<br><hr>'} />
          <Button style={{ backgroundColor: "#f75611", width: '100%', justifyContent: 'center' }} onPress={() => this.join(_id)}>
            <Text>Join Event</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}



const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  getMyEvent: (token) => dispatch(getMyEventAction(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)


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