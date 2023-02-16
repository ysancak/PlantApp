import React from 'react';
import { SafeAreaView, StyleSheet, Image, ImageBackground, Text, View } from 'react-native';

import { FontFamily, FontSize, Padding, Colors } from '@app/utils';
import Title from '@app/components/title';
import Paragraph from '@app/components/paragraph';
import Button from '@app/components/button';

export type Props = {};

const bgImage = require('@app/assets/images/get-started/bg.png');
const plantImage = require('@app/assets/images/get-started/plant.png');

const GetStartedScreen: React.FC<Props> = ({}) => {
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.valueProp}>
          <View style={styles.title}>
            <Title size={FontSize.title2}>Welcome to</Title>
            <Title weight={FontFamily.semiBold} size={FontSize.title2}>
              PlantApp
            </Title>
          </View>
          <Paragraph color={Colors.mainDark} opacity={0.7}>
            Identify more than 3000+ plants and 88% accuracy.
          </Paragraph>
        </View>

        {/* Plant Image */}
        <Image style={styles.plantImage} source={plantImage} />

        <View style={styles.actionContainer}>
          <Button>Get Started</Button>
          <View style={{ paddingHorizontal: 25 }}>
            <Paragraph color={Colors.secondary} opacity={0.7} size={FontSize.small4} align="center">
              By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.
            </Paragraph>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  valueProp: {
    paddingHorizontal: Padding.container,
    paddingTop: 20,
    gap: 8
  },
  title: {
    flexDirection: 'row',
    alignContent: 'center',
    gap: 8
  },
  plantImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 10
  },
  actionContainer: {
    paddingHorizontal: Padding.container,
    gap: 12
  }
});

export default GetStartedScreen;
