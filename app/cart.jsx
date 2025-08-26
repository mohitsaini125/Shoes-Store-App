import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function cart() {
  return (
    <View>
      <Link style={{ marginTop: 60, marginHorizontal: 20 }} href="/">
        Go to Home
      </Link>
      <Text style={{ marginTop: 60, marginHorizontal: 20 }}>Cart Page</Text>
    </View>
  );
}
