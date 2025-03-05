import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { colors } from "../utils/colors";
import { Ionicons, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
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
            paddingVertical: 50,
            paddingHorizontal: 10,
            flexGrow: 1,
          }}
          bounces={false}
        >
          <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.login}>Signup to Continue</Text>
            <Text style={styles.credentials}>Login to continue</Text>
            <TouchableOpacity
              style={styles.signupButtonWrapper}
              onPress={() => navigation.navigate("EnterEmail")}
            >
              <Text style={{ color: colors.white, fontSize: 18 }}>
                Continue with Email
              </Text>
            </TouchableOpacity>
            <View style={styles.formContainer}>
            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Or Signup with</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.buttons}> 

              <TouchableOpacity style={styles.googleButtonContainer}>
                <FontAwesome name="google" size={24} color="black" />
                <Text style={styles.googleText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.googleButtonContainer}>
                <FontAwesome name="apple" size={24} color="black" />
                <Text style={styles.googleText}>Apple</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.footerContainer}>
                <Text style={styles.footerTextup}>I accept all the</Text>
                <Text style={styles.footerTextDown}>
                  Terms & Condition & Privacy Policy
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    color: colors.black,
    fontSize: 26,
    fontWeight: "bold",
    marginVertical:20,
  },
  credentials: {
    color: colors.gray,
    fontSize: 15,
    marginBottom: 20,
  },
  formContainer: {
    width: "90%",
  },

  inputContainer: {
    borderWidth: 1,
    height: "auto",
    width: "100%",
    borderRadius: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    padding: 2,
    marginVertical: 10,
  },

  continueText: {
    textAlign: "center",
    color: colors.gray,
    marginVertical: 10,
    fontSize: 14,
  },
  googleButtonContainer: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  googleText: {
    color: colors.gray,
    fontSize: 18,
    marginLeft: 10,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  footerTextup: {
    color: colors.black,
    fontSize: 14,
  },
  footerTextDown:{
    color: colors.hotPink,
    fontSize: 14,
  },
  logo: {
    width: 150,
    height: 150,
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
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.softGray,
    marginHorizontal: 10, 
  },
  orText: {
    color: colors.black,
    fontSize: 14,
    textAlign: "center",
  },
});
