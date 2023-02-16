import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { FontFamily, FontSize, Colors, BorderRadius } from '@app/utils';

export type Props = {
  variant?: 'default';
  children: string;
};

const Button: React.FC<Props> = ({ variant = 'default', children }) => {
  const additionalStyles = {
    backgroundColor: Colors.main,
    color: Colors.white
  };
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ ...styles.container, backgroundColor: additionalStyles.backgroundColor }}>
      <Text style={{ ...styles.text, color: additionalStyles.color }}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: BorderRadius.medium
  },
  text: {
    fontFamily: FontFamily.semiBold,
    fontSize: FontSize.button
  }
});

export default Button;
