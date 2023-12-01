


import { Link } from "expo-router";
//import{CheckBox} from 'react-native-community/checkbox';
;
import NfcManager, { NfcTech } from "react-native-nfc-manager";
;


import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button,  } from "react-native";
import { styles } from './index';



const account = () => {










const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [adminer, setAdminer] = useState(0);
    const [klass, setKlass] = useState('');
    
    const handleAdmin = () => {
        if (adminer === 0) {
            setAdminer(1);
            console.log(adminer);
        } else {
            setAdminer(0);
            console.log(adminer);
        }
    };

    const handleSignup = () => {
        // Create a request body with the user's credentials
        const requestBody = {
            name: username,
            password: password,
            isAdmin: adminer,
            klass: klass,
        };

        // Send a POST request to the server
        // fetch("http://192.168.220.50:3000/api/info", { // Change this to your signup endpoint
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(requestBody)
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log('Response:', data); // Log the response data
        //         if (data.ok) {
        //             // Account creation successful, perform any necessary actions
        //             console.log('Account created successfully');
        //         } else {
        //             // Account creation failed, display error message
        //             setError('Failed to create account');
        //         }
        //     })
        //     .catch(error => {
        //         // Handle any errors that occurred during the request
        //         console.error('Error:', error);
        //     });
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
                <TextInput 
                    style={styles.input}
                    placeholder="Class"
                    value={klass}
                    onChangeText={setKlass}
                    
                />
                <Button title="Admin?" onPress={handleAdmin} />
                <Button title="Sign Up" onPress={handleSignup} />
                {error ? <Text style={styles.error}>{error}</Text> : null}
               
            </View>
        </View>
    );
}

export default account;