import Vue from 'vue';
import Router from 'vue-router';
import Error from '@/views/Error404';
import Home from '@/views/Home';
import Empleado from '@/views/Empleado'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/Home',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'Error',
            component: Error
        },
        {
            path: '/Empleado',
            name: 'Empleado',
            component: Empleado
        }
    ]
})