import { StyleSheet, Text, View, TouchableOpacity,TextInput } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const EnterEmail = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
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
      <Text style={styles.welcomeText}>Enter Email</Text>
      <Text style={styles.welcomeText2}>
        Enter your email to continue
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <TouchableOpacity style={styles.signupButtonWrapper} onPress={()=>navigation.navigate("VerificationCode")}>
        <Text style={{ color: colors.white, fontSize: 18 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnterEmail;

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
    marginBottom: 10,
    marginTop: 10,
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
  inputContainer: {
    width: 350,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 7,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.hotPink,
  },
});
