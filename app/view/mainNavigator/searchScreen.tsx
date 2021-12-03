import React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import SearchByName from '../../../app/view/screenSearch/SearchByName';
import SearchByProvince from '../../../app/view/screenSearch/searchByProvince';
import SearchByLocation from '../../../app/view/screenSearch/searchByLocation';
import SearchIndex from '../../../app/view/screenSearch/searchIndex';

import GetPlaceList from '../../../app/view/TATapis/getPlaceList';
import GetPlaceDetail from '../../../app/view/TATapis/getPlaceDetail';

interface SearchScreenProps {}

const Stack = createNativeStackNavigator(); 

interface searchScreenProps {}

const SearchScreen: React.FC<searchScreenProps> = props => { 
  
  const searchIndex = () => <SearchIndex />
  const searchByProvince = () => <SearchByProvince />
  const searchByLocation = () => <SearchByLocation/>
  const PlaceListScreen = () => <GetPlaceList pagenumber={1} />
  const PlaceDetailScreen = () => <GetPlaceDetail  /> //placeId={'none'}
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="searchByName" component={searchIndex} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="searchByProvince" component={searchByProvince}
          options={{headerShown: false}}
        />
        <Stack.Screen name="searchByLocation" component={searchByLocation}
          options={{title: "Location Search"}}
        />

      <Stack.Screen name="PlaceListScreen" component={PlaceListScreen}
          options={{title: "Search By place"}}
        />
      <Stack.Screen name="PlaceDetailScreen" component={PlaceDetailScreen}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SearchScreen;