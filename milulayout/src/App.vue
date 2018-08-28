<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 /* @import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
 @import '../node_modules/bootstrap/dist/css/bootstrap.css'; */
  body{background-image: url(assets/bg.jpg);}

 .flex{display: flex;}

 .rtl{direction: rtl;}

 .ltr{direction: ltr;}

 .primary-color{color: #3d0355;}

 .primary-bg{background: #3d0355;}

 .secondary-bg{background: #3e1855;}

 .yellow-text{color: rgb(255, 233, 131);}

 .yellow-bg{background:rgb(255, 233, 131);}

 .yellow-mute{color: #877d4f;}

 .white-text{color: #fff;}

 .btn{border: 0;border-radius: 5px;color:white;font-weight: 500;padding: 10px;}

 .btn-primary{background: #449d44;border-color: #3a853a;}

 .offer-color {color: #449d44;}

 .sb-button--primary {color: #fff;background: #449d44;border-color: #3a853a;}

 .sb-button--secondary {color: #3e1855;background: #fff;border-color: #d9d9d9;  border: 1px solid #cacbcd;}

 .sb-button {padding: 12px 16px 11px;display: inline-block;border-radius: 3px;line-height: 1.1;transition: background-color .2s ease;font-size: .75rem;    font-weight: 700;letter-spacing: .5px;text-align: center;text-decoration: none;text-transform: uppercase;cursor: pointer;position: relative;-webkit-appearance: none;-moz-appearance: none;appearance: none;}

 .sb-cart-new-search {margin-top: 8px;float: right;}

.sb-button--small {padding: 8px 12px 7px;font-size: .6875rem;}

.vue-tooltip .tooltip-arrow {display: none;}

.rtl .sb-cart-head-dates--new>div:after {display: none;}

.rtl .sb-cart-head-dates--new>div:before {
    content: "\f053";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 400;
    text-decoration: inherit;
    position: absolute;
    right: 0;
    bottom: 50%;
    -webkit-transform: translate(50%,50%);
    transform: translate(50%,50%);
    font-size: 2rem;
    opacity: .2;
}

.rtl .sb-cart-head-dates--new>div:first-child:before{display:none;}

.sb-cart-head-dates--new>div:last-child:after{display:none;}

.sb-dec-part{font-size: 15px;}

.loading-div{
  background: black;
    color: white;
    text-align: center;
    width: 100%;
    padding: 15px;
    opacity: 0.7;
    border-radius: 5px;
    position: fixed;
    width: 50%;
    left: 25%;
    top: -100%;
    transition: all 1s;
    z-index: 100;
}

.loadingdivshow{
  top:10%;
}
</style>
