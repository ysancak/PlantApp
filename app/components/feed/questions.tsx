import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import { FontFamily, FontSize, Colors, Padding } from '@app/utils';
import Typography from '@app/components/typography';

const questions = [
  {
    id: 1,
    title: 'How to identify plants?',
    subtitle: 'Life Style',
    image_uri: 'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media',
    uri: 'https://plantapp.app/blog/identifying-plant-in-10-steps/',
    order: 1
  },
  {
    id: 2,
    title: 'Differences Between Species and Varieties?',
    subtitle: 'Plant Identify',
    image_uri: 'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media',
    uri: 'https://plantapp.app/blog/differences-between-species-and-varieties/',
    order: 2
  },
  {
    id: 3,
    title: 'The reasons why the same plant can look different?',
    subtitle: 'Life Style',
    image_uri: 'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media',
    uri: 'https://plantapp.app/blog/same-seeds-but-different-looking-plants/',
    order: 3
  }
];

export type Props = {};

const FeedQuestions: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography size={FontSize.body} weight={FontFamily.medium}>
          Get Started
        </Typography>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContentContainer}>
        {questions.map((item, index) => {
          return (
            <ImageBackground key={`category-${index}`} source={{ uri: item.image_uri }} style={styles.imageContainer} imageStyle={styles.imageStyle}>
              <View style={styles.questionContainer}>
                <Typography size={FontSize.body} weight={FontFamily.medium} color={Colors.white}>
                  {item.title}
                </Typography>
              </View>
            </ImageBackground>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16
  },
  titleContainer: {
    paddingHorizontal: Padding.container
  },
  scrollViewContentContainer: {
    paddingHorizontal: Padding.container,
    gap: 10
  },
  imageContainer: {
    width: 240,
    height: 164
  },
  imageStyle: {
    borderRadius: 12
  },
  questionContainer: {
    position: 'absolute',
    width: '100%',
    height: 60,
    paddingHorizontal: 12,
    paddingVertical: 8,
    bottom: 0
  }
});

export default FeedQuestions;
