import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'  

interface settingState {
  isNotification: boolean,
  selectedLanguage: string
}

const initialState: settingState = {
  isNotification: true,
  selectedLanguage: "TH",
};

export const settingSlice = createSlice({
  name: 'setting',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDefaultLanguage: (state, action: PayloadAction<string>) => { 
      state.selectedLanguage = action.payload
    }
  }
}); 

export const settingState = (state: RootState) => state.kSetting
export default settingSlice.reducer