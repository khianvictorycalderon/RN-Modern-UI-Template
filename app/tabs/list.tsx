import { Alert, Pressable, ScrollView, Text, View } from "react-native";

const listColor1 = "#E6F0FA"; // Light Blue
const listColor2 = "#F0F4F8"; // Off-White/Light Grey

const listData = [
  {
    title: "Article 1",
    sub: "This article is about blah blah blah",
    action: () => Alert.alert("You clicked article 1!")
  },
  {
    title: "Article 2",
    sub: "This article is about blah blah blah",
    action: () => Alert.alert("You clicked article 2!")
  },
  {
    title: "Article 3",
    sub: "This article is about blah blah blah",
    action: () => Alert.alert("You clicked article 3!")
  },
  {
    title: "Article 4",
    sub: "This article is about blah blah blah",
    action: () => Alert.alert("You clicked article 4!")
  },
  {
    title: "Article 5",
    sub: "This article is about blah blah blah",
    action: () => Alert.alert("You clicked article 5!")
  },
];

export default function SamplePage1() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, gap: 15, backgroundColor: "#1E293B", height: "100%"  }}>
      {listData.map((item, index) => (
        <Pressable onPress={item.action} key={index}>
            <View
                style={{
                    padding: 16,
                    backgroundColor: index % 2 === 0 ? listColor1 : listColor2, // Alternating colors
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                }}
                >
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
                    {item.title}
                </Text>
                <Text style={{ color: "#4B5563" }}>{item.sub}</Text>
                </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}