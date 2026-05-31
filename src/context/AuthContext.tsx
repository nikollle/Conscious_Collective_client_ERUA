import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLoading: boolean;
  isGuest: boolean;
  isLoggedIn: boolean;
  userName: string;
  userEmail: string;
  userInitials: string;
  userAvatar: string | null;
  signUp: (name: string, email: string, password: string) => Promise<string | null>;
  login: (email: string, password: string) => Promise<string | null>;
  continueAsGuest: () => Promise<void>;
  loginAsUser: (name: string, email: string) => Promise<void>;
  updateProfile: (name: string, email: string, avatar: string | null) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isLoading: true,
  isGuest: false,
  isLoggedIn: false,
  userName: "",
  userEmail: "",
  userInitials: "",
  userAvatar: null,
  signUp: async () => null,
  login: async () => null,
  continueAsGuest: async () => {},
  loginAsUser: async () => {},
  updateProfile: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);

  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  useEffect(() => {
    AsyncStorage.multiGet(["authState", "userName", "userEmail", "userAvatar"]).then(
      (vals) => {
        const state = vals[0][1];
        const name = vals[1][1] || "";
        const email = vals[2][1] || "";
        const avatar = vals[3][1] || null;
        if (state === "guest") setIsGuest(true);
        if (state === "loggedIn") {
          setIsLoggedIn(true);
          setUserName(name);
          setUserEmail(email);
          setUserAvatar(avatar);
        }
        setIsLoading(false);
      },
    );
  }, []);

  const signUp = async (
    name: string,
    email: string,
    password: string,
  ): Promise<string | null> => {
    if (!name) return "Please enter your name";
    if (!email.includes("@")) return "Please enter a valid email";
    if (password.length < 8) return "Password must be at least 8 characters";
    await AsyncStorage.multiSet([
      ["authState", "loggedIn"],
      ["userName", name],
      ["userEmail", email],
    ]);
    setIsLoggedIn(true);
    setIsGuest(false);
    setUserName(name);
    setUserEmail(email);
    return null;
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<string | null> => {
    if (!email.includes("@")) return "Please enter a valid email";
    if (!password) return "Please enter your password";
    const stored = await AsyncStorage.multiGet(["userName", "userAvatar"]);
    const name = stored[0][1] || email.split("@")[0];
    const avatar = stored[1][1] || null;
    await AsyncStorage.multiSet([
      ["authState", "loggedIn"],
      ["userName", name],
      ["userEmail", email],
    ]);
    setIsLoggedIn(true);
    setIsGuest(false);
    setUserName(name);
    setUserEmail(email);
    setUserAvatar(avatar);
    return null;
  };

  const continueAsGuest = async () => {
    await AsyncStorage.setItem("authState", "guest");
    setIsGuest(true);
    setIsLoggedIn(false);
  };

  const loginAsUser = async (name: string, email: string) => {
    await AsyncStorage.multiSet([
      ["authState", "loggedIn"],
      ["userName", name],
      ["userEmail", email],
    ]);
    setIsLoggedIn(true);
    setIsGuest(false);
    setUserName(name);
    setUserEmail(email);
  };

  const updateProfile = async (
    name: string,
    email: string,
    avatar: string | null,
  ) => {
    const pairs: [string, string][] = [
      ["authState", "loggedIn"],
      ["userName", name],
      ["userEmail", email],
    ];
    if (avatar !== null) pairs.push(["userAvatar", avatar]);
    await AsyncStorage.multiSet(pairs);
    setUserName(name);
    setUserEmail(email);
    if (avatar !== null) setUserAvatar(avatar);
  };

  const logout = async () => {
    await AsyncStorage.multiRemove(["authState", "userName", "userEmail", "userAvatar"]);
    setIsGuest(false);
    setIsLoggedIn(false);
    setUserName("");
    setUserEmail("");
    setUserAvatar(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isGuest,
        isLoggedIn,
        userName,
        userEmail,
        userInitials,
        userAvatar,
        signUp,
        login,
        continueAsGuest,
        loginAsUser,
        updateProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
