import {TextInput, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {wp, hp, FontSize, Fonts, Color} from '../Color/Color';
import {takeOff} from '../assets/Images';

const FlightDateBtn = ({
  
  text,
  ww,
  hh,
  img,
  date,
  containerWidth,
  textWidth,
  onPress
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: Color.textBox,
        width: containerWidth || wp('90%'),
        alignSelf: 'center',
        marginTop: hp('2%'),
        height: hp('8%'),
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        borderRadius: wp('1%'),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Image
        source={img}
        resizeMode=''
        style={{
          width: ww || wp('8%'),
          height: hh || wp('8%'),
          marginBottom: hp('0%'),
          tintColor:Color.primaryColor
        }}
      />
      <View style={{marginLeft: wp('2%'), marginTop:hp('2%')}}>
        <Text
          style={{
            color: Color.primaryColor,
            textTransform: 'uppercase',
            letterSpacing: wp('0.48%'),
            fontSize:FontSize.font10,
            fontFamily:Fonts.bold
          }}>
          {text}
        </Text>
        <View style={{height:hp('1%')}}/>
        <Text
          style={{
            color: Color.gray,
            width: textWidth || wp('70%'),
            height: hp('5%'),
          }}
       
        >{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlightDateBtn;
