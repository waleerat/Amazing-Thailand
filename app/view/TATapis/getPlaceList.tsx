import React, { useEffect, useState } from 'react';
import {
  Box,
  ZStack,
  VStack,
  Heading,
  FlatList,
  Center
} from "native-base";  

import {platform,constants, style} from '../../../app/utility/constants';
import { GetPlaceSearchModel} from '../../../app/model/apis/place.model';

import {FooterMenu} from '../../../app/view/shareLayout';
import PlaceItem from '../../../app/view/bodyLayout/placeItem';

interface GetPlaceListProps {
  pagenumber: number,
}

const GetPlaceList: React.FC<GetPlaceListProps> = props => {
  const [isLoading, setLoading] = useState<boolean>(false); 
  const [responseData, setResponseData] = useState<GetPlaceSearchModel>();

  

    const getFetchFromTAT = () => { 
      const fetchURL =  constants.API_URLS.GetPlaceSearch.url +  "?categorycodes=SHOP&provinceName=Bangkok&radius=20&numberOfResult=10&pagenumber=1&destination=Bangkok"; 

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

export default GetPlaceList;
 
/*
- I have experience in Swift for a year and I am good at SwiftUI.
- I have publiched 5 apps to App Store, 1 with storyboard and 4 with SwiftUI. I also have code example on GitHub.
- As I know that the job market requied third-party libraries and APIs skills so I have done with many languages to improve my skills
    - React Native for Tourism Authority Of Thailand which I am imprementing now.(https://developers.tourismthailand.org/console/document/apiref/webapi/placesearch)
    - Kotlin for Movie API (https://developers.themoviedb.org/) 
    - A small dog bred API on GitHub. (https://dog.ceo/dog-api/)

Remark : All I have done with mobile development are just my own projects and I focus on programming model and file structurs. I might not be the best but I do jobs with passion.
*/