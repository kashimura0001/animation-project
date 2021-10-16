import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FadeInView } from "./src/components/FadeInView";

export default function App() {
  return (
    <View style={styles.container}>
      <FadeInView
        style={{ height: 50, width: 300, backgroundColor: "powderblue" }}
      >
        <Text style={{ textAlign: "center" }}>App.tsx</Text>
      </FadeInView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
