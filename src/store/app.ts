
import { makeAutoObservable } from "mobx";
import { LoadingMode } from "./app-types";

class AppCondition {
  isLoadingMode: LoadingMode = null;

  constructor() {
    makeAutoObservable(this);
  }

  onSetLoadingMode(mode: LoadingMode) {
    this.isLoadingMode = mode;
  }

}

export default new AppCondition()