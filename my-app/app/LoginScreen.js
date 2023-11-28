// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import Scanner from './Scanner';



const LoginScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="Scanner">go to scanner</Link>
    </View>
  );
}

export default LoginScreen;