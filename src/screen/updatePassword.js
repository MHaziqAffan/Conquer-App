import React,{useState} from "react";
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
  Platform
} from "react-native";
import { colors } from "../utils/colors";
import { Ionicons, SimpleLineIcons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const updatePassword = () => {
  const navigation = useNavigation();
   const [newPassword, setnewPassword] = useState(true);
   const [confirmPassword, setconfirmPassword] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: colors.white}}>
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
            <Image
              source={require("../assets/conquer.png")}
              style={styles.logo}
            />
              <Text style={styles.newPasswordText}>Set New Password</Text>
              <Text style={styles.passText}>Must be at least 8 characters</Text>
            <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="lock" size={24} color="black" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter new password"
                  secureTextEntry={newPassword}
                />
                <TouchableOpacity onPress={() => setnewPassword(!newPassword)}>
                  {newPassword ? (
                    <Ionicons name="eye-off-outline" size={20} color="black" />
                  ) : (
                    <Ionicons name="eye-outline" size={20} color="black" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <SimpleLineIcons name="lock" size={24} color="black" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Confirm password"
                  secureTextEntry={confirmPassword}
                />
                <TouchableOpacity onPress={() => setconfirmPassword(!confirmPassword)}>
                  {confirmPassword ? (
                    <Ionicons name="eye-off-outline" size={20} color="black" />
                  ) : (
                    <Ionicons name="eye-outline" size={20} color="black" />
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.resetButtonWrapper}>
                <Text style={styles.resetText}>Reset Password</Text>
              </TouchableOpacity>
            </View>
             <TouchableOpacity style={styles.footerContainer} onPress={() => navigation.navigate("Login")}> 
              <Ionicons name="arrow-back" size={24} color={colors.gray} />
              <Text style={styles.backText}>Back to Log in</Text>
             </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default updatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    //justifyContent: "center",
  },
  newPasswordText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  passText:{
    color: colors.gray,
    fontSize: 12,
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
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    
  },
  backText: {
    color: colors.gray,
    marginLeft: 8,
  },
  resetButtonWrapper: {
    width: "100%",
    height: 50,
    backgroundColor: colors.wineRed,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  resetText: {
    color: colors.white,
    fontSize: 18,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop:40,},
});
