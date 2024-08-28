import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Color, hp, wp } from '../Color/Color';

const CityDropDown = ({ onSelect, placeHolder }) => { // Added onSelect prop
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [number, setNumber] = useState('');
  const [show, setShow] = useState(false);

  const fetchData = async (query) => {
    if (query.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://onlinedemolink.com/custom_live/geteasytripapp/public/api/get/iata?city=${query}`,
        );
        setData(response.data.slice(0, 4));
       
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } else {
      setData([]);
      setShow(false);
    }
  };

  useEffect(() => {
    fetchData(number);
  }, [number]);

  const handleSelect = (item) => {
    setShow(false); 
    setNumber(item?.city.split('?')?.[0]);
   
    if (onSelect) {
      onSelect(item); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setNumber(text);
          if (text.length > 2) {
            fetchData(text);
            setShow(true); 
          } else {
            setShow(false);
          }
        }}
        value={number}
        placeholder={placeHolder}
        placeholderTextColor={Color.gray}
      />

      {show &&  (
        <View style={styles.dropdownContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              key={index}
              style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>{item?.city.split('?')?.[0]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  input: {
    width: wp('65%'),
    height: hp('5%'),
    
    color: Color.black,
   
  },
  dropdownContainer: {
    position: 'absolute',
    top: hp('7%'),
    width: wp('90%'),
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.black,
    borderRadius: 4,
    zIndex: 1000, // Ensure dropdown appears above other content
  },
  dropdownItem: {
    height: hp('5%'),
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  dropdownText: {
    color: Color.black,
  },
});

export default CityDropDown;
