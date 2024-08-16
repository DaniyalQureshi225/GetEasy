import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {back, bgBlue, bottomLine, logoWhite} from './../assets/Images';
import {Color, Fonts, FontSize, hp, wp} from './../Color/Color';
import Icon from './Icon';

const AppThemeBg = ({
  btn,
  onPress,
  btnText,
  backButton,
  logo,
  heading,
  headingText,
  children,
  onPressBack,
  closeBtn,
}) => {
  return (
    <View style={styles.container}>
      <Image source={bgBlue} style={styles.backgroundImage} />
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

      {heading && <Text style={styles.heading}>{headingText}</Text>}

      <View
        style={{
          height: hp('10%'),
          backgroundColor: Color.white,
          position: 'absolute',
          top: hp('24%'),
          width: wp('100%'),
          borderRadius: wp('20%'),
        }}
      />

      <ScrollView style={styles.contentContainer}>{children}</ScrollView> 

      {btn && (
        <>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{btnText}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
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
    marginBottom: hp('5%'),
  },
  buttonText: {
    color: Color.white,
    fontFamily: Fonts.bold,
    fontSize: FontSize.font16,
    textTransform: 'uppercase',
    letterSpacing: wp('1%'),
  },
  bottomLine: {
    width: wp('10%'),
    height: hp('2%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
});

export default AppThemeBg;
