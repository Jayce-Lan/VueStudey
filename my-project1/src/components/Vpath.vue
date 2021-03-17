<template>
    <div>
        <h1>Vue 周边技术</h1>
        <ul>
            <li v-for="item in technologies" :key="item">{{item}}</li>
        </ul>

        <p v-if="name === 'Vue'">Vue.js</p>
        <p v-else>其它技术</p>

        <p>当v-for与v-if同时使用时，v-for有更高的优先级，会优先触发</p>
        <p>这里使用的是与上面一样的列表，只是多了判断条件，判定只显示开头为“n”的字符串</p>
        <ul>
            <li v-for="item in technologies" :key="item" v-if="item.indexOf('n') === 0">{{item}}</li>
        </ul>

        <p>v-bind动态绑定</p>
        <h1 :style="'color:' + my_color">Vue.js动态绑定颜色</h1>

        <p>v-model动态绑定</p>
        <h3>你好, {{user_name}} !</h3>
        <input type="text" v-model="user_name">
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'Vue',
            technologies: ['nvm', 'npm', 'node', 'webpack', 'ecma_script', 'menu'],
            my_color: 'brown',
            user_name: 'Jayce',
        }
    }
}
</script>

<style>

</style>