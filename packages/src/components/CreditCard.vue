<template>
	<div class="creditcard-view">
		<div class="flex card-input-div">
			<input class="" placeholder="adkjfla">
			<span class="card-icon"><i class="fas fa-id-card"></i></span>
		</div>

		<div class="flex card-input-div">
			<input class="" placeholder="adkjfla">
			<span class="card-icon"><i class="fas fa-id-card"></i></span>
		</div>

		<div class="flex card-input-div">
			<input class="" placeholder="adkjfla">
			<span class="card-icon"><i class="fas fa-id-card"></i></span>
		</div>
	</div>
</template>

<script >
	export default{
		name: "CreditCard"
	}
</script>

<style scoped>
	.creditcard-view{padding: 20px;margin: 10px;background: #ddd;}

	.creditcard-view .card-input-div{justify-content: space-between; align-items: center;position: relative;margin-bottom: 10px;}

	.creditcard-view .card-input-div input{width: 100%; height: 50px;border: solid 1px #ddd; padding: 0 10px;}
	
	.creditcard-view .card-input-div .card-icon{position: absolute;    height: 50px; padding: 5px; font-size: 35px; color: #888;}

	.ltr .creditcard-view .card-input-div .card-icon{right: 0; left: auto;}

	.rtl .creditcard-view .card-input-div .card-icon{right: auto; left: 0;}
</style>