import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {email} from '../../../assets/Images';
import {OTPLine1, OTPLine2, OTPLine3} from '../../../Components/Data';
import AppThemeBg from '../../../Components/AppThemeBg';
import {styles} from './styles';
import OtpTextInput from 'react-native-otp-textinput';
import {Color, Fonts, hp, wp, FontSize} from '../../../Color/Color';
import Snackbar from 'react-native-snackbar';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { loader } from '../../../assets/Images';
import { Api } from '../../../Api/Api';
import axios from 'axios';


const OTP = ({navigation, route}) => {

  const emailId = route.params
  console.log(emailId);

  
  const [otp, setOtp] = useState('');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const data = {otp:otp, email:emailId}


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

  const successSnackbar = (message) => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: Color.success,
      action: {
        text: 'Close',
        textColor: Color.primaryColor,
        onPress: () => {},
      },
    });
  };

  
  const handleSubmit = async () => {
    if (!emailId || otp.length < 4) {
      setShow(true);
      return;
    }
    
 
    setModalVisible(true);
    try {
      const response = await axios.post(
        `${Api}/verify-code`,
        { code: otp,email: emailId },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setModalVisible(false);
        console.log(response?.data?.message)
        navigation.navigate('ResetPassword', data)
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


  const reSendOtp = async () => {
    
 
    setModalVisible(true);
    try {
      const response = await axios.post(
        `${Api}/forgot-password`,
        {email: emailId },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setModalVisible(false);
        console.log(response?.data?.message)
        setTimeout(()=>{
          successSnackbar('OTP sent successfully');
        },1000)
       
      } else {
        showSnackbar('Login failed');
      }
    } catch ({error, response}) {
      setModalVisible(false);
      console.error('Error:', error);
      setTimeout(()=>{
        showSnackbar(response?.data?.message);
      },1000)
      
    }
  };

  return (
    <AppThemeBg
    backButton={true}
    onPressBack={()=>navigation.goBack()}
      btn={true}
      btnText={'continue'}
      logo={true}
      heading={true}
      headingText={'Verification Code'}
      onPress={() => handleSubmit()}>
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
         {show && !otp ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('20%')}}>Please enter otp</Text>
          ) : show && otp.length < 4 ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('20%')}}>
              Please enter a complete otp
            </Text>
          ) : null}
        <Text
          style={{
            color: Color.textGray,
            alignSelf:'center',
            marginTop: hp('3%'),
          }}>
          {OTPLine2}
          <Text onPress={()=>reSendOtp()} style={{color: Color.gray, fontFamily: Fonts.bold, textDecorationLine: 'underline'}}>
            {' '}
          {OTPLine3}
          </Text>
        </Text>
      </View>
      <Modal isVisible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView source={loader} style={{ width: wp('100%'), height: wp('70%') }} autoPlay loop />
        </View>
      </Modal>
    </AppThemeBg>
  );
};

export default OTP;
