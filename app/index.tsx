import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { FontFamily, FontSize, Colors, Icons } from './utils';

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{ fontFamily: FontFamily.regular, fontSize: FontSize.title }}>Hello!</Text>
        <Icons.Vector width={120} height={120} fill={Colors.main} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24
  }
});

export default App;
