import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BestSellingCard = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.img}/>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}</Text>
        <TouchableOpacity style={styles.iconview} onPress={props.onpress}>
        <Icon name={props.Name} style={styles.icon}/></TouchableOpacity>
     
    </View>
  )
}

export default BestSellingCard

const styles = StyleSheet.create({
    container :{
        height:170,
        width:250,
        backgroundColor:'#eeeeee',
        marginHorizontal:10,
        marginTop:20,
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eeeeee',
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
    }
})