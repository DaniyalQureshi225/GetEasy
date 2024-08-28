import React, {useState, useEffect} from "react";
import ImagePicker from 'react-native-image-crop-picker';
import { Color } from '../../../Color/Color';
import { Api } from '../../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

const useBookCar = () =>{
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
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
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
    return{
        data
    }
}


export default useBookCar;