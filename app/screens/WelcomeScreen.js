import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagLine}> Sell what you need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonComponent title="Login"></ButtonComponent>
        <ButtonComponent
          title="Register"
          backgroundColor="secondary"
        ></ButtonComponent>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

// Test
export default WelcomeScreen;
