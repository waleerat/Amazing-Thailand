import {constants} from '../../../app/utility/constants';
//import { GetPlaceSearchModel} from '../../../app/model/apis/place.model'

//Redux
//import { useAppSelector, useAppDispatch } from '../../../app/viewModel/store/hook'; 

 function GetPlaceSearch(  
    keyword: string, 
    location: string,
    categorycodes: string,
    provinceName: string,
    radius: string,
    numberOfResult: string,
    pagenumber: string,
    destination: string,
    filterByUpdateDate: string) { 

  const selectedLanguage = "TH"//useAppSelector(state => state.kSetting.selectedLanguage)
  const rootURL = constants.API_URLS.GetPlaceSearch.url
   
  console.log(">>> selected lang: " + selectedLanguage) 
  console.log(">>> selected rootURL: " + rootURL) 
  
  // * Example
  //const fetchURL = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=อาหาร&location=13.6904831,100.5226014&categorycodes=RESTAURANT&provinceName=Bangkok&radius=20&numberOfResult=10&pagenumber=1&destination=Bangkok&filterByUpdateDate=2019/09/01-2021/12/31" 

  const fetchURL =  rootURL +
          '?keyword='+ keyword+
          '&location='+ location+
          '&categorycodes='+ categorycodes+
          '&provinceName='+ provinceName+
          '&radius='+ radius+
          '&numberOfResult='+ numberOfResult+
          '&pagenumber='+ pagenumber+
          '&destination='+ destination+
          '&filterByUpdateDate='+ filterByUpdateDate;
console.log(fetchURL)
 /*
     fetch(fetchURL, {
       method: "Get",
       headers: {
         'Authorization': 'Bearer ' + constants.API_URLS.apiKey,
         'Content-Type': 'application/json, text/json',
         "Accept-Language":"TH"
       }
     })
     .then((response) => response.json())
     .then((responseData) => {
       console.log(responseData)
     })*/
 
}


export default GetPlaceSearch

