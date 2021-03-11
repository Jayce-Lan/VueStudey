//声明导入外部js的方法
import sum from "./util.js"    //这里双引号中存放的是相对路径的文件

var a = 2;
var test = function () {
    console.log("main.js");
}

console.log(a);
test();

console.log("main导入util中的sum方法：" + sum(3, 5));