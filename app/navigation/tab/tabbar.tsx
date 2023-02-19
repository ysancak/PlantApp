import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import TabbarButton from './button';
import { Colors, FontFamily, FontSize, Icons } from '@app/utils';

export type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const Tabbar: React.FC<Props> = ({ state, descriptors, navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (label == 'Scan') {
            return (
              <TabbarButton key={`tabbar-item-${index}`} onPress={onPress}>
                <LinearGradient colors={[Colors.main, '#2CCC80']} start={{ x: 0, y: 0 }} end={{ x: 0.6, y: 1 }} style={styles.scanTabbarButton}>
                  <Icons.Scanner width={22} height={22} fill={Colors.white} />
                </LinearGradient>
              </TabbarButton>
            );
          }

          let icon: JSX.Element | null = null;
          switch (label) {
            case 'Home':
              icon = <Icons.Home width={22} height={22} fill={isFocused ? Colors.main : '#BDBDBD'} />;
              break;
            case 'Diagnose':
              icon = <Icons.Diagnose width={22} height={22} fill={isFocused ? Colors.main : '#BDBDBD'} />;
              break;
            case 'My Garden':
              icon = <Icons.MyGarden width={22} height={22} fill={isFocused ? Colors.main : '#BDBDBD'} />;
              break;
            case 'Profile':
              icon = <Icons.Profile width={22} height={22} fill={isFocused ? Colors.main : '#BDBDBD'} />;
              break;
            default:
              break;
          }

          return (
            <TabbarButton key={`tabbar-item-${index}`} onPress={onPress} isFocused={isFocused}>
              <>
                {icon}
                <Text style={{ ...styles.tabbarButton, color: isFocused ? Colors.main : Colors.gray2 }}>{label}</Text>
              </>
            </TabbarButton>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E3E4E3',
    height: 55,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 3
  },
  safeArea: {
    backgroundColor: '#FFFFFF'
  },
  scanTabbarButton: {
    width: 64,
    borderWidth: 4,
    marginHorizontal: 5,
    borderColor: '#FFFFFF60',
    marginTop: -36,
    height: 64,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },
  tabbarButton: {
    fontSize: FontSize.small2,
    fontFamily: FontFamily.regular
  }
});

export default Tabbar;
