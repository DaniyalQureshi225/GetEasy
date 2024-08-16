import {Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
export const hp = HP;
export const wp = WP;
export const isAndroid = Platform.OS == 'android';

export const OS = Platform.OS;

export const Color = {
  
  primaryColor:'#2C3282',
  white:'#fff',
  black:'#000',
  secondaryColor:'#FF5E2B',
  border:"#888888",
  textGray:"#9D9D9D",
  gray:'gray',
  otpBg:'#EFEFEF',
  textBox:'#F1F2F2'
  
  
};

export const modalStyle = {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const Fonts = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
};

export const FontSize = {
  font8: Math.round(hp('1%')),
  font9: Math.round(hp('1.2%')),
  font10: Math.round(hp('1.25%')),
  font11: Math.round(hp('1.4%')),
  font12: Math.round(hp('1.6%')),
  font14: Math.round(hp('1.8%')),
  font16: Math.round(hp('2%')),
  font18: Math.round(hp('2.25%')),
  font19: Math.round(hp('2.4%')),
  font20: Math.round(hp('2.6%')),
  font22: Math.round(hp('2.8%')),
  font24: Math.round(hp('3%')),
  font27: Math.round(hp('3.7%')),
  font30: Math.round(hp('4%')),
};

export const SIZES = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

export const topTabsStyles = {
  tabBarScrollEnabled: true,
  tabBarLabelStyle: {
    textTransform: 'none',
    fontSize: FontSize.font12,
    fontFamily: Fonts.medium,
  },
  tabBarInactiveTintColor: Color.gray,
  tabBarActiveTintColor: Color.primaryColor,
  tabBarIndicatorStyle: {
    backgroundColor: Color.secondaryColor,
  },
  tabBarPressColor: Color.transparentBlack2,
  lazy: true,
};
export const offerTabsStyles = {
  tabBarLabelStyle: {
    textTransform: 'none',
    fontSize: FontSize.font16,
    fontFamily: Fonts.medium,
  },
  tabBarInactiveTintColor: Color.gray,
  tabBarActiveTintColor: Color.primaryColor,
  tabBarIndicatorStyle: {
    backgroundColor: Color.secondaryColor,
  },
  tabBarPressColor: Color.transparentBlack2,
  lazy: true,
};

export const drawerStyle = {
  swipeEnabled: false,
  headerShown: false,
  gestureEnabled: false,
  drawerStyle: {
    backgroundColor: Color.border,
    width: wp('100%'),
  },
  drawerItemStyle: {
    width: wp('80%'),
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth:1,
    borderColor:Color.white
  },
  drawerActiveTintColor: Color.white,
  drawerActiveBackgroundColor: Color.border,
  drawerLabelStyle: {
   
    fontSize: FontSize.font16,
    marginLeft: wp('-4%'),
    fontFamily: Fonts.medium,
    color:Color.white,

  },
};

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 4,
};

export const shadow2 = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
};

const padding = wp('20%');
export const hitSlop = {
  top: padding,
  bottom: padding,
  left: padding,
  right: padding,
};
export const contentContainerStyle = {flexGrow: 1};

export const path = 'https://pudo.design-services-online.com/pudo/public/api/';
