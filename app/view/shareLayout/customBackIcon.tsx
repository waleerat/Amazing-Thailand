import * as React from 'react';
import { 
  Icon,
  IconButton,
} from 'native-base';
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import {style} from '../../../app/utility/constants' 

interface CustomIconProps {
  iconName: string, 
  iconSize: string,
  isMaterialIconType: Boolean,
  onPressHandler: any
}

const CustomBackIcon: React.FC<CustomIconProps> = props => {
  const config = style.icon

  return (

        <IconButton
            onPress={() => { props.onPressHandler(true) }}
            m={'8px'}
            borderRadius="full"
            bg={config.backIconBackground}  
            //variant="solid"
            p="7px"
            shadow={2}
            icon={
              <Icon as={ props.isMaterialIconType ? MaterialIcons : Entypo} name={props.iconName}
              color={config.backIconForeground}  
              size={props.iconSize}
              /> 
            }
          /> 
  );
};

export default CustomBackIcon;