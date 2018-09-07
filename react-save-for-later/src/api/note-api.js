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