<template>
<!--  这里的active指的是下面的active样式，动态绑定之后，由isActive决定是否触发  -->
  <div class="item" :class="{active: isActive}" @click="handClick">
      <!-- 插槽，可以接纳调用该组件属性的任何参数 -->
      <slot/>
  </div>
</template>

<script>
export default {
    props: {
        /*约束属性*/
        isActive: {
            type: Boolean,   //约束属性类型
            // required: true,     //约束该属性是否一定要传递 true:必须 false: 不必须
            default: false,     //设定组件默认值
        }
    },
    methods: {
        //处理点击事件
        handClick() {
            //抛出一个自定义事件给父组件
            this.$emit("active");
        }
    }
}
</script>

<style scoped>
.active {
    background: #e7e7e7;
}

.item {
    cursor: pointer;
    /*这里设定组件宽高为100%后，其宽高交由外层组件控制*/
    width: 100%;
    height: 100%;
    transition: .2s; /*缓慢过度*/
}
.item:hover {
    background: #f4f4f4;
}
</style>