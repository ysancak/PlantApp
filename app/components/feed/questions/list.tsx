import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { FontFamily, FontSize, Padding } from '@app/utils';
import Typography from '@app/components/typography';
import FeedQuestionsItem from './item';
import FeedQuestionsLoading from '@app/components/loading/feed/questions';

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
        {/*{questions.map((item, index) => {
          return <FeedQuestionsItem key={`feed-questions-${index}`} image={item.image_uri} name={item.title} />;
        })}*/}
        <FeedQuestionsLoading />
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
  }
});

export default FeedQuestions;
