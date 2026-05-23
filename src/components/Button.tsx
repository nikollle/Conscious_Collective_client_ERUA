import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  title,
  onPress,
  variant = "primary",
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full py-4 rounded-xl items-center ${
        isPrimary ? "bg-oxblood" : "border border-stone bg-transparent"
      }`}
    >
      <Text
        className={`text-base font-semibold ${isPrimary ? "text-bone" : "text-oxblood"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
