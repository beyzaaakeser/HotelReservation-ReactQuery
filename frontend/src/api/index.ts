import axios from 'axios';
import { Params } from '../types';

export const api = axios.create({ baseURL: 'http://localhost:4001' });


export const getPlaces = (params?: Params) =>
  api.get('/api/places',{params}).then((res) => res.data.places);
