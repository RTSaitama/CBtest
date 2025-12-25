import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articlesApi from "./articlesApi";
import filters from './filterSlice'


const rootReducer = combineReducers({
    filters: filters,
    [articlesApi.reducerPath]:articlesApi.reducer,
})

export const store = configureStore( {
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(articlesApi.middleware),
} )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;