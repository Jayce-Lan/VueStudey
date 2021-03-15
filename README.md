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



## 模块化开发

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



## 组件化开发

组件开发步骤

- 创建组件
- 注册组件
  - 全局组件
  - 局部组件
- 应用组件

### 创建组件

> 创建组件实例

```javascript
/**
* 组件化
* 在组件化实例的时候，它的data不再是一个对象，而是一个函数
* @type {{data(): {}, computed: {计算属性}, methods: {方法体}}}
*/
var myComp = {
    data() {
        return {
            //...
        }

    },
    methods: {
        //方法
    },
    computed: {
        //计算属性
    },
    template: `...`
};
```

组件配置对象与vue实例的区别

- 没有 *el* 对象
- *data* 必须是一个函数，该函数返回的对象作为数据
- 由于没有 *el* 组件的虚拟DOM树必须定义在 `template` 或 `render` 中



### 注册组件/应用组件

注册组件分为**全局注册**和**局部注册**两种形式

#### 全局注册

> 一旦全局注册了组件，整个应用中的任何地方都可以使用该组件

全局注册的方式：

```javascript
/********************创建组件********************/
var compTitle = {
    data() {
        return {
            title: "库存管理系统"
        };
    },
    template: `<h1>{{title}}</h1>`,
};

/********************注册组件********************/
/**
* @arg1 为组件起名，官方推荐命名方式为大驼峰命名法（CompTitle）与横杠命名法（comp-title）
* @arg2 被注册组件
*/
Vue.component("CompTitle", compTitle);
```



在为组件命名的时候**建议使用大驼峰命名法**，因为使用大驼峰命名法，在使用组件时可以使用大驼峰与横杠命名法

使用组件：

```javascript
var vm = new Vue({
    el: "#app",
    template: `<div>
            	<comp-title></comp-title>
            </div>`
});
```



> 但是值得注意的是，全局注册在大部分时候都不建议使用
>
> 全局注册会影响打包结果
>
> 除非特别常用的组件，否则不进行全局注册



#### 局部注册

局部注册组件时，使用`components` 关键字

> 局部注册实例

```javascript
/*******************创建组件*******************/
var compTitle = {
    data() {
        return {
            title: "库存管理系统"
        };
    },
    template: `<h1>{{title}}</h1>`,
};

/*******************局部注册组件*******************/
var vm = new Vue({
    el: "#app",
    components: {
        CompTitle: compTitle,   //属性名为组件的名称，属性值为组件的配置
    },
    template: `<div>
<comp-title></comp-title>
</div>`,
});
```

但是，当我们实际开发时，建议是组件名称与组件的值相同，这样就可以使用数学属性注册组件

```javascript
/*******************创建组件*******************/
var CompTitle = {
    data() {
        return {
            title: "库存管理系统"
        };
    },
    template: `<h1>{{title}}</h1>`,
};

/*******************局部注册组件*******************/
var vm = new Vue({
    el: "#app",
    components: {
        CompTitle,   //使用数学属性注册组件
    },
    template: `<div>
<comp-title/>
</div>`,
});
```



### 组件树

一个组件创建好之后，往往会在各个地方使用它，它可能多次出现在vue实例当中，也可能出现在其它组件里，于是就出现了组件树，组件树之间的数据传递通过 *props* 完成

```shell
			vue实例
		   /    	\
		组件1		  组件2
	/    \			 |
组件3	   组件3		组件1
				  / 	\
				 组件3  组件3	
```



#### 向组件传递数据

- 大部分组件要完成自身的功能都需要额外的信息
- 比如组件需要处理数据，那么就需要向这个组件传递数据
- 传递数据的方式有很多，最常见的是**组件属性** *component props*

```javascript
/******************创建组件******************/
var MyComp = {
    props: ["p1", "p2", "p3"],
    //和vue一样，使用组件时也会创建组件的实例
    //组件属性会被提取到组件实例中，因此也可以在组件中使用
    template: `<div>{{p1}}-{{p2}}-{{p3}}</div>`
};

/******************注册并应用组件******************/
var app = new Vue({
    el: "#app",
    data() {
        return {
            a: "test1",
        }
    },
    components: {
        MyComp,
    },
    //使用标签属性的形式给组件的数据赋值
    template: `<div><my-comp :p1="a" :p2="'test2'" p3="test3"/></div>`
});
```



### 组件化的库存管理系统

#### 相关文件目录

**组件化的库存管理系统**

- `index.html`----------【主页面】
- src【存放js依赖的文件夹】
  - `main.js`----------【负责挂载、创建Vue实例、加载根组件】
  - `App.js`----------【根组件，负责整个网页组件调用与协调】
  - components【组件文件夹，负责存放组件】
    - `Products.js`----------【商品列表组件】



# Vue-Cli

## 配置源地址

在命令行输入如下语句

```sh
npm config set registry http://registry.npm.taobao.org/
```

随后输入如下语句，检查源地址

```shell
npm config get registry
```



## vue-cli全局安装

使用如下命令安装vue脚手架（注意，**这里需要以管理员权限运行安装**）

```shell
npm install -g @vue/cli
```

安装完成后使用如下命令检查是否安装成功

```shell
vue --version
```

### vue安装却无法检查到的情况

在命令行内键入如下语句

```shell
npm config list
```

随后会出现以下情况

```shell
...
; userconfig C:\Users\Administrator\.npmrc
cache = "D:\\Program Files\\nodejs\\node_cache"
prefix = "D:\\Program Files\\nodejs\\node_global"
registry = "http://registry.npm.taobao.org/"
...
```

找到prefix的文件夹，如果该路径下有vue的文件，那么将该路径配置到环境变量中



## vue-cli搭建工程

### 创建工程

首先，在工程文件夹中键入如下命令

```shell
vue create 工程名称
```

随后选择最后一项（手动创建vue工程）

```shell
Manually select features
```

随后选择如下命令（空格取消/选中）

```shell
? Check the features needed for your project:
>( ) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors
 ( ) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing  
```

*Bable为兼容性选项*

集成文件的选择

```shell
In dedicated config files	#集成到多个文件
> In package.json    		#集成到单个文件（选择该选项）
```

随后等待工程的搭建



### vue-cli搭建工程的主要文件夹

**bili-app**

- node_modules【工程脚手架的所有依赖包】
- public【页面模板文件】
  - `favicon.icon`----------【页面图标】
  - `index.html`----------【模板页面】
- src【源代码目录】
  - assets
  - components
  - `App.vue`
  - `main.js`----------【启动文件】
- `package.json`----------【工程描述】



### 工程的运行与打包

> 当我们运行 *npm run* 的时候我们会运行工程，随着后面的后缀我们会做相应的操作

运行工程

```shell
npm run serve
```

打包工程

```shell
npm run build
```

*工程打包后会在工程下创建一个 dist 文件夹，该文件夹中就会存放着最原始的前端脚本*

*该脚本可以在服务器上直接运行*



#### 使用npm运行服务器依赖

> 安装该依赖后，我们可以在任意目录用服务器运行*html*文件

```shell
npm install -g http-server
```

