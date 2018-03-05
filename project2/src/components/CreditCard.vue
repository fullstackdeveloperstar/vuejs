<template>
	<div class="creditcard-view">
		<div class="row">
			<div class="col-xs-12 card-input-div">
				<input class="form-control" placeholder="adkjfla">
				<img src="../assets/cardicon.png" class="cardicon">
			</div>
		</div>

		<div class="row margin-t-10">
			<div class="col-xs-12 card-input-div">
				<input class="form-control" placeholder="adkjfla">
				<img src="../assets/cardicon.png" class="cardicon">
			</div>
		</div>

		<div class="row margin-t-10">
			<div class="col-xs-12 card-input-div">
				<input class="form-control" placeholder="adkjfla">
				<img src="../assets/cardicon.png" class="cardicon">
			</div>
		</div>

		<div class="row margin-t-20">
			<div class="col-xs-12 card-input-div">
				<input class="form-control btn btn-success" type="button" value="adjfla">
				
			</div>
		</div>

	</div>
</template>

<script >
	export default{
		name: "CreditCard"
	}
</script>

<style scoped>
	.creditcard-view{
		padding: 20px;
		margin: 10px;
		background: #ddd;
	}

	.cardicon{
		position: absolute;
		width: 34px;
		top: 0;
		left: 10px;
	}

	body.ltr .cardicon{
		right: 10px;
    	left: auto;
	}

	.creditcard-view .card-input-div{position: relative;}

	.creditcard-view .margin-t-10{margin-top: 10px;}

	.creditcard-view .margin-t-20 {margin-top: 20px;}
</style>