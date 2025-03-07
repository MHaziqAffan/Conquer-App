import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Text, useWindowDimensions } from "react-native";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import SecondHeader from "./SecondHeader";

const EnterEmail = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <SecondHeader title="Enter Email" subtitle="Enter your email to continue." />

      <View style={styles.contentContainer}>
        <View style={styles.inputWrapper}>
        <View style={styles.emailText}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
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
  inputWrapper:{
    padding:2,
  },
  emailText:{
    width:'100%',
    padding:12,
    borderColor:colors.hotPink,
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  }

});
