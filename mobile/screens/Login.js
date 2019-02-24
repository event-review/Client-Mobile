import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground, Button, Modal, Alert, Dimensions, ScrollView } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, DatePicker, Picker } from 'native-base';
// import { connect } from "react-redux"

import * as Expo from 'expo'
import { Constants } from 'expo'
import HTML from 'react-native-render-html'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Permissions, ImagePicker } from 'expo'
import getPermission from '../helpers/getPermission'
import Fire from '../firebase/Fire'


const options = {
  allowsEditing: true,
};


export class LoginScreen extends Component {

  componentDidMount() {
    // console.log(this.props.navigation)
  }


  state = {
    isRegister: false,
    chosenDate: new Date(),
    selected2: undefined,
    modalVisible: false,
    image: null
  }


  _selectPhoto = async () => {
    const status = await getPermission(Permissions.CAMERA_ROLL);
    if (status) {
      const result = await ImagePicker.launchImageLibraryAsync(options);
      if (!result.cancelled) {
        this.setState({ image: result.uri, modalVisible: false })
        // this.props.navigation.navigate('Login', { image: result.uri});
      }
    }
  };

  _takePhoto = async () => {
    const status = await getPermission(Permissions.CAMERA);
    if (status) {
      const result = await ImagePicker.launchCameraAsync(options);
      if (!result.cancelled) {
        this.setState({ image: result.uri, modalVisible: false })
        // this.props.navigation.navigate('Login', { image: result.uri });
      }
    }
  };

  _onClickButtonRegister = async (imageURI) => {
    try {
      // Ini function Upload ke firebase , output image URL
      console.log(imageURI)
      const profileURL = await Fire.shared.CreatePhoto(imageURI)
      console.log(profileURL)
      alert(`${profileURL}`)


    } catch (e) {
      console.log(e)
      Alert.alert('Register Failed', `${e.message}`)
    }
  }

  setDate = (newDate) => {
    this.setState({ chosenDate: newDate });
  }

  onValueChange2 = (value) => {
    this.setState({
      selected2: value
    });
  }

  render() {
    const { image } = this.state
    return (
      <ScrollView>
        <Container>
          <Modal
            animationType="slide"
            transparent={true}
            animationType="fade"
            visible={this.state.modalVisible}
            onRequestClose={() => this.setState({ modalVisible: false })}>
            <View style={{ backgroundColor: 'rgba(240,240,240,0.8)', width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
              <View style={styles.container}>
                <View style={{ marginBottom: 20 }}>
                  <Button
                    onPress={() => this._takePhoto()}
                    title="Take From Camera"
                    color="#841584"
                  />
                </View>
                <View style={{ marginBottom: 20 }}>
                  <Button
                    onPress={() => this._selectPhoto()}
                    title="Select From Gallery"
                    color="#841584"
                  />
                </View>
              </View>
            </View>
          </Modal>

          <View style={styles.statusBar} />
          <Content>
            <Form style={{ margin: 20 }}>
              <Item stackedLabel>
                <Label>Name</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input />
              </Item>

              {(this.state.isRegister) &&
                <View>
                  <View style={{ marginTop: 10 }}>
                    <DatePicker
                      defaultDate={new Date(2019, 1, 1)}
                      minimumDate={new Date(2019, 1, 20)}
                      maximumDate={new Date(2021, 12, 31)}
                      locale={"id"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Select date"
                      textStyle={{ color: "black" }}
                      placeHolderTextStyle={{ color: "black" }}
                      onDateChange={this.setDate}
                      disabled={false}
                    />
                  </View>
                  <HTML html={'<hr>'} />
                  <Item stackedLabel last>
                    <Label>Gender</Label>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)}
                      >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                      </Picker>
                    </Item>
                  </Item>
                  {image &&
                    <View style={{ ...styles.container, margin: 20 }}>
                      <Image
                        source={{ uri: image }}
                        style={{ resizeMode: 'contain', aspectRatio: 1, width: 200 }}
                      />
                    </View>
                  }
                  <Button
                    onPress={() => this.setState({ modalVisible: true })}
                    title="Select Photo"
                    color="#841584"
                  />
                </View>
              }

            </Form>
            <View style={{ margin: 15 }}>
              {(this.state.isRegister == true) ?
                <Button
                  onPress={() => this._onClickButtonRegister(image)}
                  title="Register"
                  color="#841584"
                />
                : <Button
                  onPress={() => alert('aaa')}
                  title="Login"
                  color="#841584"
                />
              }
            </View>
            {
              (this.state.isRegister == true) ? (
                <View style={{ margin: 10, marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                  <Text>Have an Account? Login Here...</Text>
                  <Button
                    onPress={() => this.setState({ isRegister: false })}
                    title="Login"
                    color="#841584"
                  />
                </View>
              ) : (
                  <View style={{ margin: 10, marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                    <Text>Don't Have an Account? Register Here...</Text>
                    <Button
                      onPress={() => this.setState({ isRegister: true })}
                      title="Register"
                      color="#841584"
                    />
                  </View>
                )
            }
          </Content>
        </Container>
      </ScrollView>
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
});