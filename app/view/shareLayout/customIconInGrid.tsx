import * as React from 'react';
import { 
  Icon,
  IconButton,
} from 'native-base';
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import {style} from '../../../app/utility/constants' 

interface CustomIconInGridProps {
  iconName: string, 
  iconSize: string,
  foreground: string,
  isMaterialIconType: boolean
}

const CustomIconInGrid: React.FC<CustomIconInGridProps> = props => {
  const config = style.icon

  return (
    <Icon as={ props.isMaterialIconType ? MaterialIcons : Entypo} name={props.iconName}
    color={props.foreground}  
    size={props.iconSize}
    shadow={1}
    /> 
  );
};

export default CustomIconInGrid;