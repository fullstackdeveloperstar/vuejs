<template>
  <div class="sidebar primary-bg" v-bind:class="{'sidebarshow': sidebarconf.isShow,'sidebarhide': !sidebarconf.isShow}">
     <div class="close-icon flex">
         <span v-on:click="closeSideBar()">
         <i class="fa fa-times" ></i>
         </span>
     </div>
    
    <div class="book-info-form secondary-bg">
        <div class="date-titles flex yellow-text">
            <div class="date-title-item">Arrival Date:</div>
            <div class="date-title-item">Departure Date:</div>
        </div>
        <HotelDatePicker/>

        <div class="flex yellow-text">
            Persons:
        </div>
        <Person/>

        <div class="">
            <button class="check-availability-btn yellow-bg primary-color" v-on:click="gotoBooking()">Check Availability</button>
        </div>

        <div class="more-info flex">
            <span class="yellow-text"><i class="fa fa-percent"></i> Promo Code:</span>

            <span class="yellow-text"><i class="fa fa-edit"></i> modify/cancel an existing reservation</span>
        </div>
    </div>
     
   
  </div>
</template>

<script>
import HotelDatePicker from './DatePicker.vue';
import Person from './Person.vue';
export default {
    name: 'SideBar',
    data () {
        return {
        }
    },
    props:{
        sidebarconf: {
            isShow: Boolean
        },
    },
    components:{
        HotelDatePicker,
        Person
    },
    methods:{
        closeSideBar(){
            // this.props.isShow = false;
          this.sidebarconf.isShow = false;
        },

        gotoBooking(){
            this.$router.push({ path:'booking' });
        }
    }
}
</script>

<style scoped>

.sidebar{position: fixed; width: 50%; z-index: 1;height: 100%;top: 0; left: 0; transition: all 1s;overflow: scroll;}

.sidebarshow{left: 0;}

.sidebarhide{left: -50%;}

.sidebar .close-icon{color: white;padding: 10px;font-size: 30px;justify-content: flex-end;}

.sidebar .book-info-form{margin: 10px;padding:0 20px;border-radius: 5px;}

.sidebar .book-info-form .date-titles{font-size: 12px;}

.sidebar .book-info-form .date-titles .date-title-item{flex-grow: 1;}

.sidebar .book-info-form .check-availability-btn{border: 0; border-radius: 5px; width: 100%;padding: 10px;margin-top: 10px;}

.sidebar .book-info-form .more-info{justify-content:space-between;margin-top: 10px;font-size: 12px;}

.rtl .sidebarshow{left: auto;right: 0;}

.rtl .sidebarhide{left:auto; right: -50%;}

@media only screen and (max-width: 600px) {
    .sidebar{ width: 100%; }

    .sidebarhide{left: -100%;}

    .rtl .sidebarhide{left:auto; right: -100%;}
}
</style>

