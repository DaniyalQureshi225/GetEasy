import {View, Text} from 'react-native';
import React from 'react';
import AppThemeBlue from '../../../Components/AppThemeBlue';
import {Color, Fonts, FontSize, hp, wp} from '../../../Color/Color';
import { PasswordReset, PasswordResetTex } from '../../../Components/Data';

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
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: FontSize.font24,
            color: Color.white,
            marginTop: hp('60%'),
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
