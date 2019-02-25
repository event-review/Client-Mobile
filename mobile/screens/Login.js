import React, { Component } from 'react'
import { StyleSheet, AsyncStorage, Text, View, Image, TouchableHighlight, ImageBackground, Button, Modal, Alert, Dimensions, ScrollView } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, DatePicker, Picker } from 'native-base';
import { connect } from "react-redux"

import * as Expo from 'expo'
import { Constants } from 'expo'
import HTML from 'react-native-render-html'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Permissions, ImagePicker } from 'expo'
import getPermission from '../helpers/getPermission'
import Fire from '../firebase/Fire'
import { loginAction, registerAction } from '../actions/user';
import api from '../actions/api'

const options = {
  allowsEditing: true,
};


export class LoginScreen extends Component {

  componentDidMount() {
    this.checkLogin()
  }


  state = {
    name: '',
    email: '',
    password: '',
    chosenDate: null,
    gender: undefined,

    isRegister: true,
    modalVisible: false,
    modalVisibleMessage: false,
    image: null,

    message: ''
  }


  checkLogin = async () => {
    const userToken = await AsyncStorage.getItem('token');
    this.props.navigation.navigate(userToken ? 'App' : 'Login');
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
      let { name, email, password, chosenDate, gender } = this.state
      let user = { name, email, password, dob: chosenDate, gender }
      const profileURL = await Fire.shared.CreatePhoto(imageURI)
      let formData = new FormData()
      formData.append('data', JSON.stringify({ ...user, imageUrl: profileURL }))

      const { data } = await api({
        method: 'post',
        url: '/users/signup',
        data: formData
      })
      this.setState({message: data.message}, () => {
        this.setState({ modalVisibleMessage: true}, () => {
          setTimeout(() => {
            this.setState({ 
              modalVisibleMessage: false,
              message: '',
              name: '',
              email: '',
              password: '',
              chosenDate: null,
              gender: undefined,
            })
          }, 2000)
        })
      })
    } catch (error) {

      this.setState({message: error.response.data.message}, () => {
        this.setState({ modalVisibleMessage: true}, () => {
          setTimeout(() => {
            this.setState({ modalVisibleMessage: false, message: ''})
          }, 1000)
        })
      })
    }
  }

  onClickButtonLogin = async () => {
    try {
      console.log('aaaa')
      let { email, password } = this.state
      let user = { email, password }
      // this.props.login(user)
      console.log(user)
      const { data } = await api({
        method: 'post',
        url: '/users/signin',
        data: user
      })
      console.log('datalogin',data)
      await AsyncStorage.setItem('token', data.token)
      await AsyncStorage.setItem('userId', data.userId)
      this.props.navigation.navigate('App')
    } catch (error) {
      console.log('error', error)
      this.setState({message: error.response.data.message}, () => {
        this.setState({ modalVisibleMessage: true}, () => {
          setTimeout(() => {
            this.setState({ modalVisibleMessage: false, message: ''})
          }, 2000)
        })
      })
    }
  }

  setDate = (newDate) => {
    this.setState({ chosenDate: newDate });
  }

  onValueChange2 = (value) => {
    this.setState({
      gender: value
    });
  }

  render() {
    const { name, email, password, chosenDate, image } = this.state
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

          <Modal
            animationType="slide"
            transparent={true}
            animationType="fade"
            visible={this.state.modalVisibleMessage}
            onRequestClose={() => this.setState({ modalVisibleMessage: false })}>
            <View style={{ backgroundColor: 'rgba(240,240,240,0.8)', width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
              <View style={{...styles.container, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.state.message}</Text>
              </View>
            </View>
          </Modal>

          <View style={styles.statusBar} />
          <Content>
            <Form style={{ margin: 20 }}>
              {(this.state.isRegister) && <Item stackedLabel>
                <Label>Name</Label>
                <Input value={name} onChangeText={(text) => this.setState({ name: text })} />
              </Item>
              }
              <Item stackedLabel last>
                <Label>Email</Label>
                <Input value={email} onChangeText={(text) => this.setState({ email: text })} />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} value={password} onChangeText={(text) => this.setState({ password: text })} />
              </Item>

              {(this.state.isRegister) &&
                <View>
                  <View style={{ marginTop: 10 }}>
                    <DatePicker
                      defaultDate={null}
                      minimumDate={new Date(1945, 1, 1)}
                      maximumDate={new Date(2021, 12, 31)}
                      locale={"id"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Bithday"
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
                        selectedValue={this.state.gender}
                        onValueChange={this.onValueChange2.bind(this)}
                      >
                        <Picker.Item label="Gender" disabled />
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
                  onPress={() => this.onClickButtonLogin()}
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: 'loginReducer' }),
  register: () => dispatch({ type: 'registerReducer' })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)



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