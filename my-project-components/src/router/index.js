import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponents from "@/components/TestComponents";
import ShowCounter1 from "@/components/ShowCounter1";
import ShowCounter2 from "@/components/ShowCounter2";
import VOnDemo from "@/components/VOnDemo";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/testcomponents',
            name: 'TestComponents',
            component: TestComponents
        },
        {
            path: '/show_counter_1',
            name: 'ShowCounter1',
            component: ShowCounter1
        },
        {
            path: '/show_counter_2',
            name: 'ShowCounter2',
            component: ShowCounter2
        },
        {
            path: '/v_on_demo',
            name: 'VOnDemo',
            component: VOnDemo
        }
    ]
})
