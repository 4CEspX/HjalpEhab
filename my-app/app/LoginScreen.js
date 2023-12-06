// HomeScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button} from 'react-native';
import { Link, router } from 'expo-router';

import { styles } from './index';
import admin from "./admin";



const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
 const [role, setRole] = useState('');
  

  const handleLogin = () => {
    // Create a request body with the user's credentials
    const requestBody = {
    username: username,
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
      console.log("------------------");
      setError('Login successful');
      console.log(data.role);
      setRole(data.role);
    console.log(data); // Log the response data
      setLoggedIn(true);
    })
     
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };
 
  useEffect(() => {
    if (loggedIn) {
      if(role === "student"){
      router.replace("Scanner");
      }
      else {
        router.replace("admin");
      }

    }
  }, [loggedIn]);

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