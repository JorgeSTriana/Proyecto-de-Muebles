import Vue from 'vue';
import Router from 'vue-router';
import Error from '@/views/Error404';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        /* {
            path: '/',
            name: 'swap',
            component: Swap
        } */
        {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
})