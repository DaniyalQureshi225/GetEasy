import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NextStay from '../screens/NextStay/NextStay';
import SignUp from '../screens/Auth/SignUp/SignUp';
import Thanks from '../screens/Auth/Thanks/Thanks';
import ForgetPassword from '../screens/Auth/ForgetPassword/ForgetPassword';
import OTP from '../screens/Auth/OTP/OTP';
import ResetPassword from '../screens/Auth/ResetPassword/ResetPassword';
import PassworReset from '../screens/Auth/PasswordReset/PasswordReset';
import SignIn from '../screens/Auth/SignIn/SignIn';
import LookingFor from '../screens/AppScreens/LookingFor/LookingFor';
import Filter from '../screens/AppScreens/Filter/Filter';
import BookFlight from '../screens/AppScreens/BookFlight/BookFlight';
import BookCar from '../screens/AppScreens/BookCar/BookCar';
import MyDrawer from './AppDrawer';
import MyDrawerHotel from './AppDrawerHotel';
import MyDrawerCar from './AppDrawerCar';
import TermsAndCondition2 from '../screens/Auth/TermsAndServices/TermsAndServices2';
import TermsAndCondition from '../screens/AppScreens/TermsAndServices/TermsAndServices';


const Stack = createNativeStackNavigator();



function AppRoute() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
        
 

          {/* Auth Screens */}
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
         

         
          
          <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
          <Stack.Screen name="TermsAndCondition2" component={TermsAndCondition2} />
          <Stack.Screen name="Thanks" component={Thanks} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="PasswordReset" component={PassworReset} />
         
          <Stack.Screen name="LookingFor" component={LookingFor} />
          <Stack.Screen name="Filter" component={MyDrawerHotel} />
          {/* <Stack.Screen name="BookFlight" component={BookFlight} /> */}
          <Stack.Screen name="BookCar" component={MyDrawerCar} /> 
          <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppRoute;