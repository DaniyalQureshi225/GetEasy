import React, {useState} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Color, hp, wp} from '../../../Color/Color';
import {
  calender,
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

const BookCar = ({navigation}) => {

  const {data} = useBookCar();


  const [selectedCity, setSelectedCity] = useState(null);
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


  const [myCity, setMyCity] = useState('');
  const [myCity2, setMyCity2] = useState('');

  

  const handleCitySelect = city => {
    setMyCity(city);
  };

  const handleDetails = details => {
  setLat(details?.details?.geometry?.location?.lat);
  setLang(details?.details?.geometry?.location?.lng)  
  };


  const handleDetails2 = details => {
    setLat2(details?.details?.geometry?.location?.lat);
    setLang2(details?.details?.geometry?.location?.lng)  
    };


  
  const handleCitySelect2 = city => {
    setMyCity2(city);
  };

  const handlePress = () => {

    const url = `https://cars.booking.com/search-results?=&coordinates=${lat} ${lang}&doDay=${doDay}&doHour=${doHour}&doMinute=${doMint}&doMonth=${doMonth}&doYear=${doYear}&driversAge=20&dropCoordinates=${lat2} ${lang2}&dropLocation=&dropLocationName=${myCity2}&ftsType=C&location=&locationName=${myCity}&preflang=en&puDay=${puDay}&puHour=${puHour}&puMinute=${puMint}&puMonth=${puMonth}&puYear=${puYear}`;
    Linking.openURL(url).catch(err => console.error('Failed to open URL: ', err));
   
  };



  return (
    <ScreenWraper>
      <BookingBg
        OpenDrawer={() => navigation.toggleDrawer()}
        userImg={data ? {uri:data?.avatar} :  placeholder}
        txt1={data ? `Hello ${data?.username}` : null}
        txt2={'Search Cars'}
        mainImg={cars}
        ml={wp('-5%')}
        tf={'0deg'}>
                   
        <View style={{height: hp('2%')}} />
       
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
          onSelecetDetails={handleDetails}
          
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
          onSelecetDetails={handleDetails2}
        />

        <View style={styles.dateRow}>
          <FlightDateBtn
            onPress={() => setOpen(true)}
            field={date}
            setField={setDate}
            text={'pick-up date'}
            img={calender}
            date={CheckIn !== CheckCurrent ? CheckIn : 'dd mmm, yyyy'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />

          <FlightDateBtn
            onPress={() => setOpen2(true)}
            field={date2}
            setField={setDate2}
            text={'drop-off'}
            img={calender}
            date={CheckOut !== CheckCurrent ? CheckOut : 'dd mmm, yyyy'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />
        </View>

        <View style={[styles.dateRow, {marginBottom: hp('5%')}]}>
          <FlightDateBtn
            onPress={() => setOpen3(true)}
            field={time}
            setField={setTime}
            text={'pick-up time'}
            img={clock}
            date={PickUpTime !== CurrentTime ? PickUpTime : 'hh:mm'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />

          <FlightDateBtn
            onPress={() => setOpen4(true)}
            field={time2}
            setField={setTime2}
            text={'drop-off'}
            img={clock}
            date={DropOffTime !== CurrentTime ? DropOffTime : 'hh:mm'}
            textWidth={wp('80%')}
            containerWidth={wp('43%')}
          />
        </View>
        <Appbtn disabled={myCity === '' || myCity2 === '' ? true : false} onPress={()=>handlePress()} btnText={'Search Now'} />

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
    </ScreenWraper>
  );
};

export default BookCar;

