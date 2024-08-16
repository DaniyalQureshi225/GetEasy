import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {email} from '../../../assets/Images';
import {OTPLine1, OTPLine2, OTPLine3} from '../../../Components/Data';
import AppThemeBg from '../../../Components/AppThemeBg';
import {styles} from './styles';
import OtpTextInput from 'react-native-otp-textinput';
import {Color, Fonts, hp, wp} from '../../../Color/Color';

const OTP = ({navigation}) => {
  const [emailId, setEmailId] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <AppThemeBg
      btn={true}
      btnText={'continue'}
      logo={true}
      heading={true}
      headingText={'Verification Code'}
      onPress={() => navigation.navigate('ResetPassword')}>
      <View style={styles.container}>
        <Text style={styles.signupText}>{OTPLine1}</Text>

        <OtpTextInput
          handleTextChange={text => setOtp(text)}
          inputCount={4}
          textColor="#000000"
          tintColor={Color.otpBg}
          offTintColor={Color.otpBg}
          textInpu
         
          textInputStyle={{
            backgroundColor: Color.otpBg,
            borderRadius: wp('10%'),
            marginTop: hp('8%'),
            borderWidth:1,
          }}
        />

        <Text
          style={{
            color: Color.textGray,
            alignSelf:'center',
            marginTop: hp('3%'),
          }}>
          {OTPLine2}
          <Text style={{color: Color.gray, fontFamily: Fonts.bold}}>
            {' '}
          {OTPLine3}
          </Text>
        </Text>
      </View>
    </AppThemeBg>
  );
};

export default OTP;
