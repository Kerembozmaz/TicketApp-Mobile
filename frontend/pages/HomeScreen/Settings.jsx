import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import Setting from "../components/Setting";
import  Icon  from "react-native-vector-icons/MaterialIcons";
export default function Settings() {
  const [checked, setChecked] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            margin: 10,
            color: "#F1F0E8",
            fontWeight: "bold",
          }}
        >
          Genel Ayarlar
        </Text>
        <View style={styles.Settings}>
          <Setting
            text="Dil"
            IconName="language"
            abc="none"
            language=": Türkçe"
            IconNameEnd="right"
          />
          <Setting text="Dark Mod" IconName="moon" />
          <Setting text="Bildirim   " IconName="notifications" />
        </View>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            margin: 10,
            color: "#F1F0E8",
            fontWeight: "bold",
          }}
        >
          Güvenlik Ayarları
        </Text>
        <View style={styles.Settings}>
          <Setting
            text="Şifre Yenileme"
            IconName="lock-closed"
            abc="none"
            IconNameEnd="right"
          />
          <Setting
            text="E-mail Yenileme"
            IconName="mail"
            abc="none"
            IconNameEnd="right"
          />
          <Setting text="Konum    " IconName="location" />
          <Setting
            text="Ödeme Bilgileri"
            IconName="card"
            abc="none"
            IconNameEnd="right"
          />
        </View>

        <View style={styles.LogOutDiv}>
          <TouchableOpacity style={styles.LogOut}>
          <Icon name='logout' style={{fontSize:35,left:15}}/>
            <Text
              style={{
               textAlign:'center',
                fontFamily: "Verdana",
                fontWeight: "bold",
                color:'#FFFFFF',
                fontSize:20,
                left:24,
                top:4
              }}
            >
              Çıkış Yap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3333",
  },
  body: {
    top: 50,
  },
  Settings: {
    width: "100%",
    alignItems: "center",
  },
  LogOutDiv: {
    width: "100%",
    alignItems: "center",
    height: 80,
    top: "15%",
    
  },
  LogOut: {
    width: "50%",
    height: 60,
    backgroundColor: "#E7B10A",
    padding: 10,
    borderRadius:40,
    display:'flex',
    flexDirection:'row'
  },
});
