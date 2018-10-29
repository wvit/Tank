import {
    dataStore
} from './dataStore'

class NPC {
    constructor(size) {
        this.ctx = dataStore.get('canvas').getContext('2d');
        this.canvasWidth = dataStore.get('gameWrap').offsetWidth;
        this.canvasHeight = dataStore.get('gameWrap').offsetHeight;
        dataStore.get('canvas').width = this.canvasWidth;
        dataStore.get('canvas').height = this.canvasHeight;
        this.blockSize = size;
        this.dataList = Math.ceil(this.canvasHeight / this.blockSize);
        this.dataRow = Math.ceil(this.canvasWidth / this.blockSize);
        this.createNpcData();
        this.draw();
    }
    createNpcData() {
        this.npcData = [];
        for (let i = 0; i < this.dataList; i++) {
            let child = [];
            for (let j = 0; j < this.dataRow; j++) {
                if (j === 30) {
                    child.push(1);
                } else {
                    child.push(0);
                }
            }
            this.npcData.push(child);
        }
        console.log(this.npcData);
    }
    draw() {
        this.ctx.fillStyle = "rgba(0,0,0,1)";
        for (let i = 0; i < this.npcData.length; i++) {
            for (let j = 0; j < this.npcData[0].length; j++) {
                if (this.npcData[i][j] === 1) {
                    this.ctx.fillRect(j * this.blockSize, i * this.blockSize, this.blockSize, this.blockSize);
                }
            }
        }
    }
}

const npc = new NPC(20);