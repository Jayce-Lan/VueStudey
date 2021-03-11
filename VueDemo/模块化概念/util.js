var a = 1;
var test = function () {
    console.log("util.js");
}

//声明一个可以被导出使用的方法

//导出单个方法
/*
export default function sum(a, b) {
    return a + b;
}*/

//也可以写成下述方法
export default function (a, b) {
    return a + b;
}
