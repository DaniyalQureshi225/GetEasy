// ResetPassword.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {email, lock} from '../../../assets/Images'; // Ensure paths are correct
import {
  ForgetPasswordLine1,
  ResetPasswordLine1,
} from '../../../Components/Data'; // Ensure these are defined and imported
import {Color, Fonts, hp, wp, FontSize} from '../../../Color/Color'; // Ensure these are defined and imported
import AppThemeBg from '../../../Components/AppThemeBg'; // Ensure this component is defined and imported
import InputField from '../../../Components/InputField'; // Import your InputField component
import {styles} from '../OTP/styles'; // Ensure this is defined and imported correctly
import Snackbar from 'react-native-snackbar';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { loader } from '../../../assets/Images';
import { Api } from '../../../Api/Api';
import axios from 'axios';



const ResetPassword = ({navigation, route}) => {
  const data = route.params;
  console.log(data.otp, data.email);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  const showSnackbar = (message) => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: Color.denger,
      action: {
        text: 'Close',
        textColor: Color.primaryColor,
        onPress: () => {},
      },
    });
  };


  const handleSubmit = async () => {
    if (!password || password.length < 8 || password && !/[A-Z]/.test(password)) {
      setShow(true);
      return;
    }

    if (!confirmPassword  || confirmPassword.length < 8 || confirmPassword && !/[A-Z]/.test(password) || password !== confirmPassword) {
      setShow(true);
      return;
    }
    
 
    setModalVisible(true);
    try {
      const response = await axios.post(
        `${Api}/reset-password`,
        { token: data.otp,email: data.email, password:password, password_confirmation:confirmPassword },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setModalVisible(false);
        console.log(response?.data?.message)
        navigation.navigate('PasswordReset')
      } else {
        showSnackbar('Login failed');
      }
    } catch ({error, response}) {
      setModalVisible(false);
      console.error('Error:', error);
      setTimeout(()=>{
        showSnackbar(response?.data?.error);
      },1000)
      
    }
  };


  return (
    <AppThemeBg
      btn={true}
      btnText={'update password'}
      logo={true}
      heading={true}
      headingText={'Reset Password'}
      onPress={() => handleSubmit()}>
      <View style={styles.container}>
        <Text style={styles.signupText}>{ResetPasswordLine1}</Text>

        <View style={{marginTop: hp('3%')}}>
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
          {show && !password ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('10%')}}>Please enter your password</Text>
          ) : show && password && password.length < 8 ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('10%')}}>
              Password must be at least 8 characters long
            </Text>
          ) : show && password && !/[A-Z]/.test(password) ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('10%')}}>
              Password must include at least one uppercase letter
            </Text>
          ) : null}
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
          {show && !confirmPassword ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('10%')}}>Please confirm your password</Text>
          ) : show && confirmPassword && confirmPassword !== password ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('10%')}}>Passwords do not match</Text>
          ) : null}
          <Text
            style={{
              color: Color.textGray,
              alignSelf: 'flex-start',
              marginTop: hp('5%'),
            }}>
            Go to?{' '}
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={{
                color: Color.gray,
                fontFamily: Fonts.bold,
                textDecorationLine: 'underline',
              }}>
              {' '}
              Login
            </Text>
          </Text>
        </View>
      </View>
      <Modal isVisible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView source={loader} style={{ width: wp('100%'), height: wp('70%') }} autoPlay loop />
        </View>
      </Modal>
    </AppThemeBg>
  );
};

export default ResetPassword;
