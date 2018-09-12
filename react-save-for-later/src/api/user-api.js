import axios from 'axios';

import { BASE_URL } from './base';

export const createUserIfNotExists = (name, surname, providerId) =>
    axios.post(`${BASE_URL}/user`, {
        name : name,
        surname : surname,
        providerId : providerId
    })
;