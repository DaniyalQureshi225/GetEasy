// Filter.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FullScreenBg from '../../../Components/FullScreenBg';
import ColorfulAutocomplete from '../../../Components/Test';
import Icon from '../../../Components/Icon';
import {Color, Fonts, FontSize, hp, wp} from '../../../Color/Color';
import {drawerIcon, home, plane, user} from '../../../assets/Images';
import BookingBg from '../../../Components/BookingBg';
import BookingInput from '../../../Components/BookingInput';
import DatePickerBtn from '../../../Components/DatePickerBtn';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Appbtn from '../../../Components/Appbtn';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import BottomTab from '../../../Components/BottomTab';

const Filter = ({navigation}) => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const CheckIn = moment(date).format('YYYY-MM-DD');
  const CheckOut = moment(date2).format('YYYY-MM-DD');
  const CheckCurrent = moment(new Date()).format('YYYY-MM-DD');
  const [adult, setAdult] = useState('');
  const [young, setYoung] = useState('')
  return (
    <>
      <BookingBg
        userImg={user}
        txt1={'Hello Mitul Patel'}
        txt2={'Search Hotels'}
        OpenDrawer={() => navigation.toggleDrawer()}
        mainImg={plane}>
        <BookingInput
          field={city}
          setField={setCity}
          inputWidht={{ width:wp('70%'), color:Color.black}}
          type={'AntDesign'}
          name={'search1'}
          containerWidth={wp('90%')}
          placeholder={'Search City Here'}
          
        />

        <View style={{height: hp('50%')}}>
          <View
            style={{
              width: wp('90%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp('2%'),
            }}>
            <DatePickerBtn
              onPress={() => setOpen(true)}
              text={CheckIn !== CheckCurrent ? CheckIn : 'Check in'}
              type={'AntDesign'}
              name={'calendar'}
            />
            <DatePickerBtn
              onPress={() => setOpen2(true)}
              text={CheckOut !== CheckCurrent ? CheckOut : 'Check in'}
              type={'AntDesign'}
              name={'calendar'}
            />
          </View>

          <View
            style={{
              width: wp('90%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp('0%'),
            }}>
            <BookingInput
              field={adult}
              setField={setAdult}
              type={'Entypo'}
              name={'man'}
              containerWidth={wp('43%')}
              placeholder={'adult'}
              mt={hp('2%')}
              keyboardType={'numeric'}
              inputWidht={{ width:wp('30%'), color:Color.black}}
              ml={2}
            />
            <BookingInput
              field={young}
              setField={setYoung}
              inputWidht={{ width:wp('30%'), color:Color.black}}
              type={'FontAwesome'}
              name={'child'}
              containerWidth={wp('43%')}
              placeholder={'young'}
              mt={hp('2%')}
              keyboardType={'numeric'}
              ml={2}
            />
          </View>
          <HideWithKeyboard
            style={{marginTop: 'auto', backgroundColor: Color.white}}>
            <Appbtn
              onPress={() => navigation.navigate('BookFlight')}
              btnText={'Update Search'}
            />
          </HideWithKeyboard>
        </View>
      </BookingBg>
            <HideWithKeyboard>
            <BottomTab
        isHome={true}
        onPressFlight={() =>navigation.navigate('BookFlight')}
        onPressCar={() => navigation.navigate('BookCar')}
        onPressProfile={() => navigation.navigate('Profile')}
      />
            </HideWithKeyboard>
     

      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <DatePicker
        modal
        mode={'date'}
        open={open2}
        date={date2}
        minimumDate={new Date()}
        onConfirm={date2 => {
          setOpen2(false);
          setDate2(date2);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default Filter;
