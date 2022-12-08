import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import Fruits from '../../Components/Fruits'
import Vegetables from '../../Components/Vegetables'
import Meat from '../../Components/Meat'
import SeaFoods from '../../Components/SeaFoods'


const Category = () => {



  return (
 <View style={{flex:1}}>
       <View style={styles.headerstyle}>
        <Text style={styles.headertitle}>Categories</Text>
       </View>
         <ScrollView style={styles.container}> 
<View style={{borderBottomWidth:.6}}>
       <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.headingTitle}>Fruits</Text>
        <Text style={styles.seeAll}>See all</Text>
        
       </View>
       <ScrollView style={{backgroundColor:'#fff'}} horizontal={true} showsHorizontalScrollIndicator={false}>
        <Fruits image={require('../../../assets/apple.jpg')}
        Title='Apple'
        Price='$20/kg'
        Icon='add'/>
        <Fruits Image={require('../../../assets/orange.jpg')}
        Title='Orange'
        Price='$80/kg'
        Icon='add'/> 
        <Fruits Image={require('../../../assets/grapes.jpg')}
        Title='Grapes'
        Price='$40/kg'
        Icon='add'/>
        
       </ScrollView>
</View>     

<View style={{borderBottomWidth:.6}}>
       <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.headingTitle}>Vegetables</Text>
        <Text style={styles.seeAll}>See all</Text>
        
       </View>
       <ScrollView style={{backgroundColor:'#fff'}} horizontal={true} showsHorizontalScrollIndicator={false}>
        <Vegetables Image={require('../../../assets/tomato.png')}
        Title='Tomato'
        Price='$20/kg'
        Icon='add'/>
        <Vegetables Image={require('../../../assets/lettuce.png')}
        Title='Lettuce'
        Price='$30/kg'
        Icon='add'/>
        <Vegetables Image={require('../../../assets/Ginger.png')}
        Title='Ginger'
        Price='$60/kg'
        Icon='add'/>
        
       </ScrollView>
</View>  

<View style={{borderBottomWidth:.6}}>
       <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.headingTitle}>Meat</Text>
        <Text style={styles.seeAll}>See all</Text>
        
       </View>
       <ScrollView style={{backgroundColor:'#fff'}} horizontal={true} showsHorizontalScrollIndicator={false}>
       <Meat Image={require('../../../assets/beef.jpg')}
       Title='Beef'
       Price='200/kg'
       Icon='add'/>
       <Meat Image={require('../../../assets/lamp.jpg')}
       Title='Lamp'
       Price='400/kg'
       Icon='add'/>
       <Meat Image={require('../../../assets/pork.jpg')}
       Title='Pork'
       Price='300/kg'
       Icon='add'/>
        
       </ScrollView>
</View>  

<View style={{borderBottomWidth:.6}}>
       <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.headingTitle}>Sea Foods</Text>
        <Text style={styles.seeAll}>See all</Text>
        
       </View>
       <ScrollView style={{backgroundColor:'#fff'}} horizontal={true} showsHorizontalScrollIndicator={false}>
       <SeaFoods Image={require('../../../assets/ayala.jpg')}
       Title={'Ayala'}
       Price='100/kg'
       Icon='add'/>
       <SeaFoods Image={require('../../../assets/mathi.jpg')}
       Title={'sadraine / Mathi'}
       Price='100/kg'
       Icon='add'/>
       <SeaFoods Image={require('../../../assets/butterfish.jpg')}
       Title={'Butter Fish'}
       Price='100/kg'
       Icon='add'/>
        
       </ScrollView>
</View>  
<View style={{height:100,backgroundColor:'#fff'}}>

</View>
      

       
       
   </ScrollView>
   </View>
   
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
    flex:1
    
    },
    headerstyle:{
      backgroundColor:'#23AA49',
      height:80,
      width:'100%',
      
    },
    headertitle:{
      color:'#fff',
      marginTop:30,
      fontSize:24,
      marginLeft:20
    },
    headingTitle:{
      marginLeft:20,
      fontSize:20,
      color:'black',
      marginTop:20,
      fontWeight:'bold'
      
  },
  seeAll:{
      fontSize:20,
      color:'#23AA49',
      marginTop:20,
      fontWeight:'bold',
      marginRight:20
  },

})