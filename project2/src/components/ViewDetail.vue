<template>
	<div class="viewdetail">
		<div class="row image-view">
			<img src="../assets/hotel.jpg" class="hotel-img">
			<div class="image-count">4/1
				<i class="glyphicon glyphicon-picture"></i>
			</div>

			<div class="image-gradient"></div>
		</div>

		<div class="detail-view">
			<div class="row">
				<div class="col-xs-12 text-right">
					<h3 class="dir-option-left">Ramada Apollo Amsterdam Center</h3>
				</div>
			</div>
			<div class="row margin-t-10">
				<div class="col-xs-12 text-right text-muted dir-option-left">
					adsfa<i class="glyphicon glyphicon-map-marker"></i>
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
					<img src="../assets/staricon.png" class="icon">
				</div>
			</div>

			<div class="row margin-t-20">
				<div class="col-xs-12 text-right dir-option-left">
					(asdfasd)11/03 - 07/03 adfa
					<i class="glyphicon glyphicon-calendar text-muted"></i>
				</div>
			</div>
			
			<div class="row margin-t-10">
				<div class="col-xs-12 text-right dir-option-left">
					2:asdjfla
					<i class="glyphicon glyphicon-user text-muted"></i>
				</div>
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
				<div class="row">
					<div class="col-xs-12">
						<p class="text-right dir-option-left">EI AI-askdjflad</p>
					</div>
				</div>
				
				<div class="row margin-t-10">
					<div class="col-xs-3 text-center">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="col-xs-4 text-small">
						<p class="text-muted text-center">asdfa</p>
						<hr>
						<p class="text-center"><small>AMS</small><small class="text-muted">ada</small><small>TLV</small></p>
					</div>

					<div class="col-xs-3 text-center">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="col-xs-2">
						<img src="../assets/hotel.jpg" class="hotel-img">
					</div>
				</div>

				<div class="row margin-t-10">
					<div class="col-xs-3 text-center">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="col-xs-4 text-small">
						<p class="text-muted text-center">asdfa</p>
						<hr>
						<p class="text-center"><small>AMS</small><small class="text-muted">ada</small><small>TLV</small></p>
					</div>

					<div class="col-xs-3">
						<p class="text-muted">adsfa</p>
						<h4>10:30</h4>
					</div>

					<div class="col-xs-2">
						<img src="../assets/hotel.jpg" class="hotel-img">
					</div>
				</div>
			</div>

			<div class="row margin-t-20">
				<div class="col-xs-12">
					<p class="text-right dir-option-left">adf adf adfa</p>
				</div>
			</div>

			<div class="action-item standard-panel">
				<div class="row">
					<div class="col-xs-12 text-center">
						<h3>Standard</h3>
					</div>
				</div>

				<div class="row margin-t-20">
					<div class="col-xs-12">
						<div class="form-group">
							<select class="form-control">
								<option>adfad</option>
								<option>adfad</option>
								<option>adfad</option>
							</select>
						</div>
					</div>
				</div>

				<div class="row ">
					<div class="col-xs-12">
						<div class="form-group">
							<select class="form-control">
								<option>adfad</option>
								<option>adfad</option>
								<option>adfad</option>
							</select>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12">
						<div class="form-group">
							<select class="form-control">
								<option>adfad</option>
								<option>adfad</option>
								<option>adfad</option>
							</select>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-6">
						<button class="btn btn-success" @click="gotoCheckOut">CheckOut</button>
					</div>
					<div class="col-xs-6 text-right dir-option-left">
						<p class="text-muted">asdfas</p>
						<p class=""><b><small>$</small>2180</b></p>
					</div>
				</div>
			</div>

		</div>

		<div class="detail-dropdowns margin-t-20">
			<DropDownPanel>
				<p slot="header">alsk djf lasdjfla</p>
				<div slot="body">
					<div class="row">
						<div class="col-xs-12 text-right dir-option-left">
							<p>adsfasdfasd adfasdfa aadfasdf</p>
							<p>adsfasdfasd adfasdf</p>
							<p>adsfasdf asd ad</p>
							<p class="margin-t-10">adsfasdf asd ad</p>
							<h3 class="margin-t-10">aadf sadf</h3>

							<ul class="margin-t-10 text-right dir-option-left">
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
						<div class="col-xs-12 text-right dir-option-left">
							<ul class="margin-t-10 text-right dir-option-left">
								<li>aldkj dfa adfa asdf asdf a</li>
							</ul>
						</div>
					</div>

					<p class="text-right dir-option-left">asdfadsfa asdfasdf asdfasdfa</p>
					<p class="margin-t-10 text-right dir-option-left">ESHET PCK_ID=18901</p>
				</div>
			</DropDownPanel>

			<DropDownPanel>
				<p slot="header">alsk da</p>

				<div slot="body">
					<div class="row">
						<div class="col-xs-12 text-right dir-option-left">
							<ul class="margin-t-10 text-right dir-option-left">
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
	import GoogleMap from "./GoogleMap";

	export default{
		name: 'ViewDetail',

		components: {
			DropDownPanel, GoogleMap
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
	.viewdetail .image-view{
		height: 300px;
		position: relative;
		margin: 0;
		padding: 2px;
	}

	.viewdetail .image-view .image-count{
		position: absolute;
		top: 20px;
		left: 30px;
		z-index: 1;
		background: #000;
		border-radius: 2px;
		color: #fff;
		padding: 10px;
		opacity: 0.8;

	}

	.viewdetail .hotel-img{
		width: 100%;
	}

	.viewdetail .image-gradient{
		background: linear-gradient(#eee,white, #151514);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
	}

	.viewdetail .detail-view{
		padding: 5px;
	}

	.viewdetail .detail-view .row{
		margin-left: 0;
		margin-right: 0;
	}

	.viewdetail .icon{
		width: 15px;
	}

	.viewdetail .detail-action{
		background: rgb(228, 235, 242);
		padding: 10px 30px 30px 30px;
	}

	.viewdetail .action-item{
		margin-top: 20px;
		border:solid 1px rgb(53, 143, 36);
		background: white;
		padding: 10px 5px;
	}

	.viewdetail .action-item .btn{
		width: 100%;
	}

	.viewdetail hr{
		border: solid 1px;
	}

	.viewdetail .detail-dropdowns{
		padding: 10px 20px;
	}

	.viewdetail li::after {
	    content: "•";
	    display: inline-block;
	    right: 0;
	}

	.viewdetail li{
		list-style: none;
	}

	.viewdetail select, .viewdetail select option{
		direction: rtl;
	}

	body.rtl .viewdetail select, body.rtl .viewdetail select option{
		direction: ltr;
	}

	.viewdetail .standard-panel p{margin: 0}

	.viewdetail .detail-action p {margin: 0;}

	.viewdetail .margin-t-20{margin-top: 20px;}
</style>