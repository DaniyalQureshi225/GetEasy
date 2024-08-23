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
  } from '../../../assets/Images';
  import { wp} from '../../../Color/Color';
import Appbtn from '../../../Components/Appbtn';
import {TextInputMask} from 'react-native-masked-text';

const Profile = ({navigation}) =>{
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
      } = useProfile({navigation});
    return(
       <ProfileThemeBg
       backButton={true}
       text={'Profile'}
       onPressBack={()=>navigation.goBack()}
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
          maxlength={15}
          phone={true}
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
        
       <Appbtn  btnText={'UPDATE'} mt={hp('5%')}/>
      </View>
   
       </ProfileThemeBg>
    )
}

export default Profile;