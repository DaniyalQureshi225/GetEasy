import {TextInput, View, Text, Image} from 'react-native';
import React from 'react';
import {wp, hp, FontSize, Fonts, Color} from '../Color/Color';
import {takeOff} from '../assets/Images';

const FlightBigField = ({
 
  text,
  ww,
  hh,
  img,
  placeholder,
  containerWidth,
  textWidth,
  t1,
  field1,
  setField1,
  t2,
  field2,
  setField2,
  t3,
  field3,
  setField3,
  mb
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Color.textBox,
        width: containerWidth || wp('90%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
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
        marginBottom:mb,
        zIndex:-1
      }}>
      <Image
        source={img}
        style={{
          width: ww || wp('8%'),
          height: hh || wp('8%'),
          marginBottom: hp('1%'),
        }}
      />

      <View style={{marginTop: hp('2%'), marginLeft:wp('1%')}}>
        <Text
          style={{
            color: Color.primaryColor,
            textTransform: 'uppercase',
            letterSpacing: wp('1%'),
            fontSize:FontSize.font10,
            fontFamily:Fonts.bold,
            marginLeft:wp('2%')
          }}>
          {text}
        </Text>

        <View style={{flexDirection: 'row', marginBottom: hp('0.5%')}}>
        <View
            style={{
              flexDirection: 'row',
              alignItems:'center',
              width:wp('25%'),
              marginLeft:wp('1%')
            }}>
            <TextInput
              placeholderTextColor={Color.gray}
              placeholder={placeholder}
              value={field1}
              onChangeText={newText => setField1(newText)}
              style={{
                color: Color.black,
                width: textWidth || wp('20%'),
                fontFamily: Fonts.bold,
                fontSize:FontSize.font16,
                marginBottom:hp('-0.5%')
                
              }}
              keyboardType={'numeric'}
              maxLength={2}
            />
            <Text style={{color: Color.gray, marginLeft: wp('0.5%')}}>{t1}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp('2%'),
              width:wp('25%')
            }}>
            <TextInput
              placeholderTextColor={Color.gray}
              placeholder={placeholder}
              value={field2}
              onChangeText={newText => setField2(newText)}
              style={{
                color: Color.black,
                width: textWidth || wp('20%'),
                fontFamily: Fonts.bold,
                fontSize:FontSize.font16,
                marginBottom:hp('-0.5%')
              }}
              keyboardType={'numeric'}
              maxLength={2}
            />
            <Text style={{color: Color.gray, marginLeft: wp('0.5%')}}>{t2}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp('2%'),
              width:wp('25%')
            }}>
            <TextInput
              placeholderTextColor={Color.gray}
              placeholder={placeholder}
              value={field3}
              onChangeText={newText => setField3(newText)}
              style={{
                color: Color.black,
                width: textWidth || wp('20%'),
                fontFamily: Fonts.bold,
                fontSize:FontSize.font16,
                marginBottom:hp('-0.5%')
              }}
              keyboardType={'numeric'}
              maxLength={2}
            />
            <Text style={{color: Color.gray, marginLeft: wp('0.5%')}}>{t3}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlightBigField;
