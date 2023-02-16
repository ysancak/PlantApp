import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { FontFamily, FontSize, Colors, Icons } from './utils';

import GetStartedScreen from './screens/get-started';

function App() {
  return <GetStartedScreen />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24
  }
});

export default App;
