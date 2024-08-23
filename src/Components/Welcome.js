import {
    View,
    Image,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {bgBlue, bottomLine, dot1, pic1} from '../assets/Images';
  import {Color, Fonts, FontSize, hp, wp} from '../Color/Color';
  
  const Welcome = ({img, dot, heading, tex, onPress, width}) => {
    return (
      <View style={{backgroundColor: Color.white, flex: 1}}>
        <Image
          source={bgBlue}
          style={{marginTop: hp('-2%'), height: hp('30%'), width: wp('101%')}}
        />
        <Image
          source={img}
          resizeMode="contain"
          style={{
            position: 'absolute',
            height: hp('45%'),
            width: wp('90%'),
            alignSelf: 'center',
            marginTop: hp('5%'),
          }}
        />
        <Image
          source={dot}
          resizeMode="contain"
          style={{
            marginTop: hp('28%'),
            alignSelf: 'center',
            height: wp('4%'),
            width: wp('35%'),
          }}
        />
  
        <Text
          style={{
            alignSelf: 'center',
            marginTop: hp('4%'),
            fontFamily: Fonts.bold,
            fontSize: FontSize.font20,
            color: Color.primaryColor,
          }}>
          {heading}
        </Text>
  
        <Text
          style={{
            alignSelf: 'center',
            marginTop: hp('1%'),
            fontFamily: Fonts.medium,
            fontSize: FontSize.font12,
            color: Color.primaryColor,
            width: width,
            textAlign: 'center',
          }}>
          {tex}
        </Text>
  
        <TouchableOpacity
            onPress={onPress}
          style={{
            backgroundColor: Color.secondaryColor,
            width: wp('75%'),
            height: hp('5%'),
            alignSelf: 'center',
            borderRadius: wp('10%'),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: hp('18%'),
          }}>
          <Text
            style={{
              color: Color.white,
              fontFamily: Fonts.bold,
              fontSize: FontSize.font16,
              textTransform:'uppercase',
              letterSpacing:wp('1%')
            }}>
            Next
          </Text>
        </TouchableOpacity>
       
      </View>
    );
  };
  
  export default Welcome;
  