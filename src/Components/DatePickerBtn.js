import { TouchableOpacity, Text } from "react-native";
import Icon from "./Icon";
import { wp, hp, FontSize, Color } from "../Color/Color";
import React from "react";

const DatePickerBtn = ({text, type, name, onPress}) =>{
    return(
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
          style={{
            backgroundColor: Color.textBox,
            alignItems: 'center',
            flexDirection: 'row',
            width: wp('43%'),
            borderRadius: wp('10%'),
            height: hp('6%'),
            justifyContent:'space-between',
            paddingHorizontal:wp('5%')
          }}>
          <Text style={{color: Color.gray}}>{text}</Text>
          <Icon
          type={type}
          name={name}
          color={Color.gray}
          size={wp('5%')}
          />

        </TouchableOpacity>
    )
}

export default DatePickerBtn