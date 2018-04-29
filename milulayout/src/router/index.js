import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Booking from '@/components/Booking'
import BookNow from '@/components/BookNow'
import Reservation from '@/components/Reservation'
import ClickOutside from '@/components/airbnb/ClickOutside.js';
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';
Vue.use(Tooltip);
Vue.use(Router)
Vue.directive('click-outside', ClickOutside)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    },
    {
      path: '/book-now',
      name: 'BookNow',
      component: BookNow
    },
    {
      path:'/reservation',
      name: 'Reservation',
      component:Reservation
    }
  ]
})
