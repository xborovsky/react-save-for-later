import axios from 'axios';

import { BASE_URL } from './base';

export const fetchAllNotes = () =>
    axios.get(`${BASE_URL}/notes`);

export const saveNote = (description, category) =>
    axios.post(`${BASE_URL}/notes/new`, {
        description: description,
        category : category
    })
;

export const deleteNote = id =>
    axios.delete(`${BASE_URL}/notes/${id}`);

export const fetchNotes = (text, categories) => {
    const categoriesParam = categories && categories.length ?
        categories.map(category => `&category=${category}`).join('') :
        null;

    return axios.get(`${BASE_URL}/notes?text=${text || ''}${categoriesParam || ''}`);
};