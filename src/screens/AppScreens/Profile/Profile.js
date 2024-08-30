import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from "react";
import { Color, hp } from "../../../Color/Color";
import ProfileThemeBg from "../../../Components/ProfileThemeBg";
import InputField from '../../../Components/InputField';
import TermCheck from '../../../Components/TermCheck';
import { styles } from "./styles";
import { signupLine1, SignUpTerm} from '../../../Components/Data';
import useProfile from "./useProfile";
import {
    box,
    cam,
    email,
    lock,
    phoneIcon,
    placeholder,
    placeholder1,
    loader,
    check
  } from '../../../assets/Images';
  import { wp} from '../../../Color/Color';
import Appbtn from '../../../Components/Appbtn';
import {TextInputMask} from 'react-native-masked-text';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
const Profile = ({navigation}) =>{
    const {
        user,
        dataa,
        show,
        phone,
        emailId,
        imageUri,
        password,
        modalVisible,
        confirmPassword,
        setConfirmPassword,
        Register,
        setPassword,
        openGallery,
        setImageUri,
        setEmailId,
        setPhone,
        setUser,
        modalVisible2
      } = useProfile({navigation});

      

    return(
      <>
      { !dataa ? 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView source={loader} style={{ width: wp('100%'), height: wp('70%') }} autoPlay loop />
        </View> : 
      
      <ProfileThemeBg
      backButton={true}
      text={'Profile'}
      onPressBack={()=>navigation.goBack()}
      img={dataa ? {uri:dataa?.avatar} : placeholder }
      >
       
     <View style={styles.container}>
     

       {imageUri ? (
         <Image source={{uri: imageUri}} style={styles.image} />
       ) : (
         <Image
           source={placeholder}
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
       ) : show && user && user.trim().length < 3  ? (
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
         editable={false}
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
            Phone number must be at least 11 digits long
          </Text>
        )  : null}

      
       
      <Appbtn  onPress={()=>Register()} btnText={'UPDATE'} mt={hp('30%')}/>
     </View>

     <Modal isVisible={modalVisible}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <LottieView source={loader} style={{ width: wp('100%'), height: wp('70%') }} autoPlay loop />
       </View>
     </Modal>

     <Modal isVisible={modalVisible2}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <LottieView source={check} style={{ width: wp('100%'), height: wp('70%') }} autoPlay loop />
       </View>
     </Modal>
  
      </ProfileThemeBg>
      }
      

     

      </>
      
    )
}

export default Profile;