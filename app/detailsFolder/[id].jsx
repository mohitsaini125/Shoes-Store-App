import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import {
  CaretCircleLeftIcon,
  CaretDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagOpenIcon,
  StarIcon,
  TextOutdentIcon,
} from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { shoesData } from "../../constants/indexConstants";
export default function shoeDetails() {
  const [shoeItem, setShoeItem] = useState([]);
  const params = useLocalSearchParams();
  const Id = params.id;
  useEffect(function () {
    shoesData?.filter(function (item) {
      if (item.shoeID == Id) {
        setShoeItem(item);
        return true;
      }
      return false;
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
          <Link href="/favourite">
            <HeartIcon size={26} color="black" />
          </Link>
          <MagnifyingGlassIcon size={26} color="black" />
          <Link href="/cart">
            <ShoppingBagOpenIcon size={26} color="black" />
          </Link>
          <Link href="/menu">
            <TextOutdentIcon size={26} color="black" />
          </Link>
        </View>
      </View>
      <View style={styles.shoeNameRatingContainer}>
        <View style={styles.shoeNameHalf1}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>{shoeItem.name}</Text>
          <Text style={{ fontSize: 16, fontWeight: 600, color: "#C1BDBD" }}>
            {shoeItem.shoeCategory}
          </Text>
        </View>
        <View style={styles.shoeNameHalf2}>
          <StarIcon size={15} color="gold" weight="fill" />
          <Text>{shoeItem.rating}</Text>
        </View>
      </View>
      <View style={styles.shoeBackgroundContainer}>
        <View style={styles.shoeBackUpper}>
          {[...Array(5)].map((_, i) => (
            <View key={i} style={{ flexDirection: "row" }}>
              {[...Array(3)].map((_, j) => (
                <View
                  key={j}
                  style={{ ...styles.s1, backgroundColor: "darkorange" }}
                />
              ))}
            </View>
          ))}
        </View>
        <View style={styles.shoeBackLower}>
          <View
            style={{
              ...styles.shoeBackLowerLeft,
              backgroundColor: "darkorange",
            }}
          >
            {[...Array(18)].map((_, i) => (
              <View key={i} style={{ flexDirection: "row" }}>
                {[...Array(10)].map((_, j) => (
                  <View key={j} style={styles.s2} />
                ))}
              </View>
            ))}
          </View>
          <View style={styles.shoeBackLowerRight}>
            <Text style={styles.backText}>NIKE</Text>
          </View>
        </View>
      </View>
      <View style={styles.shoeImageContainer}>
        <Image source={shoeItem.imgLink} style={styles.shoeImage} />
      </View>
      <View style={styles.amountSizeColor}>
        <View style={styles.amountContainer}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={{ fontSize: 32, fontWeight: 700 }}>
              {shoeItem.price}
            </Text>
            <Text
              style={{
                fontSize: 18,
                textDecorationLine: "line-through",
                fontWeight: 600,
                color: "gray",
              }}
            >
              {shoeItem.mrp}
            </Text>
          </View>
          <Text style={{ color: "red", fontSize: 12, fontWeight: 600 }}>
            25%OFF
          </Text>
        </View>
        <View style={styles.sizeContainer}>
          <View
            style={{
              borderWidth: 1.2,
              borderColor: "gray",
              padding: 5,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity>
              <HeartIcon size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              borderWidth: 1.2,
              borderColor: "gray",
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Text>10 UK</Text>
            <CaretDownIcon size={16} />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              borderWidth: 1.2,
              borderColor: "gray",
              padding: 5,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                height: 18,
                width: 18,
                backgroundColor: `${shoeItem.color}`,
                borderRadius: 5,
                borderWidth: 0.5,
              }}
            />
            <Text>Color</Text>
            <CaretDownIcon size={16} />
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text numberOfLines={3}>{shoeItem.description}</Text>
      </View>
      <View style={styles.cartBuyContainer}>
        <TouchableOpacity>
          <View style={styles.cartButton}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buyButton}>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
              Buy Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    flexDirection: "row",
    marginTop: 60,
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignshoeItems: "center",
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
    alignshoeItems: "center",
    gap: 15,
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
  shoeNameRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 20,
  },
  shoeNameHalf1: {},
  shoeNameHalf2: {
    flexDirection: "row",
    gap: 2,
    alignshoeItems: "center",
    borderWidth: 1.5,
    borderColor: "lightgray",
    paddingHorizontal: 10,
    paddingVertical: 1.5,
    height: 26,
    borderRadius: 15,
  },
  shoeBackgroundContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  shoeBackUpper: {
    height: 100,
    width: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignshoeItems: "center",
  },
  s1: {
    height: 3,
    width: 3,
    borderRadius: 10,
    // backgroundColor: "orange",
    margin: 5,
  },
  s2: {
    height: 2,
    width: 2,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 5,
  },
  shoeBackLower: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shoeBackLowerLeft: {
    // backgroundColor: "#F2660E",
    padding: 25,
    borderRadius: 20,
  },
  shoeBackLowerRight: {
    marginTop: 40,
  },
  backText: {
    transform: [{ rotate: "-90deg" }],
    fontSize: 100,
    fontWeight: 900,
    color: "lightgray",
    opacity: 0.5,
  },
  shoeImageContainer: {
    position: "absolute",
    top: 180,
  },
  shoeImage: {
    width: 360,
    height: 360,
    resizeMode: "contain",
  },
  amountSizeColor: {
    position: "absolute",
    height: 130,
    left: 20,
    right: 20,
    marginTop: 500,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountContainer: {
    justifyContent: "flex-end",
  },
  sizeContainer: {
    alignshoeItems: "flex-end",
    gap: 15,
  },
  description: {
    marginTop: 90,
    marginHorizontal: 20,
  },
  cartBuyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
  },
  cartButton: {
    height: 65,
    width: 150,
    borderRadius: 20,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buyButton: {
    height: 65,
    width: 150,
    borderRadius: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
