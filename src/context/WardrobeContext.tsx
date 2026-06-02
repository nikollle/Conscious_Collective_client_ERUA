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

const DEFAULT_ITEMS: WardrobeItem[] = [
  { id: "5901234123457", name: "Organic Cotton T-Shirt", brand: "Patagonia", country: "USA", score: 9.1, co2: 2.1 },
  { id: "5901234123463", name: "Hemp Cargo Pants", brand: "Thought", country: "UK", score: 8.5, co2: 1.8 },
  { id: "5901234123460", name: "Linen Summer Dress", brand: "NAGO", country: "Poland", score: 8.8, co2: 1.4 },
];

export function WardrobeProvider({ children }: { children: React.ReactNode }) {
  const [wardrobeItems, setWardrobeItems] = useState<WardrobeItem[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("wardrobe").then((data) => {
      if (data) {
        setWardrobeItems(JSON.parse(data));
      } else {
        setWardrobeItems(DEFAULT_ITEMS);
      }
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
