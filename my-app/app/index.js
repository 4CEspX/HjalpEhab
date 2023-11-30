import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>This is the attandence checker</Text>
        
        <Link style={styles.link} href="/LoginScreen">Login</Link>
        <Link style={styles.link} href="/admin">admin</Link>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    textAlign: "center",
  },
  link: {
    fontSize: 24,
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
});
