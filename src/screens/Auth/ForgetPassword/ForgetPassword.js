import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {email} from '../../../assets/Images';
import {ForgetPasswordLine1} from '../../../Components/Data';
import {Color, Fonts, hp, wp, FontSize} from '../../../Color/Color';
import AppThemeBg from '../../../Components/AppThemeBg';
import InputField from '../../../Components/InputField';
import {styles} from '../OTP/styles';
import Snackbar from 'react-native-snackbar';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { loader } from '../../../assets/Images';
import { Api } from '../../../Api/Api';
import axios from 'axios';


const ForgetPassword = ({navigation}) => {
  const [emailId, setEmailId] = useState('');
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
    if (!emailId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
      setShow(true);
      return;
    }
    
 
    setModalVisible(true);
    try {
      const response = await axios.post(
        `${Api}/forgot-password`,
        { email: emailId },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setModalVisible(false);
        console.log(response?.data?.code)
        navigation.navigate('OTP', emailId)
      } else {
        showSnackbar('Login failed');
      }
    } catch ({error, response}) {
      setModalVisible(false);
      console.error('Error:', error);
      setTimeout(()=>{
        showSnackbar(response?.data?.error?.length > 0 ? response?.data.error : 'Something went wrong');
      },1000)
      
    }
  };

  return (
    <AppThemeBg
      btn={true}
      btnText={'continue'}
      logo={true}
      heading={true}
      headingText={'Forget Password'}
      onPress={() => handleSubmit()}
      backButton={true}
      onPressBack={() => navigation.goBack()}>
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

          {show && !emailId ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('10%')}}>Please enter your email</Text>
          ) : show && emailId && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId) ? (
            <Text style={{color:Color.red, fontSize:FontSize.font14, fontFamily:Fonts.light, alignSelf:'flex-start', marginLeft:wp('10%')}}>
              Please enter a valid email address
            </Text>
          ) : null}

          <Text
            style={{
              color: Color.textGray,
              alignSelf: 'flex-start',
              marginTop: hp('3%'),
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

export default ForgetPassword;
