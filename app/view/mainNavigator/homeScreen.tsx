import * as React from 'react';
import {
  Center,
  ZStack,
  VStack,
  Spacer,
} from "native-base";  

import {platform,constants} from '../../../app/utility/constants';

// UI compnent
import {BackgroundImage,FooterMenu,Header} from '../../../app/view/shareLayout'
import LanddingScreen from '../screenHome';


interface homeScreenProps {}

const HomeScreen: React.FC<homeScreenProps> = props => {
  const isIOS = platform.isIOS

  if (isIOS) {
    return (
      <ZStack>
         <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.landing} /> 
         <VStack h={platform.screen.height} > 
         <Header title='Explore 1'/>   
          <Spacer/>
          <Center> 
            <LanddingScreen/> 
          </Center> 
        </VStack>
        <FooterMenu />
        </ZStack> 
    );
  } else {
    return (
      <ZStack>
         <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.landing} /> 
         <VStack > 
         <Header title='Explore 2'/>  
         <FooterMenu />  
          <Spacer/>
          <Center> 
            <LanddingScreen/> 
          </Center> 
        </VStack>
        
        </ZStack> 
    );
  }
};

export default HomeScreen;