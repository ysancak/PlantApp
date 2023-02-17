import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { FontFamily, FontSize, Colors } from '@app/utils';

export type Props = {
  weight?: FontFamily;
  size?: FontSize;
  color?: Colors;
  align?: 'left' | 'center' | 'right' | 'auto' | 'justify';
  opacity?: number;
  underline?: boolean;
  children: string;
};

const Typography: React.FC<Props> = ({ weight = FontFamily.regular, size = FontSize.body, color = Colors.mainDark, align = 'left', opacity = 1, underline = false, children }) => {
  if (underline) {
    return (
      <View>
        <Text style={{ fontFamily: weight, fontSize: size, opacity, color, textAlign: align }}>{children}</Text>
        <Image style={styles.underlineImage} source={require('@app/assets/images/general/brush-line.png')} />
      </View>
    );
  }
  return <Text style={{ fontFamily: weight, fontSize: size, opacity, color, textAlign: align }}>{children}</Text>;
};

const styles = StyleSheet.create({
  underlineImage: {
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -30
  }
});

export default Typography;
