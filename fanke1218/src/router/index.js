import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import Classify from '@/components/Classify'
import Fanke from '@/components/Fanke'
import Mine from '@/components/Mine'
import Details from '@/components/Details'
import AfterCar from '@/components/AfterCar'
import classifys from '@/components/classifys'
import Czhing from '@/components/Czhing'
import Hjiang from '@/components/Hjiang'
import Chenshan from '@/components/Chenshan'
import Order from '@/components/Order'
import Wuliu from '@/components/Wuliu'
import Tousu from '@/components/Tousu'
import Dizhi from '@/components/Dizhi'

Vue.use(Router)  

export default new Router({
  routes: [
    {
        //首页
        path: '/',
        redirect: '/index'
        // component: Index
    },
    {
        path: '/chongzhi',
        name: 'Czhing',
        component: Czhing
    },
    {
        path: '/huojiang',
        name: 'Hjiang',
        component: Hjiang
    },
    {
    	path: '/index',
    	name: 'Index',
    	component: Index
    },
    {
        path: '/chenshan',
        name: 'Chenshan',
        component: Chenshan
    },
    {
        //购物车购物前
        path: '/car',
        name: 'Cart',
        component: Cart
    },
    {
        //分类
        path: '/classify',
        name: 'Classify',
        component: Classify
    },
    {
        //分类小模块
        path: 'classifys',
        name: 'classifys',
        component: classifys
    },
    {
        //定制
        path: '/fanke',
        name: '/Fanke',
        component: Fanke
    },
    {
        //我的
        path: '/geren',
        name: '/Mine',
        component: Mine
    },
    {
        //私人定制
        path: '/order',
        name: '/Order',
        component: Order
    },
    {
        path: '/wuliu',
        name: '/Wuliu',
        component: Wuliu
    },
    //投诉
    {
        path: '/tousu',
        name: 'Tousu',
        component: Tousu
    },
    {
        path: '/dizhi',
        name: 'Dizhi',
        component: Dizhi
    },
    {
        //详情
        path: '/details',
        name: '/Details',
        component: Details
    },
    {
        //购物后
        path: '/car1',
        name: '/AfterCar',
        component: AfterCar
    }

  ]
})
