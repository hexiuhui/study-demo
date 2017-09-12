/*
            基于原型的动态解释性脚本语言
            原型 词法作用域 上下文
            DNA
            class{}语法糖


            动态js生成若干dom节点 气球向上移动 鼠标点击气球
            气球做动画消失

            需求分析：
            1.动态生成dom元素，初始化
                1.生成几个
                2.创建气球
                    1.createElement 创建div标签
                    2.添加属性，类名
                    3.添加到哪里，哪里.appendChild(他)
                3.创建多个
                    1.循环
                    2.节点片段
                    3.初始化函数
                4.完善属性
                    1.纵向top -wH
                    2.横向 随机0-wW Math.random() 0-1  包括0不包括1
                    3.~~取整,边界限制
            2.气球向上移动
                1.获取所有气球
                    querySelector querySelectorAll
                2.循环每一个气球
                    for 预存len
                3.改变top值
                    当前top-动量
                4.定时器 循环执行move
                    setInterval setTimeout
            3.用户点击气球 气球做动画消失
                1.点击事件
                2.事件委托
                3.气球消失 干掉节点  干掉一个生成一个
                4.数组的处理
                    找到数组中的对应的当前对象 并且删除
                    splice
                    index
                    indexOf lastIndexOf
            4.气球动画
                1.
*/

var num = 20; /*初始化数目10个*/
var wH = window.innerHeight; //获取浏览器高度
var wW = window.innerWidth; //宽度
var bz = 160;
var aBalloon = [];
var timer = null; //初始化定时器
init(10);
move();

//timer = setInterval(move, 60); //丢帧
//监听整个文档上发生的所有点击事件
document.body.addEventListener('click', function(e) {
    //把当前事件的所有信息的集合对象event打印出来
    if (e.target.className === 'balloon') {
        //气球消失 干掉节点
        e.target.parentNode.removeChild(e.target); //找到父节点 删除自己
        //干掉一个生成一个
        init(1);
        console.log(aBalloon.lastIndexOf(e.target)); //取下标，删除,倒叙查询
        aBalloon.splice(aBalloon.lastIndexOf(e.target), 1);
    }

}, false)

function init(num) { /*初始化函数*/
    var fragment = document.createDocumentFragment(); //节点片段
    for (var i = 0; i < num; i++) { //for if 都不是块作用域
        var randomX = ~~(Math.random() * wW) - bz; //位运算
        //if (randomX < 0) { randomX = 0 };
        randomX = Math.max(0, randomX);
        var oBalloon = document.createElement('div');
        oBalloon.className = 'balloon';
        oBalloon.style.top = wH + 'px'; //设置top
        oBalloon.style.left = randomX + 'px';
        oBalloon.speed = ~~(Math.random() * 7) + 1; //随机速度1-7
        aBalloon.push(oBalloon); //存放到数组中
        //document.body.appendChild(oBalloon); /*dom渲染回流，闪屏*/
        fragment.appendChild(oBalloon);
    }
    document.body.appendChild(fragment);
}

function move() {
    for (var i = 0, len = aBalloon.length; i < len; i++) {
        aBalloon[i].style.top = aBalloon[i].offsetTop - aBalloon[i].speed + 'px'; //aBalloon[i].offsetTop当前top
        if (aBalloon[i].offsetTop < -bz) {
            aBalloon[i].style.top = wH + 'px';
        }
        aBalloon[i]
    }
    setTimeout(move,60);
}