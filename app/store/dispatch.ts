import store from './index';
import { setCategories } from './slices/categories';
import { setQuestions } from './slices/questions';

export const dispatchCategories = (payload: any) => store.dispatch(setCategories(payload));
export const dispatchQuestions = (payload: any) => store.dispatch(setQuestions(payload));