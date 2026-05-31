import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";
import { useWardrobe } from "../../context/WardrobeContext";

type MenuRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
};

function MenuRow({ icon, label, onPress }: MenuRowProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center py-4"
      hitSlop={{ top: 4, bottom: 4 }}
    >
      <Ionicons name={icon} size={20} color="#6E4148" />
      <Text className="text-oxblood text-base ml-3 flex-1">{label}</Text>
      <Ionicons name="chevron-forward" size={18} color="#ADA590" />
    </TouchableOpacity>
  );
}

function Divider() {
  return (
    <View style={{ height: 1, backgroundColor: "#ADA590", opacity: 0.35 }} />
  );
}

export default function Profile() {
  const router = useRouter();
  const { userName, userEmail, userInitials, userAvatar, isGuest, logout } =
    useAuth();
  const { clearWardrobe } = useWardrobe();

  const displayName = isGuest ? "Guest" : userName || "User";
  const displayEmail = isGuest ? "Browsing as guest" : userEmail;
  const displayInitials = isGuest ? "G" : userInitials || "U";

  const handleLogout = async () => {
    await clearWardrobe();
    await logout();
    router.replace("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <View style={{ padding: 20 }}>
        <Text className="text-plum text-xs uppercase tracking-widest">My</Text>
        <Text
          style={{ fontFamily: "ManlineSlabs" }}
          className="text-oxblood text-3xl mt-1"
        >
          Profile
        </Text>
        <View style={{ marginTop: 8, marginBottom: 28 }} />

        {/* Avatar + info */}
        <View className="items-center mb-8">
          {userAvatar ? (
            <Image
              source={{ uri: userAvatar }}
              style={{ width: 88, height: 88, borderRadius: 44 }}
            />
          ) : (
            <View
              style={{ width: 88, height: 88, borderRadius: 44 }}
              className="bg-oxblood items-center justify-center"
            >
              <Text className="text-bone font-bold" style={{ fontSize: 32 }}>
                {displayInitials}
              </Text>
            </View>
          )}
          <Text
            style={{ fontFamily: "ManlineSlabs" }}
            className="text-oxblood text-xl mt-3"
          >
            {displayName}
          </Text>
          <Text className="text-plum text-sm mt-1">{displayEmail}</Text>
        </View>

        {/* Menu */}
        {!isGuest && (
          <View
            style={{
              backgroundColor: "#DAD5C2",
              borderRadius: 16,
              paddingHorizontal: 16,
              marginBottom: 16,
            }}
          >
            <MenuRow
              icon="person-outline"
              label="Edit Profile"
              onPress={() => router.push("/edit-profile")}
            />
            <Divider />
            <MenuRow
              icon="notifications-outline"
              label="Notifications"
              onPress={() => router.push("/notifications")}
            />
            <Divider />
            <MenuRow
              icon="lock-closed-outline"
              label="Privacy"
              onPress={() => router.push("/privacy")}
            />
          </View>
        )}

        {/* Logout */}
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#DAD5C2",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="log-out-outline" size={20} color="#991b1b" />
          <Text style={{ color: "#991b1b" }} className="text-base ml-3">
            {isGuest ? "Sign In" : "Log Out"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
