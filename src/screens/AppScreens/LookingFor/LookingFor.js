import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppThemeBlue from '../../../Components/AppThemeBlue';
import {Color, Fonts, FontSize, hp, wp} from '../../../Color/Color';
import {LookingForTex} from '../../../Components/Data';
import Appbtn from '../../../Components/Appbtn';
import InputField from '../../../Components/InputField';
import {key, placeholder} from '../../../assets/Images';
import TransparentBtn from '../../../Components/TransparentBtn';
import Icon from '../../../Components/Icon';
import FatBtn from '../../../Components/fatBtn';
import { useAppContext } from '../../../Components/AppContext';
const LookingFor = ({navigation}) => {
  const { dataa, errorr, myToken, triggerApiCall } = useAppContext();

  useEffect(()=>{
    triggerApiCall()
  },[])

  return (
    <AppThemeBlue
      closeBtn={false}
      onPressBack={() => navigation.goBack()}
      logo={true}
      heading={true}
      btn={false}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: wp('5%'),
        }}>
        <Text
          style={{
            marginTop: hp('20%'),
            fontFamily: Fonts.bold,
            fontSize: FontSize.font20,
            color: Color.white,
          }}>
          {LookingForTex}
        </Text>

        <FatBtn 

        onPress={()=>navigation.navigate('Filter')}
        mt={hp('8%')}
        text={'Hotels'}
        type={'MaterialCommunityIcons'}
        name={'bed-queen'}
        />
        <FatBtn 
        onPress={()=>navigation.navigate('MyDrawer')}
        mt={hp('8%')}
        text={'Flights'}
        type={'FontAwesome'}
        name={'plane'}
        />
        <FatBtn 
        onPress={()=>navigation.navigate('BookCar')}
        mt={hp('8%')}
        text={'Car Hire'}
        type={'Fontisto'}
        name={'car'}
        />
      </View>
    </AppThemeBlue>
  );
};

export default LookingFor;
