import React, { useState } from 'react';
import {
  Center,
  Image,
  Text
} from "native-base"; 
 
import {platform} from '../../../app/utility/constants' 
 
interface BackgroundImageProps {
  imagePath : string
}

const BackgroundImage: React.FC<BackgroundImageProps> = props => {   
  return (  
    <Image
      source={{ uri: props.imagePath }}
      alt="Alternate Text"
      w = { platform.screen.width}
      h = { platform.screen.height}
    />
  );
   
};
//
export default BackgroundImage;