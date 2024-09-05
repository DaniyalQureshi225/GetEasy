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
import useBookCar from './useBookCar';
import CityDropdown from '../../../Components/CityDropDown';
import CityDropDown from '../../../Components/CityDropDown';
import {useAppContext} from '../../../Components/AppContext';
import CarInput from '../../../Components/CarInput';

const BookCar = ({navigation}) => {
  const {dataa, errorr, myToken, triggerApiCall} = useAppContext();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const [selectedCity, setSelectedCity] = useState(null);
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const CheckIn = moment(date).format('DD MMM, YYYY');
  const CheckOut = moment(date2).format('DD MMM, YYYY');
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
  const [placeholder, setPlaceholder] = useState('dd mmm, yyyy');
  const [placeholder2, setPlaceholder2] = useState('dd mmm, yyyy');
  const [placeholder3, setPlaceholder3] = useState('Pickup-Time');
  const [placeholder4, setPlaceholder4] = useState('Drop-Off');

  const [CheckinCheck, setCeckinCheck] = useState(true);

  const [myCity, setMyCity] = useState('');
  const [myCity2, setMyCity2] = useState('');

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);


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


  
  const removeLeadingZero = (value) => {
    return value ? value.replace(/^0+/, '') : value;
  };
  
  const handlePress = () => {
      const baseUrl = 'https://cars.booking.com/search-results';
  
      const coordinates = `${encodeURIComponent(myCity?.details?.geometry?.location?.lat)}%2C${encodeURIComponent(myCity?.details?.geometry?.location?.lng)}`;
      const dropCoordinates = `${encodeURIComponent(myCity2?.details?.geometry?.location?.lat)}%2C${encodeURIComponent(myCity2?.details?.geometry?.location?.lng)}`;
      const dropLocationName = encodeURIComponent(myCity2?.details?.address_components[0]?.long_name);
      const locationName = encodeURIComponent(myCity?.details?.address_components[0]?.long_name);
  
      const formattedPuDay = removeLeadingZero(doDay);
      const formattedPuHour = removeLeadingZero(doHour);
      const formattedPuMonth = removeLeadingZero(doMonth);
      const formattedPuMinute = removeLeadingZero(doMint);
      const formattedDoDay = removeLeadingZero(puDay);
      const formattedDoHour = removeLeadingZero(puHour);
      const formattedDoMonth = removeLeadingZero(puMonth);
      const formattedDoMinute = removeLeadingZero(puMint);
  
      const url = `${baseUrl}?adplat=cross_product_bar&aid=304142&coordinates=${coordinates}&cor=usa&doDay=${encodeURIComponent(formattedDoDay)}&doHour=${encodeURIComponent(formattedDoHour)}&doMinute=${encodeURIComponent(formattedDoMinute)}&doMonth=${encodeURIComponent(formattedDoMonth)}&doYear=${encodeURIComponent(doYear)}&driversAge=27&dropCoordinates=${dropCoordinates}&dropFtsType=C&dropLocation=&dropLocationName=${dropLocationName}&ftsType=C&location=&locationName=${locationName}&prefcurrency=USD&preflang=en&puDay=${encodeURIComponent(formattedPuDay)}&puHour=${encodeURIComponent(formattedPuHour)}&puMinute=${encodeURIComponent(formattedPuMinute)}&puMonth=${encodeURIComponent(formattedPuMonth)}&puYear=${encodeURIComponent(puYear)}`;

      console.log('>>>>>>>>>>>>',  url );
  
      Linking.openURL(url).catch(err => console.error('Failed to open URL: ', err));
  };
  


   



  const handlePress2 = () => {
    const url = `https://cars.booking.com/search-results?coordinates=${myCity?.details?.geometry?.location?.lat},${myCity?.details?.geometry?.location?.lng}&doDay=${puDay}&doHour=${puHour}&doMinute=${puMint}&doMonth=${puMonth}&doYear=${puYear}&driversAge=30&dropCoordinates=${myCity?.details?.geometry?.location?.lat},${myCity?.details?.geometry?.location?.lng}&dropLocationName=${myCity?.details?.address_components[0]?.long_name}&locationName=${myCity?.details?.address_components[0]?.long_name}&puDay=${doDay}&puHour=${doHour}&puMinute=${doMint}&puMonth=${doMonth}&puYear=${doYear}`;
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
        txt2={'Search Cars'}
        mainImg={cars}
        ml={wp('-5%')}
        onPressProfile={() => navigation.navigate('Profile')}
        tf={'0deg'}>
        <View style={{height: hp('2%')}} />

        <CarInput
          // field={from}
          setField={setFrom}
          text={'From'}
          img={car1}
          placeholder={'From City'}
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
            Please select city
          </Text>
        ) : null}

        <CarInput
          text={'To'}
          img={car}
          setField={setTo}
          placeholder={'To City'}
          textWidth={wp('80%')}
          ww={wp('8%')}
          hh={wp('9%')}
          auto={true}
          onCitySelect={handleCitySelect2}
          zIndex={50}
          onSelecetDetails={handleDetails2}
          tintColor={Color.primaryColor}
        />

        {/* {to.length < 3 && show ? (
          <Text style={{color: Color.red, marginLeft: wp('10%')}}>
            Please select city
          </Text>
        ) : null} */}

        <View style={styles.dateRow}>
          <FlightDateBtn
            onPress={() => setOpen(true)}
            field={date}
            setField={setDate}
            text={'pick-up date'}
            img={calender}
            date={placeholder || CheckIn}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />

          <FlightDateBtn
            onPress={() => setOpen2(true)}
            field={date2}
            setField={setDate2}
            text={'drop-off'}
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
          ) : null}

          {!CheckCurrent2 && show ? (
            <Text
              style={{
                color: Color.red,
                marginLeft: CheckCurrent ? wp('55%') : wp('12%'),
              }}>
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

        <View style={[styles.dateRow, {marginBottom: hp('5%')}]}>
          <FlightDateBtn
            onPress={() => setOpen3(true)}
            field={time}
            setField={setTime}
            text={'pick-up time'}
            img={clock}
            date={placeholder3 || PickUpTime}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />

          <FlightDateBtn
            onPress={() => setOpen4(true)}
            field={time2}
            setField={setTime2}
            text={'Drop-off'}
            img={clock}
            date={placeholder4 || DropOffTime}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />
        </View>
        <Appbtn
          onPress={() => [
            from?.length < 3 ||
            placeholder === 'dd mmm, yyyy' ||
            placeholder2 === 'dd mmm, yyyy'
              ? setShow(true) : date > date2 ? setShow2(true) 
              : handlePress(),
          ]}
          btnText={'Search Now'}
        />
      </BookingBg>
      <HideWithKeyboard style={styles.buttonContainer}>
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
          setPlaceholder('');
          setCeckinCheck(false);
          setCheckCurrent(true);
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
          setCheckCurrent2(true);
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
          setPlaceholder3('');
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
          setPlaceholder4('');
        }}
        onCancel={() => {
          setOpen4(false);
        }}
      />
    </ScreenWraper>
  );
};

export default BookCar;
