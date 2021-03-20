<template>
    <div>
        <textarea v-model.lazy="content"/>
        <input type="button" value="留言" @click="submit">
    </div>
</template>

<script>
export default {
    data () {
        return {
            content: '',
        }
    },
    methods: {
        submit() {
            this.$http.post('api/interface/blogs/add_comment',
                {
                    context: this.content
                }
            ).then((response) => {
                alert("提交成功！您的提交内容为：" + this.content);
            }, (response) => {
                alert("提交失败！");
            });
        }
    }
}
</script>