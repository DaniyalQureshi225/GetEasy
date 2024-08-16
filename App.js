import { View, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import AppRoute from "./src/route/AppRoute";
import { Color } from "./src/Color/Color";
import SplashScreen from 'react-native-splash-screen'
import 'react-native-gesture-handler';
const App = () =>{

useEffect(()=>{
    SplashScreen.hide();
},[])

    return(
        <>
        <StatusBar
        barStyle="light-content" 
        backgroundColor={Color.primaryColor} 
      />
       <AppRoute/>
        </>
      
    )
}

export default App