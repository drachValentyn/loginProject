import axios from '../plugins/axios';

/**
 * Function register. Make login request to API
 * @param {String} email
 * @param {String} password
 */

export async function register(obj) {
  console.log(obj);
  try {
    const response = await axios.post(`/auth/signup`, JSON.stringify(obj));
    console.log(response);

    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
