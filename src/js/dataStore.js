import {
  util
} from './util'

class DataStore {
  constructor() {
    this.map = new Map()
  }
  set(key, value) {
    this.map.set(key, value);
  }
  get(key) {
    return this.map.get(key);
  }
}

const dataStore = new DataStore();
dataStore.set('gameWrap', util.query('.game-wrap'));
dataStore.set('wheel', util.query('.wheel'));
dataStore.set('wheelChild', util.query('.wheel-child'));

export {
  dataStore
}