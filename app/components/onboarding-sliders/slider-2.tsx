import Title from '@app/components/title';
import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { FontFamily, FontSize, Padding } from '@app/utils';

export type Props = {};

const bgImage = require('@app/assets/images/onboarding/slider-2-blur.png');
const sliderMain = require('@app/assets/images/onboarding/slider-2.png');
const artwork = require('@app/assets/images/onboarding/slider-2-artwork.png');

const OnboardingSlider2: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title weight={FontFamily.medium} size={FontSize.title2}>
          Get plant
        </Title>
        <Title weight={FontFamily.extraBold} size={FontSize.title2} underline>
          care guides
        </Title>
      </View>
      <View style={{ flex: 1 }}>
        <ImageBackground source={bgImage} style={{ flex: 1 }} resizeMode="cover">
          <Image style={{ flex: 1, width: '100%', height: '100%', bottom: -80 }} resizeMode="contain" source={sliderMain} />
          <Image style={{ width: 150, height: 150, position: 'absolute', top: 40, right: 20 }} resizeMode="contain" source={artwork} />
        </ImageBackground>
      </View>
    </View>
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
  }
});

export default OnboardingSlider2;
