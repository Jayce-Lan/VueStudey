<template>
    <div>

        input: <input type="number" v-model="input_value">
        输入的值: {{input_value}}

        <br/>

        <!--
            @.lazy 用户双向绑定事件不会随着用户输入改变，而是失去鼠标焦点后才改变
            @.trim 强制去掉前后的空格
        -->
        textarea: <textarea v-model.lazy.trim="textarea_value"></textarea>
        输入的值: {{textarea_value}}

        <br/>

        radio:
        <input type="radio" v-model="radio_value" value="A"> A,
        <input type="radio" v-model="radio_value" value="B"> B,
        <input type="radio" v-model="radio_value" value="C"> C,
        输入的值: {{radio_value}}

        <br/>

        checkbox:
        <input type="checkbox" v-model="checkbox_value"
               :true-value="true" :false-value="false">
        输入的值: {{checkbox_value}}

        <br/>

        select:
        <select v-model="select_value">
            <option v-for="(item, index) in options" :key="index" :value="item.value">{{item.text}}</option>
        </select>
        输入的值: {{select_value}}
    </div>
</template>

<script>
export default {
    data () {
        return {
            input_value: '',
            textarea_value: '',
            radio_value: '',
            checkbox_value: '',
            select_value: 'C',
            options: [
                {
                    text: '红烧肉',
                    value: 'A'
                },
                {
                    text: '水煮鱼',
                    value: 'B'
                },
                {
                    text: '糖醋排骨',
                    value: 'C'
                },
            ],
        }
    },
    methods: {

    }
}
</script>