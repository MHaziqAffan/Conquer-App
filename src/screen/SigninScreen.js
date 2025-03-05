import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureEntry, setSecureEntry] = useState(true);
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
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.welcomeText}>LOGIN</Text>
      <Text style={styles.welcomeText2}>Enter your login details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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
            <SimpleLineIcons name="eye" size={20} color={colors.hotPink} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signupButtonWrapper}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={{ color: colors.white, fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Login with</Text>
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
    </View>
  );
};

export default SigninScreen;
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
  logo: {
    width: 150,
    height: 150,
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
    paddingTop: 20,
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
