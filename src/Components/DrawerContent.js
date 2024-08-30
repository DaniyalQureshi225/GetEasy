import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { Color, Fonts, wp, hp, FontSize } from './../Color/Color';
import Icon from './Icon';
import { mobile, user, x } from '../assets/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = (props) => {
  const { navigation } = props;

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem('Token');
      console.log('Item with key "Token" removed successfully.');
     
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      });
    } catch (error) {
      console.error('Error removing item from AsyncStorage:', error);
      Alert.alert('Error', 'An error occurred while logging out.');
    }
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={x} style={styles.icon} />
          </TouchableOpacity>
          <Image source={user} resizeMode='contain' style={styles.userImage} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={removeItem} style={styles.button}>
          <Icon
            size={wp('5%')}
            type="AntDesign"
            color={Color.white}
            name="questioncircleo"
            style={styles.iconSpacing}
          />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: wp('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('5%'),
    marginTop: hp('2%'),
  },
  icon: {
    width: wp('8%'),
    height: wp('8%'),
  },
  userImage: {
    width: wp('9%'),
    height: wp('9%'),
  },
  footer: {
    paddingBottom: hp('5%'),
  },
  button: {
    margin: wp('2%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: wp('5%'),
  },
  buttonText: {
    color: Color.white,
    fontFamily: Fonts.medium,
    fontSize: FontSize.font16,
    marginLeft: wp('5%'),
  },
});

export default DrawerContent;
