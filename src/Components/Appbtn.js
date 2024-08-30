import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {wp, Color, FontSize, Fonts, hp, ls} from '../Color/Color';
import React from 'react';

const Appbtn = ({onPress, btnText, mt, mb, ls, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.button,
        {marginTop: mt || hp('2%'), marginBottom: mb || hp('5%'), zIndex:-1},
      ]}>
      <Text style={[styles.buttonText, {letterSpacing: ls || wp('1%')}]}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.secondaryColor,
    width: wp('75%'),
    height: hp('6%'),
    alignSelf: 'center',
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Color.white,
    fontFamily: Fonts.bold,
    fontSize: FontSize.font16,
    textTransform: 'uppercase',
  },
});

export default Appbtn;
