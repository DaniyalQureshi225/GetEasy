import {View, Text, Image, TouchableOpacity,} from 'react-native';
import React from 'react';
import {
  box,
  cam,
  email,
  loader,
  lock,
  phoneIcon,
  placeholder,
  placeholder1,
} from '../../../assets/Images';
import {signupLine1, SignUpTerm} from '../../../Components/Data';
import {Color, Fonts, FontSize, hp, wp} from '../../../Color/Color';
import AppThemeBg from '../../../Components/AppThemeBg';
import InputField from '../../../Components/InputField';
import useSignUp from './useSignUp';
import {styles} from './styles';
import TermCheck from '../../../Components/TermCheck';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';

const SignUp = ({navigation}) => {
  const {
    show,
    user,
    phone,
    check,
    emailId,
    imageUri,
    password,
    modalVisible,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
    setPassword,
    openGallery,
    setImageUri,
    setEmailId,
    setPhone,
    setCheck,
    setUser,
    Register,
  } = useSignUp({navigation});
  return (
    <>
     <AppThemeBg
      btn={true}
      btnText={'sign up'}
      logo={true}
      heading={true}
      headingText={'Sign Up'}
      onPress={() => Register()}>
      <View style={styles.container}>
        <Text style={styles.signupText}>{signupLine1}</Text>

        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Image
            source={placeholder1}
            resizeMode="contain"
            style={styles.image}
          />
        )}
        {show && !imageUri && (
          <Text style={styles.validation}>Please upload an image</Text>
        )}

        <TouchableOpacity
          onPress={() => openGallery()}
          style={styles.cameraButton}>
          <Image source={cam} resizeMode="contain" style={styles.cameraImage} />
        </TouchableOpacity>

        <InputField
          img={placeholder1}
          placeholderText={'Enter your username'}
          field={user}
          setField={setUser}
          keyboardType={'default'}
        />
        {show && !user ? (
          <Text style={styles.validation2}>Please enter username</Text>
        ) : show && user && user.trim().length < 3 ? (
          <Text style={styles.validation2}>
            Username should be at least 3 characters
          </Text>
        ) : null}

        <InputField
          img={email}
          placeholderText={'Enter your Email'} 
          field={emailId}
          setField={setEmailId}
          imgWidth={wp('5.5%')}
          imgHeight={wp('4%')}
          keyboardType={'email-address'}
          marginTop={hp('1%')}
        />
        {show && !emailId ? (
          <Text style={styles.validation2}>Please enter your email</Text>
        ) : show && emailId && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId) ? (
          <Text style={styles.validation2}>
            Please enter a valid email address
          </Text>
        ) : null}

        <InputField
          img={phoneIcon}
          placeholderText={'(999) 999-9999'} 
          field={phone}
          setField={setPhone}
          keyboardType={'numeric'}
          maxlength={14}
          phone={true}
          marginTop={hp('1%')}
        />
        {show && !phone ? (
          <Text style={styles.validation2}>Please enter your phone number</Text>
        ) : show && phone && phone.length < 14 ? (
          <Text style={styles.validation2}>
            Phone number incorrect
          </Text>
        )  : null}

        <InputField
          img={lock}
          placeholderText={'Password'}
          field={password}
          setField={setPassword}
          keyboardType={'default'}
          imgWidth={wp('5%')}
          imgHeight={wp('6%')}
          secure={true}
          marginTop={hp('1%')}
        />
        {show && !password ? (
          <Text style={styles.validation2}>Please enter your password</Text>
        ) : show && password && password.length < 8 ? (
          <Text style={styles.validation2}>
            Password must be at least 8 characters long
          </Text>
        ) : show && password && !/[A-Z]/.test(password) ? (
          <Text style={styles.validation2}>
            Password must include at least one uppercase letter
          </Text>
        ) : null}

        <InputField
          img={lock}
          placeholderText={'Confirm Password'}
          field={confirmPassword}
          setField={setConfirmPassword}
          keyboardType={'default'}
          imgWidth={wp('5%')}
          imgHeight={wp('6%')}
          secure={true}
          marginTop={hp('1%')}
        />
        {show && !confirmPassword ? (
          <Text style={styles.validation2}>Please confirm your password</Text>
        ) : show && confirmPassword && confirmPassword !== password ? (
          <Text style={styles.validation2}>Passwords do not match</Text>
        ) : null}

        <TermCheck
          onPress={() => setCheck(!check)}
          txt={SignUpTerm}
          check={check}
        />
        {show && !check ? (
          <Text style={styles.validation2}>
            Please agree to the terms and conditions.
          </Text>
        ) : null}
      </View>
     
    </AppThemeBg>
    <Modal isVisible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView source={loader} style={{ width: wp('100%'), height: wp('70%') }} autoPlay loop />
        </View>
      </Modal>
    </>
   
  );
};

export default SignUp;
