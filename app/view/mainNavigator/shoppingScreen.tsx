import * as React from 'react';
import {
  Center,
  ZStack,
  VStack,
  Spacer,
} from "native-base"; 

import {platform,constants} from '../../../app/utility/constants'; 

import {BackgroundImage,FooterMenu,Header} from '../../../app/view/shareLayout'

interface shoppingScreenProps {}

const shoppingScreen: React.FC<shoppingScreenProps> = props => {
  return (
    <ZStack>
       <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.shoppingIndex} /> 
       <VStack h={platform.screen.height} > 
       <Header title='Shopping Screen'/>   
        <Spacer/>
        <Center> 
          Hello
        </Center> 
      </VStack>
      <FooterMenu />
      </ZStack> 
  );
};

export default shoppingScreen;