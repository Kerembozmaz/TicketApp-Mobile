import { View, Text ,StyleSheet,TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native'
import {React ,useState} from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function Search({navigation}) {
  const [header, setheader] = useState('');
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.Search}>
             
             <TextInput  style={styles.searchBar}  placeholder='Filmleri Ara..' onChangeText={(text)=>setheader(text)} />
            </View>
          <Text>{header}</Text>
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
        height:45,
        fontSize:20,
        padding:12,
        borderRadius:12,
        fontWeight:'bold',
        opacity:0.6,
        color:'#2C3333'
      }

})