import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Api } from '../Api/Api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [myToken, setMyToken] = useState('');
  const [dataa, setDataa] = useState(null);
  const [errorr, setErrorr] = useState(null);
 
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      setMyToken(token);
    } catch (e) {
      console.error('Failed to load data from AsyncStorage:', e);
    }
  };

  const fetchData = async (token) => {
    try {
      const response = await axios.get(Api, { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataa(response.data);
      console.log('success')
    } catch (err) {
      setErrorr(err);
      console.error('Error fetching data:', err);
    } finally {
      console.log('API request done');
    }
  };

  const triggerApiCall = async (token) => {
      console.log(token);
       setTimeout(()=>{
        fetchData(token)
       }, 2000)


       
    if (myToken) {
      await fetchData(myToken);
    }
  };

  const triggerApiCall2 = async () => {
     
  if (myToken) {
    await fetchData(myToken);
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



  return (
    <AppContext.Provider value={{ dataa, errorr, myToken, triggerApiCall, triggerApiCall2 }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
