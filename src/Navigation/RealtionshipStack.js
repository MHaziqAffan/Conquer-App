import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import Relationship from '../screen/Realationship';
import AddBestFriend from '../screen/AddBestFriend';
import AddCrush from '../screen/AddCrush';

const RealtionshipStack = () => {
const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RelationshipScreen" component={Relationship} />
      <Stack.Screen name="AddCrush" component={AddCrush} />
      <Stack.Screen name="AddBestFriend" component={AddBestFriend} />
    </Stack.Navigator>
  )
}

export default RealtionshipStack
