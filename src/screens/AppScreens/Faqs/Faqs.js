import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from "react";
import { Color, Fonts, hp, wp } from "../../../Color/Color";
import ProfileThemeBg from "../../../Components/ProfileThemeBg";

import { styles } from "./styles";

import Appbtn from '../../../Components/Appbtn';
import { Lorem, LoremBig } from '../../../Components/Data';
import useFilter from '../Filter/useFilter';
import { placeholder } from '../../../assets/Images';
import { useAppContext } from '../../../Components/AppContext';

const Faqs = ({navigation}) =>{
  const { dataa, errorr, myToken } = useAppContext();

    return(
       <ProfileThemeBg
       backButton={true}
       text={'FAQs'}
       onPressBack={()=>navigation.goBack()}
       img={dataa ? {uri:dataa?.avatar} : placeholder}
       >
        
      <View style={styles.container}>
      <Text style={{color:Color.black, fontWeight:'bold'}}>{Lorem}</Text>
        <Text style={{color:Color.textGray, marginTop:hp('2%')}}>{LoremBig}</Text>
        <Text style={{color:Color.black, fontWeight:'bold', marginTop:hp('2%')}}>{Lorem}</Text>
        <Text style={{color:Color.textGray, marginTop:hp('2%')}}>{LoremBig}</Text>
        <Text style={{color:Color.black, fontWeight:'bold', marginTop:hp('2%')}}>{Lorem}</Text>
        <Text style={{color:Color.textGray, marginTop:hp('2%')}}>{LoremBig}</Text>
      
      
      </View>
   
       </ProfileThemeBg>
    )
}

export default Faqs;