import { KeyboardTypeOptions, Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps["autoCapitalize"];
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  label,
  keyboardType,
  autoCapitalize,
}: InputProps) {
  return (
    <View className="w-full mb-3">
      {label && <Text className="text-plum text-sm mb-1">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#6E4148"
        className="w-full bg-chalk border border-stone rounded-xl px-4 py-3 text-oxblood"
      />
    </View>
  );
}
