export const save = (key, data) =>
    sessionStorage.setItem(key, data);

export const saveJSON = (key, data) =>
    sessionStorage.setItem(key, JSON.stringify(data));

export const getData = key =>
    sessionStorage.getItem(key);

export const remove = key =>
    sessionStorage.removeItem(key);