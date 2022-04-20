import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
    </View>
  );
}

const styles = StyleSheet.create({});
