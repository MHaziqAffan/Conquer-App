import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import SplashScreen from './src/screen/SplashScreen';
import Signup from './src/screen/Signup';
import TabNavigator from './src/Navigation/TabNavigator';
import LoginScreen from './src/screen/LoginScreen';
import EventsPage from './src/screen/EventsPage';
import AddEvent from './src/screen/AddeventsPage';
import UpdateProfile from './src/screen/UpdateProfile';
import Theme from './src/screen/Theme';
import ForgetPassword from './src/screen/ForgotPassword';
import selectGender from './src/screen/SelectGender';
import EnterEmail from './src/screen/EnterEmail';
import OnBoarding from './src/screen/OnBoarding';
import VerificationCode from './src/screen/VerificationCode';
import SigninScreen from './src/screen/SigninScreen';
import AddBestFriend from './src/screen/AddBestFriend';
import AddCrush from './src/screen/AddCrush';
import Relationship from './src/screen/Realationship';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={OnBoarding}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="EventsPage" component={EventsPage} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="SelectGender" component={selectGender} />
        <Stack.Screen name="EnterEmail" component={EnterEmail} />
        <Stack.Screen name="VerificationCode" component={VerificationCode}/>
        <Stack.Screen name="SigninScreen" component={SigninScreen}/>
        <Stack.Screen name="AddCrush" component={AddCrush}/>
        <Stack.Screen name="AddBestFriend" component={AddBestFriend}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
});
