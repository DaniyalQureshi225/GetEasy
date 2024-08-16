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
    },
    dateRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp('90%'),
      alignSelf: 'center',
      zIndex: -1,
    },
    buttonContainer: {
      marginTop: 'auto',
      backgroundColor: Color.white,
    },
  });
  