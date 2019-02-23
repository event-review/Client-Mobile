import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import Icon from "react-native-vector-icons/FontAwesome";

import { getAllEventAction } from '../actions/event';

export class HomeScreen extends Component {
  componentDidMount(){
    this.props.getAllEvent()
  }

  render() {
    return (
      <Container >
        <View style={styles.statusBar} />
        <Content >
          <View style={{ backgroundColor: '#f75611', borderRadius: 30, height: 250, marginTop: -15 }}>
            <View style={{margin: 30, marginTop: 50}}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>What's good in</Text>
              <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Indonesia</Text>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: -100, backgroundColor: 'white', borderRadius: 10 }}>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/202/201/non_2x/graduation-template-design-vector.jpg' }} style={{ width: '100%', height: 300, borderRadius: 15 }} />
            <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Graduation Day</Text>
              <Text><Icon name="calendar" size={15} /> March 1st 2019</Text>
              <Text><Icon name="map-marker" size={15}/> Hacktiv8 Indonesia, Jakarta Selatan</Text>
            </View>
            {
              this.props.events.map((e, i) => {
                return (
                  <TouchableHighlight key={i} onPress={() => this.props.navigation.navigate('Detail', { data: e })}>
                    <View style={{ marginTop: 15, marginBottom: 15, flexDirection: "row" }}>
                      <Image source={{ uri: e.imageUrl }} style={{ width: 100, height: 100 }} />
                      <View style={{ flexDirection: "column", marginLeft: 10, alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{e.name}</Text>
                        <Text><Icon name="calendar" size={15} /> {new Date(e.date).toLocaleDateString()}</Text>
                        <Text><Icon name="map-marker" size={15} /> {e.place}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                )
              })
            }
          </View>
        </Content>
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
