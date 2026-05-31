import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../../global.css";
import { AuthProvider } from "../context/AuthContext";
import { WardrobeProvider } from "../context/WardrobeContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ManlineSlabs: require("../../assets/fonts/ManlineSlabs-xRWVj.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <WardrobeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="sign-up" />
          <Stack.Screen name="log-in" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="eco-score" />
          <Stack.Screen name="edit-profile" />
          <Stack.Screen name="notifications" />
          <Stack.Screen name="privacy" />
        </Stack>
      </WardrobeProvider>
    </AuthProvider>
  );
}
