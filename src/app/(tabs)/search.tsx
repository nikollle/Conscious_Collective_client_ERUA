import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  return (
    <SafeAreaView className="flex-1 bg-greige">
      <View className="flex-1 items-center justify-center">
        <Text className="text-oxblood text-2xl font-bold">Search</Text>
        <Text className="text-plum text-sm mt-2">Search coming soon</Text>
      </View>
    </SafeAreaView>
  );
}
