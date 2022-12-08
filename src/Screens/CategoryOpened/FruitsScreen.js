import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Fruits from '../../Components/Fruits'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DetailedView from './DetailedView'

const FruitsScreen = ({navigation}) => {
    const [clicked,setClicked]=useState(false)
  return (
    <View style={styles.container}>
        <View style={styles.headerStyle}>
            <Icon name='arrow-back' style={styles.IconStyle} onPress={()=>navigation.goBack('HomePage')}/>
            <Text style={styles.headerText}>Fruits</Text>
        </View>
<ScrollView showsVerticalScrollIndicator={false}>
        <Fruits Image={require('../../../assets/apple.jpg')}
        Title='Apple'
        Price='$20/kg'
        Icon='add'
        
        DescriptionTitle="Product Description"
        Description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
       />
       
        
       
       
        <Fruits Image={require('../../../assets/orange.jpg')}
        Title='Orange'
        Price='$80/kg'
        Icon='add'
        DescriptionTitle="Product Description"
        Description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/> 
        
        
        
        <Fruits Image={require('../../../assets/grapes.jpg')}
        Title='Grapes'
        Price='$40/kg'
        Icon='add'
        DescriptionTitle="Product Description"
        Description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
         
</ScrollView>        
    </View>
  )
}

export default FruitsScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerStyle:{
        height:80,
        width:'100%',
        backgroundColor:'#23AA49',
        flexDirection:'row'
    },
    headerText:{
        color:'#fff',
        fontSize:24,
        marginLeft:40,
        marginTop:20
    },
    IconStyle:{
        color:'#fff',
        fontSize:24,
        marginLeft:20 ,
        marginTop:30
    },
   
})