import {React,useState} from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { Stack, Switch } from "@react-native-material/core";
const SwitchButon = ({abc}) => {
    const [checked, setChecked] = useState(true);
    
    return (
      <Stack style={{display:`${abc}`,left:90}} fill center spacing={4}>
        <Switch   value={checked} onValueChange={() => setChecked(!checked)} 
           
        />
        
      </Stack>
      );
    };
     

const styles = StyleSheet.create({
        
})

export default SwitchButon;
