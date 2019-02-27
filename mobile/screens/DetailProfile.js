import React, { Component } from 'react'
import { Text, View, Image, AsyncStorage, ImageBackground } from 'react-native'
import { styles } from '../styles'
import { connect } from 'react-redux';
import { getDataUser } from '../actions/user'

class DetailProfile extends Component {

  async componentDidMount() {
    try {
      console.log('did mount profile')
      const token = await AsyncStorage.getItem('token')
      this.props.getDataUser(token)
    } catch (error) {
      console.log(error)
    }
  }

  getDOB = (date) => {
    return new Date(date).toDateString()
  }

  render() {
    const { user } = this.props
    return (
      <View >
        <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/dd/8e/46/dd8e461d2b8cf2c277d8007aaf1c0147.jpg' }} style={{ width: '100%', height: '100%' }}>
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Image style={{ ...styles.avatar2, marginBottom: 30 }} source={{ uri: user.imageUrl }} />
            <View style={{ marginTop: 30, flexDirection: 'column' }}>
              <Text style={styles.text}>Name : {user.name}</Text>
              <Text style={styles.text}>Email : {user.email}</Text>
              <Text style={styles.text}>Gender : {user.gender}</Text>
              <Text style={styles.text}>Date Of Birth : {this.getDOB(user.dob)}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
  getDataUser: (token) => dispatch(getDataUser(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailProfile)