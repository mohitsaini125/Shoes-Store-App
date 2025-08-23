import { LinearGradient } from "expo-linear-gradient";
import {
  HeartIcon,
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "phosphor-react-native";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { categories, imgs } from "../constants/indexConstants";

export default function HomePage() {
  return (
    <View style={styles.container1}>
      <LinearGradient
        colors={["#CECECE", "white"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />
      <View style={styles.logo}>
        <Image
          source={require("../assets/images/nike.png")}
          style={styles.image1}
        />
        <View style={styles.logoRight}>
          <HeartIcon size={32} color="black" />
          <ShoppingBagIcon size={32} />
          <ListIcon size={32} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <TouchableOpacity style={{ alignSelf: "center", marginLeft: -5 }}>
          <MagnifyingGlassIcon size={32} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search product"
          placeholderTextColor={"lightgrey"}
          style={styles.input}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.bannerScroll}
      >
        {imgs.map((img, index) => (
          <Image key={index} source={img} style={styles.banner} />
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {[...Array(5)].map((_, index) => (
          <View
            key={index}
            style={{
              height: 10,
              width: 10,
              borderRadius: 100,
              borderWidth: 1,
              marginRight: 8,
            }}
          />
        ))}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={{ fontSize: 16 }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        contentContainerStyle={{
          gap: 10,
          marginHorizontal: 15,
        }}
        columnWrapperStyle={{ gap: 10 }}
        numColumns={2}
        data={imgs}
        renderItem={function ({ item }) {
          return <Image source={item} style={{ height: 150, width: 160 }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "white",
    flex: 1,
  },
  gradient: {
    position: "absolute",
    top: -60,
    right: -80,
    width: 300,
    height: 300,
    borderRadius: 200,
  },
  logo: {
    backgroundColor: "#",
    top: 70,
    height: 80,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
  },
  image1: {
    height: 80,
    width: 80,
    alignSelf: "left",
    marginLeft: 30,
  },
  hearticon: {
    position: "absolute",
    top: 20,
    right: 80,
    alignSelf: "right",
  },
  logoRight: {
    flexDirection: "row",
    position: "absolute",
    right: 20,
    top: 20,
    gap: 15,
  },
  searchBar: {
    marginHorizontal: "auto",
    height: 60,
    width: "90%",
    marginTop: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 0,
    paddingLeft: 30,
    flexDirection: "row",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
  banner: {
    width: 320,
    height: 120,
    borderRadius: 20,
    marginRight: 20,
  },
  bannerScroll: {
    marginLeft: 20,
    marginTop: 20,
    height: 210,
  },
  dots: {
    flexDirection: "row",
    marginHorizontal: "auto",
    marginTop: 10,
  },
  categories: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  categoryButton: {
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 5,
  },
});
