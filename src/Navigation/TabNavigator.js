import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./HomeStack";
import DiaryScreen from "../screen/DiaryPage";
import SummaryScreen from "../screen/SummaryPage";
import Realationship from "./RealtionshipStack";
import SettingsScreen from "./SettingsStack";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 70,
          backgroundColor: theme.backgroundColor, 
          paddingBottom: 10,
        },
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Relationship") {
            iconName = "heart-outline";
          } else if (route.name === "Diary") {
            iconName = "book-outline";
          } else if (route.name === "Summary") {
            iconName = "document-text-outline";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.textColor, 
        tabBarInactiveTintColor: theme.inactiveTintColor, 
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Relationship" component={Realationship} />
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
