<template>
  <div class="flight">
    <!-- header -->
    <div class="flight-header flex">
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
    <div class="flight-filter flex">
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

    <!-- figure option -->
    <div class="flight-figure flex">
      <div class="figure-option selected">
        <div class="figure-content">
          <p class="title-1">adfa</p>
          <p class="title-2">$398</p>
        </div>
      </div>

      <div class="figure-option">
        <div class="figure-content">
          <p class="title-1">adfa</p>
          <p class="title-2">$440</p>
        </div>
      </div>

      <div class="figure-option">
        <div class="figure-content">
          <p class="title-1">adfa</p>
          <p class="title-2">$444</p>
        </div>
      </div>
    </div>
    <!-- end figure option -->

    <!-- info title -->
    <div class="flight-title-info flex">
      <div class="info-icon">
        <i class="fas fa-exclamation-circle"></i>
      </div>

      <div class="info-content">
        <h3>asldkjfalk aldkfal asldflkj</h3>
      </div>
    </div>
    <!-- end info title -->

    <!-- flight item -->
      <div class="flight-item-panel" @click="gotosecondpage">
        <div class="item-header flex">
          <div> nasdjf </div>
          <div> - </div>
          <div class="title-1"> Alitalia </div>
        </div>

        <div class="item-content">
          <div class="item-detail flex">
            <div class="detail-logo">
              <img src="../assets/flight-logo.png">
            </div>

            <div class="start-time">
              <div class="title">
                adkfj
              </div>
              <div class="time">
                18:00
              </div>
            </div>

            <div class="detail-router">
              <div class="top-info">
                <div>adkfj aasd dk</div>
                <div>:</div>
                <div>8:10</div>
              </div>

              <div class="middle-line">
                <span>&nbsp;</span>
              </div>

              <div class="bottom-info">
                <div class="start-station">CGD</div>
                <div>1;adsl</div>
                <div class="end-station">TLV</div>
              </div>
            </div>

            <div class="end-time">
              <div class="title">
                nm n,m
              </div>
              <div class="time">
                03:10
              </div>
            </div>
          </div>

          <div class="item-detail flex">
            <div class="detail-logo">
              <img src="../assets/flight-logo.png">
            </div>

            <div class="start-time">
              <div class="title">
                adkfj
              </div>
              <div class="time">
                18:00
              </div>
            </div>

            <div class="detail-router">
              <div class="top-info">
                <div>adkfj aasd dk</div>
                <div>:</div>
                <div>8:10</div>
              </div>

              <div class="middle-line">
                <span>&nbsp;</span>
              </div>

              <div class="bottom-info">
                <div class="start-station">CGD</div>
                <div>1;adsl</div>
                <div class="end-station">TLV</div>
              </div>
            </div>

            <div class="end-time">
              <div class="title">
                nm n,m
              </div>
              <div class="time">
                03:10
              </div>
            </div>
          </div>

        </div>

        <div class="item-more flex">
          <div class="note">
            <i class="fas fa-info-circle"></i> aksdjf a askdjflad
          </div>

          <div class="price">
            <p class="title">adff a</p>
            <p class="amount">$398</p>
          </div>
        </div>

        <div class="item-footer footer">
          <div class="flex footer" @click="toggleShow1()">
            <div class="footer-icon">
              <span class="footer" v-show="!isShow1"><i class="fas fa-plus-circle"></i></span>
              <span class="footer" v-show="isShow1"><i class="fas fa-minus-circle"></i></span>
            </div>
            <div class="footer-title">
              adfa aldkfjal  adkfja
            </div>
          </div>
          <div v-show="isShow1">
            content
          </div>    
        </div>
      </div>
    <!-- end flight item -->

    <!-- flight item -->
      <div class="flight-item-panel"  @click="gotosecondpage">
        <div class="item-header flex">
          <div> nasdjf </div>
          <div> - </div>
          <div class="title-1"> Alitalia </div>
        </div>

        <div class="item-content">
          <div class="item-detail flex">
            <div class="detail-logo">
              <img src="../assets/flight-logo.png">
            </div>

            <div class="start-time">
              <div class="title">
                adkfj
              </div>
              <div class="time">
                18:00
              </div>
            </div>

            <div class="detail-router">
              <div class="top-info">
                <div>adkfj aasd dk</div>
                <div>:</div>
                <div>8:10</div>
              </div>

              <div class="middle-line">
                <span>&nbsp;</span>
              </div>

              <div class="bottom-info">
                <div class="start-station">CGD</div>
                <div>1;adsl</div>
                <div class="end-station">TLV</div>
              </div>
            </div>

            <div class="end-time">
              <div class="title">
                nm n,m
              </div>
              <div class="time">
                03:10
              </div>
            </div>
          </div>

          <div class="item-detail flex">
            <div class="detail-logo">
              <img src="../assets/flight-logo.png">
            </div>

            <div class="start-time">
              <div class="title">
                adkfj
              </div>
              <div class="time">
                18:00
              </div>
            </div>

            <div class="detail-router">
              <div class="top-info">
                <div>adkfj aasd dk</div>
                <div>:</div>
                <div>8:10</div>
              </div>

              <div class="middle-line">
                <span>&nbsp;</span>
              </div>

              <div class="bottom-info">
                <div class="start-station">CGD</div>
                <div>1;adsl</div>
                <div class="end-station">TLV</div>
              </div>
            </div>

            <div class="end-time">
              <div class="title">
                nm n,m
              </div>
              <div class="time">
                03:10
              </div>
            </div>
          </div>

        </div>

        <div class="item-more flex">
          <div class="note">
            <i class="fas fa-info-circle"></i> aksdjf a askdjflad
          </div>

          <div class="price">
            <p class="title">adff a</p>
            <p class="amount">$398</p>
          </div>
        </div>

        <div class="item-footer">
          <div class="flex footer" @click="toggleShow2()">
            <div class="footer-icon">
              <span v-show="!isShow2" class="footer"><i class="fas fa-plus-circle"></i></span>
              <span v-show="isShow2" class="footer"><i class="fas fa-minus-circle"></i></span>
            </div>
            <div class="footer-title footer">
              adfa aldkfjal  adkfja
            </div>
          </div>
          <div v-show="isShow2">
            content
          </div> 
        </div>
      </div>
    <!-- end flight item -->
    

  </div>
</template>

<script>
export default {
  name: 'Flight',
  data () {
    return {
      isShow1: false,
      isShow2: false
    }
  },

  methods: {
    toggleShow1(e){
      console.log(e);
      this.isShow1 = !this.isShow1   
    },
    toggleShow2(){
      this.isShow2 = !this.isShow2
    },
     gotosecondpage(e){
       console.log(e);
       console.log(e.target.className);
       if(!e.target.className.includes('footer')){
        this.$router.push({ path: 'orderlist' })
       }
     }
  }
}
</script>


<style scoped>

.flight{}

.flight .flight-header{background-image: url('../assets/flight-header-bg.jpg'); height: 60px;align-items: center;justify-content: space-between}

.flight .flight-header .title {color: white; padding: 0 10px;}

.flight .flight-header .title .title-1 {font-size: 20px; font-weight: 700;}

.flight .flight-header .title .title-2 {font-size: 15px;}

.flight .flight-header .ribbon{position: relative;}

.flight .flight-header .ribbon .ribbon-content{position: absolute; background-image: url('../assets/ribbon.png');background-size: 100% auto;width: 89px;height: 63px;top: -30px;display: flex;align-items: center;flex-direction: column;justify-content: center;}

.ltr .flight .flight-header .ribbon .ribbon-content{left: -100px;}

.rtl .flight .flight-header .ribbon .ribbon-content{left: 10px;}

.flight .flight-header .ribbon .ribbon-content p{color: white;}

.flight .flight-header .ribbon .ribbon-content p.title-1{font-size: 15px;}

.flight .flight-header .ribbon .ribbon-content p.title-2{font-size: 20px; font-weight: 700;}
    
.flight .flight-filter{justify-content: space-between;background: #eee;align-items: stretch;border-bottom: solid 1px #ddd;}

.flight .flight-filter .filter-item{text-align: center;padding: 20px 5px 10px 5px; border: solid 1px #fff;flex-grow: 2;}

.flight .flight-figure{justify-content: space-between;align-items: stretch;padding: 10px;background: #e5edf4;}

.flight .flight-figure .figure-option{flex-grow: 1;padding: 5px;}

.flight .flight-figure .figure-option .figure-content{text-align: center; background: white; border-radius: 3px; color: #76869d;cursor: pointer;}

.flight .flight-figure .figure-option.selected .figure-content{color: white;background: #76869d;}

.flight .flight-figure .figure-option .figure-content .title-2{font-weight: 700;}

.flight .flight-title-info {justify-content: flex-start; align-items: center; padding: 10px 30px 10px 30px; background: #eee;}

.flight .flight-title-info .info-content{padding: 0 20px;}

.flight .flight-title-info .info-icon{font-size: 25px; color:#2c761b;}

.flight .flight-item-panel{margin: 10px;border:solid 1px#76869d;border-radius: 3px;padding: 5px;}

.flight .flight-item-panel .item-header{padding: 10px 10px;}

.flight .flight-item-panel .item-header .title-1{color: #76869d; font-weight: 700;}

.flight .flight-item-panel .item-content{}

.flight .flight-item-panel .item-content .item-detail{ align-items: center; background: #eee; margin-top: 10px;}

.flight .flight-item-panel .item-content .item-detail .detail-logo{flex-grow: 1; text-align: center;}

.flight .flight-item-panel .item-content .item-detail .detail-logo img{width: 50px; height: 50px; border: solid 0.5px #eee; background: white;}

.flight .flight-item-panel .item-content .item-detail .start-time{flex-grow: 2; text-align: center;}

.flight .flight-item-panel .item-content .item-detail .start-time .title{font-size: 12px; color: #76869d;}

.flight .flight-item-panel .item-content .item-detail .start-time .time{font-weight: 700;}

.flight .flight-item-panel .item-content .item-detail .end-time{flex-grow: 2; text-align: center;}

.flight .flight-item-panel .item-content .item-detail .end-time .title{font-size: 12px;color: #76869d;}

.flight .flight-item-panel .item-content .item-detail .end-time .time{font-weight: 700;}

.flight .flight-item-panel .item-content .item-detail .detail-router{flex-grow: 4; text-align: center;}

.flight .flight-item-panel .item-content .item-detail .detail-router .top-info{display: flex; justify-content: center;color: #76869d;padding-bottom: 3px; font-size: 12px;}

.flight .flight-item-panel .item-content .item-detail .detail-router .bottom-info{display: flex; justify-content: space-between;color: #76869d; font-size: 12px;padding-top: 3px;}

.flight .flight-item-panel .item-content .item-detail .detail-router .bottom-info .start-station{color: black;}

.flight .flight-item-panel .item-content .item-detail .detail-router .bottom-info .end-station{color: black;}

.flight .flight-item-panel .item-content .item-detail .detail-router .middle-line{border: solid 1px #000;position: relative;}

.flight .flight-item-panel .item-content .item-detail .detail-router .middle-line span{position: absolute; width: 10px;height: 10px; background: #76869d;border-radius: 50%;top: -5px;}

.flight .flight-item-panel .item-content .item-step{}

.flight .flight-item-panel .item-content .item-step .item-arrow{flex-direction: column;padding: 0 5px;}

.flight .flight-item-panel .item-content .item-step .item-arrow .arrow-bar{flex-grow: 19;border: solid 1px #c4e3ec; width: 0px;background: #c4e3ec; align-self: center;}

.flight .flight-item-panel .item-content .item-step .item-arrow .arrow-triangle{flex-grow: 2;border-width: 7px 3px 0px 3px; border-color: #c4e3ec transparent transparent transparent; background: transparent; border-style: solid;}

.flight .flight-item-panel .item-content .item-step .item-arrow .dots{border-style: dashed; height: 100%; border-width: 1px; margin: 0 2px 3px; border-color: #846909;}

.flight .flight-item-panel .item-content .item-step .item-detail{flex-direction: column;width: 100%; margin-top: 0;}

.flight .flight-item-panel .item-content .item-step .item-detail .router-info{width: 100%;align-items: center;}

.flight .flight-item-panel .item-content .item-step .item-detail .bottom-info{width: 100%; justify-content: space-between;}

.flight .flight-item-panel .item-content .item-step .item-detail .bottom-info .bottom-info-item{flex-grow: 1;text-align: center;padding: 5px;background: #c4e3ec;}

.flight .flight-item-panel .item-content .item-step .item-detail.middle-detail{align-items: start; padding: 5px 10px;margin: 3px 0;background: #f7f6ef;color: #846909}

.flight .flight-item-panel .item-more{justify-content: space-between;align-items: center; border-top: solid 1px #ddd; padding: 10px;margin:10px -5px; padding: 10px; }

.flight .flight-item-panel .item-more .note{color: #45a20a;}

.flight .flight-item-panel .item-more .price .title{font-size: 12px;text-align: center;}

.flight .flight-item-panel .item-more .price .amount{font-size: 25px;font-weight: 700;text-align: center;}

.flight .flight-item-panel .item-footer{background: #cadae8;margin: 0 -5px -5px; padding: 10px;justify-content: flex-start;align-items: center;}

.flight .flight-item-panel .item-footer .footer-icon{font-size: 25px;color: #f17722;}

.flight .flight-item-panel .item-footer .footer-icon i{background: white;}

.flight .flight-item-panel .item-footer .footer-title{padding: 0 20px;}
</style>
