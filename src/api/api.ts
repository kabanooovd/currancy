import axios from "axios"

const BASE_URL = "https://min-api.cryptocompare.com/data/";
const API_KEY = "19aa0e5133edf54c3d97b1ca99f073ee72946bdf9215de9aa32af756d93f782e"
// const MAIN_URL = "https://cryptocompare.com/data/";


const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
	  authorization: `Apikey ${API_KEY}`,
  },
})

export class Api {
  onGetTopList() {
    return instance.get(`top/totalvolfull?limit=10&tsym=USD`)
  }
}



