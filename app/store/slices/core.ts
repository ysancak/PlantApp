import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'core',
  storage: AsyncStorage,
}

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
    completeBoarding: (state) => {
      state.onBoardingComplete = true;
    },
    resetCompleteBoarding: (state) => {
      state.onBoardingComplete = false;
    }
  }
});

export const { completeBoarding, resetCompleteBoarding } = slice.actions;
export default persistReducer(persistConfig, slice.reducer)
