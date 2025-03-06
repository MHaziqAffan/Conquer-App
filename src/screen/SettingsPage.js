import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme); 

  const settingsOptions = [
    { name: "Account", icon: "person-outline", screen: "UpdateProfile" },
    { name: "Notification", icon: "notifications-outline", screen: "NotificationSettings" },
    { name: "Display", icon: "color-palette-outline", screen: "Theme" },
    { name: "Premium Account", icon: "star-outline", screen: "PremiumAccount" },
    { name: "Logout", icon: "log-out-outline", screen: "OnBoarding" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}> 
      <View style={[styles.header, { backgroundColor: theme.backgroundColor }]}> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" style={styles.backButton} color={theme.textColor} size={24} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.textColor }]}>Settings</Text>
      </View>
      
      {settingsOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => navigation.navigate(option.screen)}
        >
          <Ionicons name={option.icon} size={24} color={theme.textColor} style={styles.icon} />
          <Text style={[styles.optionText, { color: theme.textColor }]}>{option.name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate(option.screen)}>
            <Ionicons name="chevron-forward" size={20} color={theme.textColor} />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: "center",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  //  position: 'relative', 
  },
  backButton: {
    position: 'absolute', 
    left: 0, 
    zIndex: 1, 
  },
  headerText: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    flex: 1,
  },
});
