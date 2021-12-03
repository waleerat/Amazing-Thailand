import * as React from 'react';
import {
  Center,
  Heading,
  Box,
  HStack,
  Spacer,
} from "native-base";  
import { NavigationContext } from '@react-navigation/native';

import {platform,style} from '../../../app/utility/constants' 

import CustomIcon from '../../../app/view/shareLayout/customIcon'
import CustomText from '../../../app/view/shareLayout/customText';
import CustomBackIcon from '../../../app/view/shareLayout/customBackIcon';

interface HeaderWithNavBarProps {
  title: string
}

const HeaderWithNavBar: React.FC<HeaderWithNavBarProps> = props => {
  const navigation = React.useContext(NavigationContext)!;
  const config = style.header

  const onPressHandler = (isPress: boolean) => {
    navigation.goBack()
  }

  const chatHandler = (isPress: boolean) => { 
  }

  return ( 
    <HStack width={platform.screen.width + 'px'} 
    safeAreaTop
    h={config.toolbarHeight}  
    > 
        <Box>
          <CustomBackIcon iconName='chevron-left' iconSize='md' isMaterialIconType={false}   onPressHandler={onPressHandler}/>
        </Box> 
        
        <Spacer/>

        <Box>
          <CustomText title={props.title} foreground={config.foreground} isBold={true} textSize={25} />
        </Box>
        <Spacer/>
            
        <Box>
          <CustomIcon iconName='forum' iconSize='sm' isMaterialIconType={true}  isActive={true} onPressHandler={chatHandler}/>
        </Box>
    </HStack> 
      
  );
};

export default HeaderWithNavBar;