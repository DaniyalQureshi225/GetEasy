import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from "react";
import { Color, hp, wp } from "../../../Color/Color";
import ProfileThemeBg from "../../../Components/ProfileThemeBg";

import { styles } from "./styles";

import Appbtn from '../../../Components/Appbtn';
import { Lorem, LoremBig } from '../../../Components/Data';

const PrivacyPolicy = ({navigation}) =>{
   
    return(
       <ProfileThemeBg
       backButton={true}
       text={'Privacy Policy'}
       onPressBack={()=>navigation.goBack()}
       >
        
      <View style={styles.container}>
      
        <Text style={{color:Color.textGray}}>{LoremBig}</Text>
      
        <Text style={{color:Color.textGray, marginTop:hp('2%')}}>{LoremBig}</Text>
        <Text style={{color:Color.textGray, marginTop:hp('2%')}}>{LoremBig}</Text>
        <Text style={{color:Color.textGray, marginTop:hp('2%')}}>{LoremBig}</Text>

      </View>
   
       </ProfileThemeBg>
    )
}

export default PrivacyPolicy;