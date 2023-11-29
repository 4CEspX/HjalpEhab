// HomeScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button} from 'react-native';
import { Link } from 'expo-router';

import { styles } from './index';



const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Create a request body with the user's credentials
    const requestBody = {
    name: username,
     password: password
    };

    // Send a POST request to the server
    fetch("http://192.168.220.50:3000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
      .then(data => {
        if (data.success) {
          // Login successful, perform any necessary actions
          console.log('Login successful');
        } else {
          // Login failed, display error message
          setError('Invalid username or password');
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };



  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          //value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Link  style={styles.link} href="Scanner">go to scanner</Link>
    
      </View>
    </View>
  );
};

export default LoginScreen;