import React from 'react';
import { View, Text } from 'react-native';
import AppThemeBlue from '../../../Components/AppThemeBlue';
import { Color, Fonts, FontSize, hp, wp } from '../../../Color/Color';
import Appbtn from '../../../Components/Appbtn';
import InputField from '../../../Components/InputField';
import { key, placeholder1 } from '../../../assets/Images';
import TransparentBtn from '../../../Components/TransparentBtn';
import { styles } from './styles';
import useSignIn from './useSignIn';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { loader } from '../../../assets/Images';

const SignIn = ({ navigation }) => {
  const { emailId, password, show, setEmailId, setPassword, setShow, handleSubmit, modalVisible } = useSignIn({
    navigation,
    onSuccess: () => {
     
    },
  });

  return (
    <AppThemeBlue
      closeBtn={false}
      onPressBack={() => navigation.goBack()}
      logo={true}
      heading={true}
      btn={false}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: wp('5%') }}>
        <Text style={{ marginTop: hp('20%'), fontFamily: Fonts.bold, fontSize: FontSize.font20, color: Color.white }}>
          Welcome
        </Text>
        <Text style={{ color: Color.white, fontSize: FontSize.font14, marginBottom: hp('1%') }}>
          You're a new user? Join us now!
        </Text>
        <Appbtn onPress={() => navigation.navigate('SignUp')} mb={'5%'} btnText={'Sign Up'} />
        <InputField
          label={true}
          labelTex={'Email'}
          img={placeholder1}
          placeholderText={'Enter your email'}
          field={emailId}
          setField={setEmailId}
          keyboardType={'email-address'}
          marginTop={hp('0%')}
          blueTheme={true}
        />
        {show && !emailId ? (
          <Text style={styles.validation2}>Please enter your email</Text>
        ) : show && emailId && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId) ? (
          <Text style={styles.validation2}>Please enter a valid email address</Text>
        ) : null}
        <InputField
          label={true}
          labelTex={'Password'}
          img={key}
          placeholderText={'Enter your password'}
          field={password}
          setField={setPassword}
          keyboardType={'default'}
          marginTop={hp('0%')}
          blueTheme={true}
          secure={true}
        />
        {show && !password ? (
          <Text style={styles.validation2}>Please enter your password</Text>
        ) : null}
        <TransparentBtn onPress={() => handleSubmit()} mb={hp('0%')} mt={hp('5%')} text={'Login'} />
        <Text style={{ marginTop: hp('0%'), color: Color.white, fontSize: FontSize.font14 }}>
          Forget Password{' '}
          <Text onPress={() => navigation.navigate('ForgetPassword')} style={{ fontFamily: Fonts.bold, textDecorationLine: 'underline' }}>
            Click Here
          </Text>
        </Text>
      </View>
      <Modal isVisible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView source={loader} style={{ width: wp('100%'), height: wp('70%') }} autoPlay loop />
        </View>
      </Modal>
    </AppThemeBlue>
  );
};

export default SignIn;
