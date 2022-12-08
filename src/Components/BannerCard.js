import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const BannerCard = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.source} style={styles.imagestyle}/>
    </View>
  )
}

export default BannerCard

const styles = StyleSheet.create({
    container :{
        height:150,
        width:350,
        backgroundColor:'#eeeeee',
        marginHorizontal:10,
        marginTop:20,
        borderRadius:20
    },
    imagestyle:{
        height:150,
        width:350,
        borderRadius:20
    }
})