import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'
import TwoWayBinding from '@/components/TwoWayBinding'
import TestForm from '@/components/TestForm'
import FormSubmit from '@/components/FormSubmit'
import SayHiFromMinxin from '@/components/SayHiFromMinxin'
import ComputedProperties from '@/components/ComputedProperties'

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
        },
        {
            path: '/twowaybinding',
            name: 'TwoWayBinding',
            component: TwoWayBinding
        },
        {
            path: '/testform',
            name: 'TestForm',
            component: TestForm
        },
        {
            path: '/formsubmit',
            name: 'FormSubmit',
            component: FormSubmit
        },
        {
            path: '/sayhifromminxin',
            name: 'SayHiFromMinxin',
            component: SayHiFromMinxin
        },
        {
            path: '/computedproperties',
            name: 'ComputedProperties',
            component: ComputedProperties
        }
    ]
})
