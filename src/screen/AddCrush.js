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

const AddCrush = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);
  const [crushName, setCrushName] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [firstMeetup, setFirstMeetup] = useState(new Date());
  const [textingHabits, setTextingHabits] = useState("");
  const [showPicker, setShowPicker] = useState(false);
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
            <View
              style={[
                styles.header,
                { backgroundColor: theme.backgroundColor },
              ]}
            >
              <TouchableOpacity onPress={() => navigation.navigate('RelationshipScreen')}>
                <Ionicons
                  name="arrow-back"
                  style={styles.backButton}
                  color={theme.textColor}
                  size={24}
                />
              </TouchableOpacity>
              <Text style={[styles.headerText, { color: theme.textColor }]}>
               
                Add Crush
              </Text>
            </View>
            <View>
              {/* Profile Picture Section */}
              <View style={styles.profilePicContainer}>
                <TouchableOpacity
                  onPress={pickImage}
                  style={styles.imageWrapper}
                >
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
                  Crush Name
                </Text>
                <TextInput
                  style={[styles.textInput, { color: theme.textColor }]}
                  placeholder="Enter crush name"
                  placeholderTextColor={theme.textColor}
                  value={crushName}
                  onChangeText={setCrushName}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.textColor }]}>
                  Pros
                </Text>
                <TextInput
                  style={[styles.textInput, { color: theme.textColor }]}
                  placeholder="Enter pros"
                  placeholderTextColor={theme.textColor}
                  value={pros}
                  onChangeText={setPros}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.textColor }]}>
                  Cons
                </Text>
                <TextInput
                  style={[styles.textInput, { color: theme.textColor }]}
                  placeholder="Enter cons"
                  placeholderTextColor={theme.textColor}
                  value={cons}
                  onChangeText={setCons}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.textColor }]}>
                  First Meetup Date
                </Text>
                <TouchableOpacity
                  style={styles.datePickerContainer}
                  onPress={() => setShowPicker(true)}
                >
                  <TextInput
                    style={[styles.textInput, { color: theme.textColor }]}
                    placeholder="Select date"
                    placeholderTextColor={theme.textColor}
                    value={firstMeetup.toLocaleDateString()}
                    editable={false}
                  />
                  <Ionicons
                    name="calendar-outline"
                    size={24}
                    color={colors.hotPink}
                    style={styles.dateIcon}
                  />
                </TouchableOpacity>
                {showPicker && (
                  <DateTimePicker
                    value={firstMeetup}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                      setShowPicker(false);
                      setFirstMeetup(date || firstMeetup);
                    }}
                  />
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.textColor }]}>
                  Texting Habits
                </Text>
                <TextInput
                  style={[styles.textInput, { color: theme.textColor }]}
                  placeholder="Enter texting habits"
                  placeholderTextColor={theme.textColor}
                  value={textingHabits}
                  onChangeText={setTextingHabits}
                />
              </View>

              {/* Add Crush Button */}
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Crush</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddCrush;

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
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateIcon: {
    marginLeft: 10,
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
