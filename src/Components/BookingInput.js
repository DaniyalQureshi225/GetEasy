import { TextInput, Text, View } from "react-native";
import React from "react";
import { wp, hp, Color,  } from "../Color/Color";
import Icon from "./Icon";
import { placeholder } from "../assets/Images";

const BookingInput = ({field, ml, setField, inputWidht,keyboardType, type, name, containerWidth, placeholder, mt}) =>{
    return(
        <View
        style={{
          backgroundColor: Color.textBox,
          alignSelf: 'center',
          width: containerWidth,
          borderRadius: wp('20%'),
          height: hp('6%'),
          marginTop:mt || hp('4%'),
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: wp('5%'),
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholderTextColor={Color.gray}
          placeholder={placeholder}
          value={field}
          onChangeText={newText => setField(newText)}
          style={inputWidht}
          keyboardType={keyboardType || 'default'}
          maxLength={ml}
        />
        <Icon
          type={type}
          name={name}
          size={wp('6%')}
          color={Color.gray}
        />
      </View>
    )
}

export default BookingInput;
