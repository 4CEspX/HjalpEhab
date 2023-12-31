import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { styles } from "./index";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Pre-step, call this before any NFC operations
NfcManager.start();

function Scanner() {
  const [isPressed, setIsPressed] = useState(false);
  const [info, setInfo] = useState(null);
const [error, setError] = useState('');

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  async function readNdef() {
    try {
      // Check if user is logged in
      // if (!isLoggedIn) {
      //   console.log("User is not logged in");
      //   return;
      // }

      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      setInfo(tag);

console.log(info);

      const TagData = {
       tag_id: info
        
      };

      console.warn("Welcome!", tag.id);

      const response = await fetch("http://192.168.220.50:3000/api/users-lectures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(TagData),
      });

      if (response.ok) {
        console.log("Fetch request was successful");
        const text = await response.text();
        console.log(text);
      setError("welcome to class");
      }

      if (response.status !== 200) {
        console.error("Error status:", response.status);
        const text = await response.text();
        console.log("Error text:", text);
        setError("you are not in this class");
      } else {
        const text = await response.text();
        console.log(text);

        try {
          const data = JSON.parse(text);
          console.log(data);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }

      console.warn("Tag found", tag, TagData);
    } catch (ex) {
      console.warn("Oops!", ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title2}>Scan a Tag</Text>

      <TouchableOpacity
        style={[Butt.wrapper, isPressed ? Butt.pressed : null]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={readNdef}
      >
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{error}</Text> 

      {/* {(info && info.id) === classID ? (
        <View>
          <Text>welcome to class :{classID}</Text>
        </View>
      ) : (
        <View>
          <Text>ID:{info && info.id}</Text>
        </View>
      )} */}
    </View>
  );
}

const Butt = StyleSheet.create({
  wrapper: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000000",
    marginBottom: 20,
  },
  pressed: {
    backgroundColor: "#47315a",
    opacity: 0.5,
  },
});

export default Scanner;
