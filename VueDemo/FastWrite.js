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
        alert("你好");
    }
}

person3.sayHello();