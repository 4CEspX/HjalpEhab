import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

// Pre-step, call this before any NFC operations
NfcManager.start();

function Scanner() {
  const [isPressed, setIsPressed] = useState(false);
  const [info, setInfo] = useState(null);

  const classID = "2997B6E4";

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      setInfo(tag);
     
      
      const TagData = {
        name: "test",
        klass: "TE5",
      
      };

      if (tag.id === classID) {
      
        console.warn("Welcome!", tag.name);

        const response = await fetch("http://192.168.220.50:3000/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(TagData)
});
if (response.ok) {
  console.log("Fetch request was successful");
  const text = await response.text();
  console.log(text);
}

if (response.status !== 200) {
  console.error("Error status:", response.status);
  const text = await response.text();
  console.log("Error text:", text);

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
      <TouchableOpacity
        style={[Butt.wrapper, isPressed ? Butt.pressed : null]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={readNdef}
      >
        <Text>Scan a Tag</Text>
      </TouchableOpacity>

      {(info && info.id) === classID ? (
        <View>
          <Text>welcome to class :{classID}</Text>
        </View>
      ) : (
        <View>
          <Text>ID:{info && info.id}</Text>
        </View>
      )}
    </View>
  );
}
const Butt = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#000000",
    marginBottom: 20,
  },
  pressed: {
    backgroundColor: "#301934",

    opacity: 0.5,
  },
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default Scanner;
