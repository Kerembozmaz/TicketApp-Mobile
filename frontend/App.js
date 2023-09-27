import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Entre from './pages/Entre';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/HomeScreen/Home';
import Settings from './pages/HomeScreen/Settings';
const Stack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Entre' component={Entre} 
    options={{headerShown:false  }}/>
    <Stack.Screen name='Login' component={Login} 
    options={{headerShown:false  }}/>
    <Stack.Screen name='Register' component={Register} 
    options={{headerShown:false  }}/>
    <Stack.Screen name='Home' component={Home} 
    options={{headerShown:false  }}/>
    <Stack.Screen name='Settings' component={Settings}
    options={{headerShown:false  }}
    />
  </Stack.Navigator>
      
    </NavigationContainer>
  );
   
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
}
