import React, { useState } from 'react';
import {
  Center,
  ZStack,
  VStack,
  Button
} from "native-base";  
 
import {constants} from '../../../app/utility/constants';

import {BackgroundImage,FooterMenu,HeaderWithNavBar} from '../../../app/view/shareLayout';


interface SearchByProvinceProps {}

const SearchByProvince: React.FC<SearchByProvinceProps> = props => {
   
  return (
    <ZStack>
         <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.searchIndex} /> 
         <VStack  >  
          <HeaderWithNavBar title='Provice Search'/>
          <Center> 
          <Button onPress={() => { }} m={10}>
          menu 2
          </Button>

          </Center> 
        </VStack>
        <FooterMenu/>
    </ZStack> 
    );
};

export default SearchByProvince;