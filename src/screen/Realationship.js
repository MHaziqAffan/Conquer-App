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

const Relationship = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={[styles.header, { backgroundColor: theme.backgroundColor }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            style={styles.backButton}
            color={theme.textColor}
            size={24}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.textColor }]}>
          Relationships
        </Text>
      </View>

      <View style={[styles.searchContainer, { borderColor: theme.textColor }]}>
        <Ionicons
          name="search"
          size={20}
          color={theme.textColor}
          style={styles.searchIcon}
        />
        <TextInput
          style={[
            styles.searchInput,
            { color: theme.textColor, borderColor: theme.textColor },
          ]}
          placeholder="Search users..."
          placeholderTextColor={theme.textColor}
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AddCrush")}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconCircle}>
              <Ionicons name="heart" size={30} color="white" />
            </View>
            <Text style={[styles.addText, { color: theme.textColor }]}>
              Add Crush
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddBestFriend")}>
          <View style={styles.iconWrapper}>
            <View
              style={styles.iconCircle}
              onPress={() => navigation.navigate("AddBestFriend")}
            >
              <Ionicons name="person-add" size={30} color="white" />
            </View>
            <Text style={[styles.addText, { color: theme.textColor }]}>
              Add Best Friend
            </Text>
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
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 60,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 0,
    zIndex: 1,
  },
  headerText: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
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
    paddingTop: 50,
  },
  iconWrapper: {
    alignItems: "center",
  },
  iconCircle: {
    width: 60,
    borderRadius: 30,
    height: 60,
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
