import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import { FontFamily, FontSize, Padding } from '@app/utils';
import Typography from '../typography';

export type Props = {};

const bgImage = require('@app/assets/images/onboarding/slider-2-blur.png');
const sliderMain = require('@app/assets/images/onboarding/slider-2.png');
const artwork = require('@app/assets/images/onboarding/slider-2-artwork.png');

const OnboardingSlider2: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography weight={FontFamily.medium} size={FontSize.title2}>
          Get plant
        </Typography>
        <Typography weight={FontFamily.extraBold} size={FontSize.title2} underline>
          care guides
        </Typography>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground source={bgImage} style={styles.imageBackground} resizeMode="cover">
          <Image style={styles.sliderMainImage} resizeMode="contain" source={sliderMain} />
          <Image style={styles.artworkImage} resizeMode="contain" source={artwork} />
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
  },
  title: {
    flex: 1
  },
  imageContainer: {
    flex: 1
  },
  imageBackground: {
    flex: 1
  },
  sliderMainImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    bottom: -80
  },
  artworkImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 40,
    right: 20
  }
});

export default OnboardingSlider2;
