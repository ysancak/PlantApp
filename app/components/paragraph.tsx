import React from 'react';
import { Text } from 'react-native';

import { FontFamily, FontSize, Colors } from '@app/utils';

export type Props = {
  weight?: FontFamily.regular | FontFamily.semiBold | FontFamily.extraBold;
  size?: FontSize.small | FontSize.small2 | FontSize.small3 | FontSize.small4 | FontSize.body;
  color?: Colors;
  align?: 'left' | 'center' | 'right' | 'auto' | 'justify';
  underline?: boolean;
  opacity?: number;
  children: string | (string | JSX.Element)[];
};

const Paragraph: React.FC<Props> = ({ weight = FontFamily.regular, size = FontSize.body, color = Colors.black, align, opacity = 1, underline = false, children }) => {
  return <Text style={{ fontFamily: weight, lineHeight: size * 1.4, textAlign: align, fontSize: size, color, opacity, textDecorationLine: underline ? 'underline' : 'none' }}>{children}</Text>;
};

export default Paragraph;
