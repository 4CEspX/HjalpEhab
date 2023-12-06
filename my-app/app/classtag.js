import { Link } from "expo-router";
//import{CheckBox} from 'react-native-community/checkbox';
;
import NfcManager, { NfcTech } from "react-native-nfc-manager";
;


import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button,  } from "react-native";
import { styles } from './index';


NfcManager.start();

 
function classTag() {

const [tag, setTag] = useState('');
const [room, setRoom] = useState('');
const [error, setError] = useState('');







 async function handletagClass ()  {
        try {
            // register for the NFC tag with NDEF in it
            await NfcManager.requestTechnology(NfcTech.Ndef);
            // the resolved tag object will contain `ndefMessage` property
            const tag = await NfcManager.getTag();
            setTag(tag.id);



        }
        finally {
            NfcManager.cancelTechnologyRequest().catch(() => 0);
        }

        const requestBody = {
            room: room,
            tag_id: tag
        };
        

        fetch("http://192.168.220.50:3000/api/tags", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          })
          .then(response => {
            console.log(response.status);
            
            if (!response.ok) {
              Error(`HTTP error! status: ${response.status}`);

            }


            if(response.status === 409){
                setError('room does not exist');
            }
            if(response.status === 200){
                setError('tag added');
            }
           
            return response.json();
          })
          .then(data => {

           // setError('tag added');

           
         
            
            
          })
        }
        
    


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Class tag</Text>
                <Text style={styles.subtitle}>Scan the class tag</Text>
                <TextInput
                    style={styles.input}
                    placeholder="room name"
                    value={room}
                    onChangeText={setRoom}
                />
            <Text style={styles.error}>{error}</Text> 

                <TouchableOpacity
                    onPress={handletagClass}
                    
                    style={styles.button}
                >
                    <Text style={styles.subtitle}>Scan</Text>
                </TouchableOpacity>
                <Link style={styles.link} href="/admin">admin</Link>
            </View>
        </View>
    );
}

export default classTag;