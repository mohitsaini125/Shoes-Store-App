import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { HeartIcon, StarIcon } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function shoeCard({ item, favShoes, setFavShoes }) {
  const isfav = (favShoes ?? []).find(function (shoe) {
    if (item.shoeID == shoe.shoeID) return true;
  });
  function toggleLike() {
    if (isfav) {
      const updatedFavShoes = favShoes.filter(function (shoe) {
        if (!(item.shoeID == shoe.shoeID)) return true;
      });
      setFavShoes(updatedFavShoes);
      AsyncStorage.setItem("fav-shoes", JSON.stringify(updatedFavShoes));
    } else {
      const arr = [...favShoes];
      arr.push(item);
      setFavShoes(arr);
      AsyncStorage.setItem("fav-shoes", JSON.stringify(arr));
    }
  }
  return (
    <Link href={`/detailsFolder/${item.shoeID}`}>
      <View style={styles.shoeCard}>
        <View style={{}}>
          <View style={styles.shoeCardRating}>
            <StarIcon size={11} color="gold" weight="fill" />
            <Text
              style={{
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              {item.rating}
            </Text>
          </View>
          <Image source={item.imgLink} style={styles.shoeCardImage} />
        </View>
        <View style={styles.shoeCardName}>
          <Text numberOfLines={1} style={{ fontWeight: 700 }}>
            {item.name}
          </Text>
          <Text style={{ color: "gray", fontWeight: 400, fontSize: 13 }}>
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
              marginLeft: -60,
              marginTop: 0,
              color: "gray",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            {item.mrp}
          </Text>
          <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
            <HeartIcon
              size={19}
              color="#F2660E"
              weight={isfav ? "fill" : "light"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  shoeCard: {
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 5,
    width: 165,
    height: 190,
    borderColor: "gray",
    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)",
  },
  shoeCardRating: {
    flexDirection: "row",
    gap: 3,
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
    marginHorizontal: 3,
  },
  shoeCardPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 3,
  },
  likeButton: {
    // height: 25,
    // width: 25,
    justifyContent: "center",
    alignItems: "center",
    // boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    // borderRadius: 40,
  },
});
