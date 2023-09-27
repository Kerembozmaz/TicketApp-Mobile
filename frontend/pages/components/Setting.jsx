import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Switch} from 'react-native';
import İcon from "react-native-vector-icons/Ionicons";
import SwitchButon from './SwitchButon';
const Setting = ({ abc,text,IconName}) => {

    
    
    return (

        <TouchableOpacity  style={styles.container}>
        <İcon name={IconName} style={styles.Icon}/>
            <Text style={{color:'white',fontSize:20,fontFamily:'Verdana',left:15}}>{text}</Text>
          
            
            <SwitchButon abc={abc}  IconName={IconName} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
        container:{
            width:'90%',
            height:50,
            padding:10,
            backgroundColor:'#E7B10A',
            margin:10,
            borderRadius:10,
            display: 'flex',
            flexDirection:'row',
           
        },
        Icon:{
            fontSize:25,
            marginRight:5
        }
})

export default Setting;
