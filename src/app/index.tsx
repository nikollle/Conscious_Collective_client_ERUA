import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const logoGlow = require("../app/logo-tr.png");

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-greige">
      <View className="flex-1 items-center px-8 pt-24">
        <Image
          source={logoGlow}
          style={{
            width: 1000,
            height: 1000,
            marginTop: -380,
            marginBottom: -380,
          }}
          resizeMode="contain"
        ></Image>
        <Text className="text-plum text-sm tracking-widest uppercase">
          EST.2026
        </Text>
        <Text className="text-oxblood text-3xl font-bold text-center my-2">
          Conscious Collective
        </Text>
        <Text className="text-plum text-base text-center mt-2">
          Scan , learn , dress better
        </Text>
        <View className="w-full mt-8 gap-3 px-5">
          <Button title="Sign up" onPress={() => router.push("/sign-up")} />
          <Button
            title="Login"
            onPress={() => router.push("/log-in")}
            variant="secondary"
          ></Button>
        </View>
        <Text
          onPress={() => router.push("/(tabs)/read")}
          className="text-plum underline text-sm mt-4"
        >
          Continue as guest
        </Text> 
      </View>
    </SafeAreaView>
  );
}
