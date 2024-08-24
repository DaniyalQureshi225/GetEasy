import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {wp, hp, FontSize, Fonts, Color} from '../Color/Color';
import React from 'react';
import {drawerIcon} from '../assets/Images';

const BookingBg = ({children, userImg, txt1, txt2, mainImg, OpenDrawer, ml, tf}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.primaryColor, zIndex:-1, position:'relative'
      }}>
      <View
        style={{
          width: wp('90%'),
          alignSelf: 'center',
          marginTop: hp('1%'),
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={OpenDrawer}>
          <Image
            source={drawerIcon}
            style={{width: wp('5%'), height: wp('5%')}}
          />
        </TouchableOpacity>

        <Image source={userImg} resizeMode='contain' style={{width: wp('10%'), height: wp('10%')}} />
      </View>

      <Text
        style={{
          marginLeft: wp('5%'),
          color: Color.white,
          fontSize: FontSize.font14,
          marginTop: hp('1%'),
        }}>
        {txt1}
      </Text>
      <Text
        style={{
          marginLeft: wp('5%'),
          fontSize: FontSize.font20,
          fontFamily: Fonts.bold,
          color: Color.white,
        }}>
        {txt2}
      </Text>
      <Image
        source={mainImg}
        resizeMode="contain"
        style={{
          width: wp('130%'),
          height: wp('50%'),
          marginLeft: ml  || wp('10%'),
          transform:[{rotate: tf  || '5deg'}],
         
        }}
      />

     
      <ScrollView
      showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: Color.white,
          marginTop: hp('-6%'),
          borderTopRightRadius: wp('5%'),
          borderTopLeftRadius: wp('5%'),
          position:'relative',
          zIndex:3
        }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default BookingBg;
