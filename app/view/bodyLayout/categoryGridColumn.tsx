import React, { useState } from 'react';
import {
  Center,
  VStack,
  Container, 
} from "native-base"; 

import {platform,constants} from '../../utility/constants';
import { SearchCartegoryModel } from '../../model/searchCartegory.model';

import {CustomIconInGrid,CustomText} from '../shareLayout';
 
interface CategoryGridColumnProps { 
  item: SearchCartegoryModel
}

const CategoryGridColumn: React.FC<CategoryGridColumnProps> = props => {  
  const config =  constants.LANDING_PAGE
  const columnWidth = (platform.screen.width / config.gridColumn - 15) 
  const item = props.item
  
  return (
    <Container>
      <VStack>
        <Center h={ config.gridHeight + "px" }  w={ columnWidth + "px" } 
         bg={item.background} rounded="md" shadow={6} m={1} >  
        <CustomIconInGrid 
          iconName={item.icon} 
          iconSize={config.gridIconSize} 
          foreground={item.foreground} 
          isMaterialIconType={false}/> 

          <CustomText title={item.title} foreground={item.foreground} textSize={config.gridFontSize} isBold={false} /> 
        </Center>
      </VStack>
    </Container>
  )
}

export default CategoryGridColumn;