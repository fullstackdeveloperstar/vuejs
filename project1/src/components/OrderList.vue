<template>
	<div class="orderList">
		<div class="orderlist-header">
	      <div class="row">
	      	
	      	<img src="../assets/logo300.png" class="logo-icon">
	      	
	        <div >
	        	<p class="text-muted resevation1">Reservations For:</p>
	        	<p class="text-muted resevation2">Ika Key</p>
	        	
	        </div>
	        	<img src="../assets/search.png" class="search-icon">
	      </div>

	    </div>
	    <div class="orderlist-content">
	      	<div class="row">
	      		<div class="col-xs-12">
	      			<label class="text-muted">Upcoming</label>
	      		</div>
	      	</div>

	      	<OrderItem  v-for="order in orders" :order="order"></OrderItem>
	     </div>
	</div>
</template>

<script>
	import OrderItem from './OrderItem.vue';
	export default {
	  name: 'OrderList',
	  data () {
	    return {
	      orders: [
	      	{location: "Nahariya", status: "Cancelled", title: 'The New Carlton Nahriyia Hotel', checkIn: "Feb 21, 2018", checkOut: "Feb 22, 2018", totalCost: "90.00$", image:"../assets/hotel.jpg"},
	      	{location: "Nahariya", status: "in 5 months", title: 'The New Carlton Nahriyia Hotel', checkIn: "Feb 23, 2018", checkOut: "Feb 25, 2018", totalCost: "243.00$", image:"../assets/hotel.jpg"},
	      ],
	    }
	  },

	  methods: {
	    
	  },

	  components: {
	  	OrderItem
	  }
	}
</script>

<style scoped>

.orderList{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #f5f5f5;
}

.orderList .orderlist-header{
	background: white;
	box-shadow: 0px 5px 15px -1px #aaa;
    border: solid 1px #ddd;
    border-left: 0;
    border-right: 0;
    margin: 0;
}

.orderList .orderlist-content{
	padding: 20px;
}

.orderList .header .log-div{
	padding-left: 0;
}

.orderList .resevation1{
	line-height: 30px; 
	margin: 0;
	font-size: 12px;
}

.orderList .resevation2{
	line-height: 15px; 
	margin: 0;
}

.orderList .logo-icon{
	width: 50px;
	height: 50px;
}

.orderList .search-icon{
	width: 50px; 
	height: 50px;
	border: solid 1px #ddd;
	position: absolute;
	right: 0;
}

body.rtl .orderList .search-icon{
	left: 0;
	right: auto;
}

</style>