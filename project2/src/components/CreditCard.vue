<template>
	<div class="creditcard-view">
		<div class="row">
			<div class="col-xs-12">
				<input class="form-control" placeholder="adkjfla">
				<img src="../assets/cardicon.png" class="cardicon">
			</div>
		</div>

		<div class="row margin-t-10">
			<div class="col-xs-12">
				<input class="form-control" placeholder="adkjfla">
				<img src="../assets/cardicon.png" class="cardicon">
			</div>
		</div>

		<div class="row margin-t-10">
			<div class="col-xs-12">
				<input class="form-control" placeholder="adkjfla">
				<img src="../assets/cardicon.png" class="cardicon">
			</div>
		</div>

		<div class="row margin-t-20">
			<div class="col-xs-12">
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
		left: 20px;
	}

	body.ltr .cardicon{
		right: 20px;
    	left: auto;
	}
</style>