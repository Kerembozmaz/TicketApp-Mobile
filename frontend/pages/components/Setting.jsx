import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import İcon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign"
import SwitchButon from "./SwitchButon";
const Setting = ({ abc, text, IconName, language, IconNameEnd }) => {
  return (
    <TouchableOpacity style={styles.container}>
    <View >
    <İcon name={IconName} style={styles.Icon} />
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontFamily: "Verdana",
          left: 38,
          bottom:25,

          
          
        }}
      >
        {text}
        {language}
        
      </Text></View>
    
    
      
        <View style={{display:'flex',left:20}}>
        <SwitchButon abc={abc} IconName={IconName} />
        </View>
      
      <View style={styles.IconDıv}>
       <Icon2 name={IconNameEnd} style={styles.Icon2} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    padding: 10,
    backgroundColor: "#E7B10A",
    margin: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between"
   
  },
  Icon: {
    fontSize: 25,
    marginRight: 20,
  },
  Icon2:{
    fontSize: 25,
    bottom:5
   
  },
  IconDıv:{
    display:'flex',
    justifyContent:'flex-end'
  }
});

export default Setting;
