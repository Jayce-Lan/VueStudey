import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/bloglist',
            name: 'BlogList',
            component: BlogList
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        }
    ]
})
