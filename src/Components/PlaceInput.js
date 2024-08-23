// PlaceInput.js
import { TextInput, Text, View } from "react-native";
import React from "react";
import { wp, hp, Color } from "../Color/Color";
import Icon from "./Icon";
import Auto from "./Auto";

const PlaceInput = ({ field, setField, inputWidht, keyboardType, type, name, containerWidth, placeholder, mt, onDetailsSelect }) => {
  const handlePlaceSelect = (city, details) => {
    // Set the city name to the field
    setField(city);
    // Pass the details to the parent component
    if (onDetailsSelect) {
      onDetailsSelect(details);
    }
    console.log('Selected City:', city);
    console.log('Selected Place Details:', details);
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
        top: hp('30%')
      }}
    >
      <Auto onPlaceSelect={handlePlaceSelect} />
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
