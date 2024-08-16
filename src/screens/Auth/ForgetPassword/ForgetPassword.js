import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {email} from '../../../assets/Images';
import {ForgetPasswordLine1} from '../../../Components/Data';
import {Color, Fonts, hp, wp} from '../../../Color/Color';
import AppThemeBg from '../../../Components/AppThemeBg';
import InputField from '../../../Components/InputField';
import {styles} from '../OTP/styles';

const ForgetPassword = ({navigation}) => {
  const [emailId, setEmailId] = useState('');

  return (
    <AppThemeBg
      btn={true}
      btnText={'continue'}
      logo={true}
      heading={true}
      headingText={'Forget Password'}
      onPress={()=>navigation.navigate('OTP')}
      >
      <View style={styles.container}>
        <Text style={styles.signupText}>{ForgetPasswordLine1}</Text>

        <View style={{marginTop: hp('15%')}}>
          <InputField
            img={email}
            placeholderText={'Enter your email'}
            field={emailId}
            setField={setEmailId}
            imgWidth={wp('5.5%')}
            imgHeight={wp('4%')}
            keyboardType={'email-address'}
          />

          <Text
            style={{
              color: Color.textGray,
              alignSelf: 'flex-start',
              marginTop: hp('3%'),
            }}>
            Go to?{' '}
            <Text onPress={()=>navigation.navigate('SignIn')} style={{color: Color.gray, fontFamily: Fonts.bold}}>
              {' '}
              Login
            </Text>
          </Text>
        </View>
      </View>
    </AppThemeBg>
  );
};

export default ForgetPassword;
