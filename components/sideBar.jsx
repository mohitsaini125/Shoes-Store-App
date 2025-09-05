import { Link } from "expo-router";
import { X } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SideBar({ setSidebarVisible }) {
  const sidebarMenus = [
    {
      label: "Home",
      onPress: () => {
        <Link href={"/"} />;
      },
    },
    {
      label: "Wishlist",
      onPress: () => {
        <Link href="/favourite" />;
      },
    },
    {
      label: "Account",
      onPress: () => {
        <Link href={"/"} />;
      },
    },
    {
      label: "Login",
      onPress: () => {
        <Link href={"/"} />;
      },
    },
    {
      label: "Logout",
      onPress: () => {
        <Link href={"/"} />;
      },
    },
  ];

  return (
    <View style={styles.sidebarOverlay}>
      <TouchableOpacity
        style={styles.sidebarBackdrop}
        onPress={() => setSidebarVisible(false)}
        activeOpacity={1}
      />
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={{ alignSelf: "flex-end", margin: 10 }}
          onPress={function () {
            setSidebarVisible(false);
          }}
        >
          <X size={28} color="black" />
        </TouchableOpacity>
        {sidebarMenus.map((menu, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.sidebarMenuItem}
            onPress={() => {
              setSidebarVisible(false);
              menu.onPress();
            }}
          >
            <Text style={styles.sidebarMenuText}>{menu.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
    flexDirection: "row",
  },
  sidebar: {
    width: "70%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 40,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  sidebarBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sidebarMenuItem: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sidebarMenuText: {
    fontSize: 18,
    color: "#222",
  },
});
