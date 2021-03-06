import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles/styles.js'
import firebase from './Firebase/firebase'
import { NavigationActions } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'
// const profileIcon = (<Icon name='user-circle-o' size={20} color='#2d7394' />)
// const sensorIcon = (<Icon name='unlink' size={20} color='#2d7394' />)
// const settingsIcon = (<Icon name='cog' size={20} color='#2d7394' />)
const sessionIcon = (<Icon name='motorcycle' size={20} color='#2d7394' />)
const logoutIcon = (<Icon name='sign-out' size={20} color='#2d7394' />)
const drawerIcon = (<Icon name='navicon' size={20} color='#2d7394' />)

export default class SideNav extends Component {
  _logout () {
    firebase.auth().signOut()
    .then(() => this.props.navigation.navigate('Login'))
    .catch(function (error) {
      alert(error.message)
    })
  }

  render () {
    const {navigate} = this.props.navigation
    // const backAction = NavigationActions.back({})
    return (
      <View style={styles.sideNavContainer}>

        {/* <TouchableOpacity onPress={() => this.props.navigation.dispatch(backAction)}>
          {/* <Text style={styles.sideNavText}>{drawerIcon}   </Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={() => navigate('Profile')}>
          <Text style={styles.sideNavText}>{profileIcon}   Show Profile</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={() => navigate('Sensor')}>
          <Text style={styles.sideNavText}>{sensorIcon}   Sensor</Text>
        </TouchableOpacity> */}

        {/*<TouchableOpacity onPress={() => navigate('Settings')}>
          <Text style={styles.sideNavText}>{settingsIcon}   Settings</Text>
        </TouchableOpacity>*/}

        <TouchableOpacity onPress={() => navigate('sessionWDrawer')}>
          <Text style={styles.sideNavText}>{sessionIcon}   Start Session</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this._logout()}>
          <Text style={styles.sideNavText}>{logoutIcon}   Logout</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
