import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons'
import ProfileComponents from '../../Components/ProfileComponents'
import { useNavigation } from '@react-navigation/native'
import {Dropdown} from 'react-native-element-dropdown'

const Profile = ({name,route}) => {

  const data=[
    {label:'1'},
    {label:'1'},
    {label:'1'}
]
  const navigation= useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.ImageStyle} source={require('../../../assets/dp.jpeg')}/>
        <Text  style={styles.HeaderProfile}>{name} </Text>
        
   
      </View>
      <View>
          <ProfileComponents title='Wallet' Icon='cash' IconName='chevron-up' Name='chevron-down'/>
          <ProfileComponents title='Saved Address' Icon='home-group' IconName='chevron-up'Name='chevron-down'/>
          <ProfileComponents title='Saved Cards' Icon='card-account-details' IconName='chevron-up'Name='chevron-down'/>
          <ProfileComponents title='Refer a friend' Icon='account-group' IconName='chevron-up'Name='chevron-down'/>
          <ProfileComponents title='Account Settings' Icon='wrench' IconName='chevron-up'Name='chevron-down'/>
          <ProfileComponents title='Notification' Icon='bell' IconName='chevron-up'Name='chevron-down'/>
          <ProfileComponents title='Help And Support' Icon='web' IconName='chevron-up'Name='chevron-down'/>
       
          <Pressable onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.logout}>Logout</Text>
          </Pressable>
          <Text style={{fontSize:16,position:'absolute',bottom:10,right:20}}>version 0.0.3</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  headerContainer:{
    height:120,
    width:'100%',
    backgroundColor:'#23AA49',
    
  },
  HeaderText:{
    marginHorizontal:20,
    color:'#fff',
    marginTop:30,
    fontSize:20,
    marginBottom:20
  },
  HeaderProfile:{
    marginHorizontal:20,
    color:'#fff',
    marginTop:10,
    fontSize:20,
    position:'absolute',
    left:70,
    top:50
  
  },
  ImageStyle:{
    height:50,
    width:50,
    borderRadius:50,
    marginHorizontal:20,
    marginTop:50
  },
  logout:{
  marginLeft:60,
  fontSize:24,
  color:'red',
  }
})