// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { styles } from './index';



const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validate the user's credentials
    if (username === 'admin' && password === 'password') {
      // Navigate to the home screen or perform any other action
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
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
          value={password}
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