import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

const logoGlow = require("../../assets/logo-tr.png");

export default function Home() {
  const router = useRouter();
  const { isLoading, isLoggedIn, isGuest, continueAsGuest } = useAuth();

  useEffect(() => {
    if (!isLoading && (isLoggedIn || isGuest)) {
      router.replace("/(tabs)/read");
    }
  }, [isLoading, isLoggedIn, isGuest]);

  if (isLoading) return null;

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
        />
        <Text className="text-plum text-sm tracking-widest uppercase">
          EST.2026
        </Text>
        <Text
          className="text-oxblood text-3xl text-center my-2"
          style={{ fontFamily: "ManlineSlabs" }}
        >
          Conscious Collective
        </Text>
        <Text className="text-plum text-base text-center mt-2">
          Scan, learn, dress better
        </Text>
        <View className="w-full mt-8 gap-3 px-5">
          <Button title="Sign up" onPress={() => router.push("/sign-up")} />
          <Button
            title="Login"
            onPress={() => router.push("/log-in")}
            variant="secondary"
          />
        </View>
        <Text
          onPress={() => continueAsGuest().then(() => router.replace("/(tabs)/read"))}
          className="text-plum underline text-sm mt-4"
        >
          Continue as guest
        </Text>
      </View>
    </SafeAreaView>
  );
}
