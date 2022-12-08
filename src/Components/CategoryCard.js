import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CategoryCard = (props) => {
  const [view,setView]=useState([])
  return (
    <View>
    <TouchableOpacity onPress={props.onpress} >
        <Image style={styles.categoryimage} source={props.source} />
        <Text style={styles.categoryName}>{props.Title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    categoryimage:{
        height:50,
        width:50,
        borderRadius:50,
        marginLeft:30,
        marginRight:20,
        marginTop:20
    },
    categoryName:{
        fontSize:16 ,
        marginLeft:40,
        color:'#000'
    },
})