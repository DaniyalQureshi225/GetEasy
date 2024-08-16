// ResetPassword.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { email, lock } from '../../../assets/Images'; // Ensure paths are correct
import { ForgetPasswordLine1, ResetPasswordLine1 } from '../../../Components/Data'; // Ensure these are defined and imported
import { Color, Fonts, hp, wp } from '../../../Color/Color'; // Ensure these are defined and imported
import AppThemeBg from '../../../Components/AppThemeBg'; // Ensure this component is defined and imported
import InputField from '../../../Components/InputField'; // Import your InputField component
import { styles } from '../OTP/styles'; // Ensure this is defined and imported correctly

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Fixed typo from 'setConiremPassword'

  return (
    <AppThemeBg
      btn={true}
      btnText={'update password'}
      logo={true}
      heading={true}
      headingText={'Reset Password'}
      onPress={() => navigation.navigate('PasswordReset')}
    >
      <View style={styles.container}>
        <Text style={styles.signupText}>{ResetPasswordLine1}</Text>

        <View style={{ marginTop: hp('3%') }}>
          <InputField
            img={lock}
            placeholderText={'Password'}
            field={password}
            secure={true}
            setField={setPassword}
            keyboardType={'default'} 
            imgWidth={wp('5%')}
            imgHeight={wp('6%')}
          />
          <InputField
            img={lock}
            placeholderText={'Confirm Password'}
            field={confirmPassword}
            setField={setConfirmPassword}
            secure={true}
            keyboardType={'default'}
            imgWidth={wp('5%')}
            imgHeight={wp('6%')}
          />

          <Text
            style={{
              color: Color.textGray,
              alignSelf: 'flex-start',
              marginTop: hp('5%'),
            }}
          >
            Go to?{' '}
            <Text onPress={()=>navigation.navigate('SignIn')} style={{ color: Color.gray, fontFamily: Fonts.bold }}>
              {' '}
              Login
            </Text>
          </Text>
        </View>
      </View>
    </AppThemeBg>
  );
};

export default ResetPassword;
