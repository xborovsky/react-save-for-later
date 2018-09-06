import axios from 'axios';

import { BASE_URL } from './base';

export const fetchAllNotes = () =>
    axios.get(`${BASE_URL}/notes`);

export const saveNote = (description, category) =>{
    return axios.post(`${BASE_URL}/notes/new`, {
        description: description,
        category : category
    })
};