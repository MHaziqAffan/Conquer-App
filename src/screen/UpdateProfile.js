import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { colors } from "../utils/colors";
import Headers from "./Header";

const UpdateProfile = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme); // Accessing theme from Redux

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps={"handled"}
          contentContainerStyle={{
            justifyContent: "center",
            flexGrow: 1,
          }}
          bounces={false}
        >
          <View
            style={[
              styles.container,
              { backgroundColor: theme.backgroundColor },
            ]}
          >
            {/* Header */}
            <Headers title="Update Profile" />

            {/* Profile Picture Section */}
            <View style={styles.profileSection}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.profilePic}
              />
              <TouchableOpacity style={styles.changePicButton}>
                <Text style={styles.changePicText}>Change Picture</Text>
              </TouchableOpacity>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.textColor }]}>
                Username
              </Text>
              <TextInput
                style={[styles.input, { borderColor: theme.textColor }]}
                placeholder="Enter new username"
              />

              <Text style={[styles.label, { color: theme.textColor }]}>
                Email
              </Text>
              <TextInput
                style={[styles.input, { borderColor: theme.textColor }]}
                placeholder="user@example.com"
                editable={false}
              />

              <Text style={[styles.label, { color: theme.textColor }]}>
                Phone
              </Text>
              <TextInput
                style={[styles.input, { borderColor: theme.textColor }]}
                placeholder="Enter new phone number"
              />

              <Text style={[styles.label, { color: theme.textColor }]}>
                Password
              </Text>
              <TextInput
                style={[styles.input, { borderColor: theme.textColor }]}
                placeholder="Enter new password"
                secureTextEntry
              />
            </View>

            {/* Update Button */}
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 60,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  profileSection: {
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E0E0E0", // Default fallback for background if theme is unavailable
  },
  changePicButton: {
    marginTop: 10,
    backgroundColor: "#C2185B",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  changePicText: {
    color: "#FFF", // Default fallback for text color if theme is unavailable
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 50,
    marginTop: 5,
  },
  updateButton: {
    marginTop: 20,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#C2185B",
  },
  updateButtonText: {
    color: "#FFF", // Default fallback for text color if theme is unavailable
    fontSize: 18,
    fontWeight: "bold",
  },
});
