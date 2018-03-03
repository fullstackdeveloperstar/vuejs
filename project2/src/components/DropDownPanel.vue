<template>
	<div class="dropdown">
		<div class="dropdown-header" @click="clickHeader">
			<div class="row">
				<div class="col-xs-3 text-left dir-option-right">
					<i class="glyphicon glyphicon-chevron-up" v-show="isShow"></i>
					<i class="glyphicon glyphicon-chevron-down" v-show="!isShow"></i>
				</div>

				<div class="col-xs-9 text-right dir-option-left">
					<slot name="header">
		              default header
		            </slot>		
				</div>
			</div>
			
		</div>

		<div class="dropdown-body" v-show="isShow">

			<slot name="body">
              default body
            </slot>
		</div>
	</div>
</template>

<script>
	export default{
		name: "DropDownPanel",
		data() {
			return {
				isShow: false,
			}
		},

		methods: {
			clickHeader() {
				this.isShow = !this.isShow;
			}
		}
	}
</script>
	
<style>
	.dropdown{
		margin-top: 20px;
		border: solid 1px #888;
	}

	.dropdown-header{
		padding: 10px;
	}

	.dropdown-body{
		padding: 10px;
	}
</style>