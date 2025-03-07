import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Header from "./Header";
const Relationship = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Header title="Reationships" />
      {/* Search Input */}
      <View style={[styles.searchContainer, { borderColor: theme.textColor }]}>
        <Ionicons name="search" size={20} color={theme.textColor} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: theme.textColor, borderColor: theme.textColor }]}
          placeholder="Search users..."
          placeholderTextColor={theme.textColor}
        />
      </View>

      {/* Add Crush and Add Best Friend */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AddCrush")}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconCircle}>
              <Ionicons name="heart" size={30} color="white" />
            </View>
            <Text style={[styles.addText, { color: theme.textColor }]}>Add Crush</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddBestFriend")}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconCircle}>
              <Ionicons name="person-add" size={30} color="white" />
            </View>
            <Text style={[styles.addText, { color: theme.textColor }]}>Add Best Friend</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Relationship;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 40, // Adjusted margin to align properly
    position: "relative", // Allow absolute positioning of the back button
  },
  backButton: {
    position: "absolute", 
    left: 0,
    zIndex: 1, // Ensure the back button is on top
  },
  headerText: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Ensures text is centered
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 44,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 30, // Adjusted to properly space out icons from search bar
    paddingBottom: 50, // Space the icons well from the bottom
  },
  iconWrapper: {
    alignItems: "center",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  addText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
