import { View, Text ,StyleSheet } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Profile";
import Search from "./Search";
import HomeScreen from "./HomeScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lonicons from 'react-native-vector-icons/Ionicons'
const Tabs = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tabs.Navigator
    activeColor="white"
    inactiveColor="#3e2465"
   
    barStyle={{ backgroundColor: '#E7B10A' , paddingTop:5}}
    
  >
      <Tabs.Screen name="Ana Sayfa"  component={HomeScreen} 
        options={{
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  style={styles.icon} name="home" color='black' size={30} />
          ),
        }}
      />
      <Tabs.Screen name="Ara" component={Search}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="search" style={styles.icon} color='black' size={30} />
        ),
      }}
      />
      <Tabs.Screen name="Profil" component={Profile}
      
      options={{
        
        tabBarIcon: ({ color }) => (
          <Lonicons name="person" style={styles.icon} color='black' size={30}  />
        ),
      }}
      />
    </Tabs.Navigator>
  );
}
const styles = StyleSheet.create({
    icon: {
      margin:1,
      opacity:0.9
    }
})