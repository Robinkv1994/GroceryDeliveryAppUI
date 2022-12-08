import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Category from "../Screens/BottomTab/Category";
import Profile from "../Screens/BottomTab/Profile";
import Mycart from "../Screens/BottomTab/Mycart";
import HomePage from "../Screens/HomePage";
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const BottomStack =({route})=>{

const {name} = route.params
console.log(name);

const BottomTab = createBottomTabNavigator()

return(
    <BottomTab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{
        position:'absolute',
        left:20,
        right:20,
        marginBottom:10,
        height:70,
        backgroundColor:'#fff',
        borderRadius:15,
        elevation:4,
        shadowColor:'green',
        
        },
       
        tabBarShowLabel:false,
        
        
    
    }}>
        <BottomTab.Screen name="HomePage"
        
        component={()=>{
            return(
            <HomePage name={route.params.name}/>)
        }
            }

                options={{
            tabBarActiveTintColor:'#fff',
            tabBarIcon:({focused})=>focused?
            <Icon name="home-variant" size={24} color='#23AA49'/>: <Icon name="home-variant-outline" size={24} color='grey'/>
        }}/>
        <BottomTab.Screen name="Vegetables"
        component={Category}
        options={{
            // headerShown:true,
            tabBarActiveTintColor:'#fff',
            tabBarIcon:({focused})=>focused?
            <Icon name="view-gallery" size={24} color='#23AA49'/>: <Icon name="view-gallery-outline" size={24} color='grey'/>
            
        }}/>
        <BottomTab.Screen name="Mycart"
        component={Mycart}
        options={{
            tabBarActiveTintColor:'#fff',
            tabBarIcon:({focused})=>focused?
            <Icon name="cart" size={24} color='#23AA49'/>: <Icon name="cart-outline" size={24} color='grey'/>
        }}/>
        <BottomTab.Screen name="Profile"
        component={()=>{
            return(
                <Profile name={route.params.name}/>
            )
        }}
        options={{
            tabBarActiveTintColor:'#fff',
            tabBarIcon:({focused})=>focused?
            <Icon name="account" size={24} color='#23AA49'/>: <Icon name="account-outline" size={24} color='grey'/>
        }}/>
    </BottomTab.Navigator>

)

}
export default BottomStack