import React, { useState } from "react";
import { View,TextInput,TouchableOpacity,SafeAreaView,StyleSheet,Text, StatusBar, Button, Pressable,Image} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'



const Signup=({navigation})=>{
   const [hidden,setHidden]= useState(false)
   
    return(
        <SafeAreaView style={styles.Container}>
{/* Back button */}
            <Icon name="arrow-back" color={'black'} size={30} style={{ position:'absolute',top:30,left:20}} onPress={()=>navigation.navigate('Login')}/>
            <Text style={styles.HeaderStyle}>SIGNUP</Text>
{/* text input */}
                    <View style={styles.TextInputView}>
                        <View style={styles.badgeIcon}>
                        <Icon name="perm-identity" size={24} color='#23AA49'></Icon>
                        </View>
                                <TextInput style={styles.TextInputStyle} placeholder='Name'>
                                </TextInput>
                    
                        
                    </View>
                    <View style={styles.TextInputView}>
                        <View style={styles.badgeIcon}>
                        <Icon name="email" size={24} color='#23AA49'></Icon>
                        </View>
                                <TextInput style={styles.TextInputStyle} keyboardType={"email-address"} placeholder="Email" >
                                </TextInput>
                        </View>
                     <View style={styles.TextInputView}>
                        <View style={styles.badgeIcon}>
                        <Icon name="phone-android" size={24} color='#23AA49'></Icon>
                        </View>
                                <TextInput style={styles.TextInputStyle} placeholder="Mobile no" keyboardType="number-pad">
                                </TextInput>
                    </View>    

                    <View style={styles.TextInputView}>
                        <View style={styles.badgeIcon}>
                        <Icon name="lock" size={24} color='#23AA49'></Icon>
                        </View>
                                <TextInput style={styles.TextInputStyle} secureTextEntry={hidden?false:true} placeholder="Password" >
                                </TextInput>
                                <Icons name={hidden?'eye':"eye-off-outline"} style={styles.Eye} 
                                onPress={()=>setHidden(!hidden)} />
                    </View>    

                    
{/* signup button */}
                    <Pressable style={{backgroundColor:'#23AA49',width:"40%",height:50,justifyContent:'center',
                    alignItems:'center',borderRadius:30,marginTop:30}} onPress={()=>navigation.navigate('Login')}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Signup</Text>
                    </Pressable>


                    
        </SafeAreaView>
    )
}
export default Signup


const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    TextInputView:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:8,
        marginTop:50,
        width:'90%',
        flexDirection:'row'
    },
    TextInputStyle:{
        fontSize:18,
        

    },
    childView:{
        width:'100%',
        
    },
    HeaderStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        marginTop:60,
        alignItems:'center'
    },
    badgeIcon:{
        width:40,
        margin:10
    },
    Eye:{
        position:'absolute',
        right:10,
        top:10,
        color:'black',
        fontSize:22
    }
})