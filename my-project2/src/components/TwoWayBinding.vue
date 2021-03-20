<template>
    <div>
        <p>页面上显示的值：</p>
        <h3>{{my_value}}</h3>
        <input v-model="my_value" type="text">
        <hr/>
        <input type="button" value="显示代码中的value" @click="show_my_value">
        <input type="button" value="更改value" @click="change_my_value">
    </div>
</template>

<script>
export default {
    data() {
        return {
            my_value: '默认值',
        }
    },
    methods: {
        show_my_value() {
            alert("my_value = " + this.my_value);
        },
        change_my_value() {
            this.my_value = "默认值被更改";
        },
    }
}
</script>