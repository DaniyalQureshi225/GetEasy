import React from "react";
import { TextInput, View } from "react-native";
import Icon from "./Icon";
import { wp, hp, FontSize, Fonts, Color } from "../Color/Color";
import { placeholder } from "../assets/Images";
const SmallTextBox = ({field, setField, placeholder, type, name}) =>{

    return(
        <View
        style={{
          flexDirection: 'row',
          backgroundColor: Color.textBox,
          width: wp('27%'),
          borderRadius: wp('100%'),
          alignItems: 'center',
          paddingHorizontal: wp('2%'),
        }}>
        <Icon
          type={type}
          name={name}
          size={wp('5%')}
          color={Color.gray}
        />
        <TextInput
          placeholderTextColor={Color.gray}
          placeholder={placeholder}
          value={field}
          onChangeText={newText => setField(newText)}
          style={{
            color: Color.black,
            width: wp('20%'),
          }}
          keyboardType={'numeric'}
          maxLength={2}
        />
      </View>
    )
}

export default SmallTextBox;