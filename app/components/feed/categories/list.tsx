import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { Padding } from '@app/utils';
import FeedCategoriesItem from './item';

const categories = [
  {
    id: 11,
    name: 'fern',
    createdAt: '2023-01-11T10:53:05.801Z',
    updatedAt: '2023-01-11T10:54:30.059Z',
    publishedAt: '2023-01-11T10:53:07.416Z',
    title: 'Ferns',
    rank: 0,
    image: {
      id: 23,
      name: '6.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '6_edbcc6988a',
      ext: '.png',
      mime: 'image/png',
      size: 8.24,
      url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:44:46.151Z',
      updatedAt: '2023-01-11T10:44:46.151Z'
    }
  },
  {
    id: 10,
    name: 'cacti-and-succulent',
    createdAt: '2023-01-11T10:52:28.521Z',
    updatedAt: '2023-01-11T10:54:39.391Z',
    publishedAt: '2023-01-11T10:52:36.428Z',
    title: 'Cacti and Succulents',
    rank: 1,
    image: {
      id: 25,
      name: '5.png',
      alternativeText: null,
      caption: null,
      width: 158,
      height: 152,
      formats: null,
      hash: '5_d2384a3938',
      ext: '.png',
      mime: 'image/png',
      size: 10.01,
      url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:50:17.828Z',
      updatedAt: '2023-01-11T10:51:05.935Z'
    }
  },
  {
    id: 4,
    name: 'flowering',
    createdAt: '2023-01-11T10:44:18.862Z',
    updatedAt: '2023-01-11T10:54:54.326Z',
    publishedAt: '2023-01-11T10:44:20.185Z',
    title: 'Flowering Plants',
    rank: 2,
    image: {
      id: 22,
      name: '2.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '2_4a226c9ae7',
      ext: '.png',
      mime: 'image/png',
      size: 5.28,
      url: 'https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:44:13.779Z',
      updatedAt: '2023-01-11T10:44:13.779Z'
    }
  }
];

export type Props = {};

const FeedCategories: React.FC<Props> = ({}) => {
  return <SimpleGrid listKey={'id'} spacing={10} style={styles.container} data={categories} maxItemsPerRow={2} renderItem={({ item }) => <FeedCategoriesItem name={item.title} image={item.image.url} />} />;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Padding.container - 10,
    marginVertical: -10
  }
});

export default FeedCategories;
