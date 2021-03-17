<template>
    <div class="hi">
        {{ message }}

        <input type="button" @click="showMsg" value="点击" />
        <input type="button" @click="sayHi('Tom')" value="Tom">
        <input type="button" @click="sayHi('Jim')" value="Jim">
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "你好，Vue！该语句来源于变量",
        }
    },
    methods: {
        showMsg () {
            alert("my message = " + this.message);
        },
        sayHi(name) {
            alert("Hello, " + name);
        }
    }
}
</script>

<style>
.hi {
    color: brown;
    font-size: 20px;
}
</style>