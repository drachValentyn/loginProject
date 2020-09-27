import axios from 'axios';
import API_ENV from '../config/api.config';

class Api {
  constructor(API_ENV) {
    this.url = API_ENV.apiUrl;
  }
  async countries() {
    try {
      const response = await axios.get(`${this.url}/location/get-countries`);
      // console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async cities(index) {
    try {
      const response = await axios.get(`${this.url}/location/get-cities/${index}`);
      // console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

const api = new Api(API_ENV);

export default api;
