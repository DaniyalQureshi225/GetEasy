import React, { useState } from 'react';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import { Api } from '../../../Api/Api';
import { Color } from '../../../Color/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../../Components/AppContext';

const useSignIn = ({ navigation, onSuccess }) => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { dataa, errorr, myToken, triggerApiCall } = useAppContext();

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

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('Token', token);
      onSuccess(); // Trigger the success callback to update state
    } catch (error) {
      console.log('Failed to store token:', error);
    }
  };

  const handleSubmit = async () => {
    if (!emailId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
      setShow(true);
      return;
    }
    if (!password) {
      setShow(true);
      return;
    }

    setModalVisible(true);
    try {
      const response = await axios.post(
        `${Api}/login`,
        { email: emailId, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setModalVisible(false);
        storeToken(response.data.token); 
        triggerApiCall(response.data.token)
        navigation.reset({
          index: 0,
          routes: [{ name: 'LookingFor' }],
        })
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

  return {
    emailId,
    password,
    show,
    setEmailId,
    setPassword,
    setShow,
    handleSubmit,
    modalVisible,
  };
};

export default useSignIn;
