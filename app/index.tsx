import { RelativePathString, useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

// Modularized
const bgImagePath = "../assets/images/executor.png";
const title = "Homepage";
const buttons = [
  {
    title: "List",
    path: "tabs/list",
    backgroundColor: "#3B82F6", // Tailwind blue-500
    color: "#FFFFFF",
  },
  {
    title: "Input",
    path: "tabs/input",
    backgroundColor: "#10B981", // Tailwind emerald-500
    color: "#FFFFFF",
  },
  {
    title: "Info",
    path: "tabs/info",
    backgroundColor: "#F59E0B", // Tailwind amber-500
    color: "#FFFFFF",
  },
];

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require(bgImagePath)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
      resizeMode="cover"
    >
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        {title}
      </Text>

      <View style={{ width: "100%", gap: 15 }}>
        {buttons.map((btn, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: btn.backgroundColor,
              paddingVertical: 14,
              borderRadius: 30,
              alignItems: "center",
            }}
            onPress={() => router.push(btn.path as RelativePathString)}
          >
            <Text style={{ color: btn.color, fontSize: 16, fontWeight: "600" }}>
              {btn.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
}
