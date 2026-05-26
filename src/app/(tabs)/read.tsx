import { FlatList, Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import { articles } from "../../data/articles";

export default function Read() {
  const featured = articles.find((a) => a.featured);
  const latest = articles.filter((a) => !a.featured);

  return (
    <SafeAreaView className="flex-1 bg-greige">
      <FlatList
        data={latest}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View>
            <Text className="text-plum text-xs uppercase tracking-widest">
              {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
            </Text>
            <Text className="text-oxblood text-3xl font-bold mt-1 mb-4">Read</Text>

            {featured && (
              <TouchableOpacity onPress={() => Linking.openURL(featured.url)}>
                <View className="mb-4 rounded-xl overflow-hidden">
                  <Image source={{ uri: featured.image }} className="w-full h-44" resizeMode="cover" />
                  <View className="bg-oxblood p-4">
                    <Text className="text-bone text-xs uppercase">
                      Featured · {featured.readTime}
                    </Text>
                    <Text className="text-bone text-xl font-bold mt-2">
                      {featured.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}

            <Text className="text-oxblood text-lg font-semibold mb-3">Latest</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Card className="mb-3 flex-row overflow-hidden">
              <Image source={{ uri: item.image }} className="w-20 h-20 rounded-lg" resizeMode="cover" />
              <View className="flex-1 ml-3">
                <Text className="text-plum text-xs uppercase">{item.category}</Text>
                <Text className="text-oxblood text-base font-semibold mt-1">{item.title}</Text>
                <Text className="text-plum text-sm mt-1">{item.summary}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}