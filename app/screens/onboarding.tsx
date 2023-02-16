import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Padding } from '@app/utils';
import Button from '@app/components/button';

import Slider1 from '@app/components/onboarding-sliders/slider-1';
import Slider2 from '@app/components/onboarding-sliders/slider-2';

export type Props = {};

const bgImage = require('@app/assets/images/onboarding/bg.png');

const OnboardingScreen: React.FC<Props> = ({}) => {
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Slider2 />
        </View>
        <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.1 }} style={styles.bottomContainer}>
          <Button>Continue</Button>
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingHorizontal: Padding.container
  },
  bottomContainer: {
    paddingTop: 20,
    minHeight: 80,
    paddingHorizontal: Padding.container
  }
});

export default OnboardingScreen;
