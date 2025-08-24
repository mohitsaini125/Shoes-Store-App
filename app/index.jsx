import { LinearGradient } from "expo-linear-gradient";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagOpenIcon,
  StarIcon,
  TextOutdentIcon,
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
import { categories, imgs, shoeImages } from "../constants/indexConstants";

export default function Homepage() {
  return (
    <View>
      <LinearGradient colors={["black", "white"]} style={styles.cornerDesign} />
      <View style={styles.nikeLogoContainer}>
        <Image
          source={require("../assets/images/nike.png")}
          style={styles.nikeLogo}
        />
        <View style={{ flexDirection: "row", gap: 20 }}>
          <HeartIcon size={26} color="black" />
          <ShoppingBagOpenIcon size={26} color="black" />
          <TextOutdentIcon size={26} color="black" />
        </View>
      </View>
      <View>
        <View style={styles.searchBar}>
          <MagnifyingGlassIcon size={26} color="black" />
          <TextInput placeholder="Search your shoes" style={{ fontSize: 17 }} />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.banner}
      >
        {imgs.map((img, index) => (
          <Image source={img} key={index} style={styles.bannerImage} />
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.dot} />
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
          data={shoeImages}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.shoeCard}>
              <View style={styles.shoeCardImageContainer}>
                <View>
                  <StarIcon size={16} color="gold" />
                  <Text style={{ fontSize: 12, fontWeight: 600 }}>4.8</Text>
                </View>
                <Image source={item} style={styles.shoeCardImage} />
              </View>
              <View style={styles.shoeCardName}>
                <Text style={{ fontWeight: 700, marginTop: 10 }}>
                  Nike Air Jordan
                </Text>
                <Text
                  style={{ color: "gray", fontWeight: 600, marginBottom: 5 }}
                >
                  Men's shoes
                </Text>
              </View>
              <View style={styles.shoeCardPrice}>
                <Text style={{ fontWeight: 800, fontSize: 18, marginTop: 0 }}>
                  $150
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
                  $150
                </Text>
                <HeartIcon size={22} color="black" />
              </View>
            </View>
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
    gap: 10,
    paddingHorizontal: 20,
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
    marginRight: 20,
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
    borderWidth: 1,
    borderRadius: 5,
  },
  categoriesContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  category: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
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
    paddingHorizontal: 10,
  },
  shoeCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 160,
    height: 195,
    borderColor: "gray",
  },
  shoeCardImageContainer: {
    width: 140,
    height: 100,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
  },
  shoeCardImage: {
    width: 100,
    height: 100,
    marginHorizontal: "auto",
    marginVertical: "auto",
  },
  shoeCardName: {},
  shoeCardPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
