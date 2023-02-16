import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { FontFamily, FontSize, Colors } from '@app/utils';
import Typography from '../typography';

// Active
export type ActiveProps = {
  period: string;
  description: string;
  badge?: string | null;
};
const ActivePrice: React.FC<ActiveProps> = ({ period, description, badge }) => {
  return (
    <LinearGradient colors={[Colors.mainDark, Colors.main]} start={{ x: 0, y: 0 }} end={{ x: 8, y: 0 }} style={{ ...styles.container, borderWidth: 2, borderColor: Colors.main }}>
      <View style={{ width: 24, height: 24, borderRadius: 24, backgroundColor: Colors.main, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 8, height: 8, borderRadius: 8, backgroundColor: Colors.white }} />
      </View>
      {badge && (
        <View style={styles.badgeContainer}>
          <Typography color={Colors.white} size={FontSize.small4} weight={FontFamily.medium}>
            {badge}
          </Typography>
        </View>
      )}
      <View style={{ gap: 4 }}>
        <Typography color={Colors.white} size={FontSize.body} weight={FontFamily.medium}>
          {period}
        </Typography>
        <Typography color={Colors.white} opacity={0.7} size={FontSize.small4}>
          {description}
        </Typography>
      </View>
    </LinearGradient>
  );
};

// Deactive
export type DeactiveProps = {
  period: string;
  description: string;
  badge?: string | null;
};
const DeactivePrice: React.FC<DeactiveProps> = ({ period, description, badge }) => {
  return (
    <View style={{ ...styles.container, borderWidth: 1, borderColor: Colors.white + '30' }}>
      <View style={{ width: 24, height: 24, borderRadius: 24, backgroundColor: Colors.white, opacity: 0.15 }} />
      {badge && (
        <View style={styles.badgeContainer}>
          <Typography color={Colors.white} size={FontSize.small4} weight={FontFamily.medium}>
            {badge}
          </Typography>
        </View>
      )}
      <View style={{ gap: 4 }}>
        <Typography color={Colors.white} size={FontSize.body} weight={FontFamily.medium}>
          {period}
        </Typography>
        <Typography color={Colors.white} opacity={0.7} size={FontSize.small4}>
          {description}
        </Typography>
      </View>
    </View>
  );
};

export type Props = {
  active?: boolean;
  period: string;
  description: string;
  badge?: string | null;
  onPress: () => void;
};

const PaywallPrice: React.FC<Props> = ({ active, period, description, badge, onPress }) => {
  if (active) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <ActivePrice period={period} description={description} badge={badge} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <DeactivePrice period={period} description={description} badge={badge} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  badgeContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: Colors.main,
    padding: 8,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 14
  }
});

export default PaywallPrice;
