import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, styles.closeIcon]}>
        <MaterialCommunityIcons
          name="close"
          color={colors.white}
          size={35}
        ></MaterialCommunityIcons>
      </View>
      <View style={[styles.icon, styles.deleteIcon]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        ></MaterialCommunityIcons>
      </View>
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
  },
  deleteIcon: {
    right: 30,
  },
  icon: {
    position: "absolute",
    top: 45,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
