import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";

const ITEMS = [
  { key: "scanReminders", label: "Scan reminders" },
  { key: "newArticles", label: "New articles" },
  { key: "scoreUpdates", label: "Score updates" },
  { key: "wardrobeTips", label: "Wardrobe tips" },
] as const;

type Key = (typeof ITEMS)[number]["key"];

const DEFAULTS: Record<Key, boolean> = {
  scanReminders: true,
  newArticles: true,
  scoreUpdates: false,
  wardrobeTips: true,
};

function PillToggle({ value, onToggle }: { value: boolean; onToggle: () => void }) {
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handlePress = () => {
    Animated.spring(anim, {
      toValue: value ? 0 : 1,
      useNativeDriver: false,
      bounciness: 4,
    }).start();
    onToggle();
  };

  const translateX = anim.interpolate({ inputRange: [0, 1], outputRange: [2, 22] });
  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ADA590", "#271118"],
  });

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={{ width: 48, height: 28, borderRadius: 14, backgroundColor: bgColor, justifyContent: "center" }}
      >
        <Animated.View
          style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: "#EEEEEE", transform: [{ translateX }] }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

function ToggleRow({ label, value, onToggle }: { label: string; value: boolean; onToggle: () => void }) {
  return (
    <View className="flex-row items-center justify-between py-3">
      <Text className="text-oxblood text-base">{label}</Text>
      <PillToggle value={value} onToggle={onToggle} />
    </View>
  );
}

export default function Notifications() {
  const router = useRouter();
  const [toggles, setToggles] = useState<Record<Key, boolean>>(DEFAULTS);

  useEffect(() => {
    AsyncStorage.getItem("notificationPrefs").then((data) => {
      if (data) setToggles(JSON.parse(data));
    });
  }, []);

  const flip = (key: Key) => {
    const next = { ...toggles, [key]: !toggles[key] };
    setToggles(next);
    AsyncStorage.setItem("notificationPrefs", JSON.stringify(next));
  };

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-6"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="arrow-back" size={22} color="#271118" />
        </TouchableOpacity>

        <Text className="text-plum text-xs uppercase tracking-widest">My</Text>
        <Text style={{ fontFamily: "ManlineSlabs" }} className="text-oxblood text-3xl mt-1">
          Notifications
        </Text>
        <View style={{ height: 1, backgroundColor: "#271118", marginTop: 8, marginBottom: 28, opacity: 0.3 }} />

        <Card>
          {ITEMS.map((item, i) => (
            <View key={item.key}>
              <ToggleRow
                label={item.label}
                value={toggles[item.key]}
                onToggle={() => flip(item.key)}
              />
              {i < ITEMS.length - 1 && (
                <View style={{ height: 1, backgroundColor: "#ADA590", opacity: 0.4 }} />
              )}
            </View>
          ))}
        </Card>
      </View>
    </SafeAreaView>
  );
}
