import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagOpenIcon,
  TextOutdentIcon,
  X,
} from "phosphor-react-native";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ShoeCard from "../../components/shoeCard";
import { categories, imgs, shoesData } from "../../constants/indexConstants";
const { width } = Dimensions.get("window");

export default function Homepage() {
  const [favShoes, setFavShoes] = useState([]);
  useEffect(function () {
    AsyncStorage.getItem("fav-shoes").then(function (data) {
      const storedShoes = data ? JSON.parse(data) : [];
      setFavShoes(storedShoes);
    });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  function handleScroll(event) {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  }
  return (
    <View>
      <LinearGradient colors={["black", "white"]} style={styles.cornerDesign} />
      <View style={styles.nikeLogoContainer}>
        <Image
          source={require("../../assets/images/nike.png")}
          style={styles.nikeLogo}
        />
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Link href="/favourite">
            <HeartIcon size={26} color="black" />
          </Link>
          <Link href="/cart">
            <ShoppingBagOpenIcon size={26} color="black" />
          </Link>
          <Link href="/menu">
            <TextOutdentIcon size={26} color="black" />
          </Link>
        </View>
      </View>
      <View>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={26} color="black" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search your shoes"
            style={{ fontSize: 17, width: 230 }}
          />
          <TouchableOpacity>
            <X size={23} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={styles.banner}
      >
        {imgs.map((img, index) => (
          <Image source={img} key={index} style={styles.bannerImage} />
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {imgs.map((_, index) => (
          <View
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: index == activeIndex ? "black" : "lightgray",
            }}
          />
        ))}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity style={styles.category} key={index}>
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.shoeCardsContainerList}>
        <FlatList
          data={shoesData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <ShoeCard
              item={item}
              favShoes={favShoes}
              setFavShoes={setFavShoes}
            />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  nikeLogoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 60,
    alignItems: "center",
  },
  nikeLogo: {
    width: 60,
    height: 40,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  banner: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  bannerImage: {
    width: 320,
    height: 100,
    borderRadius: 10,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  categoriesContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  category: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
  },

  cornerDesign: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: 200,
    right: -200,
    top: -120,
    opacity: 0.2,
  },
  shoeCardsContainerList: {
    marginTop: 20,
    alignItems: "center",
    height: 400,
    borderRadius: 10,
  },
});
