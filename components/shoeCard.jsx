import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
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
        <LinearGradient
          colors={["lightgreen", "white"]}
          style={styles.cornerDesign}
        />

        <View style={{}}>
          <View style={styles.shoeCardRating}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <StarIcon size={12} color="gold" weight="fill" />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                {item.rating}
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
                <HeartIcon
                  size={19}
                  color="#F2660E"
                  weight={isfav ? "fill" : "light"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Image source={item.imgLink} style={styles.shoeCardImage} />
        </View>
        <View style={styles.shoeCardName}>
          <Text numberOfLines={1} style={{ fontWeight: 700 }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "gray", fontWeight: 400, fontSize: 13 }}>
              {item.shoeCategory}
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Text style={{ fontWeight: 800, fontSize: 18 }}>
                {item.price}
              </Text>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  marginTop: 0,
                  color: "gray",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                {item.mrp}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  shoeCard: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: 168,
    height: 185,
    borderColor: "gray",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
  },
  cornerDesign: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1,
  },
  shoeCardRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  shoeCardImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: -10,
    marginBottom: 5,
  },
  shoeCardName: {
    marginTop: 5,
    marginHorizontal: 6,
  },
  shoeCardPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 3,
  },
});
