import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Color} from '../../../Color/Color';
import {Api} from '../../../Api/Api';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import validator from 'validator';
import { flight } from '../../../assets/Images';


const useSignUp = ({navigation}) => {
  const [user, setUser] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);
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

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true, // Enable free style crop
      cropperActiveWidgetColor: Color.secondaryColor, // Change the active widget color
      cropperStatusBarColor: '#2C3282', // Change the status bar color
      cropperToolbarColor: Color.primaryColor, // Change the toolbar color
      cropperToolbarWidgetColor: '#FFFFFF', // Change the toolbar widget color
      cropperToolbarTitle: 'Edit Image', // Set a custom title for the toolbar
    })
      .then(image => {
        setImageUri(image.path);
        // console.log(image);
      })
      .catch(error => {
        console.error('Error opening gallery:', error);
      });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    setModalVisible(true)
    formData.append('avatar', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'profile.jpg',
    });

    formData.append('username', user);
    formData.append('email', emailId);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('password_confirmation', confirmPassword);
    formData.append('terms', 1);
    try {
    
      const response = await axios.post(
        'https://onlinedemolink.com/custom_live/geteasytripapp/public/api/user/register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('Response:', response.data.message);
      setModalVisible(false)
      navigation.navigate('Thanks')
    } catch ({error, response}) {
      setModalVisible(false)
      console.error('Error Response:', error, );

      setTimeout(()=>{
        showSnackbar(response?.data?.error);
      },1000)
    }
  };


  const Register = () => {
    if (imageUri === null) {
      setShow(true);
    }
     if  (!user || user.trim().length < 3) {
      setShow(true);
    }
    if (!emailId || !validator.isEmail(emailId) ) {
      setShow(true);
    }
    if (!phone || (phone && phone.length < 16)) {
      setShow(true);
    }
    if (
      !password ||
      (password && password.length < 8) ||
      (password && !/[A-Z]/.test(password))
    ) {
      setShow(true);
    }
    if (
      !confirmPassword ||
      (confirmPassword && confirmPassword.length < 8) ||
      (confirmPassword && !/[A-Z]/.test(confirmPassword)) ||
      confirmPassword !== password
    ) {
      setShow(true);
    }
    if(!check){
      setShow(true);
    }

   
    
    else  user.trim().length >= 3 && phone.length === 14 ?  handleSubmit() : null;
     
    
  };
  return {
    show,
    user,
    phone,
    check,
    emailId,
    imageUri,
    password,
    confirmPassword,
    modalVisible,
    setConfirmPassword,
    handleSubmit,
    setPassword,
    openGallery,
    setImageUri,
    setEmailId,
    setCheck,
    setPhone,
    setUser,
    Register
  };
};

export default useSignUp;
