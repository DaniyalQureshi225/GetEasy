import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {back, bgBlue, bottomLine, logoWhite, x} from './../assets/Images';
import {Color, Fonts, FontSize, hp, wp} from './../Color/Color';
import Icon from './Icon';

const AppThemeBlue = ({
  btn,
  onPress,
  btnText,
  backButton,
  logo,
  children,
  onPressBack,
  closeBtn,
  ls
}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
          <Image source={back} style={styles.backIcon} />
        </TouchableOpacity>
      )}

      {closeBtn && (
        <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
          <Image source={x} style={styles.backIcon} />
        </TouchableOpacity>
      )}

      {logo && (
        <Image source={logoWhite} resizeMode="contain" style={styles.logo} />
      )}

    

      <View style={styles.contentContainer}>{children}</View>

      {btn && (
        <>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={[styles.buttonText, {letterSpacing: ls || wp('1%')}]}>{btnText}</Text>
          </TouchableOpacity>
         
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryColor,
  },
  backgroundImage: {
    marginTop: hp('-2%'),
    height: hp('30%'),
    width: wp('101%'),
  },
  backButton: {
    position: 'absolute',
    left: wp('5%'),
    top: wp('3%'),
   
  },
  backIcon: {
    width: wp('8%'),
    height: wp('8%'),
  },
  logo: {
    height: hp('20%'),
    width: wp('30%'),
    position: 'absolute',
    alignSelf: 'center',
  },
  heading: {
    color: Color.white,
    position: 'absolute',
    top: hp('18%'),
    alignSelf: 'center',
    fontFamily: Fonts.bold,
    fontSize: FontSize.font20,
  },
  contentContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: Color.secondaryColor,
    width: wp('75%'),
    height: hp('5%'),
    alignSelf: 'center',
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
    marginBottom:hp('2%'),
    marginBottom:hp('5%')
  },
  buttonText: {
    color: Color.white,
    fontFamily: Fonts.bold,
    fontSize: FontSize.font16,
    textTransform:'uppercase'
  },
  bottomLine: {
    width: wp('10%'),
    height: hp('2%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
});

export default AppThemeBlue;
