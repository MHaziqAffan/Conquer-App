import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SecondHeader from "./SecondHeader";

const SelectGender = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    
    <View style={styles.container}>
     <SecondHeader title="Select Gender" subtitle="Select your Gender" />
      <View style={styles.genderContainer}>
        <View
          style={[
            styles.iconContainer,
            selectedGender === "male" && styles.selectedMale,
          ]}
          onTouchEnd={() => setSelectedGender("male")}
        >
          <Ionicons
            name="male"
            size={100}
            color={selectedGender === "male" ? colors.blue : colors.black}
          />
          <Text>Male</Text>
        </View>
        <View
          style={[
            styles.iconContainer,
            selectedGender === "female" && styles.selectedFemale,
          ]}
          onTouchEnd={() => setSelectedGender("female")}
        >
          <Ionicons
            name="female"
            size={100}
            color={selectedGender === "female" ? colors.hotPink : colors.black}
          />
          <Text>Female</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signupButtonWrapper}
        onPress={()=>navigation.navigate('SigninScreen')}
      >
        <Text style={{ color: colors.white, fontSize: 18 }}>Continue</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default SelectGender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  // scrollContainer: {
  //   paddingVertical: 50,
  //   paddingHorizontal: 10,
  //   backgroundColor: colors.white,
  // //  flexGrow: 1,
  // },
  backButton: {
    alignSelf: "flex-start",
   // marginHorizontal: 25,
   marginLeft: 5,
   marginTop: 40,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    marginHorizontal: 25,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  welcomeText2: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginHorizontal: 25,
    color: colors.gray,
    marginBottom: 40,
    //marginTop: 10,
  },
  genderContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 30,
    alignItems: "center",
  //  marginVertical: 30,
    marginBottom: 30,
    borderRadius: 10,
  },
  selectedMale: {
    borderColor: colors.blue,
  },
  selectedFemale:{
    borderColor: colors.hotPink,
  },
  signupButtonWrapper: {
    width: 350,
    height: 60,
    backgroundColor: colors.hotPink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
   // marginVertical: 20,
  },
});
