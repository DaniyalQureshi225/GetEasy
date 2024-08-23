import { View, Text, TouchableOpacity, Image } from "react-native";
import { wp, Color, hp, FontSize, Fonts } from "../Color/Color";
import React from "react";
import { car22, flight, home, pro } from "../assets/Images";

const BottomTab = ({isHome, onPressHome, onPressFlight, isFlight, onPressCar, isCar, isProfile, onPressProfile}) =>{
    return(
        <View
        style={{
          backgroundColor: Color.primaryColor,
          width: wp('100%'),
          height: hp('9%'),
          borderTopLeftRadius: wp('3%'),
          borderTopRightRadius: wp('3%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
        onPress={onPressHome}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isHome ? Color.secondaryColor : null,
            width:wp('14%'),
            height:wp('14%'),
            borderRadius:wp('10%')
          }}>
          <Image
            source={home}
            resizeMode="contain"
            style={{width: wp('5%'), height: wp('5%'), tintColor:isHome? Color.white : Color.bottomTab}}
          />
          <Text style={{color:isHome? Color.white : Color.bottomTab}}>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={onPressFlight}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:isFlight ? Color.secondaryColor : null,
            width:wp('14%'),
            height:wp('14%'),
            borderRadius:wp('10%')
          }}>
          <Image
            source={flight}
            resizeMode="contain"
            style={{width: wp('5%'), height: wp('5%'), tintColor:isFlight ? Color.white : Color.bottomTab}}
          />
          <Text style={{color:isFlight ? Color.white : Color.bottomTab}}>Flights</Text>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={onPressCar}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isCar ? Color.secondaryColor : null,
            width:wp('14%'),
            height:wp('14%'),
            borderRadius:wp('10%')
          }}>
          <Image
            source={car22}
            resizeMode="contain"
            style={{width: wp('5%'), height: wp('5%'), tintColor:isCar ? Color.white : Color.bottomTab }}
          />
          <Text style={{color:isCar ? Color.white : Color.bottomTab, fontSize:isCar? FontSize.font11 : null}}>Car Hire</Text>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={onPressProfile}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isProfile ? Color.secondaryColor : null,
            width:wp('14%'),
            height:wp('14%'),
            borderRadius:wp('10%')
          }}>
          <Image
            source={pro}
            resizeMode="contain"
            style={{width: wp('5%'), height: wp('5%'), tintColor: isProfile ? Color.white : Color.bottomTab}}
          />
          <Text style={{color: isProfile ? Color.white : Color.bottomTab}}>Profile</Text>
        </TouchableOpacity>
      </View>
    )
}

export default BottomTab;