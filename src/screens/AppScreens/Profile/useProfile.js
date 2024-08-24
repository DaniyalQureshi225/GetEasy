import React, { useState, useEffect } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { Color } from '../../../Color/Color';
import { Api } from '../../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Snackbar from 'react-native-snackbar'; // Make sure to import Snackbar

const useProfile = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [myToken, setMyToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // console.log(data)

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

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      setMyToken(token);
    } catch (e) {
      console.error('Failed to load data from AsyncStorage:', e);
    }
  };

  console.log(phone.length)

  const fetchData = async (token) => {
    try {
      const response = await axios.get(Api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    setModalVisible(true);
  
    // Append the avatar image to the form data if it exists
    if (imageUri) {
      formData.append('avatar', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });
    }
  
    // Append other form data fields
    formData.append('username', user);
    formData.append('email', emailId);
    formData.append('phone', phone);
  
    try {
      // Make the POST request to update profile
      const response = await axios.post(
        `${Api}/update`,  // Ensure `${Api}` is the base URL and `/update` is the correct endpoint
        formData,
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
  
      // Handle the response
      console.log('Response:', response?.data?.message);
      setModalVisible(false);
      navigation.navigate('LookingFor');
    } catch (error) {
      
      setModalVisible(false);
  
      // Check if error.response exists
      const errorMessage = error?.response?.data?.error || 'An error occurred';
      showSnackbar(errorMessage);
  
      console.error('Error Response:', error);
    }
  };
  

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
    if (!phone || phone && phone.length < 16) {
      setShow(true);
    }
    else {
      handleSubmit();
    }
  };

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        await getData();
      } catch (error) {
        console.error('Error getting token:', error);
      }
    };

    getMyProfile();
  }, []);

  useEffect(() => {
    if (myToken) {
      fetchData(myToken);
    }
  }, [myToken]);

  useEffect(() => {
    if (data) {
      setUser(data.username || '');
      setEmailId(data.email || '');
      setPhone(data.phone || '');
      setImageUri(data?.avatar || null) 
      if (data.imageUri) {
        setImageUri(data.imageUri);
      }
    }
  }, [data]);

  return {
    user,
    data,
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
  };
};

export default useProfile;
