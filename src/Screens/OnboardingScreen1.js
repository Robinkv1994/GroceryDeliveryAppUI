import { Dimensions, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


const {height,width}=Dimensions.get('window')

const OnboardingScreen1 = ({navigation}) => {
  return (
    
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'}
        backgroundColor="#23AA49"/>
        <View style={styles.childContainer}/>
        <View style={styles.childContainer2}>
                <View style={{marginTop:-250}}>
                         <ImageBackground source={require('../../assets/onboard.png')} style={styles.Image1}/>
                         <View style={styles.TextView}>
                         <Text style={styles.TextStyle}>40,000+ Products to </Text>
                         <Text style={styles.TextStyle}>choose from</Text>
                         
                        <Pressable style={styles.ButtonView} onPress={()=>navigation.navigate('OnboardingScreen2')}>
                        <Icon name='angle-right' size={30} color='black'/>
                        </Pressable>
                         
                         </View>
                </View>
        </View>

    </SafeAreaView>
  )
}

export default OnboardingScreen1

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
    },
    Image1:{
        height:height/2,
        width:width/1.2,
        marginHorizontal:25,
        marginTop:40,
        marginLeft:30
    },
    childContainer:{
        height:300,
        backgroundColor:'#fff'
    },
    childContainer2:{
        backgroundColor:'#23AA49',
        height:'100%',
        width:'100%',
        borderRadius:100
        
    },
    TextStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
    },
    TextView:{
        alignItems:'center'
    },
    ButtonView:{
        height:60,
        width:60,
        backgroundColor:'white',
        borderRadius:50,
        marginTop:90,
        marginLeft:300,
        alignItems:'center',
        justifyContent:'center'
    }

})