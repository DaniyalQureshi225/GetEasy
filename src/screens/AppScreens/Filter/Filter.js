// import React, { useState } from 'react';
// import { View, Linking, Text } from 'react-native';
// import moment from 'moment';
// import HideWithKeyboard from 'react-native-hide-with-keyboard';
// import DatePicker from 'react-native-date-picker';
// import ScreenWraper from '../../../Components/ScreenWraper';
// import BookingBg2 from '../../../Components/BookingBg2';
// import PlaceInput from '../../../Components/PlaceInput';
// import Appbtn from '../../../Components/Appbtn';
// import BottomTab from '../../../Components/BottomTab';
// import { Color, wp, hp } from '../../../Color/Color';
// import { user, hotelpics } from '../../../assets/Images';
// import DatePickerBtn from '../../../Components/DatePickerBtn';
// import SmallTextBox from '../../../Components/SmallTextBox';
// import { useAppContext } from '../../../Components/AppContext';

// const Filter = ({ navigation }) => {
//   const yesterday2 = new Date();
//   yesterday2.setDate(yesterday2.getDate() - 2);

//   const { dataa } = useAppContext();

//   const [city, setCity] = useState('');
//   const [date, setDate] = useState(yesterday2);
//   const [date2, setDate2] = useState(new Date());
//   const [open, setOpen] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const [qury, setQury] = useState('');
//   const CheckIn = moment(date).format('YYYY-MM-DD');
//   const CheckOut = moment(date2).format('YYYY-MM-DD');
//   const CheckCurrent = moment(yesterday2).format('YYYY-MM-DD');
//   const CheckCurrent2 = moment(new Date()).format('YYYY-MM-DD');

//   const [adult, setAdult] = useState(1);
//   const [kids, setKids] = useState('');
//   const [room, setRoom] = useState('');

//   const [show, setShow] = useState(false)

//   const handlePlaceDetailsSelect = (details) => {
//     console.log('Received details:', details);
//     setQury(details);
//     if (details && details?.details?.address_components) {
//       const locality = details.address_components.find(
//         component =>
//           component.types.includes('locality') ||
//           component.types.includes('administrative_area_level_1'),
//       );

//       if (locality) {
//         setCity(locality.long_name);
//         console.log('Place Details:', locality.long_name);
//       } else {
//         console.log('Locality not found in address components.');
//       }
//     } else {
//       console.log('Invalid details received.');
//     }
//   };

//   const handlePress = () => {
//     const url = `https://www.booking.com/searchresults.en-gb.html?ss=${city}&lang=en-gb&sb=1&&checkin=${CheckIn}&checkout=${CheckOut}&group_adults=${adult}&no_rooms=${room}&group_children=${kids}`;
//     Linking.openURL(url).catch(err =>
//       console.error('Failed to open URL: ', err),
//     );
//   };

//   console.log('City in Filter:', city);

//   console.log(show);

//   return (
//     <ScreenWraper>
//       <BookingBg2
//         userImg={{ uri: dataa?.avatar }}
//         txt1={dataa ? `Hello ${dataa?.username}` : null}
//         txt2={'Search Hotels'}
//         OpenDrawer={() => navigation.toggleDrawer()}
//         mainImg={hotelpics}
//         ml={wp('-20%')}
//         profile={() => navigation.navigate('Profile')}
//         data={dataa}>
//         <View style={{ height: hp('60%'), marginTop: hp('10%') }}>
//           <View
//             style={{
//               width: wp('90%'),
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//               alignSelf: 'center',
//               marginTop: hp('3%'),
//             }}>
//             <DatePickerBtn
//               onPress={() => setOpen(true)}
//               text={CheckIn !== CheckCurrent ? CheckIn : 'Check in'}
//               type={'AntDesign'}
//               name={'calendar'}
//             />
//             <DatePickerBtn
//               onPress={() => setOpen2(true)}
//               text={CheckOut !== CheckCurrent2 ? CheckOut : 'Check out'}
//               type={'AntDesign'}
//               name={'calendar'}
//               disabled={CheckIn !== CheckCurrent ? false : true}
//             />
//           </View>

//           <View
//             style={{
//               width: wp('90%'),
//               marginLeft: wp('10%'),
//               flexDirection: 'row',
//               alignSelf: 'center',
//             }}>
//               {/* {
//                 CheckOut === CheckCurrent2  && show ? <Text style={{ color: Color.red, width: wp('45%') }}>Required</Text> : null
//               }

//               {
//                CheckIn === CheckCurrent && show ? <Text style={{ color: Color.red, width: wp('20%') }}>Required</Text> : null
//               } */}

//           </View>

//           <View
//             style={{
//               width: wp('90%'),
//               flexDirection: 'row',
//               alignSelf: 'center',
//               marginTop: hp('3%'),
//               height: hp('5.7%'),
//               justifyContent: 'space-between',
//             }}>
//             <SmallTextBox
//               type={'Entypo'}
//               name={'man'}
//               placeholder={'Adult'}
//               field={adult}
//               setField={setAdult}
//             />
//             <SmallTextBox
//               type={'FontAwesome'}
//               name={'child'}
//               placeholder={'Kids'}
//               field={kids}
//               setField={setKids}
//             />
//             <SmallTextBox
//               type={'MaterialIcons'}
//               name={'bedroom-child'}
//               placeholder={'Rooms'}
//               field={room}
//               setField={setRoom}
//             />
//           </View>

//           <View
//             style={{
//               width: wp('90%'),
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//               alignSelf: 'center',
//               marginTop: hp('0%'),
//             }}></View>

//           <HideWithKeyboard
//             style={{
//               marginTop: 'auto',
//               backgroundColor: Color.white,
//               marginBottom: hp('10%'),
//             }}>
//             <Appbtn

//               onPress={city?.length < 3 ? ()=>setShow(true) : ()=>handlePress()}
//               btnText={'Search Now'}
//             />
//           </HideWithKeyboard>
//         </View>
//       </BookingBg2>

//       <PlaceInput
//         field={city}
//         setField={setCity}
//         inputWidht={{ width: wp('70%'), color: Color.black }}
//         type={'AntDesign'}
//         name={'search1'}
//         containerWidth={wp('90%')}
//         placeholder={'Search'}
//         onDetailsSelect={handlePlaceDetailsSelect}
//         show={show}
//         zIndexRequired={city?.length < 2 ? 1 : -1}
//       />

//       <DatePicker
//         modal
//         mode={'date'}
//         open={open}
//         date={date}
//         minimumDate={new Date()}
//         onConfirm={date => {
//           setOpen(false);
//           setDate(date);
//         }}
//         onCancel={() => {
//           setOpen(false);
//         }}
//       />

//       <DatePicker
//         modal
//         mode={'date'}
//         open={open2}
//         date={date2}
//         minimumDate={date}
//         onConfirm={date2 => {
//           setOpen2(false);
//           setDate2(date2);
//         }}
//         onCancel={() => {
//           setOpen2(false);
//         }}
//       />
//     </ScreenWraper>
//   );
// };

// export default Filter;

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Linking, Text} from 'react-native';
import {Color, hp, wp} from '../../../Color/Color';
import {
  calender,
  car,
  car1,
  cars,
  chair,
  clock,
  hotel,
  hotel2,
  hotelpics,
  land,
  placeholder,
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
import ScreenWraper from '../../../Components/ScreenWraper';
import MyDrawer from '../../../route/AppDrawer';
import CityDropdown from '../../../Components/CityDropDown';
import CityDropDown from '../../../Components/CityDropDown';
import {useAppContext} from '../../../Components/AppContext';
import CarInput from '../../../Components/CarInput';

const Filter = ({navigation}) => {
  const {dataa, errorr, myToken, triggerApiCall} = useAppContext();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1); 
  const [selectedCity, setSelectedCity] = useState(null);
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const CheckIn = moment(date).format('YYYY-MM-DD');
  const CheckOut = moment(date2).format('YYYY-MM-DD');
  const [CheckCurrent, setCheckCurrent] = useState(false);
  const [CheckCurrent2, setCheckCurrent2] = useState(false);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const PickUpTime = moment(time).format('HH:mm');
  const DropOffTime = moment(time2).format('HH:mm');
  const CurrentTime = moment(new Date()).format('HH:mm');
  const [lat, setLat] = useState('');
  const [lang, setLang] = useState('');
  const [lat2, setLat2] = useState('');
  const [lang2, setLang2] = useState('');

  const doDay = moment(date).format('DD');
  const doHour = moment(time).format('HH');
  const doMint = moment(time).format('mm');
  const doMonth = moment(date).format('MM');
  const doYear = moment(date).format('YYYY');

  const puDay = moment(date2).format('DD');
  const puHour = moment(time2).format('HH');
  const puMint = moment(time2).format('mm');
  const puMonth = moment(date2).format('MM');
  const puYear = moment(date2).format('YYYY');

  const [adult, setAdult] = useState('1');
  const [kids, setKids] = useState('');
  const [room, setRoom] = useState('');

  const [myCity, setMyCity] = useState('');
  const [myCity2, setMyCity2] = useState('');

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [CheckinCheck, setCeckinCheck] = useState(true);

  const [placeholder, setPlaceholder] = useState('dd mmm, yyyy');
  const [placeholder2, setPlaceholder2] = useState('dd mmm, yyyy');


  const handleCitySelect = city => {
    setMyCity(city);
    setLat(myCity?.details?.geometry?.location?.lat);
    setLang(myCity?.details?.geometry?.location?.lng);
  };


  const handleDetails = details => {
    console.log('Received details:', details);
    // setLat(details?.details?.geometry?.location?.lat);
    // setLang(details?.details?.geometry?.location?.lng);
  };

  const handleDetails2 = details => {
    // setLat2(details?.details?.geometry?.location?.lat);
    // setLang2(details?.details?.geometry?.location?.lng);
  };

  const handleCitySelect2 = city => {
    setMyCity2(city);
    setLat(myCity2?.details?.geometry?.location?.lat);
    setLang(myCity2?.details?.geometry?.location?.lng);
  };

  const handlePress = () => {
    const url = `https://www.booking.com/searchresults.en-gb.html?ss=${myCity?.details?.address_components[0]?.long_name}&lang=en-gb&sb=1&&checkin=${CheckIn}&checkout=${CheckOut}&group_adults=${adult}&no_rooms=${room}&group_children=${kids}`;
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL: ', err),
    );
  };


 



  
 

  return (
    <ScreenWraper>
      <BookingBg
        OpenDrawer={() => navigation.toggleDrawer()}
        userImg={dataa ? {uri: dataa?.avatar} : placeholder}
        txt1={dataa ? `Hello ${dataa?.username}` : null}
        txt2={'Search Hotels'}
        mainImg={hotelpics}
        ml={wp('-15%')}
        onPressProfile={() => navigation.navigate('Profile')}
        tf={'0deg'}>
        <View style={{height: hp('2%')}} />

        <CarInput
          // field={from}
          setField={setFrom}
          text={'Hotel'}
          img={hotel2}
          placeholder={'Search City Here...'}
          textWidth={wp('80%')}
          auto={true}
          zIndex={100}
          position={'relative'}
          onCitySelect={handleCitySelect}
          onSelecetDetails={handleDetails}
          tintColor={Color.primaryColor}
        />

        {from.length < 3 && show ? (
          <Text style={{color: Color.red, marginLeft: wp('10%')}}>
            Please select location
          </Text>
        ) : null}

        <View style={styles.dateRow}>
          <FlightDateBtn
            onPress={() => setOpen(true)}
            field={date}
            setField={setDate}
            text={'Check In'}
            img={calender}
            date={placeholder || CheckIn}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />

          <FlightDateBtn
            onPress={() => setOpen2(true)}
            field={date2}
            setField={setDate2}
            text={'Check Out'}
            img={calender}
            date={placeholder2 || CheckOut}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
            disabled={CheckinCheck}
          />
        </View>


        <View style={{flexDirection: 'row', zIndex: -1}}>
          {!CheckCurrent && show ? (
            <Text style={{color: Color.red, marginLeft: wp('10%')}}>
              Please select a date
            </Text>
          ) : (
            null
          )}

          {!CheckCurrent2 && show ? (
            <Text style={{color: Color.red, marginLeft: CheckCurrent ? wp('55%') : wp('12%')}}>
              Please select a date
            </Text>
          ) : null}
        </View>

        <View style={{flexDirection: 'row', zIndex: -1}}>
                  {date > date2 && show2 ? (
                    <Text style={{color: Color.red, marginLeft: wp('10%')}}>
                      Pickup date must be before drop-off.
                    </Text>
                  ) : null} 
                  </View>
        <FlightBigField
          field={to}
          setField={setTo}
          text={'Guests Info'}
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
          t3={'Rooms'}
          field3={room}
          setField3={setRoom}
          mb={hp('8%')}
         
        />

        <Appbtn
          onPress={() => [from?.length < 3 ||  !CheckCurrent || !CheckCurrent2  ?  setShow(true)  : date > date2 ? setShow2(true) : handlePress()]}
          btnText={'Search Now'}
        />
      </BookingBg>
      <HideWithKeyboard>
        <View style={{backgroundColor: Color.white}}>
          <BottomTab
            isHome={true}
            onPressFlight={() => navigation.navigate('BookFlight')}
            onPressCar={() => navigation.navigate('BookCar')}
            onPressProfile={() => navigation.navigate('Profile')}
          />
        </View>
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
          setPlaceholder('');
          setCeckinCheck(false)
          setCheckCurrent(true)
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
        minimumDate={date}
        onConfirm={date2 => {
          setOpen2(false);
          setDate2(date2);
          setPlaceholder2('');
          setCheckCurrent2(true)
        }}
        onCancel={() => {
          setOpen2(false);
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
          setOpen3(false);
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
    </ScreenWraper>
  );
};

export default Filter;
