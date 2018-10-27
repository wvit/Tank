import {
  dataStore
} from './dataStore'

class createTank {
  constructor(width, height, left, top, rotate, speed, bulletSpeed) {
    this.tankSpeed = speed;
    this.tankWidth = width;
    this.tankHeight = height;
    this.tankLeft = left;
    this.tankTop = top;
    this.tankRotate = rotate;
    this.tankBulletSpeed = bulletSpeed;
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
  tankFire() {
    let thisBulletRotate = this.tankRotate;
    let bullet = document.createElement('div');
    bullet.style.cssText += `left:-7px;top:50%;transform:translateY(-50%);`;
    this.tank.appendChild(bullet);
    let bulletX = bullet.getBoundingClientRect().left;
    let bulletY = bullet.getBoundingClientRect().top;
    this.gameWrap.appendChild(bullet);
    bullet.style.cssText = `width:6px;height:6px;background:#000;border-radius:50%;left:${bulletX}px;top:${bulletY}px;transform:translateY(-50%);`;
    setInterval(() => {
      bulletX = bullet.offsetLeft - Math.cos(thisBulletRotate * Math.PI / 180) * this.tankBulletSpeed;
      bulletY = bullet.offsetTop - Math.sin(thisBulletRotate * Math.PI / 180) * this.tankBulletSpeed;
      bullet.style.cssText += `left:${bulletX}px;top:${bulletY}px;`;
    }, 20);
  }
}

const playerTank = new createTank(60, 30, 300, 200, 0, 3, 5);

export {
  playerTank,
  createTank
}