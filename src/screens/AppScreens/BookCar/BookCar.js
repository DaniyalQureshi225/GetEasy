import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Color, hp, wp} from '../../../Color/Color';
import {
  calender,
  chair,
  land,
  plane,
  takeOff,
  user,
  userIcon,
} from '../../../assets/Images';
import BookingBg from '../../../Components/BookingBg';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Appbtn from '../../../Components/Appbtn';
import ToggleBtn from '../../../Components/ToggleBtn';
import FlightBtn from '../../../Components/FlightInput';
import FlightBigField from '../../../Components/FligtBigField';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import FlightDateBtn from '../../../Components/FlightDateBtn';
import FlightDropDown from '../../../Components/FlightDropDown';
import {styles} from './style';
import BottomTab from '../../../Components/BottomTab';

const BookCar = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const CheckIn = moment(date).format('DD MMM, YYYY');
  const CheckOut = moment(date2).format('DD MMM, YYYY');
  const CheckCurrent = moment(new Date()).format('DD MMM, YYYY');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const PickUpTime = moment(time).format('HH:mm');
  const DropOffTime = moment(time2).format('HH:mm');
  const CurrentTime = moment(new Date()).format('HH:mm');

  return (
    <>
      <BookingBg
        OpenDrawer={()=>navigation.toggleDrawer()}
        userImg={user}
        txt1={'Hello Mitul Patel'}
        txt2={'Search Cars'}
        mainImg={plane}>
        <View style={{height: hp('2%')}} />
        <FlightBtn
          field={from}
          setField={setFrom}
          text={'PickUp'}
          img={takeOff}
          placeholder={'Location'}
          textWidth={wp('80%')}
        />

        <FlightBtn
          field={to}
          setField={setTo}
          text={'DropOff'}
          img={land}
          placeholder={'Destination'}
          textWidth={wp('80%')}
          ww={wp('8%')}
          hh={wp('9%')}
        />

        <View style={styles.dateRow}>
          <FlightDateBtn
            onPress={() => setOpen(true)}
            field={date}
            setField={setDate}
            text={'pickup date'}
            img={calender}
            date={CheckIn !== CheckCurrent ? CheckIn : 'dd mmm, yyyy'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />

          <FlightDateBtn
            onPress={() => setOpen2(true)}
            field={date2}
            setField={setDate2}
            text={'drop date'}
            img={calender}
            date={CheckOut !== CheckCurrent ? CheckOut : 'dd mmm, yyyy'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />
        </View>

        <View style={[styles.dateRow, {marginBottom:hp('5%')}]}>
          <FlightDateBtn
            onPress={() => setOpen3(true)}
            field={time}
            setField={setTime}
            text={'pickup time'}
            img={calender}
            date={PickUpTime !== CurrentTime ? PickUpTime : 'hh:mm'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />

          <FlightDateBtn
            onPress={() => setOpen4(true)}
            field={time2}
            setField={setTime2}
            text={'drop time'}
            img={calender}
            date={DropOffTime !== CurrentTime ? DropOffTime : 'hh:mm'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />
        </View>
      </BookingBg>
      <HideWithKeyboard style={styles.buttonContainer}>
       
          <Appbtn btnText={'Search Now'} />
          <BottomTab
        isCar={true}
        onPressHome={() => navigation.navigate('Filter')}
        onPressFlight={() => navigation.navigate('BookFlight')}
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

      <DatePicker
        modal
        mode={'time'}
        open={open3}
        date={time}
        onConfirm={time => {
          setOpen3(false);
          setTime(time);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <DatePicker
        modal
        mode={'time'}
        open={open4}
        date={time2}
        onConfirm={time2 => {
          setOpen4(false);
          setTime2(time2);
        }}
        onCancel={() => {
          setOpen4(false);
        }}
      />
    </>
  );
};

export default BookCar;
