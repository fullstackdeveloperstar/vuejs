import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SnapTravel from '@/components/SnapTravel'
import BookingSuccess from '@/components/BookingSuccess'
import OrderList from '@/components/OrderList'
import Cancelled from '@/components/Cancelled'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/snaptravel',
    	name: 'SnapTravel',
    	component: SnapTravel
    },
    {
    	path:'/bookingsuccess',
    	name: 'BookingSuccess',
    	component: BookingSuccess
    },
    {
    	path:'/orderlist',
    	name: 'OrderList',
    	component: OrderList
    },
    {
    	path:'/cancelled',
    	name: 'Cancelled',
    	component: Cancelled
    }
  ]
})
