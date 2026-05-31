import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

export default function EditProfile() {
  const router = useRouter();
  const { userName, userEmail, userInitials, userAvatar, updateProfile } = useAuth();
  const [avatar, setAvatar] = useState<string | null>(userAvatar);
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-6"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="arrow-back" size={22} color="#271118" />
        </TouchableOpacity>

        <Text className="text-plum text-xs uppercase tracking-widest">My</Text>
        <Text
          style={{ fontFamily: "ManlineSlabs" }}
          className="text-oxblood text-3xl mt-1"
        >
          Edit Profile
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#271118",
            marginTop: 8,
            marginBottom: 28,
            opacity: 0.3,
          }}
        />

        {/* Avatar picker */}
        <View className="items-center mb-8">
          <TouchableOpacity onPress={pickImage} className="relative">
            {avatar ? (
              <Image
                source={{ uri: avatar }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <View
                style={{ width: 100, height: 100, borderRadius: 50 }}
                className="bg-oxblood items-center justify-center"
              >
                <Text className="text-bone font-bold" style={{ fontSize: 36 }}>
                  {userInitials}
                </Text>
              </View>
            )}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "#DAD5C2",
                borderRadius: 12,
                padding: 4,
                borderWidth: 1,
                borderColor: "#ADA590",
              }}
            >
              <Ionicons name="camera-outline" size={16} color="#271118" />
            </View>
          </TouchableOpacity>
          <Text className="text-plum text-xs mt-3">Tap to change photo</Text>
        </View>

        {/* Inputs */}
        <Input
          label="Name"
          placeholder="Your name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <Input
          label="Email"
          placeholder="your@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View className="mt-4">
          <Button
            title="Save Changes"
            onPress={async () => {
              await updateProfile(name, email, avatar);
              router.back();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
