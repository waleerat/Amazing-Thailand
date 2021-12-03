import { configureStore } from '@reduxjs/toolkit'
import menusReducer from '../../../app/viewModel/store/reducers/menus';
import settingReducer from '../../../app/viewModel/store/reducers/setting'; 
import TATapiReducer from '../../../app/viewModel/store/reducers/TATapis'
export const store = configureStore({
  reducer: {
    kMenus : menusReducer,
    kSetting: settingReducer,
    kApis: TATapiReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch