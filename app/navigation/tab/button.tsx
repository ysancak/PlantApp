import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export type Props = {
  children: JSX.Element;
  onPress: () => void;
  isFocused?: boolean;
};

const TabbarButton: React.FC<Props> = ({ children, onPress, isFocused = false }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} accessibilityRole="button" accessibilityState={isFocused ? { selected: true } : {}} onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6
  }
});

export default TabbarButton;
