import axios from 'axios';

import { BASE_URL } from './base';

export const fetchAllNotes = () =>
    axios.get(`${BASE_URL}/notes`);