import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SelectGender = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color={colors.gray}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.welcomeText}>Select Gender</Text>
      <Text style={styles.welcomeText2}>Select your gender</Text>
      <View style={styles.genderContainer}>
        <View
          style={[
            styles.iconContainer,
            selectedGender === "male" && styles.selected,
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
            selectedGender === "female" && styles.selected,
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
  backButton: {
    alignSelf: "flex-start",
    marginHorizontal: 25,
    marginTop: 60,
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
    marginTop: 10,
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
    marginVertical: 30,
    borderRadius: 10,
  },
  selected: {
    borderColor: colors.hotPink,
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
