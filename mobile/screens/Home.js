import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView, RefreshControl } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import Icon from "react-native-vector-icons/FontAwesome";

import { getAllEventAction } from '../actions/event';

export class HomeScreen extends Component {
  state = {
    refreshing: false,
  }

  componentDidMount() {
    this.props.getAllEvent()
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.getAllEvent().then(() => {
      this.setState({ refreshing: false });
    })
  }

  render() {
    let data0 = this.props.events[0]
    return (
      <Container >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <View style={styles.statusBar} />
        <Content >
          <View style={{ backgroundColor: '#f75611', borderRadius: 30, height: 250, marginTop: -15 }}>
            <View style={{ margin: 30, marginTop: 50 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>What's good in</Text>
              <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Indonesia</Text>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: -100, backgroundColor: 'white', borderRadius: 10 }}>
            <TouchableHighlight underlayColor='rgba(245,245,245,1)' onPress={() => this.props.navigation.navigate('Detail', { data: data0})}>
              <>
              <Image source={{ uri: data0.imageUrl }} style={{ width: '100%', height: 300, borderRadius: 15 }} />
              <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{data0.name}</Text>
                <Text><Icon name="calendar" size={15} /> {new Date(data0.date).toDateString()}</Text>
                <Text><Icon name="map-marker" size={15} /> {data0.place}</Text>
              </View>
              </>
            </TouchableHighlight>
            {
              this.props.events.slice(1).map((e, i) => {
                return (
                  <TouchableHighlight underlayColor='rgba(245,245,245,1)' key={i} onPress={() => this.props.navigation.navigate('Detail', { data: e })}>
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
        </Content>
      </ScrollView>
      </Container>

    )
  }
}

const mapStateToProps = (state) => ({
  events: state.event.events,
})

const mapDispatchToProps = (dispatch) => ({
  getAllEvent: () => dispatch(getAllEventAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
})
