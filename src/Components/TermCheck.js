import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import {hp, wp, Color, FontSize} from './../Color/Color'
import { box, fillbox } from "../assets/Images";

const TermCheck = ({txt}) =>{

    const [check, setCheck] = useState(false);

   

    return(
        <TouchableOpacity onPress={()=>setCheck(!check)} activeOpacity={0.7} style={styles.termsContainer}>
          <Image source={check ?fillbox : box} style={styles.termsIcon} />
          <Text style={[styles.termsText, {color: check ? Color.primaryColor : Color.textGray}]}>
            
            {txt}
            
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp('4%'),
        alignSelf: 'flex-start',
        marginLeft: wp('10%'),
        marginBottom: hp('2%'),
      },
      termsIcon: {
        width: wp('5%'),
        height: wp('5%'),
      },
      termsText: {
       
        fontSize: FontSize.font12,
      },
})

export default TermCheck;