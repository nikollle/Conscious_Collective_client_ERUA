import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-greige">
      <View className="flex-1 items-center justify-center">
        <Text className="text-oxblood text-3xl font-semibold">
          Hello Rea 🌿
        </Text>
        <Text className="text-plum text-sm mt-2">Palette is working</Text>
      </View>
    </SafeAreaView>
  );
}
