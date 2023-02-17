import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { SimpleGrid } from 'react-native-super-grid';

import { Colors, Padding } from '@app/utils';

export type Props = {};
const windowWidth = Dimensions.get('window').width;

const FeedCategoriesLoading: React.FC<Props> = ({}) => {
  return (
    <SimpleGrid
      listKey={'id'}
      spacing={10}
      style={styles.container}
      data={[1, 2, 3, 4, 5, 6]}
      maxItemsPerRow={2}
      renderItem={() => (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={windowWidth / 2 - Padding.container - 5} height={windowWidth / 2 - Padding.container * 2} borderRadius={12} />
        </SkeletonPlaceholder>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Padding.container - 10,
    marginVertical: -10
  }
});

export default FeedCategoriesLoading;
