import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import { useWardrobe } from "../../context/WardrobeContext";

function getScoreColor(score: number) {
  if (score >= 7) return "#166534";
  if (score >= 4) return "#854d0e";
  return "#991b1b";
}

export default function Wardrobe() {
  const router = useRouter();
  const { wardrobeItems, removeFromWardrobe } = useWardrobe();

  const totalCO2 = wardrobeItems.reduce((sum, i) => sum + i.co2, 0);
  const isEmpty = wardrobeItems.length === 0;

  return (
    <SafeAreaView className="flex-1 bg-greige">
      {isEmpty ? (
        <View className="flex-1 items-center justify-center px-8">
          <Ionicons name="shirt-outline" size={48} color="#6E4148" />
          <Text
            style={{ fontFamily: "ManlineSlabs" }}
            className="text-oxblood text-2xl text-center mt-4"
          >
            Your wardrobe is empty
          </Text>
          <Text className="text-plum text-sm text-center mt-2">
            Start scanning clothing tags to build your conscious wardrobe
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/scan")}
            className="bg-oxblood rounded-xl py-4 px-8 mt-6"
          >
            <Text className="text-bone text-base font-semibold">
              Start scanning
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={wardrobeItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20 }}
          ListHeaderComponent={
            <View>
              <Text className="text-plum text-xs uppercase tracking-widest">
                My
              </Text>
              <Text
                style={{ fontFamily: "ManlineSlabs" }}
                className="text-oxblood text-3xl mt-1 mb-4"
              >
                Wardrobe
              </Text>

              <View className="bg-oxblood rounded-xl p-5 mb-6">
                <Text className="text-bone text-xs uppercase tracking-widest mb-3">
                  Your Impact
                </Text>
                <View className="flex-row">
                  <View className="flex-1 items-center">
                    <Ionicons name="cloud-outline" size={24} color="#EEEEEE" />
                    <Text className="text-bone text-2xl font-bold mt-1">
                      {totalCO2.toFixed(1)} kg
                    </Text>
                    <Text className="text-bone text-xs mt-1 opacity-70">
                      CO₂ footprint
                    </Text>
                  </View>
                  <View style={{ width: 1, backgroundColor: "#6E4148" }} />
                  <View className="flex-1 items-center">
                    <Ionicons name="shirt-outline" size={24} color="#EEEEEE" />
                    <Text className="text-bone text-2xl font-bold mt-1">
                      {wardrobeItems.length}
                    </Text>
                    <Text className="text-bone text-xs mt-1 opacity-70">
                      items tracked
                    </Text>
                  </View>
                </View>
              </View>

              <Text
                style={{ fontFamily: "ManlineSlabs" }}
                className="text-oxblood text-lg mb-3"
              >
                Saved Items
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            const scoreColor = getScoreColor(item.score);
            return (
              <Card className="mb-3 flex-row items-center justify-between">
                <View className="flex-1 mr-4">
                  <Text
                    style={{ fontFamily: "ManlineSlabs" }}
                    className="text-oxblood text-base"
                  >
                    {item.name}
                  </Text>
                  <Text className="text-plum text-xs mt-1">
                    {item.brand} · {item.country}
                  </Text>
                </View>
                <View className="flex-row items-center gap-3">
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      borderWidth: 3,
                      borderColor: scoreColor,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: scoreColor,
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {item.score}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => removeFromWardrobe(item.id)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons name="trash-outline" size={18} color="#ADA590" />
                  </TouchableOpacity>
                </View>
              </Card>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}
