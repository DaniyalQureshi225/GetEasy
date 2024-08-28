import React from 'react';
import { View } from 'react-native';
import Icon from './Icon';
import Auto from './Auto';
import { Color, wp, hp } from './../Color/Color';

const PlaceInput = ({ field, setField, inputWidht, type, name, containerWidth, placeholder, mt, onDetailsSelect }) => {
  const handlePlaceSelect = (city, details) => {
    console.log('>?>?>', city);

    setField(city) // Update city state in Filter component
    if (onDetailsSelect) {
      onDetailsSelect(details); // Forward place details
    }
  };

  return (
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
        top: hp('32%'),
      }}
    >
      <Auto onPlaceSelect={handlePlaceSelect} placeholder={placeholder}/>
      <Icon
        type={type}
        name={name}
        size={wp('6%')}
        color={Color.gray}
      />
    </View>
  );
}

export default PlaceInput;
