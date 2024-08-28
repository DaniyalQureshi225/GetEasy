import React, { useState } from 'react';
import { View, Linking } from 'react-native';
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
import useFilter from './useFilter';
import CityDropdown from '../../../Components/CityDropDown';

const Filter = ({ navigation }) => {

  const {data} = useFilter();



  const [city, setCity] = useState('');
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [myCity, setMyCity] = useState('');

  const CheckIn = moment(date).format('YYYY-MM-DD');
  const CheckOut = moment(date2).format('YYYY-MM-DD');
  const CheckCurrent = moment(new Date()).format('YYYY-MM-DD');

  const handlePlaceDetailsSelect = (details) => {
    console.log('Received details:', details);
    
    if (details && details?.details?.address_components) {
      const locality = details.address_components.find(component =>
        component.types.includes('locality') || component.types.includes('administrative_area_level_1')
      );
  
      if (locality) {
        setMyCity(details?.address_components?.long_name);
        console.log('Place Details:', locality.long_name);
      } else {
        console.log('Locality not found in address components.');
      }
    } else {
      console.log('Invalid details received.');
    }
  };


  

  const handlePress = () => {

    const url = `https://www.booking.com/searchresults.en-gb.html?ss=${city}&checkin=${CheckIn}&checkout=${CheckOut}`;
    Linking.openURL(url).catch(err => console.error('Failed to open URL: ', err));
   
  };

  return (
    <ScreenWraper>
      <BookingBg2
        userImg={{uri:data?.avatar}}
        txt1={data ? `Hello ${data?.username}` : null}
        txt2={'Search Hotels'}
        OpenDrawer={() => navigation.toggleDrawer()}
        mainImg={hotelpics}
        ml={wp('-20%')}
        data={data}
      >
        <View style={{ height: hp('50%'), marginTop: hp('10%') }}>
          <View
            style={{
              width: wp('90%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp('2%'),
            }}
          >
            <DatePickerBtn
              onPress={() => setOpen(true)}
              text={CheckIn !== CheckCurrent ? CheckIn : 'Check in'}
              type={'AntDesign'}
              name={'calendar'}
            />
            <DatePickerBtn
              onPress={() => setOpen2(true)}
              text={CheckOut !== CheckCurrent ? CheckOut : 'Check out'}
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
            }}
          >
            
          </View>

          <HideWithKeyboard style={{ marginTop: 'auto', backgroundColor: Color.white, marginBottom:hp('4%') }}>
            <Appbtn disabled={city === '' ? true : false} onPress={() => handlePress()} btnText={'Update Search'} />
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
          setOpen(false);
        }}
      />
    </ScreenWraper>
  );
};

export default Filter;
