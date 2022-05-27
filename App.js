import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Pressed Successfully");

  /*const alertMessage = () =>
    Alert.alert("", "Do you want to go on a date with me?", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") }
    ]);*/

  const zyzzMessage = () =>
    Alert.alert("", "ARE YOU FKING MIRIN BRAH?", [
      {
        text: "IM FKING ZYZZ BRAH",
        onPress: () => console.log("Opinion accepted"),
      },
      {
        text: "WTF IS THIS SHIT KUNT",
        onPress: () => console.log("Opinion rejected"),
      },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello there</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require("./assets/zyzz.jpg")} />
      </TouchableOpacity>
      <Button title="Click here to be a sick kunt" onPress={zyzzMessage} />
      <StatusBar style="auto" />
      <View 
        style={{
          backgroundColor :'dark grey',
          width: 100,
          height:300,
          flex : 1,
          flexDirection: 'row-reverse',
          justifyContent: 'center'
        }}/>
    </SafeAreaView>
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
