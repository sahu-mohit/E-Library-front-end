import axios from 'axios'
const BASE_URL = "http://localhost:8081/rest/";

export default class BackendCall{
  static getCall(url,data){
    return axios.get(BASE_URL+url,data)
  }

  static postCall(url,data){
    return axios.post(BASE_URL+url,data)
  }
}
