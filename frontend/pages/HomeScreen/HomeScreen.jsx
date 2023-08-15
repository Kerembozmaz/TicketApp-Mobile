import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AnimatedText from "../components/AnimatedText";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.scrollMenü}>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Tümü</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Bilim Kurgu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Korku</Text>
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
  scrollMenü: {
    display: "flex",
    width: 450,
    flexDirection: "row",
    left:20
  },
  navbarİtem: {
    width: "auto",
    backgroundColor: "#E7B10A",
    padding: 11,
    margin: 20,
    borderRadius: 10,
    opacity: 0.8,
  },
  textİtem:{
    fontSize:15,
    fontWeight: "bold",
    fontFamily:'Verdana'
  }
});
