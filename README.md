# Vue模板语法

## 内容

*vue*中的元素内容使用*mustache*模板引擎进行解析



## 指令

> 作用于元素属性的语法，会影响元素的渲染行为，在*vue*中一般以`v-`开头

### 基础指令

- v-for：循环渲染元素
- v-html：设置元素的innerHTML，该指令会导致元素的模板内容失效
- v-on：注册事件
  - 该指令由于十分常用，因此提供了简写`@`
  - 事件支持一些指令修饰符，如`.prevent`、`.stop`等
  - 事件参数会自动传递（`$event`）
- v-bind：绑定动态元素
  - 该指令由于十分常用，因此提供了简写`:`
- v-show：控制元素可见度（display）
- v-if、v-else-if、v-else：控制元素生成（是否存在）
- v-model：双向绑定数据，常用于表单元素
  - 该指令是`v-on`和`v-bind`的复合版



### 特殊指令

- v-slot
- v-text
- v-pre
- v-cloak
- v-once
- 自定义指令



## 特殊属性

- key：需要唯一且稳定



# Vue计算属性

> 在开发过程中，有些属性是需要通过其它属性的计算而得出的，此时就需要用到计算属性；计算属性与方法（*methods*）不同的是，计算属性存在缓存；而方法属性在data中一旦有一个参数变动时就会重新触发，不存在缓存

#### 计算属性（*computed*）和方法（*methods*）的区别

- 计算属性可以赋值，而方法不行
- 计算属性会进行缓存，如果依赖不变，则直接使用缓存结果，不会重新计算
- 凡是根据已有数据计算得到的数据的无参函数，都应该尽量写成计算属性，而不是方法

> 实例

```javascript
computed: {
    fullName() {
        //只有当相关参数变动时，才会执行方法
        return this.firstName + " " + this.lastName;
    }

    //上述方法的完整写法为：
    fullName: {
        get() {
            return this.firstName + " " + this.lastName;
        },
        set(val) {
            this.firstName = val[0];
            this.lastName = val.substr(1);
        },
    },
},
```



# Vue组件核心概念

## 模块化/组件化概念

> 正常情况下，在同一个界面中导入不同的js文件，由于没有模块化，会导致变量污染等情况；而模块化可以解决变量污染这个情况

### 变量污染

如下面的例子，我们正常导入两份js文件

```javascript
/*******************main.js*******************/
var a = 2;
var test = function () {
    console.log("main.js");
}

/*******************util.js*******************/
var a = 1;
var test = function () {
    console.log("util.js");
}

function sum(a, b) {
    return a + b;
}
```

在页面中导入两份文件

```html
<body>
    <script src="./util.js"></script>
    <script src="./main.js"></script>
</body>
```

我们在控制台中调用*a*与*test*两个同名属性，可以发现的是**由于同名**，*util.js* 的属性被 *main.js* 的属性**覆盖了**



### 模块化处理*module*

上述的js文件引入时，*type* 当中加入一个 *module* 属性可以解决变量污染的问题

```html
<body>
    <script src="./util.js" type="module"></script>
    <script src="./main.js" type="module"></script>
</body>
```



### 模块化方法共享

> 当我们在一个模块中定义了一个方法，而希望其它模块也能使用的时候，我们需要将这个方法导出

#### *export default* / *import...from...* 关键字

> 导出/导入 模块中的方法

我们需要将上述的js文件改造

```javascript
/******************util.js******************/
var a = 1;
var test = function () {
    console.log("util.js");
}

//声明一个可以被导出使用的方法
export default function sum(a, b) {
    return a + b;
}

/******************main.js******************/
//声明导入外部js的方法
import sum from "./util.js"    //这里双引号中存放的是相对路径的文件

var a = 2;
var test = function () {
    console.log("main.js");
}
console.log(a);
test();

console.log("main导入util中的sum方法：" + sum(3, 5));
```

#### 导出多个方法

上述方法中，我们提及了导出单个方法的方式：

```javascript
export default function(args) {
    /*方法体*/
}
```

当我们需要导出多个方法时，我们可以使用如下方式：

```javascript
export default {
    fun1() {
        /*方法体*/
    },
    func2() {
        /*方法体*/
    }
}
```



### 组件开发

组件开发步骤

- 创建组件
- 注册组件
  - 全局组件
  - 局部组件
- 应用组件

