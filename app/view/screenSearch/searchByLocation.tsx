import * as React from 'react';
import {
  Center,Text,Button
} from "native-base";  
import { NavigationContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface SearchByLocationProps {}

const Stack = createNativeStackNavigator(); 


const SearchByLocation: React.FC<SearchByLocationProps> = props => {
  const navigation = React.useContext(NavigationContext)!;
  console.log(' >> SearchByLocationProps')
  
  return (
    <Center mt={30}>
       
      <Button onPress={() => { navigation.navigate("PlaceListScreen") }} 
      mb={2} w ={200}>
        GetPlaceSearch
       </Button>

       <Button onPress={() => {  }} 
       mb={2} w ={200}>
        GetEventList
       </Button>

       <Button onPress={() => {  }} 
       mb={2} w ={200}>
        GetSHASearch
       </Button>

       <Button onPress={() => {  }} 
       mb={2} w ={270}>
        GetRecommendedRouteList
       </Button> 
       
    </Center>
  );
};

export default SearchByLocation;





/*import React, { useEffect, useState } from 'react';
import {
  Box,
  ZStack,
  VStack,
  Heading,
  FlatList,
  Center
} from "native-base";  

import {platform,constants, style} from '../../../app/utility/constants';
import { GetPlaceSearchModel, PlaceSearchKeys} from '../../../app/model/apis/place.model';

import { useAppSelector, useAppDispatch } from '../../../app/viewModel/store/hook';
import { apisSlice } from '../../../app/viewModel/store/reducers/apis' 

import {FooterMenu} from '../../../app/view/shareLayout';
import PlaceItem from '../../../app/view/bodyLayout/placeItem';


interface SearchByLocationProps {
  //isFetchData: boolean
}

const SearchByLocation: React.FC<SearchByLocationProps> = props => {
  const [isLoading, setLoading] = useState<boolean>(false); 
  const [responseData, setResponseData] = useState<GetPlaceSearchModel>(); 
   console.log('GetPlaceSearchHandler')
 
  const dispatch = useAppDispatch(); 
  const GetPlaceSearchHandler = (searchkey: string) => {  //PlaceSearchKeys
     dispatch(apisSlice.actions.GetPlaceSearch(searchkey));
  };
  GetPlaceSearchHandler('aa') 
  const mainMenus = useAppSelector(state => state.kApis)
  console.log(mainMenus)
 
    const fetchURL = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=อาหาร&location=13.6904831,100.5226014&categorycodes=RESTAURANT&provinceName=Bangkok&radius=20&numberOfResult=10&pagenumber=1&destination=Bangkok";
    
    //"https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=อาหาร&location=13.6904831,100.5226014&categorycodes=RESTAURANT&provinceName=Bangkok&radius=20&numberOfResult=10&pagenumber=1&destination=Bangkok&filterByUpdateDate=2019/09/01-2021/12/31";

    const getFetchFromTAT = () => {
      fetch(fetchURL, {
        method: "Get",
        headers: {
          'Authorization': 'Bearer ' + constants.API_URLS.apiKey,
          'Content-Type': 'application/json, text/json',
          "Accept-Language":"TH"
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setResponseData(json); 
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))

    } 

    useEffect(() => { 
        setLoading(true); 
        getFetchFromTAT()
    }, []);
    
    return ( 
      <VStack> 
         <VStack h={style.container.height}>   
            {isLoading ? <Heading size="lg">Loading .....</Heading> : 
                  (<FlatList  
                    data={responseData?.result}
                    scrollEnabled={true} 
                    renderItem={({ item }) => (
                      <PlaceItem item={item} />
                    )}
                    keyExtractor={(item) => Math.random().toString()}
                    w={platform.screen.width} 
                    //alwaysBounceHorizontal={true}
                    mb={style.container.paddingBottom}
                  />)
            }  
        </VStack>
        <FooterMenu/>
    </VStack>  

 
);
};

export default SearchByLocation;

*/