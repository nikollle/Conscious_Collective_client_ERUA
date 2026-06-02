import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { brands } from "../data/brands";
import { DEMO_BARCODES, products } from "../data/products";
import { useWardrobe } from "../context/WardrobeContext";

function getScoreColor(score: number) {
  if (score >= 7) return "#166534";
  if (score >= 4) return "#854d0e";
  return "#991b1b";
}

function getScoreLabel(score: number) {
  if (score >= 8.5) return "Excellent";
  if (score >= 7) return "Good";
  if (score >= 4) return "Average";
  if (score >= 2) return "Poor";
  return "Very Poor";
}

export default function EcoScore() {
  const { barcode: barcodeParam } = useLocalSearchParams();
  const barcode = Array.isArray(barcodeParam) ? barcodeParam[0] : barcodeParam;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const { addToWardrobe, isInWardrobe } = useWardrobe();

  const product = useMemo(() => {
    const found = products.find((p) => p.barcode === barcode);
    if (found) return found;
    const randomBarcode = DEMO_BARCODES[Math.floor(Math.random() * DEMO_BARCODES.length)];
    return products.find((p) => p.barcode === randomBarcode)!;
  }, [barcode]);
  const brand = brands.find((b) => b.id === product.brandId);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-greige items-center justify-center">
        <ActivityIndicator size="large" color="#271118" />
        <Text className="text-plum text-sm mt-4">Analysing product...</Text>
      </SafeAreaView>
    );
  }
  const scoreColor = getScoreColor(product.score);
  const brandScoreColor = brand ? getScoreColor(brand.score) : "#6E4148";
  const alreadySaved = isInWardrobe(product.barcode);

  const handleAddToWardrobe = async () => {
    await addToWardrobe({
      id: product.barcode,
      name: product.name,
      brand: product.brandName,
      country: brand?.country ?? "",
      score: product.score,
      co2: product.co2,
    });
    Alert.alert("Added!", `${product.name} was saved to your wardrobe.`, [
      { text: "View Wardrobe", onPress: () => router.replace("/(tabs)/wardrobe") },
      { text: "OK" },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color="#271118" />
        </TouchableOpacity>

        {/* Product name */}
        <Text
          style={{ fontFamily: "ManlineSlabs" }}
          className="text-oxblood text-2xl text-center"
        >
          {product.name}
        </Text>
        <Text className="text-plum text-sm text-center mt-1">
          by {product.brandName}
        </Text>

        {/* Score circle */}
        <View className="items-center mt-6 mb-6">
          <View
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              borderWidth: 6,
              borderColor: scoreColor,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{ color: scoreColor, fontSize: 42, fontWeight: "bold" }}
            >
              {product.score}
            </Text>
            <Text style={{ color: scoreColor, fontSize: 14 }}>
              {getScoreLabel(product.score)}
            </Text>
          </View>
        </View>

        {/* Impact metrics */}
        <View className="flex-row mb-6">
          <View className="flex-1 items-center">
            <Ionicons name="cloud-outline" size={24} color="#6E4148" />
            <Text className="text-oxblood text-lg font-bold mt-2">
              {product.co2} kg
            </Text>
            <Text className="text-plum text-xs mt-1">CO₂ footprint</Text>
          </View>
          <View style={{ width: 1, backgroundColor: "#ADA590" }} />
          <View className="flex-1 items-center">
            <Ionicons name="water-outline" size={24} color="#6E4148" />
            <Text className="text-oxblood text-lg font-bold mt-2">
              {product.water}L
            </Text>
            <Text className="text-plum text-xs mt-1">Water used</Text>
          </View>
          <View style={{ width: 1, backgroundColor: "#ADA590" }} />
          <View className="flex-1 items-center">
            <Ionicons
              name={
                product.recyclable
                  ? "checkmark-circle-outline"
                  : "close-circle-outline"
              }
              size={24}
              color={product.recyclable ? "#166534" : "#991b1b"}
            />
            <Text className="text-oxblood text-lg font-bold mt-2">
              {product.recyclable ? "Yes" : "No"}
            </Text>
            <Text className="text-plum text-xs mt-1">Recyclable</Text>
          </View>
        </View>

        {/* Certifications */}
        {(product.certifications.length > 0 || product.vegan) && (
          <View className="flex-row flex-wrap gap-3 mb-6 justify-center">
            {product.certifications.map((cert) => (
              <View key={cert} className="bg-oxblood px-4 py-2 rounded-full">
                <Text className="text-bone text-xs font-semibold">{cert}</Text>
              </View>
            ))}
            {product.vegan && (
              <View className="bg-oxblood px-4 py-2 rounded-full">
                <Text className="text-bone text-xs font-semibold">Vegan</Text>
              </View>
            )}
          </View>
        )}

        {/* Materials breakdown */}
        <Text
          style={{ fontFamily: "ManlineSlabs" }}
          className="text-oxblood text-lg mb-3"
        >
          Materials
        </Text>
        {product.materials.map((mat, i) => (
          <Card key={i} className="mb-3">
            <View className="flex-row items-center justify-between mb-1">
              <View className="flex-row items-center flex-1">
                <Ionicons
                  name={mat.isGood ? "checkmark-circle" : "alert-circle"}
                  size={20}
                  color={mat.isGood ? "#166534" : "#991b1b"}
                />
                <Text className="text-oxblood font-semibold ml-2">
                  {mat.name}
                </Text>
              </View>
              <Text className="text-plum text-sm">{mat.percentage}%</Text>
            </View>
            <Text className="text-plum text-sm mt-1">{mat.reason}</Text>
            <Text
              className={`text-xs mt-1 ${mat.recyclable ? "text-green-700" : "text-red-700"}`}
            >
              {mat.recyclable ? "♻️ Recyclable" : "✗ Not recyclable"}
            </Text>
          </Card>
        ))}

        {/* Brand section */}
        {brand && (
          <View className="mt-4">
            <Text
              style={{ fontFamily: "ManlineSlabs" }}
              className="text-oxblood text-lg mb-3"
            >
              Brand
            </Text>
            <View style={{ backgroundColor: "#271118", borderRadius: 16, overflow: "hidden" }}>
              {/* Header row */}
              <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
                {/* Initial avatar */}
                <View style={{
                  width: 52, height: 52, borderRadius: 26,
                  backgroundColor: brandScoreColor,
                  justifyContent: "center", alignItems: "center",
                  marginRight: 14,
                }}>
                  <Text style={{ fontFamily: "ManlineSlabs", color: "#EEEEEE", fontSize: 22 }}>
                    {brand.name[0]}
                  </Text>
                </View>
                {/* Name + country */}
                <View style={{ flex: 1 }}>
                  <Text style={{ fontFamily: "ManlineSlabs", color: "#EEEEEE", fontSize: 19 }}>
                    {brand.name}
                  </Text>
                  <Text style={{ color: "#ADA590", fontSize: 12, marginTop: 3 }}>
                    {brand.country}
                  </Text>
                </View>
                {/* Score badge */}
                <View style={{
                  backgroundColor: brandScoreColor,
                  borderRadius: 12,
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  alignItems: "center",
                  minWidth: 56,
                }}>
                  <Text style={{ color: "#EEEEEE", fontSize: 20, fontWeight: "bold" }}>
                    {brand.score}
                  </Text>
                  <Text style={{ color: "#EEEEEE", fontSize: 10, opacity: 0.8 }}>
                    / 10
                  </Text>
                </View>
              </View>
              {/* Tags + certifications */}
              <View style={{ borderTopWidth: 1, borderTopColor: "#3d1f28", paddingHorizontal: 20, paddingVertical: 16 }}>
                {brand.tags.length > 0 && (
                  <Text style={{ color: "#ADA590", fontSize: 12, lineHeight: 18 }}>
                    {brand.tags.join("  ·  ")}
                  </Text>
                )}
                {brand.certifications.length > 0 && (
                  <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                    {brand.certifications.map((cert) => (
                      <View
                        key={cert}
                        style={{
                          borderWidth: 1, borderColor: "#ADA590",
                          borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4,
                        }}
                      >
                        <Text style={{ color: "#EEEEEE", fontSize: 11 }}>{cert}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>
        )}

        {/* Add to wardrobe CTA */}
        <TouchableOpacity
          onPress={alreadySaved ? () => router.replace("/(tabs)/wardrobe") : handleAddToWardrobe}
          className="rounded-xl py-4 items-center mt-6"
          style={{ backgroundColor: alreadySaved ? "#ADA590" : "#271118" }}
        >
          <Text className="text-bone text-base font-semibold">
            {alreadySaved ? "Saved to Wardrobe" : "Add to Wardrobe"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
