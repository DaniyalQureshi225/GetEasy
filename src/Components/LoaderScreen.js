import { View, Image } from "react-native";
import React from "react";
import { Color, hp, wp } from "../Color/Color";
import { AppIcon, loader } from "../assets/Images";
import LottieView from "lottie-react-native";


const LoaderScreen = () =>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:Color.white}}>
          

            <LottieView
      source={loader}
     style={{width:wp('100%'), height:wp('70%')}}
      autoPlay
      loop
    />
        </View>
    )
}

export default LoaderScreen;