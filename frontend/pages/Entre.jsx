import { View, Text,StyleSheet,TouchableWithoutFeedback,TouchableOpacity, Keyboard,Image} from 'react-native'
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import Login from './Login';
import Register from './Register';

export default function Entre({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.Header}>ChekMyTicket</Text>
        <View style={styles.texts}>
          
         
        </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnsign} onPress={()=>{navigation.navigate('Login')}}>
              <Text style={styles.text1}>Giriş Yap</Text>
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnsign}>
            <Text style={styles.text1}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
          <FontAwesome name='video-camera' style={styles.icon1}/>
          <FontAwesome name='ticket' style={styles.icon2}/>
          <Text style={styles.textbottom}>Aradığın Tüm Filmler Burada</Text>
          </View>
          
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3333',
    
    
  },
  body:{
    top:50,
    padding:10,

  },
  Header:{
    fontSize:40,
    fontWeight:'bold',
    color:'#E7B10A',
    top:80,
    left:66,
    
  },
  texts:{
      top:100,
      left:10,
      padding:10,
      bottom:20
  },
  text1:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    fontFamily:'Helvetica'
    
  },
  buttons:{
    top:190,
    alignItems: 'center',
  },
  btnsign:{
    margin:30,
    width:200,
    backgroundColor:'#E7B10A',
    alignItems: 'center',
    padding:20,
    borderRadius:20
  },
  icons:{
    top:210,
    margin:20,
    padding:10,
    left:56
  
    
  },
  icon1:{
    margin:20,
    fontSize:40,
    color:'#8e8f26',
    
  },
  icon2:{
    margin:20,
    fontSize:40,
    color:'#8e8f26',
    left:150,
    bottom:80
  },
  textbottom:{
    fontSize:22,
    right:25,
    color:'black',
    fontWeight:'bold',
    
  }
  
 
});
