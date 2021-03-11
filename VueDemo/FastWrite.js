//速写属性
var name = "Jim";
var age = 20;

var person = {
    name: name,
    age: age
}

var person2 = {name, age}

console.log(person);
console.log(person2);
//person和person2的输出是一致的

//速写方法，可以省略掉function关键字以及冒号
var person3 = {
    name,
    age,
    sayHello() {
        console.log("你好");
    }
}

person3.sayHello();


//箭头函数
var sum = function (a, b) {
    return a + b;
}

console.log(sum(1, 3));
//使用箭头函数可以写成：
var sum2 = (a, b) => {
    return a + b;
}

console.log(sum2(1, 3));