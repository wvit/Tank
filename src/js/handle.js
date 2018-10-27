import {
  playerTank
} from './createTank';

import {
  dataStore
} from './dataStore';

class Handle {
  constructor() {
    this.timer = null;
    this.wheel = dataStore.get('wheel');
    this.wheelChild = dataStore.get('wheelChild');
    this.wheelX = dataStore.get('wheelX');
    this.wheelY = dataStore.get('wheelY');
    this.wheel.addEventListener('touchstart', () => {
      this.touchStart()
    });
    this.wheel.addEventListener('touchmove', ev => {
      this.touchMove(ev)
    });
    this.wheel.addEventListener('touchend', () => {
      this.touchEnd();
    });
  }

  touchStart() {
    this.timer = setInterval(() => {
      this.playerTankMove();
    }, 20);
  }

  touchMove(ev) {
    this.x = ev.touches[0].clientX;
    this.y = ev.touches[0].clientY;
    this.wheelChild.style.cssText += `position:fixed;left:${this.x}px;top:${this.y}px;`;
    this.dataCount();
  }
  touchEnd() {
    this.wheelChild.style.cssText += `position:absolute;left:50%;top:50%;`;
    clearInterval(this.timer);
  }

  dataCount() {
    let Y = this.wheelY - this.y;
    let X = this.wheelX - this.x;
    let radian = Math.atan((this.wheelY - this.y) / (this.wheelX - this.x));
    this.angle = Math.abs(180 / Math.PI * radian);
    if (Y > 0 && X < 0) {
      this.angle = 90 + 90 - this.angle;
    } else if (Y < 0 && X < 0) {
      this.angle = 180 + this.angle;
    } else if (Y < 0 && X > 0) {
      this.angle = 270 + 90 - this.angle;
    }
  }

  playerTankMove() {
    if (this.angle) {
      let tankOffsetLeft = playerTank.tankLeft - Math.cos(this.angle * Math.PI / 180) * playerTank.tankSpeed;
      let tankOffsetTop = playerTank.tankTop - Math.sin(this.angle * Math.PI / 180) * playerTank.tankSpeed;
      playerTank.tankMove(tankOffsetLeft, tankOffsetTop, this.angle);
    }
  }

}

const handle = new Handle();