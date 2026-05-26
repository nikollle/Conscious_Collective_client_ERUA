import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { articles } from "../../data/articles";

export default function ArticleDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <SafeAreaView className="flex-1 bg-greige items-center justify-center">
        <Text className="text-plum">Article not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color="#271118" />
        </TouchableOpacity>

        <Text className="text-plum text-xs uppercase tracking-widest">
          {article.category} · {article.readTime}
        </Text>
        <Text className="text-oxblood text-3xl font-bold mt-2 mb-4">
          {article.title}
        </Text>
        <Text className="text-plum text-base leading-6">
          {article.summary}
          {"\n\n"}
          This is placeholder body text for the article. In the final version, this will contain the full article content pulled from the backend API.
          {"\n\n"}
          Sustainable fashion isn't just a trend — it's a necessity. Every purchase decision impacts water usage, carbon emissions, and the livelihoods of garment workers worldwide.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}