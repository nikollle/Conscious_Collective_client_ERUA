import { ReactNode } from "react";
import { View } from "react-native";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <View
      className={`bg-chalk border border-stone rounded-xl p-4 ${className}`}
    >
      {children}
    </View>
  );
}
