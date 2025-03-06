import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const VerificationCode = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  const navigation = useNavigation();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
  
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  const handleKeyPress = (index, event) => {
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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

    
      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>We have sent code to your email</Text>
      <Text style={styles.phoneNumber}>abc@example.com</Text>

     
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={[styles.otpInput, digit ? styles.filledOtp : null]}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(index, value)}
            onKeyPress={(event) => handleKeyPress(index, event)}
          />
        ))}
      </View>

    
      <Text style={styles.resendText}>
        Resend it{" "}
        <Text style={styles.timerText}>
          {timer > 0 ? `00:${timer}s` : "Now"}
        </Text>
      </Text>

    
      <TouchableOpacity style={styles.verifyButton} onPress={()=>navigation.navigate("Signup")}>
        <Text style={styles.verifyText} >Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationCode;

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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    alignSelf:"flex-start",
    paddingHorizontal:25
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 5,
    alignSelf:"flex-start",
    paddingHorizontal:25,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray,
    marginBottom: 20,
    alignSelf:"flex-start",
    paddingHorizontal:25,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  otpInput: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.hotPink,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color:colors.white,
    marginHorizontal: 5,
  },
  filledOtp: {
    backgroundColor: colors.hotPink,
    color: "#FFF",
  },
  resendText: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  timerText: {
    color: colors.hotPink,
    fontWeight: "bold",
  },
  verifyButton: {
    width: 350,
    height: 60,
    backgroundColor: colors.hotPink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  verifyText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
