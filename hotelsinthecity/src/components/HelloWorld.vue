<template>
  <div class="hotels">
    <h2 class="header">
      <div class="header-content flex align-item-center">
        <div class="logo-div">
          <img class="logo-img" src="../assets/logo.png">
        </div>

        <div class="title-div">SnapTravel - Hotel Deals</div>
        
        <div class="close-div">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </h2>

    <div class="content">
      <div class="content-header">
        <div class="c-h-div">
          <div class="common-header flex"  v-show="!isFilter">
            <div class="common-logo flex justify-center">
              <img src="../assets/logo.png">
            </div>
              
            <div class="common-middle">
              <div class="private-deal">
                Private Deals for:
              </div>

              <div class="name">
                David Calton
              </div>
            </div>

            <div class="header-info">
              <div class="date">30 Apr - 1 May</div>

              <div class="city">Paris</div>
            </div>
          </div>

          <div class="navigation-view">
            <div class="nav-header"  v-show="!isFilter">
              <div class="nav-item" v-on:click="showFilter()">Show Filter</div>

              <div class="nav-item" v-on:click="showMapView()" v-show="!isMapView">Map View</div>

               <div class="nav-item" v-on:click="showListView()" v-show="isMapView">List View</div>

              <div class="nav-item">New Search</div>
            </div>

            <div class="filter-header flex align-item-center" v-show="isFilter">
              <div class="filter-title-div">Filter</div>
              <div class="filter-apply-btn" v-on:click="searchApply()">Apply</div>
            </div>

            <div class="nav-numbers">
              <div class="number-badge">2</div>

              <div class="number-text">Filters have been applied (showing 950 of 1244 hotels)</div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-div" v-show="!isFilter && !isMapView">
        <div class="hotel-item flex" v-for="index in 3">
          <div class="hotel-item-content flex">
            <div class="hotel-img-div">
              <div class="hotel-img">
                <div class="banner">
                  <div class="banner-price">$187</div>
                  <div class="hotel-status">OFF</div>
                </div>
              </div>
            </div>

            <div class="hotel-info-div">
              <div class="hotel-name">Le Roch Hotel & Spa</div>

              <div class="hotel-details flex">
                <div class="hotel-rating-div">
                  <div class="stars-container">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                  </div>

                  <div class="reviews">
                    <img class="review-logo" src="../assets/ollieHead.png">
                    <div class="review-score">
                      <div class="review-dots"></div>
                    </div>
                  </div>

                  <div class="num-reviews">805 Reviews</div>
                </div>

                <div class="hotel-amenity-div">
                  <div class="amenity-item">
                    <div class="amenity-icon wifi-icon"></div>
                    <div class="amenity-text">Free Wifi</div>
                  </div>

                  <div class="amenity-item">
                    <div class="amenity-icon parking-icon"></div>
                    <div class="amenity-text">Parking</div>
                  </div>

                  <div class="amenity-item">
                    <div class="amenity-icon rest-icon"></div>
                    <div class="amenity-text">Restaurant(s)</div>
                  </div>
                </div>
              </div>

              <div class="hotel-prices">
                <div class="retail-price">
                  <div class="retail-rate"><span>$347</span></div>
                  <div class="retail-logo">
                    <img src="../assets/expedia-logo-svg-2.png">
                  </div>
                </div>

                <div class="versus">vs</div>

                <div class="rate">
                  <span>$123</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hotel-nav">
            <img src="../assets/next.png">
          </div>
        </div>

        <div class="email-view">
          <div class="email-view-header">Get a 10% OFF Coupon</div>
          <div class="email-view-input">
            <input placeholder="Enter your e-mail" value="" class="view-email-input">
            <button class="view-email-send-btn">Send</button>
          </div>
        </div>

         <div class="hotel-item flex" v-for="index in 3">
          <div class="hotel-item-content flex">
            <div class="hotel-img-div">
              <div class="hotel-img">
                <div class="banner">
                  <div class="banner-price">$187</div>
                  <div class="hotel-status">OFF</div>
                </div>
              </div>
            </div>

            <div class="hotel-info-div">
              <div class="hotel-name">Le Roch Hotel & Spa</div>

              <div class="hotel-details flex">
                <div class="hotel-rating-div">
                  <div class="stars-container">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                  </div>

                  <div class="reviews">
                    <img class="review-logo" src="../assets/ollieHead.png">
                    <div class="review-score">
                      <div class="review-dots"></div>
                    </div>
                  </div>

                  <div class="num-reviews">805 Reviews</div>
                </div>

                <div class="hotel-amenity-div">
                  <div class="amenity-item">
                    <div class="amenity-icon wifi-icon"></div>
                    <div class="amenity-text">Free Wifi</div>
                  </div>

                  <div class="amenity-item">
                    <div class="amenity-icon parking-icon"></div>
                    <div class="amenity-text">Parking</div>
                  </div>

                  <div class="amenity-item">
                    <div class="amenity-icon rest-icon"></div>
                    <div class="amenity-text">Restaurant(s)</div>
                  </div>
                </div>
              </div>

              <div class="hotel-prices">
                <div class="retail-price">
                  <div class="retail-rate"><span>$347</span></div>
                  <div class="retail-logo">
                    <img src="../assets/expedia-logo-svg-2.png">
                  </div>
                </div>

                <div class="versus">vs</div>

                <div class="rate">
                  <span>$123</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hotel-nav">
            <img src="../assets/next.png">
          </div>
        </div>

      </div>

      <div class="content-div map-view" v-show="isMapView && !isFilter">
        <div class="map-view-wraper">
          <GoogleMap/>
          <div class="map-view-tool-wraper">
            <div class="map-view-tool flex">
              <div class="tool-item">
                <i class="fas fa-camera-retro"></i>
              </div>
              <div class="tool-item">
                <i class="fas fa-utensils"></i>
              </div>
              <div class="tool-item">
                <i class="fas fa-shopping-bag"></i>
              </div>
              <div class="tool-item">
                <i class="fas fa-glass-martini"></i>
              </div>
            </div>

            <div class="color-bar"></div>
          </div>

        </div>

        <div class="map-view-card">



        <div class="hotel-item flex" >
          <div class="hotel-item-content flex">
            <div class="hotel-img-div">
              <div class="hotel-img">
                <div class="banner">
                  <div class="banner-price">$187</div>
                  <div class="hotel-status">OFF</div>
                </div>
              </div>
            </div>

            <div class="hotel-info-div">
              <div class="hotel-name">Le Roch Hotel & Spa</div>

              <div class="hotel-details flex">
                <div class="hotel-rating-div">
                  <div class="stars-container">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                    <img src="../assets/rate-star.png">
                  </div>

                  <div class="reviews">
                    <img class="review-logo" src="../assets/ollieHead.png">
                    <div class="review-score">
                      <div class="review-dots"></div>
                    </div>
                  </div>

                  <div class="num-reviews">805 Reviews</div>
                </div>

                <div class="hotel-amenity-div">
                  <div class="amenity-item">
                    <div class="amenity-icon wifi-icon"></div>
                    <div class="amenity-text">Free Wifi</div>
                  </div>

                  <div class="amenity-item">
                    <div class="amenity-icon parking-icon"></div>
                    <div class="amenity-text">Parking</div>
                  </div>

                  <div class="amenity-item">
                    <div class="amenity-icon rest-icon"></div>
                    <div class="amenity-text">Restaurant(s)</div>
                  </div>
                </div>
              </div>

              <div class="hotel-prices">
                <div class="retail-price">
                  <div class="retail-rate"><span>$347</span></div>
                  <div class="retail-logo">
                    <img src="../assets/expedia-logo-svg-2.png">
                  </div>
                </div>

                <div class="versus">vs</div>

                <div class="rate">
                  <span>$123</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hotel-nav">
            <img src="../assets/next.png">
          </div>
        </div>




        </div>
      </div>
    </div>

    <div class="filter" v-show="isFilter">
      <div class="f-hotel-name">
        <div class="f-hotel-name-label">Hotel Name</div>
        <div class="f-hotel-name-input-container">
          <input class="f-hotel-name-input" value="" placeholder="Search by Hotel Name">
        </div>
      </div>

      <div class="f-divider"></div>

      <div class="f-sortby">
        <div class="f-sortby-title">Sort By</div>

        <div class="f-sortby-section">
          <div class="f-sortby-item">
            <i class="fa fa-tag"></i>
            <div class="button-text">Savings</div>
          </div>
         
          <div class="f-sortby-item">
            <i class="fa fa-star"></i>
            <div class="button-text">Rating</div>
          </div>

          <div class="f-sortby-item">
            <i class="fa fa-dollar-sign"></i>
            <div class="button-text">Price</div>
          </div>

          <div class="f-sortby-item">
            <i class="fa fa-map-marker"></i>
            <div class="button-text">Location</div>
          </div>

        </div>
      </div>

      <div class="f-divider"></div>

      <div class="f-near">
        <div class="f-near-title">Hotels Near</div>
        <div class="f-near-content">
          <div class="geosuggest">
            <div class="geosuggest__input-wrapper">
              <input type="text" class="geosuggest__input" placeholder="Search by Address / Airport / Landmark" value="" style="font-size: 18px;">
            </div>
          </div>
        </div>
      </div>

      <div class="f-divider"></div>

      <div class="f-deals flex">
        <div class="f-deals-title">Exclusive Deals Only</div>
        <div>
          <!-- <switches v-model="deals" type-bold="true"  theme="bulma"></switches> -->
         <toggle-button :value="false" :sync="true" :labels="false" color="#ffC791"/>
        </div>
      </div>

      <div class="f-divider"></div>

      <div class="f-stars">
        <div class="f-stars-title">Hotel Stars</div>
        <div class="f-stars-content">
          <div class="star-item active"><div class="star-number">1</div><div class="star-icon">★</div></div>
          <div class="star-item"><div class="star-number">2</div><div class="star-icon">★</div></div>
          <div class="star-item"><div class="star-number">3</div><div class="star-icon">★</div></div>
          <div class="star-item"><div class="star-number">4</div><div class="star-icon">★</div></div>
          <div class="star-item"><div class="star-number">5</div><div class="star-icon">★</div></div>
        </div>
      </div>

      <div class="f-divider"></div>

      <div class="f-budget">
        <div class="f-budget-title">Budget Range</div>
        <div class="f-budget-section">
          <div class="f-budget-inputs flex">
            <div class="f-budget-min flex">
              <input v-model="sliderdata1.value[0]" class="">
              <div class="">Min</div>
            </div>
            
            <div class="f-budget-max flex">
              <div class="">Max</div>
              <input class=""  v-model="sliderdata1.value[1] == 500? '500+': sliderdata1.value[1]">
            </div>

          </div>
          <div>
              <vue-slider ref="slider2" v-bind="sliderdata1" v-model="sliderdata1.value"></vue-slider>
          </div>

        </div>
      </div>

      <div class="f-divider"></div>

      <div class="f-currency flex">
        <div class="f-currency-title">Currency</div>

        <select class="f-currency-select"><option value="USD">USD $</option><option value="AED">AED د.إ</option><option value="AUD">AUD $</option><option value="CAD">CAD $</option><option value="EUR">EUR €</option><option value="GBP">GBP £</option><option value="SAR">SAR ﷼</option><option value="NZD">NZD $</option></select>
      </div>

      <div class="f-divider"></div>

      <div class="f-amenity">
        <div class="f-amenity-title">Amenities</div>
        <div class="f-amenity-section">
          <div class="f-amenity-holder">
            <div class="f-amenity-top">
              <div class="f-amenity-item">
                <div class="f-amenity-item-wrapper">
                  <img alt="amenity" src="https://cdn.getsnaptravel.com/wifi-signal.png" class="">
                  <div>Wi-Fi</div>
                </div>
              </div>

              <div class="f-amenity-item">
                <div class="f-amenity-item-wrapper">
                  <img alt="amenity" src="https://cdn.getsnaptravel.com/parking-sign.png" class="">
                  <div>Parking</div>
                </div>
              </div>
              
              <div class="f-amenity-item">
                <div class="f-amenity-item-wrapper">
                  <img alt="amenity" srcset="" src="https://cdn.getsnaptravel.com/swimming-silhouette.png" class="">
                  <div>Pool</div>
                </div>
              </div>
            </div>
            
            <div class="f-amenity-bottom">
              <div class="f-amenity-item">
                <div class="f-amenity-item-wrapper">
                  <img alt="amenity"  src="https://cdn.getsnaptravel.com/cat.png" class="">
                  <div>Pets Allowed</div>
                </div>
              </div>
              
              <div class="f-amenity-item">
                <div class="f-amenity-item-wrapper">
                  <img alt="amenity"  src="https://cdn.getsnaptravel.com/bus.png" class="">
                  <div>Shuttle</div>
              </div>
            </div>
            
            <div class="f-amenity-item">
              <div class="f-amenity-item-wrapper">
                <img alt="amenity"  src="https://cdn.getsnaptravel.com/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png" class="">
                <div>Restaurant</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Switches from 'vue-switches';
import vueSlider from 'vue-slider-component';
import GoogleMap from './GoogleMap.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      isFilter: false,
      deals: false,
      value2: 50,
      isMapView: false,
      
        sliderdata1: {
          value: [0, 500],
          width: '100%',
          height: 8,
          dotSize: 35,
          min: 0,
          max: 500,
          disabled: false,
          show: true,
          useKeyboard: true,
          tooltip: 'none',
          formatter: '',
          bgStyle: {
            backgroundColor: '#fff',
            boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
          },
         
          processStyle: {
            backgroundColor: '#ff8314'
          },
          sliderStyle: [
            {
              "backgroundColor": "#ff8314"
            },
            {
              "backgroundColor": "#ff8314"
            }
          ]
        },
    }
  },

  methods:{
    showFilter(){
      this.isFilter = true;
    },

    searchApply(){
      this.isFilter = false;
    },

    showMapView(){
      this.isMapView = true;
    },

    showListView(){
      this.isMapView = false;

    }
  },

  watch: {
  	isFilter (val) {
    	if (val) {
    		this.$nextTick(() => this.$refs.slider2.refresh());
      }
    }
  },

  components: {
    Switches,vueSlider, GoogleMap
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rtl{direction: rtl;}

.ltr{direction: ltr;}

.flex{display: flex;}

.align-item-center{align-items: center;}

.justify-center{justify-content: center;}

.hotels{width: 405px;border-radius: 3px;margin: 0 auto 40px;animation-duration: .15s;animation-name: popIn;background: #fff;border: 0;border-radius: 6px;box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .20);box-sizing: border-box;-webkit-font-smoothing: antialiased;position: relative;}

.hotels .header{}

.hotels .header .header-content{color: rgba(0, 0, 0, 1);font-size: 16px;font-weight: bold;padding: 0 20px 0 20px;height: 50px;}

.hotels .header .header-content .logo-div{flex-basis: 10%;}

.hotels .header .header-content .logo-div .logo-img{border-radius: 50%;height: 25px;vertical-align: middle;width: 25px;}

.hotels .header .header-content .title-div{flex-basis: 80%;margin: auto;text-align: center;}

.hotels .header .header-content .close-div{flex-basis: 10%;color: #2573b9;}

.hotels .content{font-size: 14px;font-weight: 400;line-height: 18px;margin-bottom: 24px;}

.hotels .content .content-header{height: 141px;}

.hotels .content .content-header .c-h-div{position: relative;top: 0px;left: 0px;right: 0px;z-index: 1;transform: translateY(0px);height: 141px;}

.common-header{height: 65px;width: 100%;box-shadow: 0 2px 5px 0 rgba(0,0,0,.09);margin-bottom: 5px;background-color: #fff;}

.common-header .common-logo{width: 65px;height: 65px;background-color: #ff8314;cursor: pointer;}

.common-header .common-middle{padding: 15px;color: #636262;}

.common-header .common-middle .private-deal{font-size: 12px;height: 15px;}

.common-middle .name{font-size: 16px;height: 19px;}

.common-header .header-info{color: #636262;position: absolute;right: 0;padding: 15px;}

.c-h-div .navigation-view{background-color: #fff;position: relative;}

.c-h-div .navigation-view .nav-header{color: #7a7a7a;text-align: center;height: 38px;width: 100%;padding-top: 2px;display: flex}

.c-h-div .navigation-view .nav-header .nav-item{position: relative;display: flex;cursor: pointer;color: #7a7a7a;font-size: 14px;padding-top: 6px;height: 100%;border-bottom: 1px solid #d7d7d7;flex-grow: 1;justify-content: center;align-items: center;}

.c-h-div .navigation-view .nav-header .nav-item:first-child:after{content: "";position: absolute;right: 0;width: 1px;height: 20px;background-color: #d7d7d7;}

.c-h-div .navigation-view .nav-header .nav-item:last-child:after{content: "";position: absolute;left: 0;width: 1px;height: 20px;background-color: #d7d7d7;}

.c-h-div .navigation-view .nav-numbers{padding-top: 4px;height: 33px;text-align: center;box-shadow: 0 2px 4px 0 hsla(0,1%,53%,.33);cursor: pointer;    display: flex;justify-content: center;align-items: center;}

.c-h-div .navigation-view .nav-numbers .number-badge{vertical-align: middle;width: 17px;height: 17px;border-radius: 4px;background-color: #ff8314;display: inline-block;margin-right: 6px;color: #fff;font-size: 12px;font-weight: 600;line-height: 18px;}

.c-h-div .navigation-view .nav-numbers .number-text{font-size: 12px;vertical-align: middle;display: inline-block;font-style: italic;color: #848484;}

.content .content-div{padding-bottom: 10px;padding-top: 12px;background: #ddd;}

.content .content-div .hotel-item{position: relative;padding-left: 10px;padding-top: 12px;padding-bottom: 6px;border-radius: 2px;background-color: #fff;box-shadow: 0 4px 7px 0 rgba(0,0,0,.07);margin: 12px;cursor: pointer;}

.content .content-div .hotel-item .hotel-item-content{width: calc(100% - 22px);height: 100%;}

.content .content-div .hotel-item .hotel-item-content .hotel-img-div{height: 100%;}

.hotel-item .hotel-item-content .hotel-img-div .hotel-img{width: 103px;height: 144px;background-size: cover;background-position: 50% 50%;position: relative;border-radius: 3px;background-image: url(../assets/hotel.jpg);}

.hotel-item .hotel-item-content .hotel-img-div .hotel-img .banner{width: 66px;height: 43px;background-image: url(../assets/banner.svg);position: absolute;left: -5px;top: 8px;}

.hotel-item .hotel-item-content .hotel-img-div .hotel-img .banner .banner-price{padding-top: 3px;font-size: 18px;font-weight: 700;text-align: center;color: #fff;}

.hotel-item .hotel-item-content .hotel-img-div .hotel-img .banner .hotel-status{font-size: 12px;font-weight: 700;text-align: center;color: #fff;margin-top: -2px;}

.content .content-div .hotel-item .hotel-item-content .hotel-info-div{width: 100%;}

.hotel-item .hotel-item-content .hotel-info-div .hotel-name{width: 100%;vertical-align: top;font-size: 16px;color: #686868;padding-left: 11px;padding-right: 11px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}

.hotel-item .hotel-item-content .hotel-info-div .hotel-details{width: 100%;height: 77px;}

.hotel-details .hotel-rating-div{flex-grow: 1;}

.hotel-details .hotel-rating-div .stars-container{padding-left: 10px;padding-top: 7px;}

.hotel-details .hotel-rating-div .reviews{padding-left: 9px;padding-top: 4px;}

.hotel-details .hotel-rating-div .reviews .review-logo{vertical-align: middle;height: 12px;margin-right: -15px;}

.hotel-details .hotel-rating-div .reviews .review-score{background-image: url(../assets/ta_sprite.png);height: 16px;display: inline-block;overflow: hidden;background-position: left -16px;vertical-align: middle;width: 85px;margin-left: 6px;transform: scale(.75);}

.hotel-details .hotel-rating-div .reviews .review-score .review-dots{background-image: url(../assets/ta_sprite.png);height: 16px;}

.hotel-details .hotel-rating-div .num-reviews{font-size: 13px;color: #686868;padding-top: 6px;padding-left: 11px;}

.hotel-details .hotel-amenity-div{flex-grow: 1;}

.hotel-details .hotel-amenity-div .amenity-item{height: 24px;display: flex;}

.hotel-details .hotel-amenity-div .amenity-item .amenity-icon{width: 15px;height: 15px;display: inline-block;background-size: contain;background-repeat: no-repeat;background-position: 50% 50%;margin-right: 6px;vertical-align: middle;}

.hotel-details .hotel-amenity-div .amenity-item .amenity-text{font-size: 13px;width: calc(100% - 21px);color: #686868;display: inline-block;overflow: hidden;-o-text-overflow: ellipsis;text-overflow: ellipsis;vertical-align: middle;white-space: nowrap;}

.wifi-icon{background-image: url(../assets/wifi-signal-copy.png);}

.parking-icon{background-image: url(../assets/parking-sign-copy.png);}

.rest-icon{background-image: url(../assets/restaurant.png);}

.hotel-prices{display: flex;justify-content: space-between;}

.hotel-prices .retail-price{}

.hotel-prices .retail-price .retail-rate{font-size: 18px;text-align: left;color: #d0011b;padding-left: 11px;padding-top: 7px;text-decoration: line-through;}

.hotel-prices .retail-price .retail-logo{width: 76px;height: 15px;background-size: contain;background-repeat: no-repeat;background-position: 50% 50%;margin-top: 2px;margin-left: 10px;}

.hotel-prices .versus{font-size: 15px;font-style: italic;color: #686868;position: absolute;left: calc(50% + 35px);padding-top: 12px;}

.hotel-prices .rate{font-size: 34px;color: #417505;float: right;margin-top: 15px;margin-right: 3px;height: 35px;}

.content .content-div .hotel-item .hotel-nav{width: 22px;border-top-right-radius: 2px;border-bottom-right-radius: 2px;background-color: #fff3e9;display: flex;align-items: center;justify-content: center;}

.email-view{height: 162px;text-align: center;background-image: -webkit-linear-gradient(24deg,#ff873c,#ff642c);background-image: -o-linear-gradient(24deg,#ff873c,#ff642c);background-image: linear-gradient(66deg,#ff873c,#ff642c);display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;border: 5px solid #fff;-webkit-box-shadow: 0 0 7px 0 rgba(0,0,0,.18);box-shadow: 0 0 7px 0 rgba(0,0,0,.18);margin: 12px;border-radius: 2px;}

.email-view .email-view-header{font-size: 20px;color: #fff;padding-top: 15px;padding-bottom: 15px;font-family: Lato;}

.email-view .email-view-input{height: 35px;width: calc(100% - 28px);background-color: #ff965a;border-radius: 4px;text-align: left;padding-left: 15px;margin-left: auto;margin-right: auto;max-width: 320px;position: relative;}

.email-view .email-view-input .view-email-input{height: 35px;width: calc(100% - 132px);border: none;background-color: #ff965a;color: #fff;}

.email-view .email-view-input .view-email-input::placeholder{color: white;}

.email-view .email-view-input .view-email-input:focus{outline-width: 0;}

.email-view .view-email-send-btn{height: 35px;position: absolute;width: 110px;vertical-align: middle;background-color: #3e6375;color: #fff;border-top-left-radius: 0!important;border-bottom-left-radius: 0!important;text-align: center;right: 0;background-color: hsla(0,0%,100%,.2);border: none;}

.filter-header{padding-bottom: 10px;padding-top: 10px;position: relative;border-bottom: 1px solid rgb(241, 241, 241);justify-content: space-between;padding: 10px;}

.filter-header .filter-title-div{text-align: left;font-size: 29px;color: #919191;top: 0;bottom: 0;}

.filter-header .filter-apply-btn{text-align: center;font-size: 18px;color: #fff;cursor: pointer;font-weight: 700;background-color: #ff8314;margin-left: 54px;height: 46px;border-radius: 4px;width: 110px;line-height: 43px;float: right;margin-top: 3px;}

.f-hotel-name{padding-left: 24px;padding-right: 24px;}

.f-hotel-name .f-hotel-name-label{font-size: 24px;color: #686868;}

.f-hotel-name-input-container{margin-top: 28px;display:flex;}

.f-hotel-name-input{box-shadow: inset 0 0 4px 0 rgba(0,0,0,.2);-webkit-appearance: none;width: 100%;font-size: 18px;padding: 15px;margin-bottom: 2px;border-radius: 3px;font-family: Lato,sans-serif;border:none;}

.f-divider{height: 1px;background-color: #d8d8d8;margin-left: 24px;margin-right: 24px;margin-top: 24px;}

.f-sortby{padding-top: 32px;padding-bottom: 2px;}

.f-sortby-title{padding-left: 24px;padding-right: 24px;font-size: 24px;color: #686868;}

.f-sortby-section{margin-top: 25px;text-align: center;}

.f-sortby-item{padding-top: 23px;display: inline-block;cursor: pointer;width: 73px;font-size: 18px;height: 106px;border-radius: 8px;color: #686868;}

.f-sortby-item .fa{font-size: 34px;margin-bottom: 9px;}

.f-near{padding-top: 24px;}

.f-near-title{padding-left: 24px;padding-right: 24px;font-size: 24px;color: #686868;}

.f-near-content{margin-top: 25px;margin-bottom: 25px;text-align: center;padding-left: 25px;padding-right: 25px;}

.geosuggest{font-size: 1rem;position: relative;width: 100%;}

.geosuggest__input-wrapper {border-radius: 5px;display: flex;}

.geosuggest__input {width: 100%;border: 2px solid transparent;border-radius: 4px;box-shadow: 0 0 1px #3d464d;padding: .5em 1em;-webkit-transition: border .2s,box-shadow .2s;transition: border .2s,box-shadow .2s;height: 47px;box-shadow: inset 0 1px 1px rgba(0,0,0,.075);border: 1px solid #ccc;font-family: Lato;font-size: 14px;font-weight: 300;box-shadow: inset 0 0 4px 0 rgba(0,0,0,.2);}

.f-deals{padding-left: 24px;padding-top: 24px;padding-right: 24px;justify-content: space-between}

.f-deals-title{font-size: 24px;color: #686868;display: inline-block;}

.f-stars{padding-top: 24px;}

.f-stars-title{padding-left: 24px;padding-right: 24px;font-size: 24px;color: #686868;}

.f-stars-content{margin-top: 25px;text-align: center;}

.f-stars-content .star-item{padding-top: 12px;display: inline-block;cursor: pointer;font-size: 24px;padding-bottom: 12px;border-radius: 8px;width: 56px;text-align: center;color: #686868;margin-right: 10px;vertical-align: center;}

.f-stars-content .star-item.active{color: #ff8314;border: 1px solid #ff8314;}

.f-stars-content .star-item .star-number{display: inline-block;}

.f-stars-content .star-item .star-icon{display: inline-block;}

.f-budget{padding-left: 24px;padding-top: 24px;padding-right: 24px;}

.f-budget-title{font-size: 24px;color: #686868;}

.f-budget-section{margin-top: 35px;}

.f-budget-inputs{justify-content: space-between;}

.f-budget-min{align-items: center;}

.f-budget-min input{width: 78px;height: 30px;border-radius: 3px;border: 1px solid #d8d8d8;text-align: center;font-size: 19px;}

.f-budget-min div{font-size: 18px;color: #686868;font-weight: 300;}

.f-budget-max{align-items: center;}

.f-budget-max input{width: 78px;height: 30px;border-radius: 3px;border: 1px solid #d8d8d8;text-align: center;font-size: 19px;}

.f-budget-max div{font-size: 18px;color: #686868;font-weight: 300;}

.f-currency{padding-top: 24px;padding-left:24px;padding-right: 24px;justify-content:space-between;}

.f-currency-title{font-size: 24px;color: #686868;}

.f-currency-select{height: 16px;font-family: Lato;font-size: 13px;font-weight: 700;text-align: left;color: #a3a3a3;-webkit-appearance: none;border: none;vertical-align: top;cursor: pointer;background-color: #fff;padding-right: 5px;background: url(../assets/left-arrow-copy-2.png) no-repeat 0 0;background-position-x: 2px;background-position-y: 4px;margin-left: 2px;padding-left: 21px;}

.f-amenity{padding-top: 24px;}

.f-amenity-title{padding-left: 24px;padding-right: 24px;font-size: 24px;color: #686868;}

.f-amenity-section{margin-top: 25px;margin-bottom: 25px;text-align: center;}

.f-amenity-holder{    max-width: 320px;display: inline-block;}

.f-amenity-top{display: inline-block;max-width: 320px;border-bottom: 1px solid #a5a4a4;}

.f-amenity-bottom{display: inline-block;max-width: 320px;}

.f-amenity-item{display: inline-block;width: 103px;height: 100px;border-right: 1px solid #a5a4a4;}

.f-amenity-item:last-child{border-right:none;}

.f-amenity-item-wrapper{height: 100%;cursor: pointer;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;}

.f-amenity-item-wrapper img{min-width: 35px;}

.map-view{width: 100%;bottom: 0;}

.map-view-wraper{position: relative;overflow: hidden;width: 100%;height: calc(100vh - 141px);}

.map-view-card{position: absolute;bottom: 0;width: 100%;}

.map-view-tool-wraper{position: absolute; right: 10px; top: 10px;}

.map-view-tool{padding : 0; background: white;border-radius: 5px;box-shadow: 0 0 4px rgba(0,0,0,.2);}

.map-view-tool .tool-item{padding: 8px;border: solid 1px #aaa;cursor:pointer;}

.map-view-tool .tool-item:first-child{border-radius: 5px 0 0 5px;}

.map-view-tool .tool-item:last-child{border-radius: 0 5px 5px 0;}

.map-view-tool-wraper .color-bar{height: 15px;background-image:url(../assets/color-bar.png);background-color: #fff;background-repeat: no-repeat;padding: 2px;background-position: 2px 2px;webkit-box-shadow: rgba(0,0,0,.2) 0 0 4px 2px;-moz-box-shadow: rgba(0,0,0,.2) 0 0 4px 2px;box-shadow: rgba(0,0,0,.2) 0 0 4px 2px;-webkit-border-radius: 4px;-moz-border-radius: 4px;-ms-border-radius: 4px;-o-border-radius: 4px;border: 1px solid #999;border-radius: 4px;box-sizing: content-box;background-size: contain;margin-top: 10px;}
</style>
