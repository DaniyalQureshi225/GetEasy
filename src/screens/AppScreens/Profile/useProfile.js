import React, { useState, useEffect } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { Color } from '../../../Color/Color';
import { Api } from '../../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Snackbar from 'react-native-snackbar'; // Make sure to import Snackbar
import { useAppContext } from '../../../Components/AppContext';

const useProfile = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { dataa, errorr, myToken, triggerApiCall2 } = useAppContext();




  const showSnackbar = message => {
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
      freeStyleCropEnabled: true,
      cropperActiveWidgetColor: Color.secondaryColor,
      cropperStatusBarColor: '#000000',
      cropperToolbarColor: Color.primaryColor,
      cropperToolbarWidgetColor: '#FFFFFF',
      cropperToolbarTitle: 'Edit Image',
    })
      .then(image => {
        setImageUri(image.path);
        console.log(image);
      })
      .catch(error => {
        console.error('Error opening gallery:', error);
      });
  };





  const handleSubmit = async () => {
    const formData = new FormData();
    setModalVisible(true);
  
    if (imageUri) {
      formData.append('avatar', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });
    }
  
    formData.append('username', user);
    formData.append('email', emailId);
    formData.append('phone', phone);
  
    try {
      const response = await axios.post(
        `${Api}/update`,  
        formData,
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
  
      console.log('Response:', response?.data?.message);
      setModalVisible(false);
      setModalVisible2(true);
      triggerApiCall2()
      setTimeout(()=>{
        setModalVisible2(false);
      }, 4000)
     
    } catch (error) {
      
      setModalVisible(false);
  
      // Check if error.response exists
      const errorMessage = error?.response?.data?.error || 'An error occurred';

      setTimeout(()=>{
        showSnackbar(errorMessage);
      },1000)
      
  
      console.error('Error Response:', error);
    }
  };
  
  console.log(phone.length)

  const Register = () => {
    if (imageUri === null) {
      setShow(true);
    }
    if (!user || user.length < 3) {
      setShow(true);
    }
    if (!emailId || (emailId && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId))) {
      setShow(true);
    }
    if (!phone || phone && phone.length < 14) {
      setShow(true);
    }
    else {
      user.trim().length >= 3 && phone.length === 14 ?   handleSubmit() : null;
    }
  };

  useEffect(() => {
    if (dataa) {
      setUser(dataa.username || '');
      setEmailId(dataa.email || '');
      setPhone(dataa.phone || '');
      setImageUri(dataa?.avatar || null) 
      if (dataa.imageUri) {
        setImageUri(dataa.imageUri);
      }
    }
  }, [data]);

  return {
    user,
    dataa,
    phone,
    show,
    emailId,
    imageUri,
    modalVisible,
    Register,
    openGallery,
    setImageUri,
    setEmailId,
    Register,
    setPhone,
    setUser,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    modalVisible2
  };
};

export default useProfile;
