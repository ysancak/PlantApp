import { createSlice } from '@reduxjs/toolkit';

interface ICore {
    onBoardingComplete: boolean
}

const initialState: ICore = {
  onBoardingComplete: false
};

export const slice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    
  }
});

const {  } = slice.actions;
export default slice.reducer;
