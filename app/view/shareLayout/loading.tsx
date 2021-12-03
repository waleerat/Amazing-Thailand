import * as React from 'react';
import {
  Center,
  ZStack,
  VStack,
  Spacer,
} from "native-base"; 

import {platform,constants, style} from '../../../app/utility/constants'; 

import {Header,FooterMenu,HeaderWithNavBar} from '../../../app/view/shareLayout'

interface LoadingProps {
  placeId: string
}

const Loading: React.FC<LoadingProps> = props => {
 
  return (
    <ZStack>
         <VStack>  
          <HeaderWithNavBar title='Loading .....'/> 
          
        </VStack>
        <FooterMenu/>
    </ZStack> 
  );
};

export default Loading;