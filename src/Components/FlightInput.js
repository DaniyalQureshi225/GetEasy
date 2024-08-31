import { TextInput, View, Text, Image } from 'react-native';
import { wp, hp, FontSize, Fonts, Color } from '../Color/Color';
import React from 'react';
import CityDropDown from './CityDropDown';
import Auto from './Auto';

const FlightBtn = ({
  field,
  setField,
  text,
  ww,
  hh,
  img,
  placeholder,
  containerWidth,
  textWidth,
  auto,
  position,
  top,
  right,
  zIndex,
  onCitySelect,
  flight
}) => {

  const handlePlaceSelect = (city) => {
    console.log('City selected in FlightBtn:', city); // Debugging log
    onCitySelect(city); 
  }

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
        zIndex: zIndex,
        position: position,
        top: top,
        right: right,
      }}>
      <Image
        source={img}
        resizeMode='contain'
        style={{
          width: ww || wp('8%'),
          height: hh || wp('8%'),
          marginBottom: hp('0%'),
        }}
      />
      <View style={{ marginLeft: wp('2%'), marginTop: hp('1%') }}>
        <Text
          style={{
            color: Color.primaryColor,
            textTransform: 'uppercase',
            letterSpacing: wp('1%'),
            fontSize: FontSize.font10,
            fontFamily: Fonts.bold
          }}>
          {text}
        </Text>
        {
          auto ?
          
          <Auto onPlaceSelect={handlePlaceSelect} placeholder={placeholder}  /> :
          flight ? 
          <CityDropDown onSelect={handlePlaceSelect} placeHolder={placeholder} />

          :
            <TextInput
              placeholderTextColor={Color.gray}
              placeholder={placeholder}
              value={field}
              onChangeText={newText => setField(newText)}
              style={{
                color: Color.gray,
                width: textWidth || wp('70%'),
                height: hp('5%'),
              }}
              keyboardType={'default'}
            />
        }
      </View>
    </View>
  );
};

export default FlightBtn;
