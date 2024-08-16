import React from 'react';
import {wp} from './../Color/Color';
import {icons} from './VectorIcons';

const Icon = ({type, name, size, color, style}) => {
  const checkIcon = Boolean(icons[type]);
  const MyIcon = checkIcon ? icons[type] : icons['AntDesign'];

  return (
    <>
      <MyIcon
        color={color}
        style={style}
        size={size || wp(`3%`)}
        name={checkIcon ? name : 'question'}
      />
    </>
  );
};

export default Icon;
