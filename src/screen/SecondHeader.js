import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { colors } from "../utils/colors";

const SecondHeader = ({ title, subtitle }) => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: theme.backgroundColor, paddingTop: height * 0.08 }, // Increased padding top for more space
      ]}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back-outline" size={width * 0.07} color={theme.textColor} />
      </TouchableOpacity>

      {/* Title & Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          {title}
        </Text>
        {subtitle && (
          <Text style={styles.subtitleText}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
};

export default SecondHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingBottom: 10,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },
  textContainer: {
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.black,
  },
  subtitleText: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 5,
  },
});
