import { StyleSheet } from "react-native";
import { wp, hp, FontSize, Fonts, Color } from "../../../Color/Color";


export const styles = StyleSheet.create({
    toggleContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: hp('2%'),
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp('90%'),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp('90%'),
      alignSelf: 'center',
      marginTop:hp('1%')
    },
    dateRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp('90%'),
      alignSelf: 'center',
      zIndex: -1,
      marginTop:hp('1%')
    },
    buttonContainer: {
      marginTop: 'auto',
      backgroundColor: Color.white,
    },
    searchbar: {
      description: {
          fontWeight: 'bold',
      },
      textInputContainer: {
          backgroundColor: Color.textBox,
          width: wp('70%'),
          height: wp('10%'),
          marginTop: wp('0.8%'),
          color: Color.black,
          alignItems: 'center',
          zIndex: 200, 
      },
      description: {
          color: Color.black,
          width: wp('50%'),
      },
      textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: wp('9.2%'),
          color: Color.black,
          fontSize: 16,
          backgroundColor: Color.textBox,
          width: wp('50%'),
      },
      listView: {
          backgroundColor: Color.white,
          top: 23,
          borderWidth: 1,
          position: 'absolute',
          width: wp('70%'),
          zIndex: 99999,  
          marginTop: 20,
      },
      row: {
          backgroundColor: Color.white,
      },
      separator: {
          height: 0.5,
          backgroundColor: Color.black,
      },
  },
  });
  