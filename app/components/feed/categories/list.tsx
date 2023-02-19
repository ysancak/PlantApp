import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { Padding } from '@app/utils';
import FeedCategoriesItem from './item';
import FeedCategoriesLoading from '@app/components/loading/feed/categories';

import { getCategories } from '@app/services/api';
import { useSelector } from 'react-redux';
import { ICategory } from '@app/store/slices/categories';

export type Props = {};

const FeedCategories: React.FC<Props> = ({}) => {
  const state = useSelector(state => state);
  const [categories, setCategories] = useState<ICategory[] | []>([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCategories(state.categories.categories);
  }, [state.categories]);

  if (categories.length > 0) {
    return <SimpleGrid listKey={'id'} spacing={10} style={styles.container} data={categories} maxItemsPerRow={2} renderItem={({ item }) => <FeedCategoriesItem name={item.title} image={item.image.url} />} />;
  } else {
    return <FeedCategoriesLoading />;
  }
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Padding.container - 10,
    marginVertical: -10
  }
});

export default FeedCategories;
