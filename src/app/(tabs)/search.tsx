import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { Brand, brands } from "../../data/brands";

const filters = ["All", "Local", "Certified"] as const;
type Filter = (typeof filters)[number];

export default function Search() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = brands.filter((b) => {
    const matchesQuery = b.name.toLowerCase().includes(query.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Local" &&
        (b.category === "local" || b.category === "both")) ||
      (activeFilter === "Certified" &&
        (b.category === "certified" || b.category === "both"));
    return matchesQuery && matchesFilter;
  });

  const sorted = [...filtered].sort((a, b) => b.score - a.score);

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <FlatList
        data={sorted}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View>
            <Text className="text-plum text-xs uppercase tracking-widest">
              Discover
            </Text>
            <Text className="text-oxblood text-3xl mt-1 mb-4" style={{ fontFamily: "ManlineSlabs" }}>
              Brands
            </Text>

            <Input
              placeholder="Search eco brands..."
              value={query}
              onChangeText={setQuery}
            />

            <View className="flex-row gap-2 mb-4">
              {filters.map((f) => (
                <TouchableOpacity
                  key={f}
                  onPress={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full ${
                    activeFilter === f ? "bg-oxblood" : "border border-stone"
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      activeFilter === f ? "text-bone" : "text-plum"
                    }`}
                  >
                    {f}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text className="text-oxblood text-lg mb-3" style={{ fontFamily: "ManlineSlabs" }}>
              Top Rated
            </Text>
          </View>
        }
        renderItem={({ item }) => <BrandCard brand={item} />}
      />
    </SafeAreaView>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  const scoreColor =
    brand.score >= 85
      ? "text-green-700"
      : brand.score >= 70
        ? "text-yellow-700"
        : "text-red-700";

  return (
    <Card className="mb-3 flex-row items-center justify-between">
      <View className="flex-1">
        <Text className="text-oxblood text-base font-semibold">
          {brand.name}
        </Text>
        <Text className="text-plum text-xs mt-1">
          {brand.country} · {brand.tags.join(", ")}
        </Text>
        {brand.certifications.length > 0 && (
          <Text className="text-plum text-xs mt-1">
            {brand.certifications.join(" · ")}
          </Text>
        )}
      </View>
      <Text className={`text-2xl font-bold ${scoreColor}`}>{brand.score}</Text>
    </Card>
  );
}
