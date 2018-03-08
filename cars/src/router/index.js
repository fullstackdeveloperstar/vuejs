import Vue from 'vue'
import Router from 'vue-router'
import Car from '@/components/Car'
import StepFlow from '@/components/StepFlow'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Car',
      component: Car
    },
    {
      path: '/stepflow',
      name: 'StepFlow',
      component: StepFlow
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
  ]
})
