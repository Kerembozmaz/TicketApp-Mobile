import { View, Text ,StyleSheet,TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.Search}>
              <TextInput style={styles.searchBar} placeholder='Filmleri Ara...'/>
            </View>

          </View>
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor: "#2C3333",
      },
      body:{
        top:50
      },
      searchBar:{
        backgroundColor:'white',
        margin:20,
        height:40,
        fontSize:20,
        padding:10,
        borderRadius:12,
        fontWeight:'bold',
        opacity:0.8
      }

})