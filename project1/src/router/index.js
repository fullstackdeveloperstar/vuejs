import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SnapTravel from '@/components/SnapTravel'
import BookingSuccess from '@/components/BookingSuccess'
import OrderList from '@/components/OrderList'
import Cancelled from '@/components/Cancelled'
import BootstrapVue from 'bootstrap-vue'
import { Modal } from 'bootstrap-vue/es/components';
import vBModal from 'bootstrap-vue/es/directives/modal/modal';

Vue.directive('b-modal', vBModal);


Vue.use(Modal);
Vue.use(Router)
Vue.use(BootstrapVue);

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
    },
  ]
})
