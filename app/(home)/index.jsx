import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  ArrowsDownUpIcon,
  FadersHorizontalIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagOpenIcon,
  TextOutdentIcon,
  X,
} from "phosphor-react-native";
import { useEffect, useRef, useState } from "react";
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
import SideBar from "../../components/sideBar";
import { categories, imgs, shoesData } from "../../constants/indexConstants";
const { width } = Dimensions.get("window");

export default function Homepage() {
  const [updatedShoesData, setUpdatedShoesData] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [category, setCategory] = useState("All");
  const [favShoes, setFavShoes] = useState([]);
  const bannerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const resetTimeout = useRef(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function clear() {
    setInput("");
    setUpdatedShoesData(shoesData);
  }
  useEffect(
    function () {
      if (category == "All") setUpdatedShoesData(shoesData);
      else {
        const arr = shoesData.filter(function (shoe) {
          if (shoe.shoeCategory == category) return true;
        });
        setUpdatedShoesData(arr);
      }
    },
    [category]
  );
  function handleSearch(value) {
    setInput(value);
    if (!value.trim()) setUpdatedShoesData(shoesData);
    try {
      const newArr = shoesData.filter(function (shoe) {
        if (shoe.name.includes(value.trim())) return true;
      });
      setUpdatedShoesData(newArr);
    } catch (err) {
      setUpdatedShoesData([]);
    }
  }
  useEffect(function () {
    AsyncStorage.getItem("fav-shoes").then(function (data) {
      const storedShoes = data ? JSON.parse(data) : [];
      setFavShoes(storedShoes);
    });
  }, []);

  function handleScroll(event) {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
    if (resetTimeout.current) clearTimeout(resetTimeout.current);

    resetTimeout.current = setTimeout(() => {
      if (bannerRef.current) {
        bannerRef.current.scrollTo({ x: 0, animated: true });
        setActiveIndex(0);
      }
    }, 2000);
  }
  useEffect(() => {
    return () => {
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {sidebarVisible && <SideBar setSidebarVisible={setSidebarVisible} />}
      <LinearGradient colors={["green", "white"]} style={styles.cornerDesign} />
      <View style={styles.nikeLogoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.nikeLogo}
        />
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Link href="/favourite">
            <HeartIcon size={26} color="black" />
          </Link>
          <Link href="/cart">
            <ShoppingBagOpenIcon size={26} color="black" weight="fill" />
          </Link>
          <TouchableOpacity
            onPress={function () {
              setSidebarVisible(true);
            }}
          >
            <TextOutdentIcon size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.searchBar}>
          <TouchableOpacity
            onPress={() => {
              inputRef.current?.blur();
            }}
          >
            <MagnifyingGlassIcon size={26} color="black" />
          </TouchableOpacity>
          <TextInput
            ref={inputRef}
            placeholder="Search your shoes"
            style={{ fontSize: 14, width: 230 }}
            value={input}
            onChangeText={handleSearch}
          />
          <TouchableOpacity onPress={clear}>
            <X size={23} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        ref={bannerRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={styles.banner}
      >
        {imgs.map((img, index) => (
          <Image
            source={img}
            key={index}
            style={styles.bannerImage}
            resizeMode="cover"
          />
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
        {categories.map((Category, index) => (
          <TouchableOpacity
            style={{
              ...styles.category,
              backgroundColor: category == Category ? "black" : "white",
            }}
            key={index}
            onPress={function () {
              setCategory(Category);
            }}
          >
            <Text
              style={{
                color: category == Category ? "white" : "black",
              }}
            >
              {Category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.shoeCardsContainerList}>
        <FlatList
          data={updatedShoesData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 1 }}
          columnWrapperStyle={{ gap: 1 }}
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
      <LinearGradient
        colors={["lightgray", "white"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.sortFilter}
      >
        <TouchableOpacity style={styles.sortFilterButton}>
          <ArrowsDownUpIcon size={21} />
          <Text style={{ fontWeight: 600 }}>SORT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortFilterButton}>
          <FadersHorizontalIcon size={23} />
          <Text style={{ fontWeight: 600 }}>FILTER</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  nikeLogoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 40,
    alignItems: "center",
  },
  nikeLogo: {
    width: 70,
    height: 50,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  banner: {
    marginHorizontal: 20,
    marginTop: 9,
    marginBottom: 0,
  },
  bannerImage: {
    width: 320,
    height: 80,
    borderRadius: 10,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    gap: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
  },
  categoriesContainer: {
    marginTop: 7,
    marginLeft: 10,
  },
  category: {
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 10,
    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)",
  },

  cornerDesign: {
    position: "absolute",
    width: "100%",
    height: "21%",
    opacity: 0.35,
  },
  shoeCardsContainerList: {
    marginTop: 7,
    alignItems: "center",
    height: "64%",
    borderRadius: 10,
  },
  sortFilter: {
    position: "absolute",
    width: "100%",
    height: "7%",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  sortFilterButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flex: 1,
  },
});
