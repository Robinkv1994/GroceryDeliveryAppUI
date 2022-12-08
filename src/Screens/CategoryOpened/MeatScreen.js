import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Meat from '../../Components/Meat'
import { useNavigation } from '@react-navigation/native'

const MeatScreen = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.headerStyle}>
         <Icon name='arrow-back' style={styles.IconStyle} onPress={()=>navigation.goBack('HomePage')}/>
         <Text style={styles.headerText}>Meat</Text>
     </View>

     <ScrollView style={{backgroundColor:'#eeeeee'}} showsVerticalScrollIndicator={false}>
     <Meat Image={require('../../../assets/beef.jpg')}
       Title='Beef'
       Price='200/kg'
       MeatIcon="add"/>
        <Text style={{fontSize:18,marginLeft:20}}>Product Description</Text>
        <Text numberOfLines={2} style={styles.Description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>


       <Meat Image={require('../../../assets/lamp.jpg')}
       Title='Lamp'
       Price='400/kg'
       Icon='add'/>
        <Text style={{fontSize:18,marginLeft:20}}>Product Description</Text>
        <Text numberOfLines={2} style={styles.Description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>


       <Meat Image={require('../../../assets/pork.jpg')}
       Title='Pork'
       Price='300/kg'
       Icon='add'
       />
        <Text style={{fontSize:18,marginLeft:20}}>Product Description</Text>
        <Text numberOfLines={2} style={styles.Description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
    </ScrollView>
 </View>
)
}

  


export default MeatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
     
    },
    headerStyle:{
        height:80,
        width:'100%',
        backgroundColor:'#23AA49',
        flexDirection:'row'
    }, headerText:{
        color:'#fff',
        fontSize:24,
        marginLeft:40,
        marginTop:20
    },
    IconStyle:{
        color:'#fff',
        fontSize:24,
        marginLeft:30 ,
        marginTop:30
    },
    Description:{
        color:'#000',
        fontSize:18,
        marginLeft:20,
        marginRight:20
    }
})