import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, styles.closeIcon]}></View>
      <View style={[styles.icon, styles.deleteIcon]}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    left: 30,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    right: 30,
    backgroundColor: colors.secondary,
  },
  icon: {
    position: "absolute",
    top: 40,
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
