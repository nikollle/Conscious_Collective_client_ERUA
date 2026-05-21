import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C4BFAC" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#271118", fontSize: 32, fontWeight: "600" }}>
          Hello Rea 🌿
        </Text>
      </View>
    </SafeAreaView>
  );
}
