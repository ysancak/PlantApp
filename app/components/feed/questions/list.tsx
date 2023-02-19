import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { FontFamily, FontSize, Padding } from '@app/utils';
import Typography from '@app/components/typography';
import FeedQuestionsItem from './item';
import FeedQuestionsLoading from '@app/components/loading/feed/questions';

import { getQuestions } from '@app/services/api';
import { useSelector } from 'react-redux';
import { IQuestion } from '@app/store/slices/questions';
import { dispatchQuestions } from '@app/store/dispatch';

export type Props = {};

const FeedQuestions: React.FC<Props> = ({}) => {
  const state = useSelector(state => state);
  const [questions, setQuestions] = useState<IQuestion[] | []>([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setQuestions(state.questions.questions);
  }, [state.questions]);

  const getData = async () => {
    const result = await getQuestions();
    dispatchQuestions(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography size={FontSize.body} weight={FontFamily.medium}>
          Get Started
        </Typography>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContentContainer}>
        {questions.length > 0 ? (
          questions.map((item, index) => {
            return <FeedQuestionsItem key={`feed-questions-${index}`} image={item.image_uri} name={item.title} />;
          })
        ) : (
          <FeedQuestionsLoading />
        )}
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
