import React, { useState } from 'react';
import {
  FlatList, VStack,Spacer
} from "native-base"; 

//Redux
import { useAppSelector } from '../../../app/viewModel/store/hook'; 

import {platform,constants, style} from '../../../app/utility/constants'; 

import CategoryGridColumn from '../../../app/view/bodyLayout/categoryGridColumn'; 

interface landdingScreenProps { }

const Footer: React.FC<landdingScreenProps> = props => {
  const config =  constants.LANDING_PAGE
  const columnWidth = (platform.screen.width / config.gridColumn - 15) 

  const categoryMenus = useAppSelector(state => state.kMenus.categoryMenus)
  
  return (
    <VStack>
      <Spacer/>
      <FlatList  
        data={categoryMenus}
        scrollEnabled={true}
        numColumns={2}  
        renderItem={({ item }) => (
          <CategoryGridColumn item={item} />
        )}
        keyExtractor={(item) => item.id}
        w={platform.screen.width} 
        //alwaysBounceHorizontal={true}
        mb={style.container.paddingBottom}
      /> 
      <Spacer/>
    </VStack>
  ); 
};

export default Footer;