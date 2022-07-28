import {api} from '../config';

// get all news post
export const getNewsPost = () => api.get('/news');
