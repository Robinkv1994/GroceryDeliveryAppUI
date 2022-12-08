import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import { REMOVE_FROM_CART } from '../../Reducer/CartReducer'
import {useDispatch,useSelector} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import Fruits from '../../Components/Fruits'


const Mycart = () => {

  const dispatch = useDispatch()
  const cartItem = useSelector(state=>state)
  const removeFromCart =item=>{
    dispatch({
      type:REMOVE_FROM_CART,
      payload:item
    })
  }

  return (
    
    <View>
      {cartItem.length !==0 ?(
     
      <FlatList data={cartItem}
      keyExtractor={(item)=>item}
      renderItem={({item})=>{
        return(
          <View style={styles.container}>
          <Image source={props.img}/>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>{props.price}</Text>
            <TouchableOpacity style={styles.iconview} onPress={props.onpress}>
            <Icon name={props.Name} style={styles.icon}/></TouchableOpacity>
         
        </View>
        )
      }}/>):(
        <View style={{justifyContent:'center',alignItems:'center',marginTop:400}}>
          <Text style={{fontSize:24,color:'green'}}>Empty Cart.....😕</Text>
          <Text style={{fontSize:24,color:'green'}}>Add To Cart 🛒</Text>
        </View>
      )}
    </View>
  )
}

export default Mycart

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