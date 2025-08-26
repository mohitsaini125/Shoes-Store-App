import { useRouter } from "expo-router";
import { HeartIcon, StarIcon } from "phosphor-react-native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function shoeCard({ item }) {
  const router = useRouter();
  function handlePress() {
    router.push({
      pathname: "/shoeDetails",
      params: { item: JSON.stringify(item) },
    });
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.shoeCard}>
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <ImageBackground source={require("../assets/images/dotted_bgc.jpg")}>
            <View style={styles.shoeCardRating}>
              <StarIcon size={15} color="gold" />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {item.rating}
              </Text>
            </View>
            <Image source={item.imgLink} style={styles.shoeCardImage} />
          </ImageBackground>
        </View>
        <View style={styles.shoeCardName}>
          <Text numberOfLines={1} style={{ fontWeight: 700 }}>
            {item.name}
          </Text>
          <Text style={{ color: "gray", fontWeight: 600 }}>
            {item.shoeCategory}
          </Text>
        </View>
        <View style={styles.shoeCardPrice}>
          <Text style={{ fontWeight: 800, fontSize: 18, marginRight: 10 }}>
            {item.price}
          </Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              marginLeft: -30,
              marginTop: 0,
              color: "#888B90",
              fontWeight: 500,
            }}
          >
            {item.mrp}
          </Text>
          <TouchableOpacity style={styles.likeButton}>
            <HeartIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shoeCard: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
    width: 165,
    height: 195,
    borderColor: "gray",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
  },
  shoeCardImageContainer: {
    width: 140,
    height: 100,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
  },
  shoeCardRating: {
    flexDirection: "row",
    gap: 1,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: "white",
    width: 39,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
  },
  shoeCardImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: -20,
    marginBottom: 5,
  },
  shoeCardName: {
    marginTop: 5,
  },
  shoeCardPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    marginHorizontal: 5,
  },
  likeButton: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: 40,
  },
});
