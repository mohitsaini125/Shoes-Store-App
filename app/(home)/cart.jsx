import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  CaretCircleLeftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  TextOutdentIcon,
} from "phosphor-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function cart() {
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
          <Link href="/cart">
            <HeartIcon size={26} color="black" />
          </Link>
          <MagnifyingGlassIcon size={26} color="black" />
          <Link href="/menu">
            <TextOutdentIcon size={26} color="black" />
          </Link>
        </View>
      </View>
      <Text style={styles.cartList}>My Cart</Text>
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
  cartList: {
    fontSize: 22,
    fontWeight: 700,
    marginLeft: 20,
    marginTop: 20,
  },
});
