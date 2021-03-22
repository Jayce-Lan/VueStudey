<template>
    <div>
        <h3>您点击了 {{count}} 次</h3>
        <input type="button" value="点击" @click="count++">

        <br/>
        <input v-model="url" placeholder="请输入 https://开头的网址，否则不会跳转">
        <a :href="url" @click="validate($event)">点击确定</a>

        <input type="button" value="event" @click="logEvent($event)">

    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            url: "",
        }
    },
    methods: {
        validate(event) {
            if (this.url.length == 0 || this.url.indexOf("https://") != 0) {
                alert("您输入的网址不符合规范！");
                if (event) {
                    alert("event = " + event)
                    event.preventDefault(); //停止默认动作
                }
            }
        },
        logEvent(event) {
            console.log(event);
        }
    }
}
</script>