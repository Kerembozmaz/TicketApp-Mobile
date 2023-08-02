import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

export default function AnimatedText({text,color}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          this.textRef.bounceIn(1000); // Animasyonu başlatmak için TouchableOpacity'a basın
        }}
      >
        <Animatable.Text
          ref={(ref) => {
            this.textRef = ref;
          }}
          style={{
            color:{color},
            fontSize:24
          }}
        >
          {text}
        </Animatable.Text>
      </TouchableOpacity>
    </View>
  );
  
}
const styles = StyleSheet.create({
    
   
  });
