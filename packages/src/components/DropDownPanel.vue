<template>
	<div class="dropdown">
		<div class="dropdown-header flex" @click="clickHeader">
			<div class="">
				<slot name="header">
					default header
				</slot>		
			</div>

			<div class="">
				<span v-show="isShow"><i class="fas fa-chevron-up"></i></span>
				<span v-show="!isShow"><i class="fas fa-chevron-down"></i></span>
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
	.dropdown{margin-top: 20px;		border: solid 1px #888;	}

	.dropdown-header{padding: 10px; justify-content: space-between; align-items: center;}

	.dropdown-header p{margin: 0}

	.dropdown-body{		padding: 10px;	}

	body.rtl .dir-option-right{		text-align: right;	}

	body.rtl .dir-option-left{		text-align: left;	}
</style>