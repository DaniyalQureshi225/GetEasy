import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Color, Fonts, wp, hp, FontSize} from './../Color/Color';
import Icon from './Icon';
import {mobile, user, x} from '../assets/Images';

const DrawerContent = props => {
  const {navigation} = props;

  return (
    <View style={styles.flex}>
         <Image
          source={mobile}
          style={{width: wp('100%'), height: hp('90%'), position: 'absolute', zIndex:999, top:hp('6%'), left:wp('44%'),}}
        />
      <DrawerContentScrollView {...props}>
       
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('90%'),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image source={x} style={{width: wp('8%'), height: wp('8%')}} />
            </TouchableOpacity>
            <Image source={user} resizeMode='contain' style={{width: wp('9%'), height: wp('9%')}} />
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.padding}>
        <TouchableOpacity style={styles.button}>
          <Icon
            size={wp('5%')}
            type="AntDesign"
            color={Color.white}
            name="questioncircleo"
          />
          <Text style={styles.text}>{'Logout'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
     overflow:'hidden'
  },
  container: {
    width: '92%',
    paddingLeft: '4%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp('5%'),
    marginTop: hp('2%'),
  },
  title: {
    color: Color.black,
    fontSize: FontSize.font16,
    fontFamily: Fonts.semiBold,
  },
  caption: {
    textAlign: 'left',
    color: Color.gray,
    fontFamily: Fonts.medium,
    fontSize: FontSize.font14,
  },
  image: {
    width: wp('13%'),
    height: wp('13%'),
    borderRadius: 180,
  },
  textContainer: {
    width: wp('45.5%'),
    marginLeft: wp('2%'),
    flexDirection: 'column',
  },
  padding: {
    paddingBottom: hp('5%'),
  },
  button: {
    margin: wp('2%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: Color.white,
    fontFamily: Fonts.medium,
    fontSize: FontSize.font16,
    marginLeft: wp('3%'),
  },
});

export default DrawerContent;
