import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';

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
  const state = useSelector(state => state);
  const onBoardingComplete: boolean = state.core.onBoardingComplete;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={onBoardingComplete ? 'Tabbar' : 'GetStarted'} screenOptions={screenOptions}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Paywall" component={PaywallScreen} />
        <Stack.Screen name="Tabbar" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
