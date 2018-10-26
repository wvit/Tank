import {
  dataStore
} from './dataStore'

class createTank {
  constructor(width, height, left, top, rotate, speed) {
    this.tankSpeed = speed;
    this.tankWidth = width;
    this.tankHeight = height;
    this.tankLeft = left;
    this.tankTop = top;
    this.tankRotate = rotate;
    this.gameWrap = dataStore.get('gameWrap');
    this.drawTank();
  }
  drawTank() {
    this.tank = document.createElement('div');
    this.tank.style.cssText = `width:${this.tankWidth}px;height:${this.tankHeight}px;left:${this.tankLeft}px;top:${this.tankTop}px;background:url(../src/imgs/tank.png) no-repeat 0 0/100% 100%;transform:rotate(${this.tankRotate}deg);`;
    this.gameWrap.appendChild(this.tank);
  }
  tankMove(left, top, rotate) {
    this.tankLeft = left;
    this.tankTop = top;
    this.tankRotate = rotate;
    this.tank.style.cssText += `left:${this.tankLeft}px;top:${this.tankTop}px;transform:rotate(${this.tankRotate}deg);`;
  }
}

const playerTank = new createTank(60, 30, 300, 200, 0, 3);

export {
  playerTank,
  createTank
}