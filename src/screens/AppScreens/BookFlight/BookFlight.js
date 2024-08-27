// import { View, Text } from "react-native";
// import React, { useState } from "react";
// import FlightBtn from "../../../Components/FlightInput";
// import { land } from "../../../assets/Images";
// import { wp } from "../../../Color/Color";

// const BookFlight = () => {
//   const [myCity, setMyCity] = useState('');

//   const handleCitySelect = (city) => {
//     setMyCity(city);
//   };

//   return (
//     <View>
//       <FlightBtn
//         text={'To'}
//         img={land}
//         placeholder={'To City'}
//         textWidth={wp('80%')}
//         ww={wp('8%')}
//         hh={wp('9%')}
//         auto={true}
//         onCitySelect={handleCitySelect}
//       />

//     </View>
//   );
// };

// export default BookFlight;

import {View, Text, Image, TouchableOpacity, ScrollView,Linking} from 'react-native';
import {wp, hp, FontSize, Fonts, Color} from './../../../Color/Color';
import React, {useState} from 'react';
import {
  calender,
  chair,
  drawerIcon,
  land,
  plane,
  takeOff,
  user,
  userIcon,
} from './../../../assets/Images';
import FlightBtn from '../../../Components/FlightInput';
import Auto from '../../../Components/Auto';
import ToggleBtn from '../../../Components/ToggleBtn';
import {styles} from './style';
import moment from 'moment';
import FlightDateBtn from '../../../Components/FlightDateBtn';
import FlightDropDown from '../../../Components/FlightDropDown';
import FlightBigField from '../../../Components/FligtBigField';
import Appbtn from '../../../Components/Appbtn';
import TwoWayFlightDropDown from '../../../Components/TowWayFlightDropDown';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import BottomTab from '../../../Components/BottomTab';
import DatePicker from 'react-native-date-picker';
import ScreenWraper from '../../../Components/ScreenWraper';
const BookingBg = ({navigation}) => {
  const [myCity, setMyCity] = useState('');
  const [myCity2, setMyCity2] = useState('');

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
  const [class1, setClass1] = useState('')

  
  const handleCitySelect = city => {
    setMyCity(city);
  };

  const handleCitySelect2 = city => {
    setMyCity2(city);
  };

  console.log( myCity, myCity2);


  const handlePress1 = () => {
    const url = `https://geteasytrip.com/flights/search?fromId=${myCity}&toId=${myCity2}&adults=${adult}&departDate=${CheckIn}&cabin=${class1}`;
    Linking.openURL(url).catch(err => console.error('Failed to open URL: ', err));
  };


  return (
    <ScreenWraper>
    <View
      style={{
        flex: 1,
        backgroundColor: Color.primaryColor,
        zIndex: -1,
        position: 'relative',
      }}>
      <View
        style={{
          width: wp('90%'),
          alignSelf: 'center',
          marginTop: hp('1%'),
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image
            source={drawerIcon}
            style={{width: wp('5%'), height: wp('5%')}}
          />
        </TouchableOpacity>

        <Image
          source={user}
          resizeMode="contain"
          style={{width: wp('10%'), height: wp('10%')}}
        />
      </View>

      <Text
        style={{
          marginLeft: wp('5%'),
          color: Color.white,
          fontSize: FontSize.font14,
          marginTop: hp('1%'),
        }}>
       Hello Mitul Patel
      </Text>
      <Text
        style={{
          marginLeft: wp('5%'),
          fontSize: FontSize.font20,
          fontFamily: Fonts.bold,
          color: Color.white,
        }}> 
      Search Flights
      </Text>
      <Image
        source={plane}
        resizeMode="contain"
        style={{
          width: wp('130%'),
          height: wp('50%'),
          marginLeft:  wp('10%'),
          transform:'5deg',
          zIndex:20
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={{
          backgroundColor: Color.white,
          marginTop: hp('-6%'),
          borderTopRightRadius: wp('5%'),
          borderTopLeftRadius: wp('5%'),
          position: 'relative',
          zIndex: 3,
        }}>
        {/* <Auto/> */}

        <View style={styles.toggleContainer}>
          <ToggleBtn
            backgroundColor={
              way === 'oneWay' ? Color.primaryColor : Color.white
            }
            color={way === 'oneWay' ? Color.white : Color.primaryColor}
            onPress={() => setWay('oneWay')}
            name={'arrow-right-l'}
            text={'One way'}
          />

          <ToggleBtn
            backgroundColor={
              way === 'twoWay' ? Color.primaryColor : Color.white
            }
            color={way === 'twoWay' ? Color.white : Color.primaryColor}
            onPress={() => setWay('twoWay')}
            name={'arrow-swap'}
            text={'Round Trip'}
          />
        </View>

        {way === 'oneWay' ? (
          <>
            <FlightBtn
              // field={from}
              // setField={setFrom}
              text={'From'}
              img={takeOff}
              placeholder={'From City'}
              textWidth={wp('80%')}
              auto={true}
              zIndex={100}
              position={'relative'}
              onCitySelect={handleCitySelect}
            />

            <FlightBtn
              text={'To'}
              img={land}
              placeholder={'To City'}
              textWidth={wp('80%')}
              ww={wp('8%')}
              hh={wp('9%')}
              auto={true}
              onCitySelect={handleCitySelect2}
              zIndex={50}
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
            <Appbtn onPress={()=>handlePress1()} mt={hp('-3%')} btnText={'Search Now'} />
          </>
        ) : (
          <>
            <FlightBtn
              // field={from}
              // setField={setFrom}
              text={'From'}
              img={takeOff}
              placeholder={'From City'}
              textWidth={wp('80%')}
              auto={true}
              zIndex={100}
              position={'relative'}
              onCitySelect={handleCitySelect}
            />

            <FlightBtn
              text={'To'}
              img={land}
              placeholder={'To City'}
              textWidth={wp('80%')}
              ww={wp('8%')}
              hh={wp('9%')}
              auto={true}
              onCitySelect={handleCitySelect}
              zIndex={100}
            />

            <TwoWayFlightDropDown
              text={'Class'}
              img={chair}
              textWidth={wp('80%')}
              containerWidth={wp('90%')}
              ww={wp('6%')}
              hh={wp('7%')}
              text2={'Class'}
              class1={class1}
              setClass1={setClass1}
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
              mb={hp('8%')}
            />
            <Appbtn mt={hp('3%')} btnText={'Search Now'} />
          </>
        )}
      </ScrollView>
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
    </View>
    </ScreenWraper>
  );
};

export default BookingBg;





