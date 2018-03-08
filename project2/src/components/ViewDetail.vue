<template>
	<div class="viewdetail">
		<!--
		<div class="row image-view">
			<img src="../assets/hotel.jpg" class="hotel-img">
			<div class="image-count">4/1
				<i class="glyphicon glyphicon-picture"></i>
			</div>

			<div class="image-gradient"></div>
		</div>
		-->
		<Slider></Slider>

		<div class="detail-view">
			<div class="">
				<h3 class="">Ramada Apollo Amsterdam Center</h3>
			</div>
			<div class="flex margin-t-10">
				<div class="col-xs-12 text-right text-muted dir-option-left">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
				</div>
				<span class="text-muted"><i class="fas fa-map-marker-alt"></i></span>
				<span>adsfa</span>
			</div>

			<div class="margin-t-20">
				<span class="text-muted"><i class="fas fa-calendar-alt"></i></span>
				(asdfasd)11/03 - 07/03 adfa
			</div>
			
			<div class="margin-t-10">
				<span class="text-muted"><i class="fas fa-user"></i></span>
				2:asdjfla
			</div>
		</div>

		<div class="detail-action">
			<div class="row">
				<div class="col-xs-6">
					<p class="text-success text-left dir-option-right">adfljaldjk</p>
				</div>
				<div class="col-xs-6">
					<p class="text-right dir-option-left">adfa</p>
				</div>
			</div>

			<div class="action-item">
				<div class="flex action-title">
					<div class="">
						<p class="text-right dir-option-left">EI AI-askdjflad</p>
					</div>
				</div>
				
				<div class="flex margin-t-10 action-item-info">
					<div class="action-col">
						<img src="../assets/hotel.jpg" class="hotel-img">
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="action-col">
						<p class="text-muted text-center">asdfa</p>
						<hr>
						<p class="text-center"><small>AMS</small><small class="text-muted">ada</small><small>TLV</small></p>
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>
					
				</div>

				<div class="flex margin-t-10 action-item-info">
					<div class="action-col">
						<img src="../assets/hotel.jpg" class="hotel-img">
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="action-col">
						<p class="text-muted text-center">asdfa</p>
						<hr>
						<p class="text-center"><small>AMS</small><small class="text-muted">ada</small><small>TLV</small></p>
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>
					
				</div>
			</div>

			<div class="action-item">
				<div class="flex action-title">
					<div class="">
						<p class="text-right dir-option-left">EI AI-askdjflad</p>
					</div>
				</div>
				
				<div class="flex margin-t-10 action-item-info">
					<div class="action-col">
						<img src="../assets/hotel.jpg" class="hotel-img">
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="action-col">
						<p class="text-muted text-center">asdfa</p>
						<hr>
						<p class="text-center"><small>AMS</small><small class="text-muted">ada</small><small>TLV</small></p>
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>
					
				</div>

				<div class="flex margin-t-10 action-item-info">
					<div class="action-col">
						<img src="../assets/hotel.jpg" class="hotel-img">
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="action-col">
						<p class="text-muted text-center">asdfa</p>
						<hr>
						<p class="text-center"><small>AMS</small><small class="text-muted">ada</small><small>TLV</small></p>
					</div>

					<div class="action-col">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>
					
				</div>
			</div>

			<div class="action-item standard-panel">
				<div class="text-center">
					<h3>Standard</h3>
				</div>

				<div class=" margin-t-20">
					<select class="form-control">
						<option>adfad</option>
						<option>adfad</option>
						<option>adfad</option>
					</select>
				
				</div>

				<div class=" margin-t-20">
					<select class="form-control">
						<option>adfad</option>
						<option>adfad</option>
						<option>adfad</option>
					</select>
				
				</div>

				<div class=" margin-t-20">
					<select class="form-control">
						<option>adfad</option>
						<option>adfad</option>
						<option>adfad</option>
					</select>
				
				</div>

				<div class="flex checkout-div">
					<div class="">
						<p class="text-muted">asdfas</p>
						<p class=""><b><small>$</small>2180</b></p>
					</div>

					
					<button class="checkout-btn" @click="gotoCheckOut">CheckOut</button>
					
					
				</div>
			</div>

		</div>

		<div class="detail-dropdowns margin-t-20">
			<DropDownPanel>
				<p slot="header">alsk djf lasdjfla</p>
				<div slot="body">
					<div class="row">
						<div class="">
							<p>adsfasdfasd adfasdfa aadfasdf</p>
							<p>adsfasdfasd adfasdf</p>
							<p>adsfasdf asd ad</p>
							<p class="margin-t-10">adsfasdf asd ad</p>
							<h3 class="margin-t-10">aadf sadf</h3>

							<ul class="margin-t-10">
								<li>aldkj</li>
								<li>aldkj asdf</li>
								<li>alddf</li>
							</ul>
						</div>
					</div>
				</div>
			</DropDownPanel>

			<DropDownPanel>
				<p slot="header">sk jfla</p>
				<div slot="body">
					 
					<GoogleMap
					  name="example"
					></GoogleMap>
				</div>
			</DropDownPanel>

			<DropDownPanel>
				<p slot="header">aljf lasdjfla</p>
				<div slot="body">
					<div class="row">
						<div class="">
							<ul class="margin-t-10">
								<li>aldkj dfa adfa asdf asdf a</li>
							</ul>
						</div>
					</div>

					<p class="">asdfadsfa asdfasdf asdfasdfa</p>
					<p class="margin-t-10 ">ESHET PCK_ID=18901</p>
				</div>
			</DropDownPanel>

			<DropDownPanel>
				<p slot="header">alsk da</p>

				<div slot="body">
					<div class="row">
						<div class="">
							<ul class="margin-t-10">
								<li>aldkj</li>
								<li>aldkj asdf</li>
								<li>alddf</li>
							</ul>
						</div>
					</div>
				</div>
			</DropDownPanel>
		</div>
	</div>
</template>

<script>
	import DropDownPanel from "./DropDownPanel.vue";
	import Slider from "./Slider.vue";
	import GoogleMap from "./GoogleMap";

	export default{
		name: 'ViewDetail',

		components: {
			DropDownPanel, GoogleMap,Slider
		},

		data () {
	     return {
	        center: {lat: 10.0, lng: 10.0},
	      }
	    },

	    methods: {
	    	gotoCheckOut(){
	    		
	    		this.$router.push({ path:'checkout' });
	    	}
	    }
	}
</script>

<style scoped>
	.viewdetail .image-view{height: 300px;		position: relative;		margin: 0;		padding: 2px;	}

	.viewdetail .image-view .image-count{		position: absolute;		top: 20px;		left: 30px;		z-index: 1;		background: #000;		border-radius: 2px;		color: #fff;		padding: 10px;		opacity: 0.8;	}

	.viewdetail .hotel-img{		width: 50px;	}

	.viewdetail .image-gradient{		background: linear-gradient(#eee,white, #151514);		position: absolute;		top: 0;		left: 0;		width: 100%;		height: 100%;		opacity: 0.5;	}

	.viewdetail .detail-view{		padding: 5px;	}

	.viewdetail .detail-view .row{		margin-left: 0;		margin-right: 0;	}

	.viewdetail .icon{		width: 15px;	}

	.viewdetail .detail-action{		background: rgb(228, 235, 242);		padding: 10px 30px 30px 30px;	}

	.viewdetail .action-item{		margin-top: 20px;		border:solid 1px rgb(53, 143, 36);		background: white;		padding: 10px 5px;	}

	.viewdetail .action-item .action-item-info{align-items: center;}

	.viewdetail .action-item .action-item-info .action-col{flex-grow: 1;text-align: center;}

	.viewdetail .action-item .btn{		width: 100%;	}

	.viewdetail hr{		border: solid 1px;	}

	.viewdetail .detail-dropdowns{		padding: 10px 20px;	}

	.viewdetail .detail-dropdowns ul{margin: 10px 15px;}

	.viewdetail .standard-panel p{margin: 0}

	.viewdetail .detail-action p {margin: 0;}

	.viewdetail .margin-t-20{margin-top: 20px;}

	.viewdetail .text-muted{color: #888;}

	.viewdetail .text-center{text-align: center;}

	.viewdetail .margin-t-10{margin-top: 10px;}

	.viewdetail .margin-t-20{margin-top: 20px;}

	.viewdetail select{width: 100%;height: 50px;padding: 0 10px;}

	.viewdetail .checkout-div{padding: 20px 0;align-items: center;justify-content: space-between}
	
	.viewdetail .checkout-div .checkout-btn{    background: #1b8409;    color: white;    padding: 10px 20px;    border: 0;    border-radius: 3px;}
</style>