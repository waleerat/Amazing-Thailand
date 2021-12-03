import * as React from 'react';
import {
  Center,
  Heading,
  Box,
  HStack,
  Spacer,
} from "native-base";  

import {platform,style} from '../../../app/utility/constants';

import CustomIcon from '../../../app/view/shareLayout/customIcon';
import CustomText from '../../../app/view/shareLayout/customText';

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = props => {
  const config = style.header

  const onPressHandler = () => {

  }

  return ( 
    <HStack width={platform.screen.width}  
    safeAreaTop
    h={config.toolbarHeight}  
    mt={platform.isIOS ? config.paddingTopIOS :  config.paddingTopAndroid}
    pl={"15px"}
    pr={"15px"}
    > 
          <Box 
            p={"7px"}
            rounded="lg"
            >
              <CustomText title={props.title} foreground={config.foreground} isBold={true} textSize={25} />  
            </Box> 
            
            <Spacer/>
           <Box>
            <CustomIcon iconName='forum' iconSize='sm' isMaterialIconType={true}  isActive={true} onPressHandler={onPressHandler}/>
           </Box> 
    </HStack> 
      
  );
};

export default Header;

//bg={style.header.toolbarDefaultBg}
//