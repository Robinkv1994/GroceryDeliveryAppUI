import { StyleSheet, Text, View ,SafeAreaView,Image,StatusBar,TextInput,ScrollView, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ADD_TO_CART } from '../Reducer/CartReducer'
import {useDispatch,useSelector}from 'react-redux'


import { useNavigation, useRoute } from '@react-navigation/native'
import BestSellingCard from '../Components/BestSellingCard'
import ScrollCard from '../Components/BannerCard'
import CategoryCard from '../Components/CategoryCard'

const HomePage = ({route,name,item}) => {
    const navigation= useNavigation()
    console.log(name);
const [results ,setResults]=useState('')

const dispatch = useDispatch()
const addToCart = item =>{
    dispatch({
        type:ADD_TO_CART,
        payload:item
    })
}

  return (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden={true}/>
{/* header */}
    <View style={styles.HeaderView} >
        <View style={styles.profileIcon}>
                <Image style={styles.ImageStyle} source={require('../../assets/dp.jpeg')}/>
                <Icon name='edit' size={22} style={{position:'absolute',top:40,left:60,color:'#000'}}/>
                <Text style={styles.ProfileName}>{name}</Text>
        </View>
        <View style={styles.LocationView}>
            <Icon name='location-pin'size={24} style={styles.LocationPin}/>
            <Text style={styles.Address}>Home</Text>
              
        </View>
    </View>
{/* search bar */}
    <View style={styles.searchBarView}>
        <Icon name='search' size={30} style={{ margin:10,color:'#23AA49'}}/>
            <TextInput style={styles.searchInput} placeholder='Search Items here...'>

            </TextInput>
    </View>


{/* child view */}

    <View style={{backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20}}>
        
{/* scrollCard */}
    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
        <ScrollCard source={require('../../assets/scroll2.jpg')} />
        <ScrollCard source={require('../../assets/scroll1.jpg')}/>
        <ScrollCard source={require('../../assets/scroll3.jpg')}/>     
    </ScrollView>
{/* Categories */}
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.headingTitle}>Categories</Text>
            <Pressable onPress={()=>navigation.navigate('SeeAll')}>
            <Text style={styles.seeAll}>See all</Text>
            </Pressable>    
      </View>
      <View style={{flexDirection:'row'}}>
        <CategoryCard source={require('../../assets/fruits.png')} 
        Title='Fruit'
        onpress={()=>navigation.navigate('FruitsScreen')}/>

        <CategoryCard source={require('../../assets/veg.png')} 
        Title='Vegetables'
        onpress={()=>navigation.navigate('VegetableScreen')}/>

        <CategoryCard source={require('../../assets/fish7.png')} 
        Title='SeaFood'
        onpress={()=>navigation.navigate('SeafoodScreen')}/>

        <CategoryCard source={require('../../assets/meat.png')}
        Title='Meat'
        onpress={()=>navigation.navigate('MeatScreen')}/>
      </View>

      
{/* Best sellings */}

    <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.headingTitle}>Best Selling</Text>
        <Text style={styles.seeAll}>See all</Text>
    </View>
    <ScrollView style={{flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false} >
            <BestSellingCard img={require('../../assets/tomato.png')}
            title='Tomato'
            price='$ 6/kg'
            Name='add'
            onPress={()=>{addToCart(item);
            console.log(addToCart(item))}}
            />
            <BestSellingCard img={require('../../assets/Ginger.png') }
             title='Ginger'
             price='$ 12/kg'
             Name='add'
             onPress={()=>{addToCart(item)}}
             />
            <BestSellingCard
            img={require('../../assets/lettuce.png') }
            title='Lettuce'
            price='$ 62/kg'
            Name='add'
            onPress={()=>{addToCart(item)}}/>
            <BestSellingCard img={require('../../assets/redCaps.png') }
            title='Red Capsicum'
            price='$ 61/kg'
            Name='add'
            onPress={()=>{addToCart(item)}}/>
    </ScrollView>




    </View>

  </SafeAreaView>

  )
}

export default HomePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
        
    },
    HeaderView:{
        height:210,
        width:'100%',
        backgroundColor:'#23AA49',
      
    },
    profileIcon:{
        backgroundColor:'#fff',
        height:60,
        width:60,
        position:'absolute',
        top:50,
        left:30,
        borderRadius:50,
        flexDirection:'row'

    },
    ImageStyle:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },
    ProfileName:{
        position:'absolute',
        top:10,
        left:70,
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
    },
    LocationView:{
        backgroundColor:'#fff',
        height:40,
        width:120,
        borderRadius:30,
        position:'absolute',
        left:280,
        top:60,
        flexDirection:'row',
       
    },
    LocationPin:{
        margin:7,
        color:'#23AA49'
    },
    Address:{
        fontSize:18,
        fontWeight:'bold',
        margin:7,
        color:'#000'
    },
    searchBarView:{
        height:50,
        width:'90%',
        backgroundColor:'#fff',
        marginHorizontal:20,
        borderRadius:8,
        flexDirection:'row',
        position:'absolute',
        top:130
    
    },
    searchInput:{
        flex:1,
        fontSize:18 
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