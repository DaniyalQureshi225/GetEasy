import {View, Text} from 'react-native';
import React from 'react';
import AppThemeBlue from '../../../Components/AppThemeBlue';
import {Color, Fonts, FontSize, hp, wp} from '../../../Color/Color';
import { PasswordReset, PasswordResetTex } from '../../../Components/Data';
import LottieView from 'lottie-react-native';
import { check } from '../../../assets/Images';

const PassworReset = ({navigation}) => {
  return (
    <AppThemeBlue
      closeBtn={true}
      onPressBack={() => navigation.goBack()}
      btn={true}
      btnText={'sign in now'}
      logo={true}
      heading={true}
      onPress={() => navigation.navigate('SignIn')}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: wp('5%'),
        }}>
           <LottieView
      source={check}
     style={{width:wp('100%'), height:wp('70%'), marginTop: hp('20%')}}
      autoPlay
      loop
    />
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: FontSize.font24,
            color: Color.white,
            marginTop: hp('10%'),
          }}>
          {PasswordReset}
        </Text>
        <Text
          style={{
            color: Color.white,
            marginTop: hp('2%'),
            fontSize: FontSize.font16,
            width: wp('60%'),
            textAlign: 'center',
          }}>
          {PasswordResetTex}
        </Text>
      </View>
    </AppThemeBlue>
  );
};

export default PassworReset;
