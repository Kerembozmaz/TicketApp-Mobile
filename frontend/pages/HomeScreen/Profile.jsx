import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity style={styles.icon}
          onPress={()=>navigation.navigate('Settings')}
        >
          <AntDesign name="setting" style={styles.iconset} />
        </TouchableOpacity>

        <View style={styles.profileİmage}>
          <ImageBackground
            imageStyle={{
              borderRadius: 70,
              top: 3,
              width: "80%",
              height: "90%",
            }}
            source={require("./images/User.jpeg")}
            resizeMode="cover"
            style={styles.ImageDiv}
          ></ImageBackground>
        </View>
        <View style={styles.userNameDiv}>
          <Text style={styles.userName}>John Wilson </Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.butonsProfile}>
          <TouchableOpacity style={styles.BtnEdit}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Profili Düzenle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnEdit}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Profili Paylaş
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
    alignItems: "center",
  },
  profileİmage: {
    width: "100%",
    height: 250,
    alignItems: "center",
  },
  ImageDiv: {
    width: "70%",
    height: "90%",
    left: 30,
    top: 15,
  },
  userNameDiv: {
    width: "80%",
    height: "15%",
  },
  userName: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
    fontFamily: "Verdana",
    fontWeight: "bold",
    opacity: 0.8,
  },
  hr: {
    width: "90%",
    height: 1,
    bottom: 20,
    backgroundColor: "white",
  },
  BtnEdit: {
    backgroundColor: "#E7B10A",
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 20,
    margin: 7,
  },
  butonsProfile: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    fontSize: 40,
    left: 170,
    top: 20,
  },
  iconset: {
    fontSize: 38,
  },
  
});
