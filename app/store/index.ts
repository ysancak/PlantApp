import { configureStore } from '@reduxjs/toolkit'

import coreReducer from './slices/core';
import questionReducer from './slices/questions'
import categoryReducer from './slices/categories';

const store = configureStore({
  reducer: {
    core: coreReducer,
    questions: questionReducer,
    categories: categoryReducer
  },
})

export default store
