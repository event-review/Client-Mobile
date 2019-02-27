import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, RefreshControl } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, DatePicker, Picker } from 'native-base';
import { connect } from "react-redux"
import { Constants } from 'expo'
import HTML from 'react-native-render-html'
import Icon from 'react-native-vector-icons/FontAwesome'

import { getMyEventAction } from '../actions/user'

export class MyEventScreen extends Component {

  state = {
    refreshing: false
  }

  async componentDidMount() {
    try {
      const userToken = await AsyncStorage.getItem('token');
      await this.props.getMyEvent(userToken)
    } catch (error) {
      console.log(error.message)
    }
  }

  _onRefresh = async () => {
    try {
      this.setState({ refreshing: true });
      const userToken = await AsyncStorage.getItem('token')
      this.props.getMyEvent(userToken).then(() => {
        this.setState({ refreshing: false });
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  getDetail = async (data) => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      this.props.navigation.navigate('DetailMyEvent', { data, userId: userId })
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.statusBar} />
          <Content style={{ backgroundColor: 'white' }}>
            <View style={{ backgroundColor: '#f75611', borderRadius: 150, width: '100%', height: 450, marginTop: -150 }}>
              <View style={{ margin: 30, marginTop: 200 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>My Events</Text>
              </View>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: -200 }}>
              <View>
                {
                  this.props.myEvent.map((e, i) => {
                    return (
                      <TouchableHighlight underlayColor='rgba(245,245,245,1)' key={i} onPress={() => this.getDetail(e)}>
                        <View style={{ marginTop: 15, marginBottom: 15, flexDirection: "row" }}>
                          <Image source={{ uri: e.imageUrl }} style={{ width: 100, height: 100 }} />
                          <View style={{ flexDirection: "column", marginLeft: 10, alignItems: 'flex-start' }} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{e.name}</Text>
                            <Text><Icon name="calendar" size={15} /> {new Date(e.date).toDateString()}</Text>
                            <Text><Icon name="map-marker" size={15} /> {e.place}</Text>
                          </View>
                        </View>
                      </TouchableHighlight>
                    )
                  })
                }
              </View>
            </View>
          </Content >
        </ScrollView>
      </Container >
    )
  }
}

const mapStateToProps = (state) => ({
  myEvent: state.user.myEvent
})

const mapDispatchToProps = (dispatch) => ({
  getMyEvent: (token) => dispatch(getMyEventAction(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyEventScreen)


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
});