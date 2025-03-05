import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from "../screen/SettingsPage";  
import UpdateProfile from "../screen/UpdateProfile";  
import Theme from "../screen/Theme";


const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsPage" component={SettingsPage} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="Theme" component={Theme} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
