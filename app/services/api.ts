import axios from 'axios';
import { dispatchCategories, dispatchQuestions } from '@app/store/dispatch';

const instance = axios.create({
    baseURL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
 
instance.interceptors.response.use(async (response) => {
  // Delay for Testing
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return response
});

export const getCategories = async () => {
    try {
        setTimeout(async () => {
            await instance.get('/getCategories').then(response => dispatchCategories(response.data.data))
        }, 1000);
    } catch (error) {
        return console.error(error);
    }
}

export const getQuestions = async () => {
    try {
       await instance.get('/getQuestions').then(response => dispatchQuestions(response.data))
    } catch (error) {
        return console.error(error);
    }
}