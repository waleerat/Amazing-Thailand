import React, { useState } from 'react';
import * as Font from 'expo-font';
import { 
  NativeBaseProvider,
} from "native-base";  
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens'; 
enableScreens();  
// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import menusReducer from './app/viewModel/store/reducers/menus';
import settingReducer from './app/viewModel/store/reducers/setting';
import TATapiReducer from './app/viewModel/store/reducers/TATapis';

const rootReducer = combineReducers({
  kMenus : menusReducer,
  kSetting: settingReducer,
  kApis: TATapiReducer
  
});
const store = createStore(rootReducer); 

import MainNavigator from './app/view/mainNavigator';

const fetchFonts = () => {
 return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}; 

const App = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); 

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }  
  return ( 
      <NativeBaseProvider> 
      <Provider store={store}>
        <MainNavigator/>
      </Provider> 
      </NativeBaseProvider>  
    
  );
};
export default App; 