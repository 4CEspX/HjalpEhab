// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import Scanner from './Scanner';
import { styles } from './index';




const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
    
      
      <Text style={styles.title}>Under construction</Text>
      <Link  style={styles.link} href="Scanner">go to scanner</Link>
    
    </View>
    </View>
  );
}

export default LoginScreen;