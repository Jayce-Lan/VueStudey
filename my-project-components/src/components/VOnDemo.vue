<template>
    <div>
        <h3>您点击了 {{count}} 次</h3>
        <input type="button" value="点击" @click="count++">

        <br/>
        <input v-model="url" placeholder="请输入 https://开头的网址，否则不会跳转">
        <a :href="url" @click="validate1($event)">点击确定</a>
        <a :href="url" @click="validate2($event)" @click.prevent="show_message">点击确定</a>

        <input type="button" value="event" @click="logEvent($event)">

        <br/>

        <h3>输入完毕后按下回车键即可触发事件</h3>
        <!--
            @keyup 松开键盘
            @.enter 回车键
        -->
        <input @keyup.enter="show_key_up_msg" v-model="msg">

    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            url: "",
            msg: "",
        }
    },
    methods: {
        validate1(event) {
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
        },
        //以上的validate1可以改写成以下方法：
        validate2(event) {
            if (this.url.length == 0 || this.url.indexOf("https://") != 0) {
                if (event) {
                    event.preventDefault(); //停止默认动作
                }
            }
        },
        show_message() {
            alert("您输入的网址不符合规范！" + this.url)
        },
        show_key_up_msg() {
            alert(this.msg);
            this.msg = "";
        }
    }
}
</script>