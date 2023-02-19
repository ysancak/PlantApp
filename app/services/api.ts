import axios from 'axios';

export const instance = axios.create({
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
        return await instance.get('/getCategories').then(response => response.data.data)
    } catch (error) {
        return console.error(error);
    }
}

export const getQuestions = async () => {
    try {
       return await instance.get('/getQuestions').then(response => response.data)
    } catch (error) {
        return console.error(error);
    }
}