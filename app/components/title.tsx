import React from 'react';
import { Text } from 'react-native';

import { FontFamily, FontSize } from '@app/utils';

export type Props = {
  weight?: FontFamily.regular | FontFamily.semiBold | FontFamily.extraBold;
  size?: FontSize.title | FontSize.title2;
  children: string;
};

const Title: React.FC<Props> = ({ weight = FontFamily.regular, size = FontSize.title, children }) => {
  return <Text style={{ fontFamily: weight, fontSize: size }}>{children}</Text>;
};

export default Title;
