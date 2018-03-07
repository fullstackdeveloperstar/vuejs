import Vue from 'vue'
import Router from 'vue-router'
import Flight from '@/components/Flight'
import OrderList from '@/components/OrderList'
import StepFlow from '@/components/StepFlow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flight',
      component: Flight
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/stepflow',
      name: 'StepFlow',
      component: StepFlow
    },
  ]
})
