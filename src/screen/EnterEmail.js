import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Text, useWindowDimensions } from "react-native";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import SecondHeader from "./SecondHeader";

const EnterEmail = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();  

  return (
    <View style={styles.container}>
      
      <SecondHeader title="Enter Email" subtitle="Enter your email to continue." />

      <View style={styles.contentContainer}>
        <View style={styles.inputContainer(width)}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity
          style={styles.signupButtonWrapper}
          onPress={() => navigation.navigate("VerificationCode")}
        >
          <Text style={{ color: colors.white, fontSize: 18 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "flex-start",
  },
  contentContainer: {
    width: "90%",
    marginHorizontal: 20,
  },
  inputContainer: (screenWidth) => ({
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: screenWidth * 0.05,
    padding: screenWidth * 0.01,  
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.hotPink,
  }),
  textInput: {
    width: "100%",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  signupButtonWrapper: {
    width: "100%",
    height: 60,
    backgroundColor: colors.hotPink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
