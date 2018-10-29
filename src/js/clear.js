import {
    dataStore
} from './dataStore';

class Clear {
    constructor() {
        this.gameWrap = dataStore.get('gameWrap');
        this.gameAreaWidth = this.gameWrap.offsetWidth;
        this.gameAreaHeight = this.gameWrap.offsetHeight;
        setInterval(() => {
            this.bullets = dataStore.get('bullets');
            if (this.bullets.length > 0) {
                this.clearBullet();
            }
        }, 19)
    }

    clearBullet() {
        this.bullets = dataStore.get('bullets');
        for (let i = 0; i < this.bullets.length; i++) {
            let bulletInfo = this.bullets[i].dom.getBoundingClientRect();
            if (bulletInfo.left > this.gameAreaWidth || bulletInfo.left < -10 || bulletInfo.top > this.gameAreaHeight || bulletInfo.top < -10) {
                this.gameWrap.removeChild(this.bullets[i].dom);
                clearInterval(this.bullets[i].timer);
                this.bullets.splice(i, 1);
            }
        }
    }

}

const clear = new Clear();