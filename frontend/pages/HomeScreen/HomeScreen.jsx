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
        <ScrollView horizontal={true} style={styles.scrollMenü}
        canCancelContentTouches={true}
        indicatorStyle={"white"}
        >
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Tümü</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Bilim Kurgu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Korku</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Aşk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Gerçek Hayat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Biyografi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
            <Text style={styles.textİtem}>Belgesel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarİtem}>
          <Text style={styles.textİtem}>fdds</Text>
        </TouchableOpacity>
        </ScrollView>
        
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
    width: 500,
    flexDirection: "row",
    left:10,
    
   
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
