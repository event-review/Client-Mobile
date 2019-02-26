import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {styles} from '../styles'
import { connect } from 'react-redux';

class DetailProfile extends Component {
  render() {
    const {user} = this.props
    return (
        <View style={{...styles.container}}>
            <Image style={{...styles.avatar2, marginBottom:30}} source={{uri: user.photoURL}} />
            <View style={{ marginTop: 30, flexDirection: 'column'}}>
            <Text style={styles.text}>Name : {user.name}</Text>
            <Text style={styles.text}>Email : {user.email}</Text>
            <Text style={styles.text}>Gender : {user.gender}</Text>
            <Text style={styles.text}>Date Of Birth : {user.dob}</Text>
            </View>
        </View>
    )
  }
}


const mapStateToProps = (state) => ({
    user: state.user.user
  })

  const mapDispatchToProps = (dispatch) => ({
    // SignOut: () => dispatch(SignOut())
  })

  export default connect(mapStateToProps, mapDispatchToProps) (DetailProfile)