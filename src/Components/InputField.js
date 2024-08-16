// InputField.js
import React from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import {wp, hp, FontSize, Color, Fonts} from '../Color/Color'; // Ensure these are defined and imported properly

const InputField = ({
  marginTop,
  img,
  placeholderText,
  field,
  setField,
  imgWidth,
  imgHeight,
  keyboardType,
  maxlength,
  secure,
  label,
  labelTex,
  blueTheme,
}) => {
  return (
    <>
      {label && (
        <Text
          style={{
            alignSelf: 'flex-start',
            color: Color.white,
            marginTop: hp('2%'),
            marginLeft: wp('6%'),
            fontFamily: Fonts.bold,
          }}>
          {labelTex}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: wp('80%'),
          paddingBottom: hp('0%'),
          borderBottomWidth: wp('1%'),
          borderBottomColor: blueTheme ? Color.white : Color.border,
          alignItems: 'center',
          marginTop: label ? hp('0%') : marginTop || hp('4%'),
        }}>
        <Image
          source={img}
          style={{
            width: imgWidth || wp('6%'),
            height: imgHeight || wp('6%'),
            marginLeft: wp('1.5%'),
            tintColor: blueTheme ? Color.white : Color.border,
          }}
        />
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={blueTheme ? Color.white : Color.border}
          secureTextEntry={secure}
          style={{
            marginLeft: wp('2%'),
            fontSize: FontSize.font14,
            width: wp('65%'),
            color:blueTheme ? Color.white : Color.primaryColor,
          }}
          maxLength={maxlength || 30}
          value={field}
          onChangeText={setField}
          keyboardType={keyboardType || 'default'}
        />
      </View>
    </>
  );
};

export default InputField;
