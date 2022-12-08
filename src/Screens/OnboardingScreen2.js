import { Dimensions, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Pressable } from 'react-native'
import React from 'react'



const {height,width}=Dimensions.get('window')

const OnboardingScreen2 = ({navigation}) => {
  return (
    
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'}
        backgroundColor="#23AA49"/>
        <View style={styles.childContainer}/>
        <View style={styles.childContainer2}>
                <View style={{marginTop:-250}}>
                         <ImageBackground source={require('../../assets/onboard2.png')} style={styles.Image1}/>
                         <View style={styles.TextView}>
                         <Text style={styles.TextStyle}>Quick Door Step </Text>
                         <Text style={styles.TextStyle}>Delivery in 10</Text>
                         <Text style={styles.TextStyle}> Minutes</Text>
                         
                        <Pressable style={styles.ButtonView} onPress={()=>navigation.replace('Login')}>
                                <Text style={styles.ButtonText}>Shop Now</Text>
                        </Pressable>
                         
                         </View>
                </View>
        </View>

    </SafeAreaView>
  )
}

export default OnboardingScreen2

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
    },
    Image1:{
        width:'100%',
        height:300,
        marginTop:100 
    },
    childContainer:{
        height:300,
        backgroundColor:'#fff'
    },
    childContainer2:{
        backgroundColor:'#23AA49',
        height:'100%',
        width:'100%',
        borderRadius:90,
        
        
    },
    TextStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
        
    },
    TextView:{
        alignItems:'center',
        marginTop:30
    
    },
    ButtonView:{
      width:'50%',
      height:50,
      backgroundColor:'#fff',
      paddingHorizontal:20,
      marginTop:30,
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center'

    },
    ButtonText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#23AA49'
    }

})