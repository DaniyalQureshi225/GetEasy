import {createDrawerNavigator} from '@react-navigation/drawer';
import BookFlight from '../screens/AppScreens/BookFlight/BookFlight';
import BookCar from '../screens/AppScreens/BookCar/BookCar';
import Filter from '../screens/AppScreens/Filter/Filter';
import LookingFor from '../screens/AppScreens/LookingFor/LookingFor';
import {Color, drawerStyle, wp} from '../Color/Color';
import Icon from '../Components/Icon';
import DrawerContent from '../Components/DrawerContent';
import Profile from '../screens/AppScreens/Profile/Profile';
import PrivacyPolicy from '../screens/AppScreens/PrivacyPolicy/PrivacyPolicy';
import Faqs from '../screens/AppScreens/Faqs/Faqs';
import TermsAndCondition from '../screens/Auth/TermsAndServices/TermsAndServices';
import MyDrawer from './AppDrawer';
import MyDrawerHotel from './AppDrawerHotel';

const Drawer = createDrawerNavigator();

function MyDrawerCar({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="BookCar"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={drawerStyle}>
       <Drawer.Screen
        name="BookCar"
        component={BookCar}
        options={{
          //   headerShown: false,
          drawerLabel: 'Book Car',
          drawerIcon: ({color}) => (
            <Icon
              color={Color.white}
              size={wp('6%')}
              type="Ionicons"
              name="car-sport-outline"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="BookFlight"
        component={MyDrawer}
        options={{
          //   headerShown: false,
          drawerLabel: 'Book Flight',
          drawerIcon: ({color}) => (
            <Icon
              color={Color.white}
              size={wp('6%')}
              type="Ionicons"
              name="airplane-outline"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Filter"
        component={MyDrawerHotel}
        options={{
          //   headerShown: false,
          drawerLabel: 'Book Hotel',
          drawerIcon: ({color}) => (
            <Icon
              color={Color.white}
              size={wp('6%')}
              type="FontAwesome"
              name="building-o"
            />
          ),
        }}
      />

     

<Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          //   headerShown: false,
          drawerLabel: 'Profile',
          drawerIcon: ({color}) => (
            <Icon
              color={Color.white}
              size={wp('6%')}
              type="FontAwesome"
              name="user-o"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
        options={{
          //   headerShown: false,
          drawerLabel: 'Terms and Conditions',
          drawerIcon: ({color}) => (
            <Icon
              color={Color.white}
              size={wp('6%')}
              type="Fontisto"
              name="file-1"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          //   headerShown: false,
          drawerLabel: 'Profile Policy',
          drawerIcon: ({color}) => (
            <Icon
              color={Color.white}
              size={wp('6%')}
              type="MaterialCommunityIcons"
              name="clipboard-file-outline"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="FAQS"
        component={Faqs}
        options={{
          //   headerShown: false,
          drawerLabel: 'FAQs',
          drawerIcon: ({color}) => (
            <Icon
              color={Color.white}
              size={wp('6%')}
              type="MaterialCommunityIcons"
              name="account-question-outline"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawerCar;
