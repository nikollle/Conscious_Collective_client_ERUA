import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

export default function LogIn() {
  const router = useRouter();
  const { login, continueAsGuest } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    const err = await login(email.trim(), password);
    setLoading(false);
    if (err) {
      setError(err);
    } else {
      router.replace("/(tabs)/read");
    }
  };

  const handleGuest = () => {
    continueAsGuest();
    router.replace("/(tabs)/read");
  };

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <KeyboardAvoidingView behavior="height" className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          className="px-8"
        >
          <Text
            className="text-oxblood text-3xl text-center mb-8"
            style={{ fontFamily: "ManlineSlabs" }}
          >
            Welcome back!
          </Text>

          <Input
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={(t) => {
              setEmail(t);
              setError(null);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View>
            <Input
              label="Password"
              placeholder="Your password"
              value={password}
              onChangeText={(t) => {
                setPassword(t);
                setError(null);
              }}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-3"
              style={{ top: 32 }}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#6E4148"
              />
            </TouchableOpacity>
          </View>

          <Text
            className="text-plum text-xs text-right mb-4 mt-1"
            onPress={() =>
              Alert.alert("Reset Password", "Enter your email and we'll send a reset link.", [
                { text: "Cancel", style: "cancel" },
                { text: "Send", onPress: () => {} },
              ])
            }
          >
            Forgot password?
          </Text>

          {error && (
            <View className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
              <Text className="text-red-700 text-sm">{error}</Text>
            </View>
          )}

          <Button
            title={loading ? "Logging in…" : "Log in"}
            onPress={handleLogin}
          />

          <Text
            onPress={() => router.push("/sign-up")}
            className="text-plum text-sm text-center mt-4"
          >
            Don't have an account? <Text className="underline">Sign up</Text>
          </Text>

          <View className="flex-row items-center my-5">
            <View
              className="flex-1"
              style={{ height: 1, backgroundColor: "#ADA590" }}
            />
            <Text className="text-plum text-xs mx-3">or</Text>
            <View
              className="flex-1"
              style={{ height: 1, backgroundColor: "#ADA590" }}
            />
          </View>

          <TouchableOpacity
            onPress={handleGuest}
            className="border border-stone rounded-xl py-4 items-center"
          >
            <Text className="text-oxblood text-base">Continue as guest</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
