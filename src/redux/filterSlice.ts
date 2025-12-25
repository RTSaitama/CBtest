import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  searchQuery:string,
}

const initialState: InitialState = {
  searchQuery: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers:{
      setSearchQuery:(state,action: PayloadAction<string>) => {
        state.searchQuery = action.payload
      },
    }
  })

 export const { setSearchQuery } = filterSlice.actions;
 export default filterSlice.reducer;
 
