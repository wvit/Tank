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
    this.wheelX = dataStore.get('wheelX');
    this.wheelY = dataStore.get('wheelY');
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
    this.dataCount();
  }
  touchEnd() {
    this.wheelChild.style.cssText += `position:absolute;left:50%;top:50%;`;
  }

  dataCount() {
    let Y = this.wheelY - this.y;
    let X = this.wheelX - this.x;
    let radian = Math.atan((this.wheelY - this.y) / (this.wheelX - this.x));
    let angle = Math.abs(180 / Math.PI * radian);
    if (Y > 0 && X < 0) {
      angle = 90 + 90 - angle;
    } else if (Y < 0 && X < 0) {
      angle = 180 + angle;
    } else if (Y < 0 && X > 0) {
      angle = 270 + 90 - angle;
    }
    console.log(angle)
    playerTank.tankMove(300, 200, angle)

  }

}

const handle = new Handle();