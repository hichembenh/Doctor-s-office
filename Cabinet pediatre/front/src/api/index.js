import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'})

export const fetchKid = () => axios.get('/kids');
export const createKid = (id, newKid) => axios.post(`/kids/${id}`, newKid);
export const updateKid = (id, updatedKid) => axios.patch(`/kids/${id}`, updatedKid);
export const deleteKid = (id) => axios.delete(`/kids/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

