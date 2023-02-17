import React from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { FontFamily, Colors, Padding } from '@app/utils';
import Typography from '@app/components/typography';

const windowWidth = Dimensions.get('window').width;
export type Props = {
  name: string;
  image: string;
};

const FeedCategoriesItem: React.FC<Props> = ({ name, image }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <LinearGradient colors={['#FFFFFF', '#F9FFFA']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
        <View style={styles.titleContainer}>
          <Typography weight={FontFamily.medium}>{name}</Typography>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: Colors.stroke + 10,
    borderRadius: 12,
    height: windowWidth / 2 - Padding.container * 2
  },
  titleContainer: {
    maxWidth: '70%',
    margin: 16
  },
  image: {
    width: '85%',
    height: '85%',
    bottom: 0,
    right: 0,
    position: 'absolute'
  }
});

export default FeedCategoriesItem;
