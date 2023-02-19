import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import GetStartedScreen from '@app/screens/get-started';
import OnboardingScreen from '@app/screens/onboarding';
import PaywallScreen from '@app/screens/paywall';
import TabNavigation from '@app/navigation/tab';

interface IScreenOptions {
  headerShown: boolean;
}

const screenOptions: IScreenOptions = {
  headerShown: false
};

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Paywall" component={PaywallScreen} />
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
