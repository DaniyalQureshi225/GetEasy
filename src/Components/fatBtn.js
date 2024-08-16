import {TouchableOpacity, Text} from 'react-native';
import Icon from './Icon';
import {wp, hp, Color, FontSize, Fonts} from '../Color/Color';
import React, {useState} from 'react';

const FatBtn = ({mt, text, type, name, onPress}) => {
    const [press, setPress] = useState(false)
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    onPressIn={() => setPress(true)}
    onPressOut={() => setPress(false)}
      style={{
        flexDirection: 'row',
        width: wp('50%'),
        borderColor: Color.white,
        borderWidth: wp('0.5%'),
        borderRadius: wp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('8%'),
        marginTop: mt,
        backgroundColor:press ? Color.secondaryColor : null
      }}>
      <Icon
        type={type}
        name={name}
        size={wp('6%')}
        color={Color.white}
      />

      <Text
        style={{
          color: Color.white,
          marginLeft: wp('2%'),
          fontFamily: Fonts.bold,
        }}>
       {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FatBtn;
