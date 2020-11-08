import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "./components/Card";
import { SearchBarTest } from "./components/SearchBarTest";
import { Test } from "./components/Test";
import { Navigation } from "react-native-navigation";

Navigation.registerComponent("com.testProject.WelcomeScreen", () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "com.testProject.WelcomeScreen",
            },
          },
        ],
      },
    },
  });
});

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Card />
        <Test text="This is my first typescript component" />
        <StatusBar style="auto" />
      </View> */}
      <View>
        <SearchBarTest />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
});
