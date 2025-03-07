import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../utils/colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import Header from "./Header";

const AddBestFriend = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);
  const [friendName, setFriendName] = useState("");
  const [funMoments, setFunMoments] = useState("");
  const [commonInterests, setCommonInterests] = useState("");
  const [sharedPlans, setSharedPlans] = useState("");
  const [communicationLevel, setCommunicationLevel] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={[
              styles.container,
              { backgroundColor: theme.backgroundColor },
            ]}
          >
            <Header title="Add Best Friend" />

            {/* Profile Picture Section */}
            <View style={styles.profilePicContainer}>
              <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
                {profileImage ? (
                  <Image
                    source={{ uri: profileImage }}
                    style={styles.profileImage}
                  />
                ) : (
                  <MaterialIcons
                    name="account-circle"
                    size={100}
                    color={colors.gray}
                  />
                )}
                <Ionicons
                  name="camera"
                  size={22}
                  color="white"
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.textColor }]}>
                Best Friend's Name
              </Text>
              <TextInput
                style={[styles.textInput, { color: theme.textColor }]}
                placeholder="Enter friend's name"
                placeholderTextColor={theme.textColor}
                value={friendName}
                onChangeText={setFriendName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.textColor }]}>
                Fun Moments
              </Text>
              <TextInput
                style={[styles.textInput, { color: theme.textColor }]}
                placeholder="Enter fun moments"
                placeholderTextColor={theme.textColor}
                value={funMoments}
                onChangeText={setFunMoments}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.textColor }]}>
                Common Interests
              </Text>
              <TextInput
                style={[styles.textInput, { color: theme.textColor }]}
                placeholder="Enter common interests"
                placeholderTextColor={theme.textColor}
                value={commonInterests}
                onChangeText={setCommonInterests}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.textColor }]}>
                Shared Plans
              </Text>
              <TextInput
                style={[styles.textInput, { color: theme.textColor }]}
                placeholder="Enter shared plans"
                placeholderTextColor={theme.textColor}
                value={sharedPlans}
                onChangeText={setSharedPlans}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.textColor }]}>
                Communication Level
              </Text>
              <TextInput
                style={[styles.textInput, { color: theme.textColor }]}
                placeholder="Enter communication level"
                placeholderTextColor={theme.textColor}
                value={communicationLevel}
                onChangeText={setCommunicationLevel}
              />
            </View>

            {/* Add Best Friend Button */}
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Best Friend</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddBestFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  profilePicContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  imageWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: colors.hotPink,
    padding: 5,
    borderRadius: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  inputContainer: {
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 7,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.hotPink,
  },
  textInput: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: colors.hotPink,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
