import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store' 

import { MenuModel } from '../../../../app/model/menu.model';
import { SearchCartegoryModel } from "../../../../app/model/searchCartegory.model"
import MainMenus from '../../../../app/data/mainMenus';

interface menuState {
  mainMenus: MenuModel[],
  categoryMenus: SearchCartegoryModel[],
  selectedMenu: number
}

const initialState: menuState = {
  mainMenus: MainMenus.main,
  categoryMenus : MainMenus.categoryMenus,
  selectedMenu: 0
}

export const menuSlice = createSlice({
  name: 'menu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSelectedMenu: (state, action: PayloadAction<number>) => {
      state.selectedMenu = action.payload
    }
  }
}); 

 
export const menuState = (state: RootState) => state.kMenus
export default menuSlice.reducer