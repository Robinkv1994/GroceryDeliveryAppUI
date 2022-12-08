import { StyleSheet, Text, View ,Pressable,TouchableOpacity} from 'react-native'
import React from 'react'

const SeeAll = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24,padding:30,color:'#fff',fontWeight:'bold',backgroundColor:'#23AA49'}}>Categories</Text>
      <TouchableOpacity style={styles.titleView}>
        <Text style={styles.titles}>Fruit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.titleView}>
        <Text style={styles.titles}>vegetables</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.titleView}>
        <Text style={styles.titles}>Dairy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.titleView} >
        <Text style={styles.titles}>Meat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.titleView}>
        <Text style={styles.titles}>Sea Foods</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.titleView}>
        <Text style={styles.titles}>Fresh Water Fish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.titleView}>
        <Text style={styles.titles}>Leafy Foods</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.titleView}>
        <Text style={styles.titles}>Rice and dals</Text>
      </TouchableOpacity>


    </View>
  )
}

export default SeeAll

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#fff',
        
    },
    titles:{
      fontSize:24,
      color:'#000',
      margin:20,
      
    },
    titleView:{
      borderBottomWidth:1,
      height:90,
      width:'80%',
      marginLeft:30,
      borderColor:'#23AA49'
      
    }
})