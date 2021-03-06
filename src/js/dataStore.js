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
dataStore.set('canvas', util.query('.canvas'));
dataStore.set('wheel', util.query('.wheel'));
dataStore.set('wheelChild', util.query('.wheel-child'));
dataStore.set('fire', util.query('.fire'));
dataStore.set('wheelX', util.query('.wheel').offsetLeft + util.query('.wheel').offsetWidth / 2);
dataStore.set('wheelY', util.query('.wheel').offsetTop + util.query('.wheel').offsetHeight / 2);
dataStore.set('bullets', []);

export {
  dataStore
}