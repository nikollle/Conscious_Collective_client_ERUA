import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ManlineSlabs: require("../../assets/fonts/ManlineSlabs-xRWVj.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="log-in" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
