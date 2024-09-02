import React, { useState } from 'react';
import { View, Linking, Text } from 'react-native';
import moment from 'moment';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import DatePicker from 'react-native-date-picker';
import ScreenWraper from '../../../Components/ScreenWraper';
import BookingBg2 from '../../../Components/BookingBg2';
import PlaceInput from '../../../Components/PlaceInput';
import Appbtn from '../../../Components/Appbtn';
import BottomTab from '../../../Components/BottomTab';
import { Color, wp, hp } from '../../../Color/Color';
import { user, hotelpics } from '../../../assets/Images';
import DatePickerBtn from '../../../Components/DatePickerBtn';
import SmallTextBox from '../../../Components/SmallTextBox';
import { useAppContext } from '../../../Components/AppContext';

const Filter = ({ navigation }) => {
  const yesterday2 = new Date();
  yesterday2.setDate(yesterday2.getDate() - 2);

  const { dataa } = useAppContext();

  const [city, setCity] = useState('');
  const [date, setDate] = useState(yesterday2);
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [qury, setQury] = useState('');
  const CheckIn = moment(date).format('YYYY-MM-DD');
  const CheckOut = moment(date2).format('YYYY-MM-DD');
  const CheckCurrent = moment(yesterday2).format('YYYY-MM-DD');
  const CheckCurrent2 = moment(new Date()).format('YYYY-MM-DD'); 

  const [adult, setAdult] = useState(1);
  const [kids, setKids] = useState('');
  const [room, setRoom] = useState('');

  const [show, setShow] = useState(false)

  const handlePlaceDetailsSelect = (details) => {
    console.log('Received details:', details);
    setQury(details);
    if (details && details?.details?.address_components) {
      const locality = details.address_components.find(
        component =>
          component.types.includes('locality') ||
          component.types.includes('administrative_area_level_1'),
      );

      if (locality) {
        setCity(locality.long_name);
        console.log('Place Details:', locality.long_name);
      } else {
        console.log('Locality not found in address components.');
      }
    } else {
      console.log('Invalid details received.');
    }
  };

  const handlePress = () => {
    const url = `https://www.booking.com/searchresults.en-gb.html?ss=${city}&lang=en-gb&sb=1&&checkin=${CheckIn}&checkout=${CheckOut}&group_adults=${adult}&no_rooms=${room}&group_children=${kids}`;
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL: ', err), 
    );
  };

  console.log('City in Filter:', city); 

  return (
    <ScreenWraper>
      <BookingBg2
        userImg={{ uri: dataa?.avatar }}
        txt1={dataa ? `Hello ${dataa?.username}` : null}
        txt2={'Search Hotels'}
        OpenDrawer={() => navigation.toggleDrawer()}
        mainImg={hotelpics}
        ml={wp('-20%')}
        profile={() => navigation.navigate('Profile')}
        data={dataa}>
        <View style={{ height: hp('60%'), marginTop: hp('10%') }}>
          <View
            style={{
              width: wp('90%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp('3%'),
            }}>
            <DatePickerBtn
              onPress={() => setOpen(true)}
              text={CheckIn !== CheckCurrent ? CheckIn : 'Check in'}
              type={'AntDesign'}
              name={'calendar'}
            />
            <DatePickerBtn
              onPress={() => setOpen2(true)}
              text={CheckOut !== CheckCurrent2 ? CheckOut : 'Check out'}
              type={'AntDesign'}
              name={'calendar'}
              disabled={CheckIn !== CheckCurrent ? false : true}
            />
          </View>

          <View
            style={{
              width: wp('90%'),
              marginLeft: wp('10%'),
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
              {/* {
                CheckOut === CheckCurrent2  && show ? <Text style={{ color: Color.red, width: wp('45%') }}>Required</Text> : null
              }

              {
               CheckIn === CheckCurrent && show ? <Text style={{ color: Color.red, width: wp('20%') }}>Required</Text> : null
              } */}
           
            
          </View>

          <View
            style={{
              width: wp('90%'),
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp('3%'),
              height: hp('5.7%'),
              justifyContent: 'space-between',
            }}>
            <SmallTextBox
              type={'Entypo'}
              name={'man'}
              placeholder={'Adult'}
              field={adult}
              setField={setAdult}
            />
            <SmallTextBox
              type={'FontAwesome'}
              name={'child'}
              placeholder={'Kids'}
              field={kids}
              setField={setKids}
            />
            <SmallTextBox
              type={'MaterialIcons'}
              name={'bedroom-child'}
              placeholder={'Rooms'}
              field={room}
              setField={setRoom}
            />
          </View>

          <View
            style={{
              width: wp('90%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp('0%'),
            }}></View>

          <HideWithKeyboard
            style={{
              marginTop: 'auto',
              backgroundColor: Color.white,
              marginBottom: hp('10%'),
            }}>
            <Appbtn
              
              onPress={!city ? ()=>setShow(true) : ()=>handlePress()}
              btnText={'Search Now'}
            />
          </HideWithKeyboard>
        </View>
      </BookingBg2>

      <PlaceInput
        field={city}
        setField={setCity}
        inputWidht={{ width: wp('70%'), color: Color.black }}
        type={'AntDesign'}
        name={'search1'}
        containerWidth={wp('90%')}
        placeholder={'Search'}
        onDetailsSelect={handlePlaceDetailsSelect} 
        show={city?.length < 2 && show ? true : false}
      />

      <HideWithKeyboard>
        <View style={{ backgroundColor: Color.white }}>
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
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      />
    </ScreenWraper>
  );
};

export default Filter;
