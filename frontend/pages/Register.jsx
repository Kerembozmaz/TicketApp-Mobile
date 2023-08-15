import { View, Text,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,Keyboard ,TextInput} from 'react-native'
import {useState} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AnimatedText from "./components/AnimatedText";
import Feather from "react-native-vector-icons/Feather"
export default function Register({navigation}) {
  const [security, setsecurity] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.body}>
      <TouchableOpacity
      style={styles.closeBack}
      onPress={() => {
        navigation.navigate("Entre");
      }}
    ><AntDesign name="close" style={styles.close} />
    </TouchableOpacity>
    <View style={styles.form}>
    <Text style={styles.header}>Kayıt Ol</Text>
    <View style={styles.inputs}>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı "
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={security}
        maxLength={20}
      />
     
      <TextInput
        style={styles.input }
        
        placeholder="Şifre Tekrar"
        secureTextEntry={security}
        maxLength={20}
      /><TouchableOpacity
      style={styles.sss}
      onPress={() => {
        setsecurity((prev) => !prev);
      }}
    >
      <Feather
        name={security ? "video-off" : "video"}
        style={styles.iconEye}
      />
    </TouchableOpacity>
      
    </View>
    <TouchableOpacity style={styles.btnSkip} onPress={()=>{navigation.navigate('Home')}}>
      <AnimatedText text="Devam Et" color="black" />
    </TouchableOpacity>
  </View>
</View>
      </View>
    
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#2C3333",
    },
    body:{
      top:60
    },
    closeBack: {
      width: 80,
      height: 40,
      backgroundColor: "#E7B10A",
      alignItems: "center",
      borderRadius: 10,
      padding: 5,
      left: 20,
    },
    close: {
      fontSize: 29,
    },form: {
      width: 380,
      height: 650,
      backgroundColor: "#2c2f27",
      top: 40,
      left: 24,
      borderRadius: 20,
      marginBottom: 20,
      padding: 10,
    },
    btnSkip: {
      width: 200,
      
      backgroundColor: "#E7B10A",
      alignItems: "center",
      padding: 15,
      borderRadius: 20,
      top: 210,
      left: 80,
      height: "auto",
      borderBottomEndRadius: 10,
      borderTopLeftRadius: 10,
    },
    text1: {
      fontSize: 20,
      color: "black",
      fontWeight: "bold",
      fontFamily: "Helvetica",
    },
    header: {
      top: 20,
      textAlign: "center",
      fontSize: 25,
      color: "#E7B10A",
      fontFamily: "Verdana",
      fontWeight: "bold",
    },
    inputs: {
      top: 80,
      height: 270,
  
      padding: 10,
    },
    input: {
      backgroundColor: "#F6F4EB",
      opacity: 0.8,
      height: 50,
      borderRadius: 15,
      padding: 10,
      fontSize: 20,
      fontFamily: "Verdana",
      fontWeight: "bold",
      fontVariant: "normal",
      color: "#2B2730",
      marginBottom: 50,
    },
    iconEye: {
      fontSize: 25,
      left: 300,
      bottom: 89,
      display: "flex",
     
    },
    sss: {
      width: 25,
    },

})