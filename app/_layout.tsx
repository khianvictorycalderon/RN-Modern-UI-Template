import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="tabs/list"/>
      <Stack.Screen name="tabs/input"/>
      <Stack.Screen name="tabs/info"/>
    </Stack>
  );
}
