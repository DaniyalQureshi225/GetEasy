import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {back, bgBlue, bottomLine, logoWhite, user} from './../assets/Images';
import {Color, Fonts, FontSize, hp, wp} from './../Color/Color';
import Icon from './Icon';

const ProfileThemeBg = ({
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
  text,
  img
}) => {
  return (
    <View style={styles.container}>
      <Image source={bgBlue} style={styles.backgroundImage} />

      <View
        style={{
          width: wp('90%'),
          flexDirection: 'row',
          position: 'absolute',
          alignSelf: 'center',
          alignItems:'center',
          marginTop:hp('1%')
        }}>
        {backButton && (
          <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
            <Image source={back} style={styles.backIcon} />
          </TouchableOpacity>
        )}
        <View style={{}}>
          <Text
            style={{
              fontFamily: Fonts.bold,
              color: Color.white,
              fontSize: FontSize.font20, 
            }}>{text}</Text>
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
          <Image source={img} resizeMode='cover' style={{width: wp('8%'), height: wp('8%'), borderRadius:wp('20%')}} />
        </View>
      </View>

      <View
        style={{
          height: hp('10%'),
          backgroundColor: Color.white,
          position: 'absolute',
          top: hp('8%'),
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
    height: hp('15%'),
    width: wp('101%'),
  },
  backButton: {
    flex: 1,
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

export default ProfileThemeBg;
