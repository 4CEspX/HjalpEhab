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
      if (tag.id == classID) {
        console.warn("Welcome!", tag.id);
      }
      console.warn("Tag found", tag);
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
