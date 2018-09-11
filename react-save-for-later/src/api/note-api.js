import axios from 'axios';

import { BASE_URL } from './base';

export const saveNote = (description, category) =>
    axios.post(`${BASE_URL}/notes/new`, {
        description: description,
        category : category
    })
;

export const deleteNote = id =>
    axios.delete(`${BASE_URL}/notes/${id}`);

export const fetchNotes = (text, categories, offset = 0) => {
    const textParam = text && text.trim().length ? `&text=${text}` : '';
    const categoriesParam = categories && categories.length ?
        categories.map(category => `&category=${category}`).join('') : '';

    return axios.get(`${BASE_URL}/notes?offset=${offset}${textParam}${categoriesParam}`);
};