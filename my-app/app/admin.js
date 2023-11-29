import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { styles } from './index';
import { useState } from "react";

const admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Create a request body with the user's credentials
    const requestBody = {
      name: username,
      password: password
    };

    // Send a POST request to the server
    fetch("http://192.168.220.50:3000/api/info", { // Change this to your signup endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Account creation successful, perform any necessary actions
          console.log('Account created successfully');
        } else {
          // Account creation failed, display error message
          setError('Failed to create account');
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
        <Text style={styles.title}>Sign Up</Text>
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
          onChangeText={setPassword}
        />
        <Button title="Sign Up" onPress={handleSignup} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Link style={styles.link} href="Scanner">go to scanner</Link>
      </View>
    </View>
  );
};

export default admin;