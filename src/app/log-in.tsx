import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
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

export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <KeyboardAvoidingView behavior="height" className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          className="px-8"
        >
          <Text className="text-oxblood text-3xl font-bold text-center mb-8">
            Welcome back
          </Text>

          <Input
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
          />

          <View>
            <Input
              label="Password"
              placeholder="Your password"
              value={password}
              onChangeText={setPassword}
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

          <Text className="text-plum text-xs text-right mb-4 mt-1">
            Forgot password?
          </Text>

          <Button
            title="Log in"
            onPress={() => router.replace("/(tabs)/read")}
          />

          <Text
            onPress={() => router.push("/sign-up")}
            className="text-plum text-sm text-center mt-4"
          >
            Don't have an account? <Text className="underline">Sign up</Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
