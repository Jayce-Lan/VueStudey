<template>
    <div>
<!--        <ul>
            <li v-for="blog in blogs" :key="blog.id">
                <span>id: {{blog.id}}</span>
                <span>title: {{blog.title}}</span>
                <span>created_at: {{blog.created_at}}</span>
            </li>
        </ul>-->
        <table>
            <tr v-for="blog in blogs" :key="blog.id">
                <td>{{blog.id}}</td>
<!--                <td @click="showBlog(blog.id)">{{blog.title}}</td>-->
                <td>
                    <router-link :to="{name: 'Blog', query: {id: blog.id}}">
                        {{blog.title}}
                    </router-link>
                </td>
                <td>{{blog.created_at}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '博客列表页',
            blogs: []
        }
    },
    mounted() {
        //发起get请求
        this.$http.get('api/interface/blogs/all')
                .then((response) => {
                    console.info(response.body)
                    this.blogs = response.body.blogs
                }, (response) => {
                    console.error(response)
                });

        //发起post请求，第二个参数写入请求体
        /*this.$http.post('api/interface/blogs/all', {请求体})
                .then((response) => {
                    ...
                }, (response) => {
                    ...
                });*/

    },
    methods: {
        showBlog(blog_id) {
            //触发路由
            this.$router.push({name: 'Blog', query: {id: blog_id}});
        }
    }
}
</script>

<style>

</style>