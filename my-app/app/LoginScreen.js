// HomeScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button} from 'react-native';
import { Link } from 'expo-router';
import Scanner from './Scanner';
import { styles } from './index';




  const handleLogin = () => {
    // Validate the user's credentials
    if (username === 'admin' && password === '123') {
      // Navigate to the home screen or perform any other action
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

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