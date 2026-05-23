import { Text, TextInput, View } from "react-native";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  label?: string;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  label,
}: InputProps) {
  return (
    <View className="w-full mb-3">
      {label && <Text className="text-plum text-sm mb-1">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#6E4148"
        className="w-full bg-chalk border border-stone rounded-xl px-4 py-3 text-oxblood"
      />
    </View>
  );
}
