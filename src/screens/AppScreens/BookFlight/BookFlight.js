import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Color, hp, wp } from '../../../Color/Color';
import { calender, chair, land, plane, takeOff, user, userIcon } from '../../../assets/Images';
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
import { styles } from './style';
import BottomTab from '../../../Components/BottomTab';

const BookFlight = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const CheckIn = moment(date).format('DD MMM, YYYY');
  const CheckOut = moment(date2).format('DD MMM, YYYY');
  const CheckCurrent = moment(new Date()).format('DD MMM, YYYY');
  const [way, setWay] = useState('oneWay');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [adult, setAdult] = useState('');
  const [kids, setKids] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <>
      <BookingBg
        userImg={user}
        txt1={'Hello Mitul Patel'}
        txt2={'Search Flights'}
        mainImg={plane}
        OpenDrawer={()=>navigation.toggleDrawer()}
      >
        <View style={styles.toggleContainer}>
          <ToggleBtn
            backgroundColor={way === 'oneWay' ? Color.primaryColor : Color.white}
            color={way === 'oneWay' ? Color.white : Color.primaryColor}
            onPress={() => setWay('oneWay')}
            name={'arrow-right-l'}
            text={'One way'}
          />

          <ToggleBtn
            backgroundColor={way === 'twoWay' ? Color.primaryColor : Color.white}
            color={way === 'twoWay' ? Color.white : Color.primaryColor}
            onPress={() => setWay('twoWay')}
            name={'arrow-swap'}
            text={'Round Trip'}
          />
        </View>

        {way === 'oneWay' ? (
          <>
            <FlightBtn
              field={from}
              setField={setFrom}
              text={'From'}
              img={takeOff}
              placeholder={'From City'}
              textWidth={wp('80%')}
            />

            <FlightBtn
              field={to}
              setField={setTo}
              text={'To'}
              img={land}
              placeholder={'To City'}
              textWidth={wp('80%')}
              ww={wp('8%')}
              hh={wp('9%')}
            />

            <View style={styles.row}>
              <FlightDateBtn
                onPress={() => setOpen(true)}
                field={date}
                setField={setDate}
                text={'departure'}
                img={calender}
                date={CheckIn !== CheckCurrent ? CheckIn : 'dd mmm, yyyy'}
                textWidth={wp('80%')}
                containerWidth={wp('43%')}
              />

              <FlightDropDown
                text={'Class'}
                img={chair}
                textWidth={wp('20%')}
                containerWidth={wp('43%')}
                ww={wp('6%')}
                hh={wp('7%')}
                text2={'Class'}
              />
            </View>
            <FlightBigField
              field={to}
              setField={setTo}
              text={'pessengers'}
              img={userIcon}
              placeholder={'00'}
              textWidth={wp('8%')}
              containerWidth={wp('90%')}
              ww={wp('5.5%')}
              hh={wp('6%')}
              t1={'Adults'}
              field1={adult}
              setField1={setAdult}
              t2={'Kids'}
              field2={kids}
              setField2={setKids}
              t3={'Kgs'}
              field3={weight}
              setField3={setWeight}
              mb={hp('8%')}
            />

          </>
        ) : (
          <>
            <FlightBtn
              field={from}
              setField={setFrom}
              text={'From'}
              img={takeOff}
              placeholder={'From City'}
              textWidth={wp('80%')}
            />

            <FlightBtn
              field={to}
              setField={setTo}
              text={'To'}
              img={land}
              placeholder={'To City'}
              textWidth={wp('80%')}
              ww={wp('8%')}
              hh={wp('9%')}
            />

            <FlightDropDown
              text={'Class'}
              img={chair}
              textWidth={wp('60%')}
              containerWidth={wp('90%')}
              ww={wp('6%')}
              hh={wp('7%')}
              text2={'Class'}
            />

            <View style={styles.dateRow}>
              <FlightDateBtn
                onPress={() => setOpen(true)}
                field={date}
                setField={setDate}
                text={'departure'}
                img={calender}
                date={CheckIn !== CheckCurrent ? CheckIn : 'dd mmm, yyyy'}
                textWidth={wp('80%')}
                containerWidth={wp('43%')}
              />

              <FlightDateBtn
                onPress={() => setOpen2(true)}
                field={date2}
                setField={setDate2}
                text={'arrival'}
                img={calender}
                date={CheckOut !== CheckCurrent ? CheckOut : 'dd mmm, yyyy'}
                textWidth={wp('80%')}
                containerWidth={wp('43%')}
              />
            </View>

            <FlightBigField
              field={to}
              setField={setTo}
              text={'pessengers'}
              img={userIcon}
              placeholder={'00'}
              textWidth={wp('8%')}
              containerWidth={wp('90%')}
              ww={wp('5.5%')}
              hh={wp('6%')}
              t1={'Adults'}
              field1={adult}
              setField1={setAdult}
              t2={'Kids'}
              field2={kids}
              setField2={setKids}
              t3={'Kgs'}
              field3={weight}
              setField3={setWeight}
            />
          </>
        )}
        <Appbtn onPress={()=>navigation.navigate('BookCar')} btnText={'Search Now'} />
      </BookingBg>
      <HideWithKeyboard style={styles.buttonContainer}>
       
        <BottomTab
        isFlight={true}
        onPressHome={() => navigation.navigate('Filter')}
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


export default BookFlight;
