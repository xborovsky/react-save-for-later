import axios from 'axios';

import { BASE_URL } from './base';

export const getAllCategories = () =>
    axios.get(`${BASE_URL}/category`);

export const saveNewCategory = (name, color) =>
    axios.post(`${BASE_URL}/category/new`, {
        name : name,
        color : color
    });

export const deleteCategory = (id) =>
    axios.delete(`${BASE_URL}/category/${id}`);