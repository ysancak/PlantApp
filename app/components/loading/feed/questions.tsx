import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export type Props = {};

const FeedQuestionsLoading: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={200} height={164} borderRadius={12} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={200} height={164} borderRadius={12} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={200} height={164} borderRadius={12} />
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10
  }
});

export default FeedQuestionsLoading;
