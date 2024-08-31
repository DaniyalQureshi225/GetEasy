import React from 'react';
import { View, Text } from 'react-native';
import Icon from './Icon';
import Auto from './Auto';
import { Color, wp, hp } from './../Color/Color';

const PlaceInput = ({ field, setField, inputWidht, type, name, containerWidth, placeholder, mt, onDetailsSelect, show }) => {

  const handlePlaceSelect = (city, details, inputValue) => {
    console.log('Received inputValue:', inputValue);
    setField(inputValue); // Update city state in Filter component
    if (onDetailsSelect) {
      onDetailsSelect(details); // Forward place details
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: Color.textBox,
          alignSelf: 'center',
          width: containerWidth,
          borderRadius: wp('20%'),
          height: hp('6%'),
          marginTop: mt || hp('4%'),
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: wp('5%'),
          justifyContent: 'space-between',
          position: 'absolute',
          top: hp('30%'),
        }}
      >
        <Auto
          onPlaceSelect={handlePlaceSelect}
          placeholder={placeholder}
          onInputValueChange={setField} // Pass the inputValue handler to Auto
        />
        <Icon
          type={type}
          name={name}
          size={wp('6%')}
          color={Color.gray}
        />
      </View>
      {show ? (
        <Text style={{
          color: Color.red,
          position: 'absolute',
          top: hp('40%'),
          left: wp('10%')
        }}>
          Required
        </Text>
      ) : null}
    </>
  );
}

export default PlaceInput;
