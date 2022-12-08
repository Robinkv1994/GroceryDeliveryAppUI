import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FruitsScreen from './FruitsScreen'
import { useRoute } from '@react-navigation/native'

const DetailedView = ({props}) => {
    const route = useRoute()
  return (
   <View>
    <FruitsScreen FruitTitle={FruitTitle}
    
    />
   </View>
  )
}

export default DetailedView

const styles = StyleSheet.create({})