import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={styles.container}>
        <View style={styles.body}><Text>UseName</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#2C3333'
    },
    body:{
      top:50
    }
})