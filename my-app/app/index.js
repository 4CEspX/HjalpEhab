import { Image, StyleSheet, Text, View,} from "react-native";
import { Link } from "expo-router";
export default function Page() {
  return (

  


    <View style={styles.container}>
      <Image source={require('../assets/ehabify.png')}/>
        <Text style={styles.title}>Welcome!</Text>
        {/* <Text style={styles.subtitle}>This is the attandence checker</Text> */}
      
        <View style={styles.main}>
        <Link style={styles.link} href="/LoginScreen">Login</Link>
        {/* z */}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    aspectRatio: 1,
    borderRadius: 10,
    padding: 0,
    backgroundColor: "#f0f0f0",
    flex: 0.5,
    justifyContent: "center",
    maxWidth: 960,
    //marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    color: "#b1068c",
     
  },
  title2: {
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
    color: "#b1068c",
    paddingBottom: 48,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    textAlign: "center",
  },
  link: {
    
    fontSize: 36,
    color: "#0070f3",
    textAlign: "center",
    padding: 4,
  },
  input: {
    fontSize: 24,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginVertical: 16,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  checkboxLabel: {
    fontSize: 24,
    margin: 8,
  },
  error: {
    textAlign: "center",
}

});
