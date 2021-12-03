import * as React from 'react';
import { 
  Text,
} from 'native-base';

import {style} from '../../../app/utility/constants' 

interface CustomTextProps {
  title: string,
  foreground: string,
  textSize: number,
  isBold: Boolean
}

const CustomText: React.FC<CustomTextProps> = props => {
  const config = style.icon 

  if (props.isBold == true) {
    return ( 
      <Text fontSize={props.textSize} bold  color= {props.foreground}
      shadow={9}
      >{props.title}</Text> 
    );
  } else {
    return ( 
      <Text fontSize={props.textSize}   color= {props.foreground}>{props.title}</Text> 
    );
  } 
  
};

export default CustomText;