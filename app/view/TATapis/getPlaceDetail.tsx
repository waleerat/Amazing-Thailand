import React, { useEffect, useState } from 'react';
import {
  Center,
  ZStack,
  VStack,
  Heading,
} from "native-base"; 

import { useAppSelector } from '../../../app/viewModel/store/hook'; 

import { GetPlaceDetailModel } from '../../../app/model/apis/place.model';


import {platform,constants} from '../../../app/utility/constants'; 

import {BackgroundImage,FooterMenu,HeaderWithNavBar} from '../../../app/view/shareLayout'

interface GetPlaceDetailProps {}

const GetPlaceDetailScreen: React.FC<GetPlaceDetailProps> = props => {

  const [isLoading, setLoading] = useState<boolean>(false); 
  const [responseData, setResponseData] = useState<GetPlaceDetailModel>();

  const placeId = useAppSelector(state => state.kApis.placeId);
   
  // const placeId = useAppSelector(state => state.kApis.placeId).replace("P06", "P03");
  
    const getFetchFromTAT = () => { 

      //const fetchURL = 'https://tatapi.tourismthailand.org/tatapi/v/attraction/P08013991'
     const fetchURL =  constants.API_URLS.GetAttractionDetail.url + placeId; 
      console.log(fetchURL)
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
        console.log(json)
        setResponseData(json.result); 
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
    } 

    useEffect(() => { 
        setLoading(true); 
        getFetchFromTAT()
    }, []); 

 
  return (
    <ZStack>
    <BackgroundImage imagePath={constants.IMAGE_BG_PAGE.searchIndex} /> 
    <VStack  >  
     <HeaderWithNavBar title={placeId}/>
      
     
     {isLoading ? <Heading size="lg">Loading .....</Heading> : 
        (<Heading size="lg">{responseData?.place_name}</Heading> )
     
      }
     
   </VStack>
   <FooterMenu/>
</ZStack> 
  );
};

export default GetPlaceDetailScreen;