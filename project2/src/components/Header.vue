<template>
	<div class="header">
		
	    <div class="header-container">
	    	<a href="/" class="logo"></a>
	        <button type="button" class="nav-toggle glyphicon glyphicon-align-justify">
	            
	        </button>
	    </div>
	</div>
</template>

<script >
	export default {
	  name: 'Header'
	}
</script>

<style scoped>
	.header{
		z-index: 10;
	    position: fixed;
	    width: 100%;
	    background-color: #fff;
	    display: block;
	    opacity: 0.9;
	}

	.header .header-container {
	    padding: 14px 10px;
	    text-align: center;
	    border-bottom: 1px solid #e2e7ed;
	}

	.header .logo {
	    /* float: right; */
	    margin-top: 2px;
	    margin-left: 29px;
	}

	.logo {
	    width: 96px;
	    height: 20px;
	    background-image: url(../assets/logo.png);
	    -webkit-transform: scale(1.2);
	    -ms-transform: scale(1.2);
	    -o-transform: scale(1.2);
	    transform: scale(1.2);
	    -webkit-transform-origin: center right;
	    -moz-transform-origin: center right;
	    -ms-transform-origin: center right;
	    -o-transform-origin: center right;
	    transform-origin: center right;
	}

	.logo {
	    display: inline-block;
	    vertical-align: middle;
	    background-repeat: no-repeat;
	    background-position: 0 0;
	    background-size: 100% 100%;
	}

	.header .nav-toggle {
	    width: 37px;
	    height: 23px;
	    float: right;
	    padding: 0;
	    border: 0;
	    /* margin-left: 5px; */
	    background: none;
	    padding-top: 4px;
	}

	.header .nav-toggle:before {
	    font-size: 20px;
	}

</style>