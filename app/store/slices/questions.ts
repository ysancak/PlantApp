import { createSlice } from '@reduxjs/toolkit';

export interface IQuestion {
    id: number;
    title: string;
    subtitle: string;
    image_uri: string;
    uri: string;
    order: number;
}

interface InitState {
    questions: IQuestion[]
}

const initialState: InitState = {
  questions: []
};

export const slice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  }
});

export const { setQuestions } = slice.actions;
export default slice.reducer;
