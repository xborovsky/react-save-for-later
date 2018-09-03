import axios from 'axios';

import { BASE_URL } from './base';

export const getAllCategories = () =>
    axios.get(`${BASE_URL}/category`);