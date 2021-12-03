import React from 'react';
import { 
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base'; 
import { MaterialIcons, Entypo } from "@expo/vector-icons"
//Redux
import { useAppSelector, useAppDispatch } from '../../../app/viewModel/store/hook'; 
import { menuSlice } from '../../../app/viewModel/store/reducers/menus' 
//Common Component
import {platform,style} from '../../../app/utility/constants' 

interface FooterProps { 
}

const FooterMenu: React.FC<FooterProps> = props => {
  const config = style.footer;
  
  const dispatch = useAppDispatch(); 
  const setSelectedMenuHandler = (selectedId: number) => { 
    dispatch(menuSlice.actions.setSelectedMenu(selectedId));
  };

  const selectedMenu = useAppSelector(state => state.kMenus.selectedMenu)
  const mainMenus = useAppSelector(state => state.kMenus.mainMenus) 
  
  return (
    <HStack 
    style={platform.isIOS ? 
            {position: 'absolute', left: 0, right: 0, bottom: 0} : 
            {position: 'relative', left: 0, right: 0, top: 0}} 
    bg={config.defaultBg}
    alignItems="center" 
    h={platform.isIOS ? config.heightIOS :  config.heightAndroid}
    pt={"12px"}
    safeAreaBottom shadow={6}> 
      {mainMenus.map(function(item){ 
          return (<Pressable
            opacity={selectedMenu === item.id ? 1 : 0.5}
            py="3px"
            flex={1}
            onPress={() => {
              setSelectedMenuHandler(item.id) 
            }}
            key={item.id}
            >
            <Center>

              <Icon as={Entypo} name={selectedMenu === item.id ? item.iconActive : item.icon}
              color={selectedMenu === item.id ? config.tabBarActiveTextColor : config.tabBarTextColor}  
              size='sm'
              shadow={9}
              />  

              <Text color={selectedMenu === item.id ? config.tabBarActiveTextColor : config.tabBarTextColor} fontSize={config.tabBarTextSize} shadow={9}>
                { item.title }
              </Text>

            </Center>
          </Pressable>)
             
      })}  
        </HStack> 
  );
};

export default FooterMenu;