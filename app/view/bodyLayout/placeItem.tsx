import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Center,
  VStack,
  HStack,
  Spacer,
  Container,
  Box, 
  Image,
  Avatar,
  Button
} from "native-base"; 
import { NavigationContext } from '@react-navigation/native';
//Redux
import { useAppDispatch } from '../../../app/viewModel/store/hook';
import { TATapiSlice } from '../../../app/viewModel/store/reducers/TATapis';

import {platform,constants, style} from '../../../app/utility/constants';
import { PlaceItemModel } from '../../../app/model/apis/place.model';

import {CustomText} from '../../../app/view/shareLayout';

interface PlaceItemProps { 
  item: PlaceItemModel
}

const PlaceItem: React.FC<PlaceItemProps> = props => { 
  const navigation = React.useContext(NavigationContext)!; 
  const item = props.item

  const isThumbnail =  (item.thumbnail_url != "") 
  const address = item.location.address + ' ' + item.location.district + ' ' +  
                  item.location.sub_district + ' ' +  item.location.province + ' ' + 
                  item.location.postcode;

  const shaTypeDescription = item.sha.sha_type_description;


  const dispatch = useAppDispatch(); 
  const setSelectedMenuHandler = () => { 
    console.log('> setSelectedMenuHandler')
    dispatch(TATapiSlice.actions.setSearchPlaceId(item.place_id));
  };
  
  const gotoPlaceDetailScreen = () => {
    console.log('> gotoPlaceDetailScreen')
    //const dispatch = useAppDispatch(); 
    //dispatch(TATapiSlice.actions.setSearchPlaceId(item.place_id));

   //navigation.setParams({placeId: item.place_id });
    navigation.navigate("PlaceDetailScreen"); 
  };

  return ( 
    <Box  
    borderBottomWidth="1"
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
    
    h={ style.placeItem.height }  w={'98%'}
    bg={style.common.gridBackground} rounded="md" shadow={6} m={1} 
    > 

    <TouchableOpacity  
    onPress={()=>{
      setSelectedMenuHandler();
      gotoPlaceDetailScreen(); 
      }}>
    <HStack  space={3} justifyContent="space-between"> 
        {isThumbnail ? 
            <Avatar  source={{ uri: item.thumbnail_url }} 
            size = { platform.screen.width * 0.30 }/>
        : 
            <Avatar source={require('../../../assets/WGO-logo.png')} 
            size = { platform.screen.width * 0.30 } />
        } 

        <VStack w={platform.screen.width * 0.60}>  
        <CustomText title={item.place_name} 
          foreground={style.common.fontColor.primary} 
          textSize={style.common.fontSize.title} 
          isBold={true} /> 

        <CustomText title={shaTypeDescription} 
          foreground={style.common.fontColor.primary} 
          textSize={style.common.fontSize.remark} 
          isBold={false} />

        <CustomText title={address} 
          foreground={style.common.fontColor.primary} 
          textSize={style.common.fontSize.description} 
          isBold={false} /> 
 
        </VStack>

        <Spacer/>

        </HStack>


    </TouchableOpacity> 
      </Box>

  )
}

export default PlaceItem;

