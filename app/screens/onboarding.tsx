import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, View, Dimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

import { Colors, Padding } from '@app/utils';
import Button from '@app/components/button';
import Slider1 from '@app/components/onboarding-sliders/slider-1';
import Slider2 from '@app/components/onboarding-sliders/slider-2';

const bgImage = require('@app/assets/images/onboarding/bg.png');
const windowWidth = Dimensions.get('window').width;
const sliderData = [<Slider1 />, <Slider2 />];

export type Props = {
  navigation: NavigationProp<any, any>;
};

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const [activeSlider, setActiveSlider] = useState<number>(0);
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <SafeAreaView style={styles.container}>
        <Carousel loop={false} style={{ flex: 1 }} width={windowWidth} autoPlay={true} data={sliderData} onSnapToItem={index => setActiveSlider(index)} scrollAnimationDuration={600} autoPlayInterval={3000} renderItem={({ index, item }) => item} />
        <LinearGradient colors={['#FFFFFF01', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.1 }} style={styles.bottomContainer}>
          <Button onPress={() => navigation.navigate('Paywall')}>Continue</Button>
          <View style={styles.paginationContainer}>
            {sliderData.map((item, index) => {
              if (index === activeSlider) {
                return <View key={`slider-dot-${index}`} style={styles.activeDot} />;
              } else {
                return <View key={`slider-dot-${index}`} style={styles.deActiveDot} />;
              }
            })}
          </View>
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingHorizontal: Padding.container
  },
  bottomContainer: {
    minHeight: 90,
    paddingHorizontal: Padding.container
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 8
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: Colors.mainDark,
    borderRadius: 10
  },
  deActiveDot: {
    width: 6,
    height: 6,
    backgroundColor: Colors.mainDark,
    opacity: 0.25,
    borderRadius: 6
  }
});

export default OnboardingScreen;
