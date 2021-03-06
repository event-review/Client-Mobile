import React, { Component } from 'react'
import { AsyncStorage, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Input, Item, ListItem, Right, Left, Button, Body, Switch } from 'native-base'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import Icon from "react-native-vector-icons/FontAwesome";
import HTML from 'react-native-render-html'

export class Profile extends Component {

  logout = async () => {
    // alert('aaa')
    await AsyncStorage.clear();
    this.props.navigation.navigate('Welcome');
  };

  render() {
    return (
      <Container>
        <View style={styles.statusBar} />
        <Content style={{ marginTop: 30 }}>

          <ListItem onPress={() => this.props.navigation.navigate('DetailProfile')} icon style={{ marginBottom: 20 }}>
            <Left>
              <Icon name="user" size={35} />
            </Left>
            <Body>
              <Text>My Profile</Text>
            </Body>
          </ListItem>

          <ListItem icon style={{ marginBottom: 20 }}>
            <Left>
              <Icon active name="calendar" size={35} />
            </Left>
            <Body>
              <Text>My Event</Text>
            </Body>
          </ListItem>
          <ListItem icon style={{ marginBottom: 20 }}>
            <Left>
              <Icon active name="cog" size={35} />
            </Left>
            <Body>
              <Text>Setting</Text>
            </Body>
          </ListItem>
          <ListItem icon style={{ marginBottom: 20 }} onPress={this.logout}>
            <Left>
              <Icon active name="sign-out" size={35} />
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
          </ListItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
})
