import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {back, bgBlue} from './../assets/Images';
import {Color, Fonts, FontSize, hp, wp} from './../Color/Color';

const FullScreenBg = ({btn, onPress, btnText, children, heading, sideBtn, backbtn}) => {
  return (
    <View style={styles.container}>
      <Image source={bgBlue} style={styles.backgroundImage} />

      <View
        style={{
          position: 'absolute',
          top: wp('3%'),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
            
        <View style={{flex: 1}}>
        
        {backbtn &&
                <TouchableOpacity>
                <Image source={back} style={styles.backIcon} />
              </TouchableOpacity>
        }  
        </View>

        <View>
          <Text
            style={{
              fontFamily: Fonts.bold,
              color: Color.white,
              fontSize: FontSize.font20,
            }}>
            {heading}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{marginRight: wp('10%'), color: Color.white}}>
            {sideBtn}
          </Text>
        </View>
      </View>

      <View
        style={{
          height: hp('6%'),
          backgroundColor: Color.white,
          position: 'absolute',
          top: hp('9%'),
          width: wp('100%'),
          borderRadius: wp('20%'),
        }}
      />

      <View style={styles.contentContainer}>{children}</View>

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
    zIndex:-1
  },
  backgroundImage: {
    marginTop: hp('-2%'),
    height: hp('14.5%'),
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
    marginLeft: wp('5%'),
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

export default FullScreenBg;
