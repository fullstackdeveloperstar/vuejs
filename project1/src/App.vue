<template>
  <div  class="booking-app">
    <div class="booking-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.booking-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.booking-app .booking-content {
}


.booking-app .badge{
  border-radius: 50%;
  background: #f49244;
  color: white;
  padding: 5px 7px;
  font-size: 15px;
}

.booking-app .rating{
  font-size: 20px;
  padding: 0 5px;
  border: solid 1px #ffcb00;
  border-radius: 7px;
  display: inline-flex;
  float: right;
}

body.rtl .booking-app .rating{
  float: left;
}

.booking-app .rating .star-fill{
  margin: 0px;
 }

 .booking-app .rating .star-fill:before{
   content: "\2605";
   color: rgb(255, 203, 0);
 }

 .booking-app .rating .star-empty{
  margin: 0px;
 }

 .booking-app .rating .star-empty:before{
   content: "\2605";
   color: rgb(178, 187, 178);
 }

 .booking-app .virtical-center{
   display: flex;
  align-items: center;
  justify-content: center;
 }

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.booking-app .text-left {
  text-align: left;
}
.booking-app .text-right {
  text-align: right;
}
.booking-app .text-center {
  text-align: center;
}
.booking-app .text-justify {
  text-align: justify;
}
.booking-app .text-nowrap {
  white-space: nowrap;
}
.booking-app .text-lowercase {
  text-transform: lowercase;
}
.booking-app .text-uppercase {
  text-transform: uppercase;
}
.booking-app .text-capitalize {
  text-transform: capitalize;
}
.booking-app .text-muted {
  color: #777777;
}
.booking-app .text-primary {
  color: #337ab7;
}
.booking-app a.text-primary:hover,
.booking-app a.text-primary:focus {
  color: #286090;
}
.booking-app .text-success {
  color: #3c763d;
}
.booking-app a.text-success:hover,
.booking-app a.text-success:focus {
  color: #2b542c;
}
.booking-app .text-info {
  color: #31708f;
}
.booking-app a.text-info:hover,
.booking-app a.text-info:focus {
  color: #245269;
}
.booking-app .text-warning {
  color: #8a6d3b;
}
.booking-app a.text-warning:hover,
.booking-app a.text-warning:focus {
  color: #66512c;
}
.booking-app .text-danger {
  color: #a94442;
}
.booking-app a.text-danger:hover,
.booking-app a.text-danger:focus {
  color: #843534;
}

.booking-app .form-horizontal .form-group:after, 
.booking-app .form-horizontal .form-group:before{
    display: table;
    content: " ";
}

.booking-app .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.booking-app .form-group {
    margin-bottom: 15px;
}

.booking-app textarea.form-control {
    height: auto;
}

@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('glyphicons-halflings-regular.eot');
  src: url('glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),
       url('glyphicons-halflings-regular.woff2') format('woff2'),
       url('glyphicons-halflings-regular.woff') format('woff'),
       url('glyphicons-halflings-regular.ttf') format('truetype'),
       url('glyphicons-halflings-regular.svg#@{icon-font-svg-id}') format('svg');
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.glyphicon-map-marker:before { content: "\e062"; }
.glyphicon-info-sign:before { content: "\e086"; }
.glyphicon-menu-right:before { content: "\e258"; } 

.booking-app .well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }

  .btn-default {
      color: #333;
      background-color: #fff;
      border-color: #ccc;
  }

.margintop20{
  margin-top: 20px;
}

hr .hr{
 border:0; 
 border-bottom: solid 0.5px gray;
 margin-top: 20px;
 margin-bottom: 20px;
}

.margintop10{
  margin-top: 10px;
}

.margintop20{
  margin-top: 20px;
}
</style>
