import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Header = ({ title, showBackButton = true }) => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);

  return (
    <View style={[styles.header, { backgroundColor: theme.backgroundColor }]}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" color={theme.textColor} size={24} />
        </TouchableOpacity>
      )}
      <Text style={[styles.headerText, { color: theme.textColor }]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: "center",
    position: "relative",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 30, // Adds space dynamically
  },
  backButton: {
    position: "absolute",
    left: 15,
    zIndex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
});
