import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import Typography from '@app/components/typography';
import { Colors, FontFamily, FontSize, Icons, Padding } from '@app/utils';
import FeedPremium from '@app/components/feed-premium';

const headerBgImage = require('@app/assets/images/general/header-bg-1.png');
const categories = [
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

const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={headerBgImage} style={styles.imageBg}>
        <SafeAreaView style={styles.headerContainer}>
          <Typography size={FontSize.body}>Hi, plant lover!</Typography>
          <Typography size={FontSize.titleAlternative} weight={FontFamily.medium}>
            Good Afternoon! ⛅
          </Typography>

          <BlurView blurType="light" blurAmount={1} style={styles.searchInputContainer}>
            <Icons.Search width={24} height={24} fill="red" />
            <TextInput style={styles.searchInput} placeholder="Search for plants" />
          </BlurView>
        </SafeAreaView>
      </ImageBackground>

      <ScrollView contentContainerStyle={{ paddingTop: 20, gap: 26 }}>
        <View style={{ paddingHorizontal: Padding.container }}>
          <FeedPremium />
        </View>
        <View style={{ gap: 16 }}>
          <View style={{ paddingHorizontal: Padding.container }}>
            <Typography size={FontSize.body} weight={FontFamily.medium}>
              Get Started
            </Typography>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: Padding.container, gap: 10 }}>
            {categories.map((item, index) => {
              return (
                <ImageBackground key={`category-${index}`} source={{ uri: item.image_uri }} style={{ width: 240, height: 164 }} imageStyle={{ borderRadius: 12 }}>
                  <View style={{ position: 'absolute', width: '100%', height: 60, paddingHorizontal: 12, paddingVertical: 8, bottom: 0 }}>
                    <Typography size={FontSize.body} weight={FontFamily.medium} color={Colors.white}>
                      {item.title}
                    </Typography>
                  </View>
                </ImageBackground>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginHorizontal: Padding.container,
    gap: 4,
    marginBottom: 16,
    marginTop: 60
  },
  imageBg: {
    borderBottomWidth: 1,
    borderColor: Colors.stroke + '20'
  },
  searchInputContainer: {
    backgroundColor: '#FFFFFF',
    height: 46,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.stroke + '25',
    borderWidth: 0.8,
    paddingHorizontal: 12,
    justifyContent: 'flex-start',
    marginTop: 16,
    borderRadius: 12
  },
  searchInput: {
    flex: 1,
    height: 42,
    fontSize: FontSize.smallTitle,
    fontFamily: FontFamily.regular
  }
});

export default HomeScreen;
