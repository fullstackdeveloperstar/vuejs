import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ViewDetail from '@/components/ViewDetail'
import CheckOut from '@/components/CheckOut'
import CreditCard from '@/components/CreditCard'
import Slider from '@/components/Slider'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/viewdetail',
      name: 'ViewDetail',
      component: ViewDetail
    },
    {
      path: '/checkout',
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: '/creditcard',
      name: 'CreditCard',
      component: CreditCard
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    }
  ]
})
