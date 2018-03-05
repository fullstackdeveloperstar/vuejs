<template>
  <div id="app" class="booking-app">
    <Header></Header>
    <div id="content" class="booking-content">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
.booking-app { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; width: 800px; max-width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: center;}

.booking-app .booking-content {margin-top: 50px; width: 100%;}

.booking-app .badge{ border-radius: 50%; background: #f49244; color: white; padding: 5px 7px; font-size: 15px;}

.booking-app .rating{ font-size: 20px; padding: 0 5px; border: solid 1px #ffcb00; border-radius: 7px; display: inline-flex; float: right;}

.booking-app .rating .star-fill{ margin: 0px;}

.booking-app .rating .star-fill:before{ content: "\2605"; color: rgb(255, 203, 0); }

.booking-app .rating .star-empty{ margin: 0px; }

.booking-app .rating .star-empty:before{ content: "\2605"; color: rgb(178, 187, 178); }

.booking-app .virtical-center{  display: flex; align-items: center; justify-content: center; }

* { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

.booking-app .text-left { text-align: left; }

.booking-app .text-right { text-align: right;}

.booking-app .text-center { text-align: center;}

.booking-app .text-justify { text-align: justify;}

.booking-app .text-nowrap { white-space: nowrap;}

.booking-app .text-lowercase {text-transform: lowercase;}

.booking-app .text-uppercase { text-transform: uppercase;}

.booking-app .text-capitalize { text-transform: capitalize;}

.booking-app .text-muted {color: #777777;}

.booking-app .text-primary { color: #337ab7;}

.booking-app a.text-primary:hover,
.booking-app a.text-primary:focus { color: #286090;}

.booking-app .text-success { color: #3c763d; }

.booking-app a.text-success:hover,
.booking-app a.text-success:focus {color: #2b542c;}

.booking-app .text-info { color: #31708f;}

.booking-app a.text-info:hover,
.booking-app a.text-info:focus { color: #245269;}

.booking-app .text-warning { color: #8a6d3b;}

.booking-app a.text-warning:hover,
.booking-app a.text-warning:focus {color: #66512c;}

.booking-app .text-danger { color: #a94442;}

.booking-app a.text-danger:hover,
.booking-app a.text-danger:focus { color: #843534;}

.booking-app .form-horizontal .form-group:after,
.booking-app .form-horizontal .form-group:before{display: table; content: " ";}

.booking-app .form-control { display: block; width: 100%; height: 34px; padding: 6px 12px; font-size: 14px; line-height: 1.42857143; color: #555; background-color: #fff; background-image: none; border: 1px solid #ccc; border-radius: 4px; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075); box-shadow: inset 0 1px 1px rgba(0,0,0,.075); -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s; -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;}

.booking-app .form-group { margin-bottom: 15px;}

.booking-app textarea.form-control { height: auto;}

@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('glyphicons-halflings-regular.eot');
  src: url('glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),
       url('glyphicons-halflings-regular.woff2') format('woff2'),
       url('glyphicons-halflings-regular.woff') format('woff'),
       url('glyphicons-halflings-regular.ttf') format('truetype'),
       url('glyphicons-halflings-regular.svg#@{icon-font-svg-id}') format('svg');
}
.booking-app .glyphicon { position: relative; top: 1px; display: inline-block; font-family: 'Glyphicons Halflings'; font-style: normal; font-weight: normal; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}

.booking-app .glyphicon-map-marker:before { content: "\e062"; }

.booking-app .glyphicon-info-sign:before { content: "\e086"; }

.booking-app .glyphicon-menu-right:before { content: "\e258"; }

.booking-app .glyphicon-align-justify:before { content: "\e055"; }

.booking-app .glyphicon-picture:before { content: "\e060"; }

.booking-app .glyphicon-chevron-up:before { content: "\e113"; }

.booking-app .glyphicon-chevron-down:before { content: "\e114";}

.booking-app .well {min-height: 20px; padding: 19px; margin-bottom: 20px; background-color: #f5f5f5; border: 1px solid #e3e3e3; border-radius: 4px; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05); box-shadow: inset 0 1px 1px rgba(0,0,0,.05);}

.booking-app .btn { display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: 400; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-image: none; border: 1px solid transparent; border-radius: 4px; }

.booking-app .btn-success {color: #fff; background-color: #5cb85c; border-color: #4cae4c; }

.booking-app .btn-default {color: #333; background-color: #fff;border-color: #ccc;}

.booking-app .margintop20{margin-top: 20px;}

.booking-app hr .hr{border:0;border-bottom: solid 0.5px gray; margin-top: 20px; margin-bottom: 20px; }

.booking-app .margintop10{ margin-top: 10px;}

.booking-app .margintop20{margin-top: 20px;}

.booking-app .row{ display: flex; justify-content: space-between;}

.booking-app .row .col-xs-1,
.booking-app .row .col-xs-2,
.booking-app .row .col-xs-3,
.booking-app .row .col-xs-4,
.booking-app .row .col-xs-5,
.booking-app .row .col-xs-6,
.booking-app .row .col-xs-7,
.booking-app .row .col-xs-8,
.booking-app .row .col-xs-9,
.booking-app .row .col-xs-10,
.booking-app .row .col-xs-11,
.booking-app .row .col-xs-12,{ flex-direction: column;}

.booking-app .row .col-xs-12 {
  width: 100%;
}
.booking-app .row .col-xs-11 {
  width: 91.66666667%;
}
.booking-app .row .col-xs-10 {
  width: 83.33333333%;
}
.booking-app .row .col-xs-9 {
  width: 75%;
}
.booking-app .row .col-xs-8 {
  width: 66.66666667%;
}
.booking-app .row .col-xs-7 {
  width: 58.33333333%;
}
.booking-app .row .col-xs-6 {
  width: 50%;
}
.booking-app .row .col-xs-5 {
  width: 41.66666667%;
}
.booking-app .row .col-xs-4 {
  width: 33.33333333%;
}
.booking-app .row .col-xs-3 {
  width: 25%;
}
.booking-app .row .col-xs-2 {
  width: 16.66666667%;
}
.booking-app .row .col-xs-1 {
  width: 8.33333333%;
}

body{margin: 0;}

*, *:before, *:after {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
}
</style>
