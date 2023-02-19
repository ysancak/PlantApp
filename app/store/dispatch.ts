import store from './index';
import { setCategories } from './slices/categories';
import { completeBoarding } from './slices/core';
import { setQuestions } from './slices/questions';

// Core
export const dispatchCompleteBoarding = () => store.dispatch(completeBoarding());
// Categories
export const dispatchCategories = (payload: any) => store.dispatch(setCategories(payload));
// Questions
export const dispatchQuestions = (payload: any) => store.dispatch(setQuestions(payload));
