import { createSlice } from '@reduxjs/toolkit';

interface ICategoryImage {
    id: number;
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: null | string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | string;
    createdAt: string;
    updatedAt: string
}

export interface ICategory {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    rank: number,
    image: ICategoryImage
}

interface InitState {
    categories: ICategory[]
}

const initialState: InitState = {
  categories: []
};

export const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  }
});

export const { setCategories } = slice.actions;
export default slice.reducer;
