import { StyleSheet, Text, View ,Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const ProfileComponents = (props) => {

    const [dropped,setDropped]= useState(false)

  return (
    <Pressable style={styles.container} onPress={()=>setDropped(!dropped)}>
        <View style={{flexDirection:'row',marginVertical:20}}>
         <Icon name={props.Icon} style={styles.ListIconStyle}/>   
        <Text style={styles.TextStyle}>{props.title}</Text>
        </View>
        <Icon name={dropped? props.IconName:props.Name} style={styles.dropIconStyle}/>
     
    </Pressable>
  )
}

export default ProfileComponents

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    ListIconStyle:{
        marginLeft:20,
        marginTop:20,
        fontSize:22,
        color:'#23AA49'

    },
    TextStyle:{
        marginLeft:20,
        marginTop:10,
        fontSize:22 ,
        color:'#000'
    },
    dropIconStyle:{
        marginLeft:20,
        marginTop:30,
        fontSize:25 ,
        marginRight:20,
        color:'#23AA49'
    }
})