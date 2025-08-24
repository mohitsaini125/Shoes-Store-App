import { LinearGradient } from "expo-linear-gradient";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagOpenIcon,
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
import { categories, imgs } from "../constants/indexConstants";

export default function Homepage() {
  return (
    <View>
      <LinearGradient
        colors={["darkgrey", "white"]}
        style={styles.cornerDesign}
      />
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
          <TextInput placeholder="Search your shoes" />
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
      <View style={styles.shoeCard}>
        <FlatList
          data={imgs}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.shoeCardImage} />
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
  shoeCard: {
    marginTop: 20,
    alignItems: "center",
    height: 400,
  },
  shoeCardImage: {
    width: 160,
    height: 110,
  },
  cornerDesign: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 200,
    right: -70,
    top: -70,
    opacity: 0.6,
  },
});
