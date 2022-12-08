import { StyleSheet, Text, View ,Image,TouchableOpacity, Pressable} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { ADD_TO_CART } from '../Reducer/CartReducer'
import {useDispatch,useSelector}from 'react-redux'


const Fruits = (props,item) => {
    const navigation=useNavigation()
    const [clicked,seClicked]= useState(false)



    const dispatch = useDispatch()
    const addToCart = props =>{
        dispatch({
            type:ADD_TO_CART,
            payload:props
        })
    }
   
  return (
    <View>
    <View style={styles.container}>
        <Pressable onPress={props.onPress} >
      <Image source={props.Image} style={{height:100,width:200}} />
        <Text style={styles.title}>{props.Title}</Text>
        <Text style={styles.price}>{props.Price}</Text>
       
        </Pressable>
        
        <TouchableOpacity style={styles.iconview}  onPress={()=>{addToCart(props);
        console.log(props.Price);}}>
        <Icon name={props.Icon} style={styles.icon}/>
    
        </TouchableOpacity>
        
    </View>
    <Text style={{fontSize:18,marginLeft:20}}>{props.DescriptionTitle}</Text>
    <Text style={styles.Description}>{props.Description}</Text>
        
    </View>
  )
}

export default Fruits

const styles = StyleSheet.create({
    container :{
        height:170,
        width:250,
     
        marginHorizontal:10,
        marginTop:20,
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius:20
        
    },
    title:{
        color:'#000',
        fontSize:18
    },
    price:{
        color:'red',
        marginBottom:10,
        fontSize:18
    },
    icon:{
        fontSize:20,  
        color:'#fff'
    },
    iconview:{
        height:20,
        width:20,
        borderRadius:50,
        backgroundColor:'#23AA49',
        position:'absolute',
        bottom:20,
        right:20,
        alignItems:'center',
        justifyContent:'center'
    },
    Description:{
        color:'#000',
        fontSize:18,
        marginLeft:20,
        marginRight:20,
        marginBottom:20
    }
})