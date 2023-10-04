import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LogLevel, OneSignal } from "react-native-onesignal";

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize("18b2f697-c496-4cf4-bf00-1085bf562bc5");

// Also need enable notifications to complete OneSignal setup
OneSignal.Notifications.requestPermission(true);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from MyOneSignal App</Text>
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
