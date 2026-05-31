import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export type WardrobeItem = {
  id: string;
  name: string;
  brand: string;
  country: string;
  score: number;
  co2: number;
};

type WardrobeContextType = {
  wardrobeItems: WardrobeItem[];
  addToWardrobe: (item: WardrobeItem) => Promise<void>;
  removeFromWardrobe: (id: string) => Promise<void>;
  clearWardrobe: () => Promise<void>;
  isInWardrobe: (id: string) => boolean;
};

const WardrobeContext = createContext<WardrobeContextType>({
  wardrobeItems: [],
  addToWardrobe: async () => {},
  removeFromWardrobe: async () => {},
  clearWardrobe: async () => {},
  isInWardrobe: () => false,
});

export function WardrobeProvider({ children }: { children: React.ReactNode }) {
  const [wardrobeItems, setWardrobeItems] = useState<WardrobeItem[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("wardrobe").then((data) => {
      if (data) setWardrobeItems(JSON.parse(data));
    });
  }, []);

  const save = async (items: WardrobeItem[]) => {
    setWardrobeItems(items);
    await AsyncStorage.setItem("wardrobe", JSON.stringify(items));
  };

  const addToWardrobe = async (item: WardrobeItem) => {
    await save([...wardrobeItems.filter((i) => i.id !== item.id), item]);
  };

  const removeFromWardrobe = async (id: string) => {
    await save(wardrobeItems.filter((i) => i.id !== id));
  };

  const clearWardrobe = async () => {
    await save([]);
  };

  const isInWardrobe = (id: string) =>
    wardrobeItems.some((i) => i.id === id);

  return (
    <WardrobeContext.Provider
      value={{ wardrobeItems, addToWardrobe, removeFromWardrobe, clearWardrobe, isInWardrobe }}
    >
      {children}
    </WardrobeContext.Provider>
  );
}

export function useWardrobe() {
  return useContext(WardrobeContext);
}
