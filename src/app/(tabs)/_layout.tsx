import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#271118",
        tabBarInactiveTintColor: "#6E4148",
        tabBarStyle: { backgroundColor: "#DAD5C2" },
      }}
    >
      <Tabs.Screen
        name="read"
        options={{
          title: "Read",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ size }) => (
            <Ionicons name="scan-outline" size={size} color="#EEEEEE" />
          ),
          tabBarStyle: { backgroundColor: "#DAD5C2" },
          tabBarItemStyle: {
            backgroundColor: "#271118",
            borderRadius: 999,
            width: 56,
            height: 56,
            marginTop: -20,
            alignSelf: "center",
            justifyContent: "center",
            paddingTop: 8,
          },
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: "Wardrobe",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shirt-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
