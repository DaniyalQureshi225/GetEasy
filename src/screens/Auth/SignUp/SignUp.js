import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  box,
  cam,
  email,
  lock,
  phoneIcon,
  placeholder,
} from '../../../assets/Images';
import { signupLine1, SignUpTerm} from '../../../Components/Data';
import { wp} from '../../../Color/Color';
import AppThemeBg from '../../../Components/AppThemeBg';
import InputField from '../../../Components/InputField';
import useSignUp from './useSignUp';
import {styles} from './styles';
import TermCheck from '../../../Components/TermCheck';

const SignUp = ({navigation}) => {
  const {
    user,
    phone,
    emailId,
    imageUri,
    password,
    confirmPassword,
    setConfirmPassword,
    TermsAndCondition,
    setPassword,
    openGallery,
    setImageUri,
    setEmailId,
    setPhone,
    setUser,
  } = useSignUp({navigation});

  return (
    <AppThemeBg
      btn={true}
      btnText={'sign up'}
      logo={true}
      heading={true}
      headingText={'Sign Up'}
      onPress={() => TermsAndCondition()}>
      <View style={styles.container}>
        <Text style={styles.signupText}>{signupLine1}</Text>

        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Image
            source={placeholder}
            resizeMode="contain"
            style={styles.image}
          />
        )}

        <TouchableOpacity
          onPress={() => openGallery()}
          style={styles.cameraButton}>
          <Image source={cam} resizeMode="contain" style={styles.cameraImage} />
        </TouchableOpacity>

        <InputField
          img={placeholder}
          placeholderText={'Enter your username'}
          field={user}
          setField={setUser}
          keyboardType={'default'}
        />
        <InputField
          img={email}
          placeholderText={'Enter your Email'}
          field={emailId}
          setField={setEmailId}
          imgWidth={wp('5.5%')}
          imgHeight={wp('4%')}
          keyboardType={'email-address'}
        />
        <InputField
          img={phoneIcon}
          placeholderText={'Phone Number'}
          field={phone}
          setField={setPhone}
          keyboardType={'numeric'}
          maxlength={11}
        />
        <InputField
          img={lock}
          placeholderText={'Password'}
          field={password}
          setField={setPassword}
          keyboardType={'default'}
          imgWidth={wp('5%')}
          imgHeight={wp('6%')}
          secure={true}
        />
        <InputField
          img={lock}
          placeholderText={'Confirm Password'}
          field={confirmPassword}
          setField={setConfirmPassword}
          keyboardType={'default'}
          imgWidth={wp('5%')}
          imgHeight={wp('6%')}
          secure={true}
        />

        <TermCheck txt={SignUpTerm}/>
      </View>
    </AppThemeBg>
  );
};

export default SignUp;
