import { reactive, readonly } from 'vue';

class Store {
  constructor(initialState) {
    this.state = reactive(initialState);
  }

  getState() {
    return readonly(this.state);
  }
}

export default Store;
