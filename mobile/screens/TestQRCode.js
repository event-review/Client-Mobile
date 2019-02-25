import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import QRCode from 'react-native-qrcode';
 
export class TestQRCode extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/', // silahkan masukan link yang kita mau
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        /> */}
        <QRCode
          value={this.state.text}
          size={100}
          bgColor='black'
          fgColor='white'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
})
export default TestQRCode
