<template>
<div class="orderItem flex justify-space-between">
	<div class="col-xs-11 orderitem-div">
		<div class="order-title-and-status flex">
			<div class=" text-muted location"><i class="glyphicon glyphicon-map-marker"></i>{{order.location}}</div>
			<div class="  text-muted status" v-bind:class="{ 'text-danger': order.status === 'Cancelled'}">{{order.status}}</div>
		</div>
		<div class=" flex margintop10">
			<div class="">
				<img src="../assets/hotel1.jpg" class="hotel-image">
			</div>
			<div class="">
				<h5 class="text-muted title">{{order.title}}</h5>
				<p class="text-muted">Check-in: {{order.checkIn}}</p>
				<p class="text-muted">Check-in: {{order.checkOut}}</p>
				<p class="text-muted">Check-in: {{order.totalCost}}</p>
			</div>
		</div>
	</div>

	<div class=" virtical-center godetail" v-on:click="gotoDetail">
		<i class="fas fa-angle-right"></i>
	</div>
	</div>
</template>

<script>
export default{
	name: 'OrderItem',
	data() {
		return {
			isA: true
			}
			},
		methods: {
			gotoDetail() {
				if (this.order.status == "Cancelled") {
					this.$router.push({ path:'cancelled' });	
				} else {
					this.$router.push({ path:'bookingsuccess' });	
				}
				
			}
		},

		props: {
			order: {}},
created : function () {}
}
</script>

<style>
.orderItem{background: white;margin: 20px 0 0 0;border-radius: 5px;box-shadow: 0px 5px 15px -1px #aaa;display: flex; align-items: stretch;}
.orderItem .orderitem-div{ padding: 5px; width: 100%;}

.orderItem .location { padding: 15px; }

.orderItem .title { margin: 0;}

.orderItem .status{padding: 15px;}

.orderItem .hotel-image{width: 100px;border-radius: 5px;}

.orderItem .godetail{background: #ddd;display: flex; align-items: center; padding: 5px;cursor: pointer;	}

.orderItem .order-title-and-status  {justify-content: space-between;}
body.rtl .orderItem .order-title-and-status .status{text-align: left;}

.justify-space-between{justify-content: space-between;}

.orderItem .text-muted{color: #888;}

.orderItem .text-danger{color: #a94442;}
</style>