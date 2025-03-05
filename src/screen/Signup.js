import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../utils/colors";
import { Ionicons, SimpleLineIcons,MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureEntry, setSecureEntry] = useState(true);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const navigation = useNavigation();

  // Function to Pick Image
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

  const onChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.backButton}>
              <Ionicons
                name="chevron-back-outline"
                size={30}
                color={colors.gray}
                onPress={() => navigation.goBack()}
              />
            </View>
            <Text style={styles.welcomeText}>Add Profile Details</Text>
            <Text style={styles.welcomeText2}>
            Show up, stand out! Add your info & picture.
            </Text>

            {/* Profile Picture Section */}
            <View style={styles.profilePicContainer}>
              <TouchableOpacity onPress={pickImage}>
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

            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                placeholderTextColor="gray"
                value={name}
                onChangeText={setName}
              />
            </View>

            

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your password"
                  placeholderTextColor="gray"
                  secureTextEntry={secureEntry}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                  <SimpleLineIcons
                    name="eye"
                    size={20}
                    color={colors.hotPink}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Date of Birth Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Date of Birth</Text>
              <TouchableOpacity
                style={styles.datePickerContainer}
                onPress={() => setShowPicker(true)}
              >
                <TextInput
                  style={styles.textInput}
                  placeholder="Select your date of birth"
                  placeholderTextColor="gray"
                  value={dateOfBirth.toLocaleDateString()}
                  editable={false}
                />
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color={colors.hotPink}
                />
              </TouchableOpacity>
              {showPicker && (
                <DateTimePicker
                  value={dateOfBirth}
                  mode="date"
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={styles.signupButtonWrapper}
              onPress={() => navigation.navigate("SelectGender")}
            >
              <Text style={{ color: colors.white, fontSize: 18 }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 15,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 24,
    alignSelf: "flex-start",
    marginLeft: 15,
    fontWeight: "bold",
    marginTop: 20,
  },
  welcomeText2: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 15,
    color: colors.gray,
    marginBottom: 40,
    marginTop: 10,
  },
  profilePicContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.gray,
  },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: colors.hotPink,
    padding: 6,
    borderRadius: 15,
    zIndex: 1,
  },
  inputContainer: {
    width: 350,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 7,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.hotPink,
  },
  inputLabel: {
    marginTop: 4,
    position: "absolute",
    top: 0,
    left: 10,
    fontSize: 12,
    color: colors.hotPink,
    backgroundColor: colors.white,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    fontSize: 16,
    paddingTop: 20, // Moves input below label
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signupButtonWrapper: {
    width: 350,
    height: 60,
    backgroundColor: colors.hotPink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
