import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const retrieve = () => {
  return axios.get(baseUrl);
};

const create = (personObject) => {
  return axios.post(baseUrl, personObject);
};

export default { retrieve, create };
