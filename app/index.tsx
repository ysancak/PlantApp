import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hello!</Text>
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
