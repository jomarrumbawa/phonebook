import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const retrieve = () => {
  return axios.get(baseUrl);
};

const create = (personObject) => {
  return axios.post(baseUrl, personObject);
};

const update = (id, personObject) => {
  return axios.put(`${baseUrl}/${id}`, personObject);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { retrieve, create, update, remove };
