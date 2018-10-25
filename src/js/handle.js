import {
  playerTank
} from './createTank';

import {
  dataStore
} from './dataStore';

class Handle {
  constructor() {
    this.wheel = dataStore.get('wheel');
    this.wheelChild = dataStore.get('wheelChild');
    this.wheel.addEventListener('touchmove', ev => {
      this.touchMove(ev)
    });
    this.wheel.addEventListener('touchend', () => {
      this.touchEnd();
    });
  }
  touchMove(ev) {
    this.x = ev.touches[0].clientX;
    this.y = ev.touches[0].clientY;
    this.wheelChild.style.cssText += `position:fixed;left:${this.x}px;top:${this.y}px;`;
  }
  touchEnd() {
    this.wheelChild.style.cssText += `position:absolute;left:50%;top:50%;`;
  }

}

const handle = new Handle();