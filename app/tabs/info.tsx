import { Linking, ScrollView, Text, View } from "react-native";

const infoData = [
  {
    title: "Abouts",
    sub: (
      <Text style={{ color: "#E5E7EB" }}>
        This is a sample Text, so I can add clickable URL like{" "}
        <Text
          style={{ color: "#3B82F6", textDecorationLine: "underline" }}
          onPress={() => Linking.openURL("https://khian.netlify.app/")}
        >
          my website
        </Text>
        .
      </Text>
    ),
  },
  {
    title: "How it all started",
    sub: "It all started blah blah blah",
  },
  {
    title: "Why it was created",
    sub: "It was created because of blah blah blah",
  },
];

export default function SamplePage3() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, gap: 15, backgroundColor: "#1E293B", height: "100%" }}>
      {infoData.map((item, index) => (
        <View
          key={index}
          style={{
            padding: 16,
            backgroundColor: "#F59E0B",
            borderRadius: 12,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF", marginBottom: 6 }}>
            {item.title}
          </Text>
          {typeof item.sub === "string" ? (
            <Text style={{ color: "#FEF3C7" }}>{item.sub}</Text>
          ) : (
            item.sub
          )}
        </View>
      ))}
    </ScrollView>
  );
}
