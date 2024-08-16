import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { bgBlue, bottomLine, dot1, dot2, dot3, pic1, pic2, pic3 } from '../../assets/Images';
import { Color, Fonts, FontSize, hp, wp } from '../../Color/Color';
import Welcome from '../../Components/Welcome';
import { heading1, heading2, heading3, tex1, tex2, tex3 } from '../../Components/Data';

const NextStay = ({navigation}) => {
  const [screen, setScreen] = useState('first');

  return (
    <View style={{ flex: 1 }}>
      {screen === 'first' ? (
        <Welcome
          img={pic1}
          dot={dot1}
          heading={heading1}
          tex={tex1}
          width={wp('60%')}
          onPress={() => setScreen('second')}
        />
      ) : screen === 'second' ? (
        <Welcome
          img={pic2}
          dot={dot2}
          heading={heading2}
          tex={tex2}
          width={wp('60%')}
          onPress={() => setScreen('third')}
        />
      ) : screen === 'third' ? (
        <Welcome
          img={pic3}
          dot={dot3}
          heading={heading3}
          tex={tex3}
          width={wp('70%')}
          onPress={()=>navigation.navigate('SignUp')}
        />
      ) : null}
    </View>
  );
};

export default NextStay;
