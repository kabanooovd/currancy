import { makeAutoObservable } from "mobx"
import { Api } from "../api/api"
import { ICionsData } from "./coins-types"


class Coins {

  coinsMainData: ICionsData | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async onGetCoinsMainData() {
    const client = new Api()

    try {
      const { data } = await client.onGetTopList();
      this.coinsMainData = data;
    } catch(err) {
      console.log("error ", err)
    }

  }

}

export default new Coins()
