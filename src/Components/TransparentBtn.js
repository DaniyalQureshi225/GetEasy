import {TouchableOpacity, Text} from 'react-native';
import {wp, hp, FontSize, Fonts, Color} from '../Color/Color';
import React, {useState} from 'react';

const TransparentBtn = ({text, mt, mb, ls, onPress}) => {
  const [press, setPress] = useState(false);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      onPressIn={() => setPress(true)}
      onPressOut={() => setPress(false)}
      style={{
        borderWidth: wp('0.7%'),
        borderColor: Color.white,
        width: wp('75%'),
        height: hp('6%'),
        alignSelf: 'center',
        borderRadius: wp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: mt || hp('2%'),
        backgroundColor:press ? Color.secondaryColor : null,
        marginBottom: mb || hp('5%'),
      }}>
      <Text
        style={{
          color: Color.white,
          fontFamily: Fonts.bold,
          textTransform: 'uppercase',
          letterSpacing: ls || wp('1%'),
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TransparentBtn;
