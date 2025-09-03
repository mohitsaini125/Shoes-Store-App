import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  CaretCircleLeftIcon,
  MagnifyingGlassIcon,
  ShoppingBagOpenIcon,
  TextOutdentIcon,
} from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ShoeCard from "../../components/shoeCard";
export default function favourite() {
  const [favShoes, setFavShoes] = useState([]);
  useEffect(function () {
    AsyncStorage.getItem("fav-shoes").then(function (data) {
      const storedFavShoes = data ? JSON.parse(data) : [];
      setFavShoes(storedFavShoes);
    });
  });
  return (
    <View>
      <LinearGradient colors={["black", "white"]} style={styles.cornerDesign} />
      <View style={styles.headerContainer}>
        <View style={styles.headerHalf1}>
          <Link href="/" style={styles.backButton}>
            <CaretCircleLeftIcon size={25} color="black" weight="fill" />
          </Link>
          <Image
            source={require("../../assets/images/nike.png")}
            style={styles.nikeLogo}
          />
        </View>
        <View style={styles.headerHalf2}>
          <MagnifyingGlassIcon size={26} color="black" />
          <Link href="/cart">
            <ShoppingBagOpenIcon size={26} color="black" />
          </Link>
          <Link href="/menu">
            <TextOutdentIcon size={26} color="black" />
          </Link>
        </View>
      </View>
      <Text style={styles.wishList}>My Wishlist</Text>
      <View style={styles.shoeCardsContainerList}>
        <FlatList
          data={favShoes}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <ShoeCard
              item={item}
              setFavShoes={setFavShoes}
              favShoes={favShoes}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cornerDesign: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: 200,
    right: -200,
    top: -120,
    opacity: 0.2,
  },
  headerContainer: {
    height: 40,
    flexDirection: "row",
    marginTop: 60,
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 1,
    borderColor: "lightgray",
    alignItems: "center",
  },
  nikeLogo: {
    width: 60,
    height: 40,
    marginTop: -3,
  },
  headerHalf1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  headerHalf2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  wishList: {
    fontSize: 22,
    fontWeight: 700,
    marginLeft: 20,
    marginTop: 20,
  },
  shoeCardsContainerList: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
  },
});
