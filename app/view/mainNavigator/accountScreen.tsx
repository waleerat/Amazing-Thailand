import * as React from 'react';
import {
  Center,
  ZStack,
  VStack,
  Spacer,
} from "native-base";

import {platform,constants} from '../../../app/utility/constants'; 
import {BackgroundImage,FooterMenu,Header} from '../../../app/view/shareLayout'

interface accountScreenProps {}

const AccountScreen: React.FC<accountScreenProps> = props => {
  return (
    <ZStack>
       <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.accountIndex} /> 
       <VStack h={platform.screen.height} > 
       <Header title='account Screen'/>   
        <Spacer/>
        <Center> 
          Hello
        </Center> 
      </VStack>
      <FooterMenu />
      </ZStack> 
  );
};

export default AccountScreen;