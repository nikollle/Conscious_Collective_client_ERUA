import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      className={`w-full py-4 rounded-xl items-center ${
        isPrimary ? "bg-oxblood" : "border border-stone bg-transparent"
      } ${isDisabled ? "opacity-60" : ""}`}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        {loading && (
          <ActivityIndicator size="small" color={isPrimary ? "#EEEEEE" : "#271118"} />
        )}
        <Text
          className={`text-base font-semibold ${isPrimary ? "text-bone" : "text-oxblood"}`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
