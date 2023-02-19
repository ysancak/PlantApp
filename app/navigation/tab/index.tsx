import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tabbar from './tabbar';

// Screens
import HomeScreen from '@app/screens/home';

interface IScreenOptions {
  headerShown: boolean;
}

const screenOptions: IScreenOptions = {
  headerShown: false
};

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator tabBar={Tabbar} screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diagnose" component={HomeScreen} />
      <Tab.Screen name="Scan" component={HomeScreen} />
      <Tab.Screen name="My Garden" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
