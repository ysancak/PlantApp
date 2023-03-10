import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { Colors, FontFamily, FontSize, Icons, Padding } from '@app/utils';
import PaywallPrice from '@app/components/paywall/paywall-price';
import PaywallValueProposition from '@app/components/paywall/paywall-value-proposition';
import Button from '@app/components/button';
import Typography from '@app/components/typography';
import { dispatchCompleteBoarding } from '@app/store/dispatch';

const windowHeight = Dimensions.get('window').height;

const bgImage = require('@app/assets/images/paywall/bg.png');
const valueProps = [
  {
    id: 0,
    icon: <Icons.Scanner width={20} height={20} fill={'#FFFFFF'} />,
    title: 'Unlimited',
    description: 'Plant Identify'
  },
  {
    id: 1,
    icon: <Icons.SpeedoMeter width={20} height={20} fill={'#FFFFFF'} />,
    title: 'Faster',
    description: 'Process'
  },
  {
    id: 2,
    icon: <Icons.Leaf width={20} height={20} fill={'#FFFFFF'} />,
    title: 'Detailed',
    description: 'Plant care'
  }
];
const periods = [
  {
    id: 0,
    period: '1 Month',
    description: '$2.99/month, auto renewable',
    badge: null,
    buttonText: 'Continue'
  },
  {
    id: 1,
    period: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    badge: 'Save 50%',
    buttonText: 'Try free for 3 days'
  }
];

export type Props = {
  navigation: NavigationProp<any, any>;
};

const PaywallScreen: React.FC<Props> = ({ navigation }) => {
  const [activePeriod, setActivePeriod] = useState<number>(0);

  const saveAndCountinue = () => {
    dispatchCompleteBoarding();
    navigation.navigate('Tabbar');
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />

      <ImageBackground source={bgImage} style={styles.imageBg}>
        <SafeAreaView>
          <TouchableOpacity activeOpacity={0.8} onPress={saveAndCountinue} style={styles.closeButtonContainer}>
            <Icons.Close width={12} height={12} fill={'#FFFFFF'} />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>

      <LinearGradient colors={[Colors.mainDark + 10, Colors.mainDark]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.18 }}>
        <SafeAreaView style={{ gap: 26 }}>
          <View style={styles.titleContainer}>
            <View style={styles.title}>
              <Typography size={FontSize.title2} weight={FontFamily.bold} color={Colors.white}>
                PlantApp
              </Typography>
              <Typography size={FontSize.title2} weight={FontFamily.regular} color={Colors.white}>
                Premium
              </Typography>
            </View>
            <Typography size={FontSize.smallTitle} color={Colors.white} opacity={0.7}>
              Access All Features
            </Typography>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.valuePropScrollview}>
            {valueProps.map((item, index) => {
              return <PaywallValueProposition key={`value-proposition-${index}`} icon={item.icon} title={item.title} description={item.description} />;
            })}
          </ScrollView>

          <View style={styles.pricePeriodContainer}>
            {periods.map((item, index) => {
              return <PaywallPrice key={`period-item-${index}`} active={activePeriod === index ? true : false} period={item.period} description={item.description} badge={item.badge} onPress={() => setActivePeriod(index)} />;
            })}
          </View>

          <View style={styles.bottomContainer}>
            <Button>{periods[activePeriod].buttonText}</Button>
            <Typography size={FontSize.small2} color={Colors.white} opacity={0.52} align="center">
              After the 3-day free trial period you???ll be charged ???274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
            </Typography>
            <Typography weight={FontFamily.medium} size={FontSize.small3} color={Colors.white} opacity={0.52} align="center">
              Terms ??? Privacy ??? Restore
            </Typography>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: Padding.container,
    marginTop: 20,
    gap: 8
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  valuePropScrollview: {
    paddingHorizontal: Padding.container,
    gap: 10
  },
  pricePeriodContainer: {
    marginHorizontal: Padding.container,
    gap: 14
  },
  bottomContainer: {
    paddingHorizontal: Padding.container,
    gap: 12
  },
  imageBg: {
    flex: 1,
    height: windowHeight
  },
  closeButtonContainer: {
    padding: 10,
    backgroundColor: '#00000040',
    borderRadius: 99,
    marginVertical: 10,
    marginHorizontal: Padding.container,
    alignSelf: 'flex-end'
  }
});

export default PaywallScreen;
