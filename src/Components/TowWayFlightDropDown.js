import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {wp, hp, FontSize, Fonts, Color} from '../Color/Color';
import Icon from './Icon';

const TwoWayFlightDropDown = ({
  text,
  ww,
  hh,
  img,
  text2,
  containerWidth,
  textWidth,
  onPress,
}) => {
  const [open, setOpen] = useState(false);
  const [class1, setClass1] = useState('');
  return (
    <TouchableOpacity
      onPress={() => setOpen(!open)}
      style={{
        flexDirection: 'row',
        backgroundColor: Color.textBox,
        width: containerWidth || wp('90%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
        height: hp('8%'),
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        borderRadius: wp('1%'),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Image
        source={img}
        resizeMode=""
        style={{
          width: ww || wp('8%'),
          height: hh || wp('8%'),
          marginBottom: hp('0%'),
        }}
      />
      <View style={{marginLeft: wp('2%'), marginTop: hp('2%')}}>
        <Text
          style={{
            color: Color.primaryColor,
            textTransform: 'uppercase',
            letterSpacing: wp('1%'),
            fontSize: FontSize.font10,
            fontFamily: Fonts.bold,
          }}>
          {text}
        </Text>
        <View style={{height: hp('1%')}} />
        <View
          style={{
            flexDirection: 'row',
            width: wp('30%'),
            alignItems: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: Color.gray,
              width: textWidth || wp('70%'),
              height: hp('5%'),
            }}>
            {class1 !== '' ? class1 : text2}
          </Text>

          <Icon
            type={'Entypo'}
            name={open ? 'chevron-small-up' : 'chevron-small-down'}
            size={wp('8%')}
            color={Color.gray}
            style={{height: hp('5%'), position:'absolute', top:hp('-2%'), right:wp('-40%')}}
        
          />
        </View>

        {open && (
          <View
            style={{
              width: wp('90%'),
              backgroundColor: Color.white,
              position: 'absolute',
              zIndex: 999,
              top: hp('6%'),
              left: wp('-12.8'),
            }}>
            <TouchableOpacity
              onPress={() => {
                setOpen(!open), setClass1('Economy');
              }}
              style={class1 === 'Economy' ? styles.btn1 : styles.btn}>
              <Text style={styles.txt}>Economy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOpen(!open), setClass1('Premium Economy');
              }}
              style={class1 === 'Premium Economy' ?styles.btn1 : styles.btn}>
              <Text style={styles.txt}>Premium Economy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOpen(!open), setClass1('Business');
              }}
              style={class1 === 'Business' ?styles.btn1 : styles.btn}>
              <Text style={styles.txt}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOpen(!open), setClass1('First Class');
              }}
              style={class1 === 'First Class' ?styles.btn1 : styles.btn}>
              <Text style={styles.txt}>First Class</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TwoWayFlightDropDown;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: wp('3%'),

    width: wp('90%'),
    alignItems: 'flex-start',
  },
  btn1: {
    paddingVertical: wp('3%'),
    borderWidth:0.5,
    borderColor:Color.otpBg,
    width: wp('90%'),
    alignItems: 'flex-start',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  txt: {color: Color.gray, marginLeft: wp('12%')},
});
