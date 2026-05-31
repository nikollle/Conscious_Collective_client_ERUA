import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { brands } from "../data/brands";
import { products } from "../data/products";
import { useWardrobe } from "../context/WardrobeContext";

function getScoreColor(score: number) {
  if (score >= 70) return "#166534";
  if (score >= 40) return "#854d0e";
  return "#991b1b";
}

function getScoreLabel(score: number) {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 40) return "Average";
  if (score >= 20) return "Poor";
  return "Very Poor";
}

export default function EcoScore() {
  const { barcode: barcodeParam } = useLocalSearchParams();
  const barcode = Array.isArray(barcodeParam) ? barcodeParam[0] : barcodeParam;
  const router = useRouter();

  const { addToWardrobe, isInWardrobe } = useWardrobe();

  const product = products.find((p) => p.barcode === barcode) || products[0];
  const brand = brands.find((b) => b.id === product.brandId);
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

        {/* Brand card */}
        {brand && (
          <View className="mt-4">
            <Text
              style={{ fontFamily: "ManlineSlabs" }}
              className="text-oxblood text-lg mb-3"
            >
              Brand
            </Text>
            <Card className="flex-row items-center justify-between">
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
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderWidth: 3,
                  borderColor: brandScoreColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: brandScoreColor,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {brand.score}
                </Text>
              </View>
            </Card>
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
