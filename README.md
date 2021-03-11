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