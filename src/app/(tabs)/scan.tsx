import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Scan() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  // Permission not yet determined
  if (!permission) {
    return <View className="flex-1 bg-greige" />;
  }

  // Permission denied
  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 bg-greige items-center justify-center px-8">
        <Text
          style={{ fontFamily: "ManlineSlabs" }}
          className="text-oxblood text-2xl text-center mb-4"
        >
          Camera Access Needed
        </Text>
        <Text className="text-plum text-sm text-center mb-6">
          We need camera access to scan clothing tags.
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-oxblood rounded-xl py-4 px-8"
        >
          <Text className="text-bone text-base font-semibold">
            Grant Permission
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleBarcodeScan = ({ data }: { data: string }) => {
    if (scanned) return;
    setScanned(true);
    router.push({ pathname: "/eco-score", params: { barcode: data } });
  };

  return (
    <View className="flex-1 bg-black">
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarcodeScan}
        barcodeScannerSettings={{
          barcodeTypes: [
            "ean13",
            "ean8",
            "upc_a",
            "upc_e",
            "code128",
            "code39",
          ],
        }}
      >
        {/* Overlay */}
        <View className="flex-1 items-center justify-center">
          {/* Top label */}
          <Text className="text-bone text-sm uppercase tracking-widest mb-6 opacity-80">
            Align tag with hanger
          </Text>

          {/* Viewfinder corners */}
          <View style={{ width: 240, height: 240, position: "relative" }}>
            {/* Top left */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 32,
                height: 32,
                borderTopWidth: 3,
                borderLeftWidth: 3,
                borderColor: "#EEEEEE",
              }}
            />
            {/* Top right */}
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 32,
                height: 32,
                borderTopWidth: 3,
                borderRightWidth: 3,
                borderColor: "#EEEEEE",
              }}
            />
            {/* Bottom left */}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 32,
                height: 32,
                borderBottomWidth: 3,
                borderLeftWidth: 3,
                borderColor: "#EEEEEE",
              }}
            />
            {/* Bottom right */}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 32,
                height: 32,
                borderBottomWidth: 3,
                borderRightWidth: 3,
                borderColor: "#EEEEEE",
              }}
            />

            {/* Hanger silhouette */}
            <View className="flex-1 items-center justify-center">
              <Text style={{ fontSize: 48, opacity: 0.3 }}>👕</Text>
            </View>
          </View>

          {/* Scan again button (shows after scan) */}
          {scanned && (
            <TouchableOpacity
              onPress={() => setScanned(false)}
              className="mt-8 bg-oxblood rounded-xl py-3 px-8"
            >
              <Text className="text-bone text-base font-semibold">
                Scan Again
              </Text>
            </TouchableOpacity>
          )}

          {/* Fallback button */}
          {!scanned && (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/eco-score",
                  params: { barcode: "5901234123457" },
                })
              }
              className="mt-8 border border-bone rounded-xl py-3 px-8 opacity-60"
            >
              <Text className="text-bone text-sm">Use demo product</Text>
            </TouchableOpacity>
          )}
        </View>
      </CameraView>
    </View>
  );
}
