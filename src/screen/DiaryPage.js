import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import React from "react";
import { colors } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const DiaryPage = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);
  return (
    <ScrollView>
      <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
        <View
          style={[styles.header, { backgroundColor: theme.backgroundColor }]}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              style={styles.backButton}
              color={theme.textColor}
              size={24}
            />
          </TouchableOpacity>
          <Text style={[styles.headerText, { color: theme.textColor }]}>
            Diary
          </Text>
        </View>

        <View style={styles.addbox}>
          <Text style={[styles.innertext,{color:theme.textColor}]}>Add Your Thoughts</Text>
          <TextInput
            style={styles.inputtext1}
            placeholder="Enter Title Here..."
          />
          <TextInput
            style={styles.inputtext2}
            placeholder="Enter Your thoughts here..."
          />
          <View style={styles.attachmentContainer}>
            <Ionicons name="attach-outline" size={24} color={colors.black} />
            <TouchableOpacity style={styles.submitButtonOutline}>
              <Text style={styles.submitButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[styles.heading,{color:theme.textColor}]}>Own Diaries Notes</Text>
        <View style={styles.Notescontainer}>
          <View style={[styles.diary ,{color:theme.textColor}]}>
            <Text style={[styles.time ,{color:theme.textColor}]}>Jan 18, 2025 - 6:00 PM</Text>
            <Text style={[styles.title ,{color:theme.textColor}]}>Enjoy with Diana</Text>
            <Text style={[styles.note ,{color:theme.textColor}]}>
              Highlight the most recent diary entries. It will show just a title
              and date with the option to view the full entry.
            </Text>
          </View>
        </View>

        <Text style={[styles.heading,{color:theme.textColor}]}>Own Diaries Videos</Text>

        <View style={styles.videoNotescontainer}>
          <ImageBackground
            source={require("../assets/date.jpg")}
            style={styles.videos}
            imageStyle={{ borderRadius: 12 }}
            blurRadius={30}
            resizeMode="cover"
          >
            <View style={styles.videoContent}>
              <View style={styles.playbutton}>
                <Text style={styles.videoTitle}>My Video Diary</Text>
                <Ionicons
                  size={30}
                  color={colors.white}
                  name="play-circle"
                ></Ionicons>
              </View>
              <Text style={styles.videoNote}>
                A collection of personal moments captured in video form.
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/date.jpg")}
            style={styles.videos}
            imageStyle={{ borderRadius: 12 }}
            blurRadius={30}
            resizeMode="cover"
          >
            <View style={styles.videoContent}>
              <View style={styles.playbutton}>
                <Text style={styles.videoTitle}>My Video Diary</Text>
                <Ionicons
                  size={30}
                  color={colors.white}
                  name="play-circle"
                ></Ionicons>
              </View>
              <Text style={styles.videoNote}>
                A collection of personal moments captured in video form.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default DiaryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addbox: {
    backgroundColor: colors.mintGreen,
    width: "90%",
    borderRadius: 12,
    marginBottom: 10,
    alignSelf: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
    position: "relative",
    padding: 20,
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
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 15,
  },
  diary: {
    backgroundColor: colors.skyBlue,
    width: "90%",
    borderRadius: 12,
    marginVertical: 10,
    alignSelf: "center",
    padding: 20,
  },
  innertext: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  inputtext1: {
    backgroundColor: colors.inputBackground,
    height: 40,
    width: "100%",
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  inputtext2: {
    backgroundColor: colors.inputBackground,
    height: 79,
    width: "100%",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  attachmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  submitButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
  },
  submitButtonOutline: {
    backgroundColor: colors.buttonBackground,
    width: 100,
    height: 40,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1D2D3D",
    marginVertical: 5,
    fontFamily: "American Typewriter",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D2D3D",
    marginVertical: 5,
    fontFamily: "Roboto",
  },
  note: {
    fontSize: 14,
    color: colors.gray,
    marginVertical: 5,
    fontFamily: "American Typewriter",
  },
  videos: {
    height: 116,
    width: 370,
    borderRadius: 12,
    marginVertical: 10,
    alignSelf: "center",
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: colors.skyBlue,
  },
  videoContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
    padding: 10,
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  videoNote: {
    fontSize: 12,
    color: colors.white,
    textAlign: "start",
    marginTop: 5,
    fontFamily: "American Typewriter",
  },
  playbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
