import axios from 'axios';
import { apiEndpoints } from 'easy-mern-stack-shared';

class ExampleApi {
  static getAll() {
    return axios.get(apiEndpoints.examples.getAll);
  }
  static getAll1() {
    return axios.get(apiEndpoints.examples.getAll);
  }
  static getAll2() {
    return axios.get(apiEndpoints.examples.getAll);
  }
  static getAll3() {
    return axios.get(apiEndpoints.examples.getAll);
  }
  static getAll4() {
    return axios.get(apiEndpoints.examples.getAll);
  }
  static getAll5() {
    return axios.get(apiEndpoints.examples.getAll);
  }

  static create() {
    return axios.post(apiEndpoints.examples.create);
  }

  static reroll(id) {
    return axios.post(apiEndpoints.examples.reroll.replace(':id', id));
  }
  
  static delete(id) {
    return axios.post(apiEndpoints.examples.delete.replace(':id', id));
  }
}

export default ExampleApi;
