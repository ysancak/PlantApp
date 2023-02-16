import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { FontFamily, FontSize, Colors } from '@app/utils';

export type Props = {
  weight?: FontFamily.light | FontFamily.regular | FontFamily.medium | FontFamily.bold | FontFamily.semiBold | FontFamily.extraBold;
  size?: FontSize.smallTitle | FontSize.title | FontSize.title2 | FontSize.small4;
  color?: Colors;
  opacity?: number;
  underline?: boolean;
  children: string;
};

const Title: React.FC<Props> = ({ weight = FontFamily.regular, size = FontSize.title, color = Colors.black, opacity = 1, underline = false, children }) => {
  if (underline) {
    return (
      <View>
        <Text style={{ fontFamily: weight, fontSize: size, opacity, color }}>{children}</Text>
        <Image style={styles.underlineImage} source={require('@app/assets/images/general/brush-line.png')} />
      </View>
    );
  }
  return <Text style={{ fontFamily: weight, fontSize: size, opacity, color }}>{children}</Text>;
};

const styles = StyleSheet.create({
  underlineImage: {
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -30
  }
});

export default Title;
