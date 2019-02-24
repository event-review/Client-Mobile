import React, { Component } from 'react'
import { Text, View, Image , Button } from 'react-native'
import {styles} from '../styles'
import { connect } from 'react-redux';

class DetailProfile extends Component {
  render() {
    const {user} = this.props
    return (
      <View style={[styles.column, styles.padding]}>
        <View style={styles.row}>
            <Image style={styles.avatar2} source={{uri: user.photoURL}} />
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>{user.name}</Text>
            <Text style={styles.text}>{user.email}</Text>
            </View>
        </View>
        <Button
         title="Sign Out"
         onPress={() => alert('Masuk')}
         />
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