import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

import { FontFamily, FontSize, Padding, Colors, Icons } from '@app/utils';
import Typography from '@app/components/typography';

export type Props = {};

const FeedPremium: React.FC<Props> = ({}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.contentContainer}>
        <Icons.PremiumMessage width={56} height={56} style={styles.icon} />
        <View style={{ flex: 1 }}>
          <MaskedView
            style={{ height: 24 }}
            maskElement={
              <Typography size={FontSize.body} weight={FontFamily.medium}>
                FREE Premium Available
              </Typography>
            }>
            <LinearGradient colors={['#E5C990', '#E4B046']} start={{ x: 0, y: 6 }} end={{ x: 1, y: 2 }} style={{ flex: 1 }} />
          </MaskedView>
          <MaskedView style={{ height: 24 }} maskElement={<Typography size={FontSize.small4}>Tap to upgrade your account!</Typography>}>
            <LinearGradient colors={['#F5C25B', '#FFDE9C']} start={{ x: 0, y: 6 }} end={{ x: 1, y: 2 }} style={{ flex: 1 }} />
          </MaskedView>
        </View>
      </View>
      <View style={{ marginTop: -6 }}>
        <Icons.PremiumArrow width={28} height={28} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Padding.container,
    backgroundColor: Colors.brown,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 8,
    paddingBottom: 2,
    justifyContent: 'space-between'
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    flex: 1
  },
  icon: {
    marginTop: 2
  }
});

export default FeedPremium;
