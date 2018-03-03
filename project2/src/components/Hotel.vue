<template>
	<div class="hotel" @click="viewDetail">
		<div class="row">
			<div class="col-xs-8">
				<p class="text-right dir-option-left">Ramada Apollo Amsterdam Center</p>
				<p class="text-right dir-option-left"><span>asda</span>
					<img src="../assets/restauranticon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
				</p>
				<p class="text-right dir-option-left">(4adfa)11/03 - 07/03
					<img src="../assets/calendaricon.png" class="icon">
				</p>
				<p class="text-right dir-option-left">adfadsfad
				</p>
			</div>
			<div class="col-xs-4">
				<img src="../assets/hotel.jpg" class="hotel-img">
			</div>
		</div>

		<div class="row more-info">
			<div class="col-xs-6 text-left dir-option-right">
				<p class="text-muted">aadfa</p>
				<p class="price">$2180</p>
			</div>
			<div class="col-xs-6">
				<p class="info text-right dir-option-left">adskfjal4
					<i class="glyphicon glyphicon-info-sign"></i>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
	  name: 'Hotel',

	  methods: {
	    viewDetail() {
	      this.$router.push({ path:'viewdetail' });
	    }
	  }
	}
</script>

<style scoped>
	.hotel{
		border: solid 1px #eee;
		padding: 10px;
		margin-top: 10px;
	}

	.hotel-img{
		width: 100%;
	}

	.icon{
		width: 15px;
	}

	.more-info{
		border-top: solid 1px #eee;
		margin: 0 -9px;
		padding: 5px;
	}

	.more-info .price{
		font-weight: 700;
	}

	.more-info .info{
		color: rgb(68, 161, 3);
	}

	body.rtl .dir-option-left{
		text-align: left;
	}

	body.rtl .dir-option-right{
		text-align: right;
	}
</style>