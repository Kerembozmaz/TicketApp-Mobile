import { View, Text , StyleSheet} from 'react-native'
import {React,useState} from 'react'
import Setting from '../components/Setting'
export default function Settings() {
    const [checked, setChecked] = useState(true);
  return (
    <View style={styles.container}> 
    <View style={styles.body}>
    <Setting text='Dil' IconName='language' abc="none" />
    <Setting text='Dark Mod' IconName='moon' />
    </View>
       
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2C3333",
      },
      body:{
        top:50,
        alignItems: "center"
      }
})