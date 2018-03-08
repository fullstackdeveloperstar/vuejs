<template>
	<div class="hotel" @click="viewDetail">
		<div class="flex">
			<div class="col-xs-8 detail-info">
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

		<div class="flex more-info">
			<div class="col-xs-6 text-left dir-option-right">
				<p class="text-muted">aadfa</p>
				<p class="price">$2180</p>
			</div>
			<div class="col-xs-6">
				<p class="info text-right dir-option-left">adskfjal4
					<i class="fas fa-info-circle"></i>
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
	.hotel{border: solid 1px #eee;		padding: 10px;		margin-top: 10px;	}

	.hotel .detail-info{padding: 0 10px;}

	.hotel .detail-info p{margin: 0}

	.ltr .hotel .detail-info{text-align: right;}

	.hotel-img{width: 100px;	}

	.hotel .icon{width: 15px;}

	.hotel .more-info{border-top: solid 1px #eee;		margin: 0 -9px;		padding: 5px;justify-content: space-between;align-items: center;}

	.hotel .more-info .price{		font-weight: 700;	}

	.hotel .more-info .info{		color: rgb(68, 161, 3);	}

	body.rtl .hotel  .dir-option-left{		text-align: left;	}

	body.rtl .hotel  .dir-option-right{		text-align: right;	}
</style>