import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the fucking Weather!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 50,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    fontSize: 30,
    color: "#2c2c2c",
  },
});
