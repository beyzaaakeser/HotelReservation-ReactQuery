import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:4001' });

export const getPlaces = () =>
  api.get('/api/places').then((res) => res.data.places);
