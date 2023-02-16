import Title from '@app/components/title';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { FontFamily, FontSize, Padding } from '@app/utils';

export type Props = {};

const sliderMain = require('@app/assets/images/onboarding/slider-1.png');

const OnboardingSlider1: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title weight={FontFamily.medium} size={FontSize.title2}>
          Take a photo to
        </Title>
        <Title weight={FontFamily.extraBold} size={FontSize.title2} underline>
          identify
        </Title>
        <Title weight={FontFamily.medium} size={FontSize.title2}>
          the plant!
        </Title>
      </View>
      <View style={{ flex: 1 }}>
        <Image style={styles.mainImage} source={sliderMain} />
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
  mainImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default OnboardingSlider1;
