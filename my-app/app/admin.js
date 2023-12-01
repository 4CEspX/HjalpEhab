import { Link } from "expo-router";
//import{CheckBox} from 'react-native-community/checkbox';
;
import NfcManager, { NfcTech } from "react-native-nfc-manager";
;


import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button,  } from "react-native";
import { styles } from './index';

const admin = () => {
    
   



    return (
        <View style={styles.container}>

            <View style={styles.main}>
                
             <Link style={styles.link} href="/classtag">change tags for class</Link> 
                <Link style={styles.link} href="/account">create new account</Link>
            </View>
        </View>
    );
};

export default admin;

