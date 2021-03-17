import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import Vpath from '@/components/Vpath'
import Https from '@/components/Https'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/say_hi',
            name: 'SayHi',
            component: SayHi
        },
        {
            path: '/v_path',
            name: 'Vpath',
            component: Vpath
        },
        {
            path: '/https',
            name: 'Https',
            component: Https
        }
    ]
})
