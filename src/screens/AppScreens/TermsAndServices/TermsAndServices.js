import {View, Text} from 'react-native';
import React from 'react';
import AppThemeBg from '../../../Components/AppThemeBg';
import {Color, hp, wp} from '../../../Color/Color';
import {Lorem} from '../../../Components/Data';

const TermsAndCondition = ({navigation}) => {
  return (
    <AppThemeBg
      backButton={true}
      onPressBack={() => navigation.goBack()}
      btn={false}
      btnText={'accept'}
      logo={true}
      heading={true}
      headingText={'Terms of Services'}
      onPress={()=>navigation.navigate('Thanks')}
      >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: wp('5%'),
        }}>
       

       

        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
        <Text style={{color: Color.black, lineHeight: wp('7%')}}>{Lorem}</Text>
       
       
      </View>
      {/* <View style={{backgroundColor:Color.white, height:hp('5%')}}/> */}
    </AppThemeBg>
  );
};

export default TermsAndCondition;
