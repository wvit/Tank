class Util {
    constructor() {}

    //获取节点
    query(dom) {
        const obj = document.querySelectorAll(dom);
        return obj.length > 1 ? obj : obj[0];
    }

    //绑定事件
    bindEvent(obj, event, callback) {
        obj = obj.length > 1 ? obj : new Array(obj);
        obj.forEach((item, index) => {
            item.index = index;
            item.addEventListener(event, callback);
        });
    }

    //生成一个范围(0~x)的随机数
    randomNum(num) {
        return Math.floor(Math.random() * num);
    }
}
const util = new Util();

export {
    util
}