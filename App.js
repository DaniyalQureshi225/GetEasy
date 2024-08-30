import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import AppRoute from './src/route/AppRoute';
import AppRouteHome from './src/route/AppRouteHome';
import { Color } from './src/Color/Color';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NextStay from './src/screens/NextStay/NextStay';
import LoaderScreen from './src/Components/LoaderScreen';
import { AppProvider } from './src/Components/AppContext';

const App = () => {
  const [intro, setIntro] = useState('false');
  const [active, setActive] = useState(false);
  const [myToken, setMyToken] = useState('');

  const getData = async () => {
    try {
      const introValue = await AsyncStorage.getItem('nextStay');
      const token = await AsyncStorage.getItem('Token');
      setIntro(introValue === 'true' ? 'true' : 'false');
      setMyToken(token || ''); // Ensure myToken is a string
      setActive(true);
    } catch (e) {
      console.error('Failed to load data from AsyncStorage:', e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      getData();
    }, 3000); // 3 seconds splash screen delay
  }, [getData]);

  console.log('Token:', myToken);

  return (
    <AppProvider>
    <View style={{ flex: 1 }}>
     
      <StatusBar barStyle="light-content" backgroundColor={Color.primaryColor} />
      {active ? (
        intro === 'false' ? (
          <NextStay onIntroComplete={getData} />
        ) : myToken ? (
          <AppRouteHome />
        ) : (
          <AppRoute onIntroComplete={getData} />
        )
      ) : (
        <LoaderScreen />
      )}
    
    
    </View>
    </AppProvider>
  );
};

export default App;
