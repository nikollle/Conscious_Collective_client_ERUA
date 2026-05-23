import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-greige">
      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-oxblood text-3xl font-semibold">
          Hello Rea 🌿
        </Text>
        <Text className="text-plum text-sm mt-2">Palette is working</Text>
        <View className="w-full mt-6">
          <Button title="Test Button" onPress={() => console.log("works")} />
          <Button
            title="Secondary Test"
            onPress={() => console.log("secondary")}
            variant="secondary"
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            value=""
            onChangeText={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
