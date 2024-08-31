import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { wp, hp, FontSize, Fonts, Color } from './../../../Color/Color';
import React, { useState } from 'react';
import { calender, chair, drawerIcon, land, placeholder, plane, takeOff, userIcon } from './../../../assets/Images';
import FlightBtn from '../../../Components/FlightInput';
import ToggleBtn from '../../../Components/ToggleBtn';
import FlightDateBtn from '../../../Components/FlightDateBtn';
import FlightDropDown from '../../../Components/FlightDropDown';
import FlightBigField from '../../../Components/FligtBigField';
import Appbtn from '../../../Components/Appbtn';
import TwoWayFlightDropDown from '../../../Components/TowWayFlightDropDown';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import BottomTab from '../../../Components/BottomTab';
import DatePicker from 'react-native-date-picker';
import ScreenWraper from '../../../Components/ScreenWraper';
import moment from 'moment';
import { styles } from './style';
import { useAppContext } from '../../../Components/AppContext'; 

const BookingBg = ({ navigation }) => {
  const { dataa } = useAppContext(); // Assuming `dataa` is being used
  
  const yesterday2 = new Date();
  yesterday2.setDate(yesterday2.getDate() - 2);

  const [myCity, setMyCity] = useState(null);
  const [myCity2, setMyCity2] = useState(null);
  const [myCity3, setMyCity3] = useState('');
  const [myCity4, setMyCity4] = useState('');
  const [date, setDate] = useState(yesterday2);
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [way, setWay] = useState('oneWay');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [adult, setAdult] = useState('1');
  const [kids, setKids] = useState('');
  const [weight, setWeight] = useState('');
  const [class1, setClass1] = useState('');
  const [timeAdjustment, setTimeAdjustment] = useState(''); // New state for time adjustment

  const CheckIn = moment(date).format('YYYY-MM-DD');
  const CheckOut = moment(date2).format('YYYY-MM-DD');
  const CheckCurrent = moment(yesterday2).format('YYYY-MM-DD');
  const CheckCurrent2 = moment(new Date()).format('YYYY-MM-DD');

  const handleCitySelect = (city) => {
    setMyCity(city);
    console.log('Selected City 1:', city);
  };


  const handleCitySelect2 = (city) => {
    setMyCity2(city);
    console.log('Selected City 2:', city);
  };

  const handleCitySelect3 = (city) => {
    setMyCity3(city);
    console.log('Selected City 3:', city);
  };

  const handleCitySelect4 = (city) => {
    setMyCity4(city);
    console.log('Selected City 4:', city);
  };

  const handleKidsChange = (newKids) => {
    setKids(newKids);
    const adjustment = '-11'.repeat(newKids); 
    setTimeAdjustment(adjustment);
  };

  const handlePress2 = () => {
    const url = kids === '' && adult === '1' ? `https://booking.kayak.com/flights/${myCity3?.code}-${myCity4?.code}/${CheckIn}/${CheckOut}` :
          kids === '' && adult > 1 ? `https://booking.kayak.com/flights/${myCity3?.code}-${myCity4?.code}/${CheckIn}/${CheckOut}/${adult}adults?sort=bestflight_a` : 
          `https://booking.kayak.com/flights/${myCity3?.code}-${myCity4?.code}/${CheckIn}/${CheckOut}/${adult}adults/children-${timeAdjustment}?sort=bestflight_a`;
    Linking.openURL(url).catch(err => console.error('Failed to open URL: ', err));
  };
  
  const handlePress1 = () => {
    const url = kids === '' 
      ? `https://booking.kayak.com/flights/${myCity?.code}-${myCity2?.code}/${CheckIn}/${adult}adults?sort=bestflight_a`
      : `https://booking.kayak.com/flights/${myCity?.code}-${myCity2?.code}/${CheckIn}/${adult}adults/children-${timeAdjustment}?sort=bestflight_a`;
    Linking.openURL(url).catch(err => console.error('Failed to open URL: ', err));
  };
  
  return (
    <ScreenWraper>
      <View style={{ flex: 1, backgroundColor: Color.primaryColor, zIndex: -1, position: 'relative' }}>
        <View style={{ width: wp('90%'), alignSelf: 'center', marginTop: hp('1%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={drawerIcon} style={{ width: wp('5%'), height: wp('5%') }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Image
            source={dataa ? { uri: dataa?.avatar } : placeholder}
            resizeMode='cover'
            style={{ width: wp('10%'), height: wp('10%'), borderRadius: wp('20%') }}
          />
          </TouchableOpacity>
        </View>

        <Text style={{ marginLeft: wp('5%'), color: Color.white, fontSize: FontSize.font14, marginTop: hp('1%') }}>
          {dataa ? `Hello ${dataa?.username}` : null}
        </Text>
        <Text style={{ marginLeft: wp('5%'), fontSize: FontSize.font20, fontFamily: Fonts.bold, color: Color.white }}>
          Search Flights
        </Text>
        <Image
          source={plane}
          resizeMode="contain"
          style={{ width: wp('130%'), height: wp('50%'), marginLeft: wp('10%'), transform: '5deg', zIndex: 20 }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          style={{ backgroundColor: Color.white, marginTop: hp('-6%'), borderTopRightRadius: wp('5%'), borderTopLeftRadius: wp('5%'), position: 'relative', zIndex: 3 }}
        >
          <View style={styles.toggleContainer}>
            <ToggleBtn
              backgroundColor={way === 'oneWay' ? Color.primaryColor : Color.white}
              color={way === 'oneWay' ? Color.white : Color.primaryColor}
              onPress={() => [setWay('oneWay'), setMyCity(myCity3), setMyCity2(myCity4)]}
              name={'arrow-right-l'}
              text={'One way'}
            />

            <ToggleBtn
              backgroundColor={way === 'twoWay' ? Color.primaryColor : Color.white}
              color={way === 'twoWay' ? Color.white : Color.primaryColor}
              onPress={() => [setWay('twoWay'), setMyCity3(myCity), setMyCity4(myCity2)]}
              name={'arrow-swap'}
              text={'Round Trip'}
            />
          </View>

          {way === 'oneWay' ? (
            <>
              <FlightBtn
                text={'From'}
                img={takeOff}
                placeholder={'From City'}
                textWidth={wp('80%')}
                flight={true}
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
                flight={true}
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
                  date={CheckIn !== CheckCurrent ? CheckIn : 'YYYY-MM-DD'}
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
                setField2={handleKidsChange} // Use the new handler here
                t3={'Kgs'}
                field3={weight}
                setField3={setWeight}
                mb={hp('8%')}
              />
              <Appbtn disabled={!myCity || !myCity2 || CheckIn === CheckCurrent ? true : false} onPress={() => handlePress1()} mt={hp('-3%')} btnText={'Search Now'} />
            </>
          ) : (
            <>
              <FlightBtn
                text={'From'}
                img={takeOff}
                placeholder={'From City'}
                textWidth={wp('80%')}
                flight={true}
                zIndex={100}
                position={'relative'}
                onCitySelect={handleCitySelect3}
              />

              <FlightBtn
                text={'To'}
                img={land}
                placeholder={'To City'}
                textWidth={wp('80%')}
                ww={wp('8%')}
                hh={wp('9%')}
                flight={true}
                onCitySelect={handleCitySelect4}
                zIndex={50}
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
                  date={CheckIn !== CheckCurrent ? CheckIn : 'YYYY-MM-DD'}
                  textWidth={wp('80%')}
                  containerWidth={wp('43%')}
                />

                <FlightDateBtn
                  onPress={() => setOpen2(true)}
                  field={date2}
                  setField={setDate2}
                  text={'arrival'}
                  img={calender}
                  date={CheckOut !== CheckCurrent2 ? CheckOut : 'YYYY-MM-DD'}
                  textWidth={wp('80%')}
                  containerWidth={wp('43%')}
                  disabled={CheckIn !== CheckCurrent ? false : true}
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
                setField2={handleKidsChange} // Use the new handler here
                t3={'Kgs'}
                field3={weight}
                setField3={setWeight}
                mb={hp('8%')}
              />
              <Appbtn disabled={myCity?.length < 3 && myCity2?.length < 3 ? true : false} onPress={() => handlePress2()} mt={hp('3%')} btnText={'Search Now'} />
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
          onConfirm={(date) => {
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
          onConfirm={(date2) => {
            setOpen2(false);
            setDate2(date2);
          }}
          onCancel={() => {
            setOpen2(false);
          }}
        />
      </View>
    </ScreenWraper>
  );
};

export default BookingBg;
