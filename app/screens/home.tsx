import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import Typography from '@app/components/typography';
import FeedPremium from '@app/components/feed/premium';
import FeedQuestions from '@app/components/feed/questions/list';
import FeedCategories from '@app/components/feed/categories/list';
import { Colors, FontFamily, FontSize, Icons, Padding } from '@app/utils';

const headerBgImage = require('@app/assets/images/general/header-bg-1.png');

export type Props = {};

const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={headerBgImage} style={styles.imageBg}>
        <SafeAreaView style={styles.headerContainer}>
          <View style={{ marginTop: 10, gap: 4 }}>
            <Typography size={FontSize.body}>Hi, plant lover!</Typography>
            <Typography size={FontSize.titleAlternative} weight={FontFamily.medium}>
              Good Afternoon! ⛅
            </Typography>
          </View>

          <BlurView blurType="light" blurAmount={1} style={styles.searchInputContainer}>
            <Icons.Search width={24} height={24} fill="red" />
            <TextInput style={styles.searchInput} placeholder="Search for plants" />
          </BlurView>
        </SafeAreaView>
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <FeedPremium />
        <FeedQuestions />
        <FeedCategories />
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
    marginBottom: 16
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
  },
  scrollViewContentContainer: {
    paddingTop: 20,
    paddingBottom: 40,
    gap: 26
  }
});

export default HomeScreen;
