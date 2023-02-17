import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import { FontFamily, Colors, FontSize } from '@app/utils';
import Typography from '@app/components/typography';

export type Props = {
  name: string;
  image: string;
};

const FeedQuestionsItem: React.FC<Props> = ({ name, image }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <ImageBackground source={{ uri: image }} style={styles.container} imageStyle={styles.imageStyle}>
        <View style={styles.questionContainer}>
          <Typography size={FontSize.body} weight={FontFamily.medium} color={Colors.white}>
            {name}
          </Typography>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default FeedQuestionsItem;
