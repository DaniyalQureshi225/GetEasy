import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppThemeBlue from '../../../Components/AppThemeBlue';
import {Color, Fonts, FontSize, hp, wp} from '../../../Color/Color';
import {PasswordReset, PasswordResetTex} from '../../../Components/Data';
import Appbtn from '../../../Components/Appbtn';
import InputField from '../../../Components/InputField';
import {key, placeholder} from '../../../assets/Images';
import TransparentBtn from '../../../Components/TransparentBtn';

const SignIn = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')
  return (
    <AppThemeBlue
      closeBtn={false}
      onPressBack={() => navigation.goBack()}
      logo={true}
      heading={true}
      btn={false}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: wp('5%'),
        }}>
        <Text
          style={{
            marginTop: hp('20%'),
            fontFamily: Fonts.bold,
            fontSize: FontSize.font20,
            color: Color.white,
          }}>
          Welcome
        </Text>
        <Text
          style={{
            color: Color.white,
            fontSize: FontSize.font14,
            marginBottom: hp('1%'),
          }}>
          You're a new user? Join us now!
        </Text>
        <Appbtn onPress={()=>navigation.navigate('SignUp')} mb={'5%'} btnText={'Sign Up'} />

        <InputField
          label={true}
          labelTex={'Username'}
          img={placeholder}
          placeholderText={'Enter your username'}
          field={user}
          setField={setUser}
          keyboardType={'default'}
          marginTop={hp('0%')}
          blueTheme={true}
        />

        <InputField
          label={true}
          labelTex={'Password'}
          img={key}
          placeholderText={'Enter your password'}
          field={password}
          setField={setPassword}
          keyboardType={'default'}
          marginTop={hp('1%')}
          blueTheme={true}
          secure={true}
        />

        <TransparentBtn onPress={()=>navigation.navigate('LookingFor')} mb={hp('0%')} mt={hp('5%')} text={'Login'} />

        <Text
          style={{
            marginTop: hp('0%'),
            color: Color.white,
            fontSize: FontSize.font14,
          }}>
          Forget Password{' '}
          <Text onPress={()=>navigation.navigate('ForgetPassword')}
            style={{fontFamily: Fonts.bold, textDecorationLine: 'underline'}}>
            Click Here
          </Text>
        </Text>
      </View>
    </AppThemeBlue>
  );
};

export default SignIn;
