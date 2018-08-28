<template>
   <div class="book-now">
      <Header/>
      
    <div class="book-now-container flex">
        <div class="sb-cart-view">

            <div class="sb-cart-container">
                
                <h2 class="sb-cart-title">Your reservation</h2>
                
                <div class="sb-toggle-container">
                    <div class="sb-item-container clearfix-new">
                        <div class="clearfix">
                            <div class="sb-cart-head-dates--new">
                                <div>
                                    <div>
                                        <span>Monday</span>
                                        <span class="booking__big-number">16</span>
                                        <span>Apr 2018</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <div>
                                        <span>Wednesday</span>
                                        <span class="booking__big-number">18</span>
                                        <span>Apr 2018</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span class="booking__big-number">2</span>
                                        <span>Nights</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span class="booking__big-number">2</span>
                                        <span>Persons</span>
                                    </div>
                                </div>
                            </div>
                            <button class="sb-back-cmd sb-button sb-button--secondary sb-button--small sb-button--icon-back">Back</button>
                            <a @click="gotobefore()" class="sb-cart-new-search sb-button sb-button--secondary sb-button--small sb-button--icon-edit sb-info-link">modify your search</a>
                        </div>
                        <div class="sb-rooms-container">
                            <div class="sb-cart-group sb-cart-room">
                                <h3>Selected Rooms / rates</h3>
                                <div class="sb-items">
                                    <div class="sb-cart-item">
                                        <div class="sb-item-container">
                                            <div class="inner clearfix">
                                                <div class="cart-item-content product-name-color">
                                                    <div class="sb-room-image cart" style="background-image: url(https://cdn.sbcdn.it/fu/camere_immagini/740910_IMG_ICM.jpg);"></div> 
                                                        Superior Double Room  
                                                        <span> - 2 Adults  </span>
                                                        <br>  Non Refundable Rate - Room Only!  - Room Only 
                                                    </div>
                                                    <div class="cart-item-price">
                                                        <span class="striked-price">
                                                            <span class="sb-int-part ">US$ 509 <span class="sb-dec-part">.42</span></span>
                                                            
                                                        </span>
                                                        <span class="offer-color">
                                                            <span class="sb-int-part ">US$ 473<span class="sb-dec-part">.76</span></span>
                                                            
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="sb-packages-container"></div>
                           
                            <div class="sb-services-container">
                                <div class="sb-cart-group sb-cart-service">
                                    <h3>Selected services</h3>
                                    <div v-show="countServices == 0" class="sb-cart-no-srv-selected sb-item-container-hilight" style="display: block;">Make your stay even better by selecting the additional services on the right</div>
                                    <!-- <div class="sb-items"> -->
                                        <transition-group name="slide-fade" tag="div" class="sb-items">
                                        <div class="sb-cart-item"  v-for="item in countServices" :key="item" :id="'sb-cart-itm-' + item">
                                           
                                            <div class="sb-cart-service sb-item-container">
                                                <div class="inner clearfix">
                                                    <div class="cart-item-content">
                                                        <a class="remove-cmd sb-info-link" href="#" v-on:click="removeitem(item)" >
                                                            <i class="fa fa-times"></i>
                                                        </a>
                                                        <a class="sb-cart-service-popup" href="#">Chocolate box in the room upon arrival!</a>
                                                    </div>
                                                    <div class="cart-item-price">
                                                        <span class="web-rate-color">
                                                            <span class="sb-int-part ">US$ 24</span><span class="sb-dec-part">.63</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>

                                        </transition-group>

                                    <!-- </div> -->

                                </div>
                            </div>
                            <div class="sb-services-taxes-container"></div>
                            <div class="sb-mandatory-services-container"></div>
                            <div class="sb-mandatory-services-taxes-container"></div> 
                            <div class="sb-cart-total-container"> Total amount 
                                <span class="sb-cart-total-price-container js-sb-cart-total-currency" style="">
                                    <span class="sb-cart-total striked-price">
                                        <span class="sb-int-part ">US$ 509
                                            <span class="sb-dec-part">.42</span>
                                        </span>
                                        
                                    </span>
                                    <span class="sb-cart-discounted-total offer-color">
                                        <span class="sb-int-part ">US$ 473
                                            <span class="sb-dec-part">.76</span>
                                        </span>
                                        
                                    </span>
                                </span>
                                
                            </div>
                            
                            <div class="sb-taxes-info-text"></div>
                        </div>
                        <div class="hide sb-cart-total-hotel js-sb-cart-total-hotel" style="display: block;">
                            <img src="https://cdn.sbcdn.it/fo/Content/images/info_icon.jpg" alt="">
                            <span class="currency-info js-currency-info" title="You will pay the hotel in the hotel’s local currency (€). The displayed amount (in USD) is indicative and based on the exchange rate at the time of booking."> You'll pay in the hotel's local currency (€) </span>
                            <span class="sb-cart-discounted-total js-discounted-total">
                                <span class="sb-int-part ">€ 383</span>
                                <span class="sb-dec-part">.90</span>
                            </span>
                            <div class="sb-cart-discounted-total-hotel-with-taxes js-discounted-total-with-taxes hide">
                                
                                <span class="sb-cart-discounted-total js-discounted-total-with-taxes-value"></span>
                            </div>
                        </div>
                        <div class="sb-commands">
                            <button v-on:click="gotoreserve()" class="sb-cart-book-cmd sb-button sb-button--primary sb-button--big sb-button--block">Reserve</button>
                        </div>
                    </div>
                </div>
        </div>

        <div class="sb-results-view">
            <h2 class="sb-services-title">Make your stay even better. Select additional services</h2>

            <div class="sb-services">
                <div class="sb-service" v-for="index in hotelsCount" :id="'sb-service-'+index">
                    <div class="sb-service-card">
                        <div class="sb-service-card__img-container">
                            <div class="sb-service-card__img" style="background-image: url(https://cdn.sbcdn.it/fu/servizi/740687_IMG_SMM.jpg);">
                                <div class="sb-service-card__img-height"></div>
                            </div>
                        </div>
                        <div class="sb-service-card__description">
                            <div class="sb-service-card__name">Chianti Classico red wine bottle in the room upon arrival!</div>
                            <div class="sb-service-card__description-content">Surprise your special one or spoil yourself with Milu's special edition Chianti Classico red wine bottle from Colle Bereto vineyards, located in Radda in Chianti.</div>
                        </div>
                        <div class="sb-service-card__price-container">
                            <div class="sb-service-card__price" style="z-index: 1;">   
                                <span class="sb-int-part ">US$ 44<span class="sb-dec-part">.37</span>  </span>
                                
                                <span class="sb-service-rate-type">each</span>  
                            </div>
                            <div class="sb-service-card__actions">  
                                <div class="sb-select sb-select--service">
                                    <select>  
                                        <option value="1,36">1 (US$ 44.37)</option>  
                                        <option value="2,72">2 (US$ 88.75)</option>  
                                    </select>
                                </div>  
                                <button class="sb-select-service-cmd sb-button sb-button--primary sb-button--block sb-button--icon-add" v-on:click="addnew(index)">Add</button>
                            </div>
                        </div>
                    </div>    

                </div>

            </div>
        </div>
    </div>

    <div class="loading-div"
        :class="{loadingdivshow:isShowloading}">
        Loading...
    </div>


    <div class="sb-service-card card-for-animation" id="card-for-animation">
        <div class="sb-service-card__img-container">
            <div class="sb-service-card__img" style="background-image: url(https://cdn.sbcdn.it/fu/servizi/740687_IMG_SMM.jpg);">
                <div class="sb-service-card__img-height"></div>
            </div>
        </div>
        <div class="sb-service-card__description">
            <div class="sb-service-card__name">Chianti Classico red wine bottle in the room upon arrival!</div>
            <div class="sb-service-card__description-content">Surprise your special one or spoil yourself with Milu's special edition Chianti Classico red wine bottle from Colle Bereto vineyards, located in Radda in Chianti.</div>
        </div>
        <div class="sb-service-card__price-container">
            <div class="sb-service-card__price" style="z-index: 1;">   
                <span class="sb-int-part ">US$ 44<span class="sb-dec-part">.37</span>  </span>
                
                <span class="sb-service-rate-type">each</span>  
            </div>
            <div class="sb-service-card__actions">  
                <div class="sb-select sb-select--service">
                    <select>  
                        <option value="1,36">1 (US$ 44.37)</option>  
                        <option value="2,72">2 (US$ 88.75)</option>  
                    </select>
                </div>  
                <button class="sb-select-service-cmd sb-button sb-button--primary sb-button--block sb-button--icon-add" >Add</button>
            </div>
        </div>
    </div> 


   </div>
</template>

<script>
import Header from './Header.vue';
export default {
  name: 'BookNow',

  data(){
      return{
        countServices: [],
        isShowloading: false,
        addedData:[],
        hotelsCount: 3
      }
  },

  methods:{
      gotobefore(){
        this.$router.push({ path:'booking' });
      },
      gotoreserve(){
        this.isShowloading = true;
        // this.$router.push({ path:'reservation' });
        var me = this;
         setTimeout(function(){
           me.$router.push({ path:'reservation' });
         }, 3000);
      },
      addnew(index){
        //   this.countServices ++;
        if(this.countServices.indexOf(index) == -1){
            this.countServices.push(index);
        }
        
        // alert(index);
        // console.log(this.countServices.indexOf(index));

       

        setTimeout(function(){
            var origindiv = document.getElementById("sb-service-"+index);
            console.log(origindiv.offsetTop);
            console.log(origindiv.offsetLeft);

            var objectdiv = document.getElementById("sb-cart-itm-"+index);
            console.log(objectdiv.offsetTop);
            console.log(objectdiv.offsetLeft);

            var d = document.getElementById("card-for-animation");
            d.style.left = origindiv.offsetLeft+'px';
            d.style.top = origindiv.offsetTop+'px';
            d.style.width = 63 +'%';
            d.style.opacity = 1;
            d.style.height = 155 + 'px';

            var stepx = (objectdiv.offsetLeft - origindiv.offsetLeft) / 100;
            var stepy = (objectdiv.offsetTop - origindiv.offsetTop) / 100;
            var x =  origindiv.offsetLeft;
            var y =  origindiv.offsetTop;
            var stepOpacity = 1 / 200;
            
            var step = 0;
            var interval = setInterval(function(){
                x += stepx;
                y += stepy;
                d.style.left = x+'px';
                d.style.top = y+'px';
                d.style.width = (63-step)+ '%';
                d.style.opacity = (1 - stepOpacity * step);
                d.style.height = 155 - step + 'px';
               step++;
               if(step>= 100){
                   clearInterval(interval);
               }
             }, 1);
        }, 1);
      },
      removeitem(index){
        //   this.countServices --;
        var no = this.countServices.indexOf(index);
        this.countServices.splice(no, 1);
      }
  },
  components:{
      Header
  }
}
</script>

<style>
    .book-now{width: 90%; margin: 10px auto;}

    .sb-cart-view {width: 28%;padding: 0 8px 0 0;}

    .sb-results-view {width: 71%;}

    .book-now-container{flex-wrap: wrap; margin-top: 10px;}

    .sb-cart-container {background: #fff;border: 1px solid #cacbcd;padding: 16px;border-top: 2px solid #3e1855;}

    .sb-cart-title {color: #3e1855;margin: -16px -16px 0;padding: 16px 16px 8px;}

    .h2, h2 {font-size: 1.5rem;font-weight: 500;font-style: normal;line-height: 1.1;}

    .sb-cart-head-dates--new {background: #3e1855;display: flex;color: #fff;line-height: 1.2;margin: 8px -16px}

    .sb-cart-head-dates--new>div {padding: 8px;display: -ms-flexbox;display: flex;-ms-flex: 1;flex: 1;text-align: center;position: relative;}

    .sb-cart-head-dates--new>div>div {display: flex;flex-direction: column;flex: 1;justify-content: flex-end;}

    .sb-cart-head-dates--new .booking__big-number {font-size: 1.75rem;font-weight: 700;display: block;}

    .sb-cart-head-dates--new>div:after {content: "\f054";font-family: FontAwesome;font-style: normal;font-weight: 400;text-decoration: inherit;position: absolute;right: 0;bottom: 50%;transform: translate(50%,50%);font-size: 2rem;opacity: .2;}

    .sb-cart-container .sb-back-cmd {margin-top: 8px;}

    .sb-cart-group {border-top: 1px solid #eaeaea;margin-top: 16px;}
 
    .sb-cart-view h3 {font-size: 1rem;font-weight: 500;color: #5a5b5c;margin-top: 16px;}

    .sb-cart-item {font-size: .75rem;padding: 8px 0;}

    .sb-cart-item .inner {display: flex;align-items: flex-start;}

    .product-name-color {color: #444;}

    .sb-cart-item .inner .cart-item-price {margin-left: auto;padding-left: 8px;text-align: right;    white-space: nowrap;display: flex;flex-direction: column;}

    .sb-cart-service .cart-item-content {display: flex;align-items: flex-start;}

    .sb-cart-service .cart-item-content .remove-cmd {color: #dc3522;margin-right: 8px;line-height: 1;font-size: .875rem;}

    a {color: #3e1855;text-decoration: none;}

    .sb-cart-item .inner .cart-item-price {margin-left: auto;padding-left: 8px;text-align: right;}

    .web-rate-color {color: #555;}

    .cart-item-price .sb-int-part {font-size: .875rem;}

    .sb-item-container-hilight {background: #3e1855;color: #fff;font-size: .875rem;font-weight: 700;line-height: 1.3;margin: 8px 0;padding: 8px;}

    .sb-cart-total-container {margin-top: 16px;text-align: right;white-space: nowrap;display: flex;flex-wrap: wrap;}

    .sb-cart-total-price-container {margin-left: auto;display: flex;flex-direction: column;align-items: flex-end;}

    .sb-cart-discounted-total {font-weight: 700;font-size: 120%;}

    .sb-cart-total-hotel {text-align: right;}

    .sb-cart-total-hotel .sb-cart-discounted-total {display: block;}

    .sb-cart-total-hotel .sb-cart-discounted-total {font-size: 1.125rem;color: #666;}

    .sb-int-part {font-size: 1.5rem;font-weight: 700;display: inline-block;line-height: 1;}

    .striked-price .sb-int-part {font-size: .875rem;color: #aaabad;position: relative;}

    .sb-cart-view .sb-commands {margin-top: 16px;}

    .sb-button--block {width: 100%;display: block;}

    .sb-services-title {padding: 16px;background: #fff;margin-bottom: 12px;border: 1px solid #cacbcd;font-size: 1.25rem;margin: 0;}

    .sb-services {background: rgba(255,255,255,.8);}

    .sb-service {position: relative;border: 1px solid #cacbcd;background: #fff;box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);}

    .sb-service-card {background: #fff;display: flex;position: relative;}

    .sb-service-card__img-container {width: 24%;padding: 16px 0 16px 16px;}

    .sb-service-card__img {background-size: cover;background-position: center center;height: auto;width: 100%;border: 1px solid #cacbcd;}

    .sb-service-card__img-height {width: 100%;}

    .sb-service-card__img-height:after {padding-bottom: 75%;}

    .sb-service-card__img-height:after {    content: "";display: block;height: 0;}

    .sb-service-card__description {width: 56%;padding: 16px;position: relative;}

    .sb-service-card__name {color: #3e1855;margin-bottom: 8px;line-height: 1.1;font-size: 1.25rem;font-weight: 500;}

    .sb-service-card__description-content {font-size: .875rem;}

    .sb-service-card__description:before {content: "";position: absolute;bottom: 16px;right: 0;width: 1px;height: 50%;    border-right: 1px solid #eaeaea;transform-origin: bottom right;transform: rotate(0);transition: all .2s ease;z-index: 1;}

    .sb-service-card__description:after {content: "";position: absolute;top: 16px;right: 0;width: 1px;height: 50%;border-right: 1px solid #eaeaea;transform-origin: top right;transform: rotate(0);transition: all .2s ease;z-index: 1;}

    .sb-service-card__price-container {width: 20%;padding: 16px;text-align: center;display: flex;flex-direction: column;flex-wrap: wrap;position: relative;}

    .sb-service-rate-type {display: block;font-size: .75rem;font-weight: 500;color: #8a8b8c;}

    .sb-service-card__actions {width: 80%;margin: auto auto 0;}

    .sb-select--service {width: auto;max-width: 100%;margin-bottom: 4px;background: #fff;}

    .sb-select {width: 100%;overflow: hidden;position: relative;transition: all .3s ease;cursor: pointer;z-index: 1;display: flex;align-items: center;}

    .sb-select--service select {height: 38px;padding: 0 24px 0 8px;}

    .sb-select select {min-height: auto;padding: 0 14px 0 4px;box-shadow: inset 0 0 0 1px #cacbcd;cursor: pointer;background: 0;width: 100%;border: 0;border-radius: 3px;position: relative;appearance: none;}

    .sb-cart-head-dates--new>div:last-child:after{display: none;}

    .slide-fade-enter-active {transition: all .5s ease;}
    
    .slide-fade-leave-active {transition: all .5s ease;}
    
    .slide-fade-enter, .slide-fade-leave-to{transform: translate(100px, -100px);opacity: 0;}

    .rtl .slide-fade-enter,.rtl .slide-fade-leave-to{transform: translate(-100px, -100px);}

    .card-for-animation{position: absolute;top: 0;width: 63%;overflow: hidden;opacity: 0;}

    .sb-service-card:hover .sb-service-card__description:before {
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
    height: 51%;
    background: #fff;
    border-right: 4px solid #cacbcd;
    width: 20px;
    bottom: 0;
}

.rtl  .sb-service-card:hover .sb-service-card__description:before {
    right: auto;
    left: 0;
    transform: rotate(-8deg);
}

.sb-service-card:hover .sb-service-card__description:after {
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
    height: 51%;
    background: #fff;
    border-right: 4px solid #cacbcd;
    width: 20px;
    top: 0;
}

.rtl .sb-service-card:hover .sb-service-card__description:after {
    right: auto;
    left: 0;
    transform: rotate(8deg);
}

.sb-service-card:hover .sb-service-card__price-container:before {
    background: #f5f5f5;
    right: 0;
}

.sb-service-card__price-container:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 100%;
    background: #fff;
    transition: right .3s ease;
    transition-delay: .1s;
}

    @media only screen and (max-width: 600px) {
        .book-now{width: 100%;}

        .sb-cart-view {width: 100%;}

        .sb-results-view {width: 100%;}

        .sb-service-card{flex-wrap: wrap;}

        .sb-service-card__img-container{width: 100%;padding: 0;}

        .sb-service-card__description{width: 100%;}

        .sb-service-card__price-container{width: 100%;}

        .sb-cart-view {padding: 0;}

    }
</style>
