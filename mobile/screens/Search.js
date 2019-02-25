import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Input, Item, ListItem, Right, Left } from 'native-base'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import Icon from "react-native-vector-icons/FontAwesome";

export class SearchScreen extends Component {

  render() {
    return (
      <Container >
        <View style={styles.statusBar} />
        <Content style={{ backgroundColor: 'white' }}>
          <View style={{ backgroundColor: '#f75611', borderRadius: 150, width: '100%', height: 450, marginTop: -150 }}>
            <View style={{ margin: 30, marginTop: 200 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>What are you looking for?</Text>
              <Item>
                <Icon active name='search' />
                <Input placeholder='Search' />
              </Item>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: -150 }}>
            <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/shopping-2/256/Searching-512.png' }} style={{ width: '100%', height: 350, borderRadius: 15 }} />
            {/* <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Graduation Day</Text>
              <Text><Icon name="calendar" size={15} /> March 1st 2019</Text>
              <Text><Icon name="map-marker" size={15} /> Hacktiv8 Indonesia, Jakarta Selatan</Text>
            </View> */}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
})
