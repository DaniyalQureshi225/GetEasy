import { StyleSheet } from "react-native";
import {wp, hp, FontSize, Color, Fonts} from './../../../Color/Color'


export const styles = StyleSheet.create({
    container: {
     
      alignSelf:'center',
      width:wp('80%')
    },
    signupText: {
      color: Color.primaryColor,
      width: wp('50%'),
      textAlign: 'center',
    },
    image: {
      marginTop: hp('0%'),
      width: wp('30%'),
      height: wp('30%'),
      borderWidth: wp('1%'),
      borderRadius: wp('50%'),
      borderColor: Color.white,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cameraButton: {
      position: 'absolute',
      top: hp('0%'),
      right: wp('25%'),
    },
    cameraImage: {
      width: wp('25%'),
      height: hp('25%'),
    },
   
  });