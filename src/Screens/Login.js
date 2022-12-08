import React, { useState } from "react";
import { View,TextInput,TouchableOpacity,SafeAreaView,StyleSheet,Text, StatusBar, Button, Pressable,Image, Alert} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useRoute } from "@react-navigation/native";



const Login=({navigation})=>{
const route = useRoute()
    const [checked,setChecked]= useState(false)
    const [name,setName]= useState('',false)
    const [nameEntered,setNameEntered]=useState(false)
    const [password,setPassword]=useState(false)
    const [focused,setFocused]=useState(false)
    const [focused2,setFocused2]=useState(false)
    const [hidden,setHidden]=useState(false)

const AlertMessage=()=>{
  return(
    
      Alert.alert('Currently we are Not in function ')
  )
     }


    return(
        <SafeAreaView style={styles.Container}>
{/* Back button */}
            <Icon name="arrow-back" color={'black'} size={30} style={{ position:'absolute',top:30,left:20}} onPress={()=>navigation.navigate('OnboardingScreen2')}/>
            <Text style={styles.HeaderStyle}>LOGIN</Text>
{/* text input */}
                    <View style={[styles.TextInputView,{borderColor:focused?'green':'black'}]}>
                        <View style={styles.badgeIcon}>
                        <Icon name="perm-identity" size={24} color='#23AA49'></Icon>
                        </View>
                                <TextInput style={[styles.TextInputStyle]} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} placeholder='Username' 
                                value={name}
                                onChangeText={(text)=>{setName(text)}}>
                                </TextInput>
                    
                        
                    </View>
                    <Text style={{marginLeft:'-60%',marginTop:5}}></Text>
                  
                    <View style={[styles.TextInputView,{borderColor:focused2?'green':'black'}]}>
                        <View style={styles.badgeIcon}>
                        <Icon name="lock" size={24} color='#23AA49'></Icon>
                        </View>
                                <TextInput style={styles.TextInputStyle}secureTextEntry={hidden?false:true} placeholder="Password" 
                                onFocus={()=>setFocused2(true)} onBlur={()=>setFocused2(false)} onTextInput={()=>setPassword(true)}>
                                </TextInput>
 {/* password hide */}
                                <Icons name={hidden?"eye":"eye-off-outline"} style={styles.Eye} 
                                onPress={()=>setHidden(!hidden)}/>
                        </View>
{/* remember me */}
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Icon name={ checked? "check-box":'crop-square'} size={24} color="black" style={{ marginTop:20}} onPress={()=>setChecked(!checked)}/>
                        <Text style={{marginTop:20,marginLeft:10 ,color:'black',fontSize:18}}>Remember Me</Text>
                    </View>   
                    <Text style={{color:'#23AA49',fontSize:18}}>Forgot Password ?</Text> 
{/* login button */}
                    <Pressable style={[styles.Login,{backgroundColor:name?'green':'grey'}]} disabled={name?false:true }
                     onPress={()=>{navigation.navigate('BottomStack',{name:name});
                     console.log(name)
                    }}
                    >
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>LOGIN</Text>
                    </Pressable>
{/* login with */}

                    <View style={{width:'100%',flexDirection:'row',marginTop:20}}>
                        <View style={{borderBottomWidth:1,width:'30%',marginLeft:20}}></View>
                        <Text style={{fontSize:16,color:'black',marginLeft:20}}>Or login with </Text>
                        <View style={{borderBottomWidth:1,width:'30%',marginLeft:22}}></View>

                    </View>
{/* social media */}
                <View style={{flexDirection:'row'}}>
                <Pressable style={{width:60,height:60,borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:6,marginTop:30}}
                onPress={()=>AlertMessage()}>
                    <Image source={require('../../assets/fb.png')}/>
                </Pressable>
                <Pressable style={{width:60,height:60,borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:6,marginTop:30,marginLeft:80}}
                onPress={()=>AlertMessage()}>
                    <Image source={require('../../assets/g+.png')}/>
                </Pressable>
                <Pressable style={{width:60,height:60,borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:6,marginTop:30,marginLeft:80}}
                onPress={()=>AlertMessage()}>
                    <Image source={require('../../assets/ios.png')}/>
                </Pressable>
                </View>  

                <View style={{flexDirection:'row',marginTop:100}}>
                    <Text style={{color:'black',fontSize:18}}>New User?</Text>
                    <Pressable onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{color:'#23AA49',fontSize:18,fontWeight:'bold',marginLeft:5}}>SignUp</Text>
                    </Pressable>
                </View>  
        </SafeAreaView>
    )
}
export default Login


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
    Login:{
        backgroundColor:'#23AA49',
        width:"40%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginTop:30
    },
    Eye:{
        position:'absolute',
        right:10,
        top:10,
        color:'black',
        fontSize:22
        
    }

})