<template>
	<div class="row orderItem">
		<div class="col-xs-11 orderitem-div">
			<div class="row">
				<div class="col-xs-6 text-muted location"><i class="glyphicon glyphicon-map-marker"></i>{{order.location}}</div>
				<div class="col-xs-6 text-right text-muted status" v-bind:class="{ 'text-danger': order.status === 'Cancelled'}">{{order.status}}</div>
			</div>

			<div class="row flex margintop10">
				<div class="col-xs-4">
					<img src="../assets/hotel1.jpg" class="hotel-image">
				</div>
				<div class="col-xs-8">
					<h5 class="text-muted title">{{order.title}}</h5>
					<p class="text-muted">Check-in: {{order.checkIn}}</p>
					<p class="text-muted">Check-in: {{order.checkOut}}</p>
					<p class="text-muted">Check-in: {{order.totalCost}}</p>
				</div>
			</div>
		</div>

		<div class="col-xs-1 virtical-center godetail" v-on:click="gotoDetail">
			<i class="glyphicon glyphicon-menu-right"></i>
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
			order: {}
		},

		created: function () {
		    console.log(this.order);    
		}


	}
</script>

<style scoped>
	.orderItem{
		background: white;
		margin: 20px 0 0 0;
		border-radius: 5px;
		box-shadow: 0px 5px 15px -1px #aaa;
		display: flex;
	}

	.orderitem-div{
		padding: 5px;
	}

	.location{
		padding: 15px;
	}

	.title{
		margin: 0;
	}

	.status{
		padding: 15px;
	}

	.hotel-image{
		width: 100%;
		border-radius: 5px;
	}

	.godetail{
		background: #ddd;
	}
</style>