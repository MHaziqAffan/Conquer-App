import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";

const OnBoarding = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        enabled
      >
       
          <View style={styles.container}>
          
            <Image source={require("../assets/logo.png")} style={styles.logo} />
          </View>
       
        <View style={styles.partnerContainer}>
          <Text style={styles.title}>Conquer: Where Reflection Meets Connection</Text>
         

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")} 
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF5F7", 
  },
 
  container: {
    alignItems: "center",
  },
  logo: {
    width: 450, 
    height: 450,
    resizeMode: 'contain',
   // marginBottom: 100
  },
  partnerContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 20, 
    left: 20,   
    right: 20,  
    width: "90%", 
    height: 250,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: colors.darkGray,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: colors.hotPink,
    width: 5,
    height: 15,
    borderRadius:10
  },
  button: {
    backgroundColor: colors.hotPink, // Pink background for the button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 'auto',
    width: "100%",
    height:60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
