import {View, Text, TouchableOpacity} from 'react-native';
import {wp, hp, Color, FontSize, Fonts} from './../Color/Color';
import React from 'react';
import Icon from './Icon';

const ToggleBtn = ({backgroundColor, color, onPress, name, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: wp('20%'),
        width: wp('43%'),
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Icon type={'Fontisto'} name={name} color={color} size={wp('5%')} />
      <Text
        style={{
          color: color,
          fontFamily: Fonts.bold,
          fontSize: FontSize.font14,
          marginLeft: wp('2%'),
          textTransform:'uppercase',
          letterSpacing:wp('0.5%')
        }}>
       {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ToggleBtn;
