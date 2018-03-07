<template>
    <div class="dropdown">
        <div class="dropdown-header flex" @click="clickHeader">
            <div class="heder-title">
                <slot name="header">
                    default header
                </slot>		
            </div>

            <div class="header-icon">
                <i class="fas fa-angle-up" v-show="isShow"></i>
                <i class="fas fa-angle-down" v-show="!isShow"></i>
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

<style scope>
    .dropdown{border:solid 1px #888;margin: 10px 0;padding: 10px; border-radius: 3px;}

    .dropdown .dropdown-header{justify-content: space-between;}
</style>