import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'  

interface TATapiState {
  placeId: string , 
}

const initialState: TATapiState = {
  placeId: '',
};

export const TATapiSlice = createSlice({
  name: 'api',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearchPlaceId: (state, action: PayloadAction<string>) => { 
      console.log('>> setSearchPlaceId')
      state.placeId = action.payload
    }
  }
}); 

export const TATapiState = (state: RootState) => state.kApis
export default TATapiSlice.reducer;