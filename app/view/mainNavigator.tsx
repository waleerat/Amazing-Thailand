import React from 'react';

//Redux
import { useAppSelector } from '../../app/viewModel/store/hook';

import HomeScreen from '../../app/view/mainNavigator/homeScreen';
import SearchScreen from '../../app/view/mainNavigator/searchScreen';
import ShoppingScreen from '../../app/view/mainNavigator/shoppingScreen';
import AccountScreen from '../../app/view/mainNavigator/accountScreen';

const MainNavigator = () => { 
  console.log('-------- Start MainNavigator ------------' )

  const selectedMenu = useAppSelector(state => state.kMenus.selectedMenu)

  let content = <HomeScreen/>;

  switch (selectedMenu) {
    case 1 : content = <SearchScreen/>; break;
    case 2 : content = <ShoppingScreen/>; break;
    case 3 : content = <AccountScreen/>; break;
    default :  content = <HomeScreen/>; break;
  }

  return (content);
}; 

export default MainNavigator; 