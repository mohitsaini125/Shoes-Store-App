import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import ShoeCard from "../components/shoeCard";
export default function shoeDetails() {
  const params = useLocalSearchParams();
  const item = JSON.parse(params.item);
  return (
    <View>
      <Link style={{ margin: 40 }} href="/">
        Go Back
      </Link>
      <ShoeCard item={item} />
    </View>
  );
}
