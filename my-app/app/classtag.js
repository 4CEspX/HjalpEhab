import { Link } from "expo-router";
//import{CheckBox} from 'react-native-community/checkbox';
;
import NfcManager, { NfcTech } from "react-native-nfc-manager";
;


import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button,  } from "react-native";
import { styles } from './index';

 const classTag = () => {

const [classID, setClassID] = useState('');


 async function handletagClass ()  {
        try {
            // register for the NFC tag with NDEF in it
            await NfcManager.requestTechnology(NfcTech.Ndef);
            // the resolved tag object will contain `ndefMessage` property
            const tag = await NfcManager.getTag();
            setClassID(tag.id);



            console.log(tag.id);
            console.log(tag);
            

            if (tag.id === classID) {

                console.warn("Welcome!", tag.id);

            }

        }
        finally {
            NfcManager.cancelTechnologyRequest().catch(() => 0);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Class tag</Text>
                {/* <TextInput
                    style={styles.input}
                    placeholder="Class tag"
                    value={classID}
                    onChangeText={setClassID}
                /> */}
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