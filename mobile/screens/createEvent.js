import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground, Button } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, DatePicker, Picker } from 'native-base';
import { connect } from "react-redux"
import DateTimePicker from 'react-native-modal-datetime-picker'

import * as Expo from 'expo'
import { Constants } from 'expo'
import HTML from 'react-native-render-html'
import Icon from 'react-native-vector-icons/FontAwesome'

export class LoginScreen extends Component {

  componentDidMount() {
    // console.log(this.props.navigation)
  }

  state = {
    isRegister: false,
    selected2: undefined,
    isDateTimePickerVisible: false,
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  }

  render() {
    return (
      <Container>
        <View style={styles.statusBar} />
        <Content>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <Text>Show DatePicker</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
          {/* <Form style={{ margin: 20 }}>
            {(this.state.isRegister) &&
              <Item stackedLabel>
                <Label>Name</Label>
                <Input />
              </Item>
            }
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
                <Button
                  onPress={() => alert('aaa')}
                  title="Select Photo"
                  color="#841584"
                />
              </View>
            }

          </Form> */}
          <View style={{ margin: 15 }}>
            {(this.state.isRegister == true) ?
              <Button
                onPress={() => alert('aaa')}
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
    )
  }
}

const styles = StyleSheet.create({

  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
});