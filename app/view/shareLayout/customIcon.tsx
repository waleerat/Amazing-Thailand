import * as React from 'react';
import { 
  Icon,
  IconButton,
} from 'native-base';
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import {style} from '../../../app/utility/constants'; 

interface CustomIconProps {
  iconName: string, 
  iconSize: string,
  isMaterialIconType: Boolean,
  isActive: boolean,
  onPressHandler: any
}

const CustomIcon: React.FC<CustomIconProps> = props => {
  const config = style.icon

  return (

        <IconButton
            onPress={() => { props.onPressHandler(true) }}
            m={'8px'}
            borderRadius="full"
            bg={props.isActive ? config.bgActiveIcon : config.bgInActiveIcon}  
            variant="solid"
            p="3"
            shadow={9}
            icon={
              <Icon as={ props.isMaterialIconType ? MaterialIcons : Entypo} name={props.iconName}
              color={props.isActive ? config.activeIcon : config.inActiveIcon}  
              size={props.iconSize}
              /> 
            }
          /> 
  );
};

export default CustomIcon;