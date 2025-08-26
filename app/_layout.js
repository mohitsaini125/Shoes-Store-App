import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="favourite" options={{ title: "Favourite" }} />
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
      <Stack.Screen name="menu" options={{ title: "Menu" }} />
    </Stack>
  );
}
