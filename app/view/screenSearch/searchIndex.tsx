import React, { useState } from 'react';
import {
  Center,
  ZStack,
  VStack,
  Button
} from "native-base";  
 
import { NavigationContext } from '@react-navigation/native';

import {platform,constants} from '../../../app/utility/constants'; 
import {BackgroundImage,FooterMenu,Header} from '../../../app/view/shareLayout';



interface SearchIndexProps {}

const SearchIndex: React.FC<SearchIndexProps> = props => {
  const navigation = React.useContext(NavigationContext)!;

    return (
      <ZStack>
         <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.searchIndex} /> 
         <VStack h={platform.screen.height} > 
         <Header title='Search Screen'/>   
          
          <Center> 

          <Button onPress={() => { 
            navigation.navigate("searchByProvince") 
          }} m={10}>
            search By Province
          </Button>
 
          <Button onPress={() => { 
            navigation.navigate("searchByLocation") 
          }} m={10}>
            search By Location
          </Button>

          </Center> 
        </VStack>
        <FooterMenu/>
        </ZStack> 
    );
};

export default SearchIndex;



/*
import React, { useState } from 'react';
import {
  Center,
  ZStack,
  VStack,
  Button
} from "native-base";  
 
import { NavigationContext } from '@react-navigation/native';

import {platform,constants} from '../../../app/utility/constants'; 
import {BackgroundImage,FooterMenu,Header} from '../../../app/view/shareLayout';

//import GetPlaceSearch from '../../../app/viewModel/apis/GetPlaceSearch'
//import { GetPlaceSearchModel} from '../../../app/model/apis/place.model'

interface SearchIndexProps {}

interface SearchKey {
  place_id: string, 
  keyword: string, 
  location: string,
  categorycodes: string,
  provinceName: string,
  radius: string,
  numberOfResult: string,
  pagenumber: string, 
  destination: string, 
  filterByUpdateDate: string, 
}  

const SearchIndex: React.FC<SearchIndexProps> = props => { 

  const navigation = React.useContext(NavigationContext)!;

  const key  = {
    keyword:"อาหาร",
    location:"13.6904831,100.5226014",
    categorycodes:"RESTAURANT",
    provinceName:"Bangkok",
    radius:'20',
    numberOfResult:'10',
    pagenumber:'1',
    destination:"Bangkok",
    filterByUpdateDate:"2019/09/01-2021/12/31"
    }

 
    GetPlaceSearch(
      key.keyword,
      key.location,
      key.categorycodes,
      key.provinceName,
      key.radius,
      key.numberOfResult,
      key.pagenumber,
      key.destination,
      key.filterByUpdateDate
    )
     
  GetPlaceSearch(
    keyword: "2", 
    location: "string",
    categorycodes: "string",
    provinceName: "string",
    radius: "string",
    numberOfResult: string,
    pagenumber: string,
    destination: string,
    filterByUpdateDate: string
  ) 

  return (
    <ZStack>
       <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.searchIndex} /> 
       <VStack h={platform.screen.height} > 
       <Header title='Search Screen'/>   
        
        <Center> 

        <Button onPress={() => { 
          navigation.navigate("searchByProvince") 
        }} m={10}>
          search By Province
        </Button>

        <Button onPress={() => { 
          navigation.navigate("searchByLocation") 
        }} m={10}>
          search By Location
        </Button>

        </Center> 
      </VStack>
      <FooterMenu/>
      </ZStack> 
  );
};

export default SearchIndex; */