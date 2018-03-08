<template>
  <div class="car">
    <!-- header -->
    <div class="car-header flex">
      <div class="title">
        <p class="title-1">adfadf adfad</p>
        <p class="title-2"><i class="far fa-calendar-alt"></i> dlkfa a dfa adf3245 </p>
      </div>

      <div class="ribbon">
        <div class="ribbon-content">
          <p class="title-1">adfa</p>
          <p class="title-2">(228)</p>
        </div>
      </div>
    </div>
    <!-- end header -->

    <!-- filter -->
    <div class="car-filter flex">
      <div class="filter-item">
       <i class="fas fa-filter"></i> adf
      </div>

      <div class="filter-item">
       <i class="fas fa-sort-amount-up"></i> dfkd
      </div>

      <div class="filter-item">
        
      </div>

      <div class="filter-item">
        <i class="fas fa-search"></i> mvnb
      </div>

    </div>
    <!-- end filter -->

    <!-- alarms -->
    <div class="alarms">
      <div class="alarm-success alarm-item flex">
        <div class="alarm-icon">
          <i class="fas fa-check-circle"></i>
        </div>

        <div class="alarm-body">
          <div class="alarm-title">
            asdnfla aslasdk sadkfkj asdkjfjf asdkjf asdlkj asldkjfal s
          </div>

          <div class="alarm-content">
            asdkjf asdkjf asdj asldkjf al asdkfjalk asdlfkja dl
          </div>
        </div>
      </div>

      <div class="alarm-danger alarm-item flex">
        <div class="alarm-icon">
          <i class="fas fa-check-circle"></i>
        </div>

        <div class="alarm-body">
          <div class="alarm-title">
              sdfasdf adfas asdf asdfaf as afasdf asdfasdfa  adf asdf  adfad?
          </div>

          <div class="alarm-content">
            ajskdjf asdkjf aur0fj asdkjf ussuow sfnad asf jfla as akkj asldjkf  adsfj asdl adjakdfj a lakjdf dkfj  asdlkj asdlf jlaks asdlkfj asdfjlak asdkfj  adklfj 
            <p>dfas  adfnla aasjd df </p>
          </div>
        </div>
      </div>
    </div>
    <!-- alarms -->

    <!-- car item -->
      <CarItem></CarItem>
      <CarItem></CarItem>
    <!-- car item -->
    

  </div>
</template>

<script>
import CarItem from "./CarItem.vue"
export default {
  name: 'Car',
  data () {
    return {
     
    }
  },

  methods: {
  },

  components:{
    CarItem
  }
}
</script>


<style scoped>

.car{}

.car .car-header{background-image: url('../assets/flight-header-bg.jpg'); height: 60px;align-items: center;justify-content: space-between}

.car .car-header .title {color: white; padding: 0 10px;}

.car .car-header .title .title-1 {font-size: 20px; font-weight: 700;}

.car .car-header .title .title-2 {font-size: 15px;}

.car .car-header .ribbon{position: relative;}

.car .car-header .ribbon .ribbon-content{position: absolute; background-image: url('../assets/ribbon.png');background-size: 100% auto;width: 89px;height: 63px;top: -30px;display: flex;align-items: center;flex-direction: column;justify-content: center;}

.ltr .car .car-header .ribbon .ribbon-content{left: -100px;}

.rtl .car .car-header .ribbon .ribbon-content{left: 10px;}

.car .car-header .ribbon .ribbon-content p{color: white;}

.car .car-header .ribbon .ribbon-content p.title-1{font-size: 15px;}

.car .car-header .ribbon .ribbon-content p.title-2{font-size: 20px; font-weight: 700;}
    
.car .car-filter{justify-content: space-between;background: #eee;align-items: stretch;border-bottom: solid 1px #ddd;}

.car .car-filter .filter-item{text-align: center;padding: 20px 5px 10px 5px; border: solid 1px #fff;flex-grow: 2;}

.car .car-figure{justify-content: space-between;align-items: stretch;padding: 10px;background: #e5edf4;}

.car .car-figure .figure-option{flex-grow: 1;padding: 5px;}

.car .car-figure .figure-option .figure-content{text-align: center; background: white; border-radius: 3px; color: #76869d;cursor: pointer;}

.car .car-figure .figure-option.selected .figure-content{color: white;background: #76869d;}

.car .car-figure .figure-option .figure-content .title-2{font-weight: 700;}

.car .car-title-info {justify-content: flex-start; align-items: center; padding: 10px 30px 10px 30px; background: #eee;}

.car .car-title-info .info-content{padding: 0 20px;}

.car .car-title-info .info-icon{font-size: 25px; color:#2c761b;}

.car .alarm-item{margin: 10px;padding: 5px;border-radius: 3px;}

.car .alarm-item.alarm-success{background: #c2e8b6;}

.car .alarm-item .alarm-icon{font-size: 30px;padding: 5px;}

.car .alarm-item.alarm-success .alarm-icon{color: #3f7b2d;}

.car .alarm-item.alarm-danger{background: #eec5c6;}

.car .alarm-item.alarm-danger .alarm-icon{color: #a3484b;}

.car .alarm-item .alarm-body{font-size: 13px;}

.car .alarm-item .alarm-body .alarm-title{font-weight: 700;}

.car .alarm-item.alarm-success .alarm-body{color:#3f7b2d;}

.car .alarm-item.alarm-danger .alarm-body{color:#a3484b;}

.car .alarm-item .alarm-body .alarm-content p{color:#4993d1;}
</style>
