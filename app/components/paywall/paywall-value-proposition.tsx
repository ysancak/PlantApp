import React from 'react';
import { StyleSheet, View } from 'react-native';

import Title from '../title';
import { FontFamily, FontSize, Colors, Icons } from '@app/utils';

export type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const PaywallValueProposition: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={{ gap: 5 }}>
        <Title size={FontSize.title} weight={FontFamily.medium} color={Colors.white}>
          {title}
        </Title>
        <Title size={FontSize.button} weight={FontFamily.regular} color={Colors.white} opacity={0.7}>
          {description}
        </Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    borderRadius: 14,
    gap: 18,
    backgroundColor: '#FFFFFF12',
    padding: 18
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#00000040',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PaywallValueProposition;
