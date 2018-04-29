<template>
  <div class="booking" v-on:scroll="scrollFunction()">
      <Header/>

      <div class="flex booking-content">
        <div class="booking-date-div">
          <div class="booking-date" id="left-div-side">

              <input
                id="datepicker-inline-trigger"
                :value="formatDates(inlineDateOne)"
                type="text"
                placeholder="Select date" style="display: none;"
              >
              <AirbnbStyleDatepicker
                :trigger-element-id="'datepicker-inline-trigger'"
                :mode="'range'"
                :inline="true"
                :fullscreen-mobile="false"
                :date-one="inlineDateOne"
                :months-to-show="1"
                :disabled-dates="['2018-03-30', '2018-04-10']"
                v-on:date-one-selected="function(val) { inputDateOne = val }"
                v-on:date-two-selected="function(val) { inputDateTwo = val }"
              ></AirbnbStyleDatepicker>

              <div class="flex" style="justify-content: space-between;align-items: center;">
                <div>
                  <div class="check-date checkin-date flex">
                    <label>CHECK IN</label>
                    <select>
                      <option>4 Fri</option>
                    </select>

                    <select>
                      <option>May 2018</option>
                    </select>
                  </div>

                  <div class="check-date checkout-date flex">
                    <label>CHECK OUT</label>
                    <select>
                      <option>4 Fri</option>
                    </select>

                    <select>
                      <option>May 2018</option>
                    </select>
                  </div>
                </div>
                <div class="sb-nights-container"><div class="sb-nights-selection"><span class="count rounded-2">5</span><span class="text">nights</span></div></div>
              </div>
              <PersonOpen/>

              <button class="btn btn-primary check-vailability-btn">CHECK AVAILABILITY</button>

              <div class="promo-code flex">
                <span class="promo-code-title primary-bg">Promo Code <i class="fa fa-caret-right"></i></span>
                <input class="promo-code-val" type="text">
              </div>
            </div>
            
          </div>
        

        <div class="booking-result" id="booking-result-id">
          
          <div class="pa-container">
            <h2>Select the room that suits you best</h2>
            <div class="sb-results-sharing-container"> 
              <div class="sb-sharing-toolbar addthis_toolbox addthis_default_style addthis_32x32_style" addthis:url="https://www.simplebooking.it/ibe/search?hid=4392&amp;lang=EN&amp;cur=USD&amp;_ga=2.163939135.1608445012.1524322912-2044398524.1523293102#/q&amp;guests=A,A&amp;in=2018-5-15&amp;out=2018-5-17&amp;coupon=">
              <a class="addthis_button_facebook" title="Facebook" href="#">
              <i class="fab fa-facebook-f"></i>
                <span></span>
              </a>
              <a class="addthis_button_email" target="_blank" title="Email" href="#">
                <i class="fa fa-envelope"></i>
                <span></span>
              </a>
              <a class="addthis_button_whatsapp" target="_blank" title="WhatsApp" href="#">
                <i class="fab fa-whatsapp"></i>
                <span></span>
              </a>
              <a class="addthis_button_linkedin" target="_blank" title="LinkedIn" href="#">
                <i class="fab fa-linkedin-in"></i>
                <span></span>
              </a>
              <a class="addthis_button_compact" href="#" style="position:relative;">
                <i class="fa fa-plus"></i>
                <span></span>

                <div id="at15s" class=" atm" onmouseover="_atw.xwa()" onmouseout="" style="z-index: 1000000;position: absolute;visibility: visible;top: 32px;left: 0;display:none;">
                  <div class="atm-i">
                    <div id="at15s_head" style="display: none;">
                      <span id="at15ptc">Bookmark &amp; Share</span>
                      <span id="at15s_brand" class="at15s_brandx"></span>
                      <a id="at15sptx" class="" href="#" tabindex="9000" onclick="return _atw.clb()" onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}if(_ate.maf.key==9){ addthis_close(); _ate.maf.sib.tabIndex=9001;_ate.maf.sib.focus();}else{/*alert(_ate.maf.key)*/} _ate.maf.key=null">X</a>
                    </div>
                    <div id="at_hover" class="atm-s" style="display: block;">
                      <a id="atic_twitter" href="#">
                        <span class="at-icon-wrapper" style="background-color: rgb(29, 161, 242);">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-twitter-1" title="Twitter" alt="Twitter" class="at-icon at-icon-twitter"><title id="at-svg-twitter-1">Twitter</title><g><path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd"></path></g></svg>
                        </span>
                        <span class="at-label  at-size-16">Twitter</span>
                      </a>
                      <a id="atic_print" href="#"><span class="at-icon-wrapper" style="background-color: rgb(115, 138, 141);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-print-2" title="Print" alt="Print" class="at-icon at-icon-print"><title id="at-svg-print-2">Print</title><g><path d="M24.67 10.62h-2.86V7.49H10.82v3.12H7.95c-.5 0-.9.4-.9.9v7.66h3.77v1.31L15 24.66h6.81v-5.44h3.77v-7.7c-.01-.5-.41-.9-.91-.9zM11.88 8.56h8.86v2.06h-8.86V8.56zm10.98 9.18h-1.05v-2.1h-1.06v7.96H16.4c-1.58 0-.82-3.74-.82-3.74s-3.65.89-3.69-.78v-3.43h-1.06v2.06H9.77v-3.58h13.09v3.61zm.75-4.91c-.4 0-.72-.32-.72-.72s.32-.72.72-.72c.4 0 .72.32.72.72s-.32.72-.72.72zm-4.12 2.96h-6.1v1.06h6.1v-1.06zm-6.11 3.15h6.1v-1.06h-6.1v1.06z"></path></g></svg></span><span class="at-label  at-size-16">Print</span></a><a id="atic_pinterest_share" href="#"><span class="at-icon-wrapper" style="background-color: rgb(203, 32, 39);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-pinterest_share-3" title="Pinterest" alt="Pinterest" class="at-icon at-icon-pinterest_share"><title id="at-svg-pinterest_share-3">Pinterest</title><g><path d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z" fill-rule="evenodd"></path></g></svg></span><span class="at-label  at-size-16">Pinterest</span></a><a id="atic_gmail" href="#"><span class="at-icon-wrapper" style="background-color: rgb(219, 68, 55);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-gmail-4" title="Gmail" alt="Gmail" class="at-icon at-icon-gmail"><title id="at-svg-gmail-4">Gmail</title><g><g fill-rule="evenodd"></g><path opacity=".3" d="M7.03 8h17.94v17H7.03z"></path><path d="M7.225 8h-.41C5.815 8 5 8.84 5 9.876v13.248C5 24.16 5.812 25 6.815 25h.962V12.714L16 19.26l8.223-6.546V25h.962C26.188 25 27 24.16 27 23.124V9.876C27 8.84 26.186 8 25.185 8h-.41L16 15.506 7.225 8z"></path></g></svg></span><span class="at-label  at-size-16">Gmail</span></a><a id="atic_google_plusone_share" href="#"><span class="at-icon-wrapper" style="background-color: rgb(220, 78, 65);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-google_plusone_share-5" title="Google+" alt="Google+" class="at-icon at-icon-google_plusone_share"><title id="at-svg-google_plusone_share-5">Google+</title><g><path d="M12 15v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83C15.47 9.69 13.89 9 12 9c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H12zm15 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill-rule="evenodd"></path></g></svg></span><span class="at-label  at-size-16">Google+</span></a><a id="atic_mailto" href="#"><span class="at-icon-wrapper" style="background-color: rgb(88, 88, 88);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-mailto-6" title="Email App" alt="Email App" class="at-icon at-icon-mailto"><title id="at-svg-mailto-6">Email App</title><g><g fill-rule="evenodd"></g><path d="M26.684 23.264H4.948v-12.88l.2-.1c.303-.202 7.046-4.73 8.152-5.435 1.41-.907 3.22-.806 4.63.1 1.308.804 8.453 5.333 8.453 5.333l.2.1.1 12.88zm-20.63-1.006H25.68v-11.27c-1.207-.806-7.044-4.53-8.252-5.133-1.107-.704-2.515-.704-3.622-.1-1.007.603-6.743 4.528-7.95 5.232.2.1.2 11.27.2 11.27z"></path><path d="M21.753 16.622H10.08a1.59 1.59 0 0 1-1.61-1.61v-3.02c0-.905.704-1.61 1.61-1.61h11.673c.906 0 1.61.705 1.61 1.61v3.02a1.59 1.59 0 0 1-1.61 1.61zM9.98 11.49c-.404 0-.605.302-.605.604v3.02c0 .4.302.603.604.603H21.65c.403 0 .604-.302.604-.604v-3.02c0-.402-.302-.603-.604-.603H9.98z"></path><path d="M25.778 21.956v-10.97l-5.837 4.53 5.838 6.44zM5.954 21.956v-10.97l5.837 4.53-5.836 6.44z"></path><path d="M25.778 22.76l-6.138-6.74h-7.548l-6.137 6.74-.806-.603 6.54-7.145h8.353l6.54 7.145-.805.604z"></path><path d="M25.945 10.334l.61.8-6.32 4.823-.61-.8zM5.902 10.386l6.326 4.814-.61.802-6.326-4.815zM15.816 17.83l.302 8.252 2.013-2.516 2.013 4.226 1.107-.503-2.113-4.227 3.22-.2-6.54-5.033z"></path></g></svg></span><span class="at-label  at-size-16">Email App</span></a><a id="atic_more" href="#"><span class="at-icon-wrapper" style="background-color: rgb(255, 101, 80);">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-addthis-7" title="More..." alt="More..." class="at-icon at-icon-addthis"><title id="at-svg-addthis-7">Addthis</title><g><path d="M18 14V8h-4v6H8v4h6v6h4v-6h6v-4h-6z" fill-rule="evenodd"></path></g></svg></span><span class="at-label  at-size-16">More... (194)</span></a><div style="clear: both;"></div></div><div class="atm-f" id="at15pf"><div><a class="at-branding-logo" href="//www.addthis.com/website-tools/overview?utm_source=AddThis%20Tools&amp;utm_medium=image&amp;utm_campaign=AddThis%20compact%20menu" title="Powered by AddThis" target="_blank"><div class="at-branding-icon"></div><span class="at-branding-addthis">AddThis</span></a></div></div></div></div>
              
              
              </a>
              <div class="atclear"></div>
            </div>
          </div>


        </div>

           <div class="sb-step-room-alloc">
            <div class="sb-header-results-container clearfix">
              <div class="sb-header-room-n-of-n"> Room 
                <span>1</span> of 
                <span>1</span> :  
                <i class="fa fa-male icon-adult"></i>  
                <i class="fa fa-male icon-adult"></i>   
                <span>2</span> Adults  
              </div>
              <div class="sb-info-dates">
                <span class="sb-info-dates__arrival">
                  <i class="fa fa-calendar"></i>
                  <span>Mon</span>
                  <span class="booking__big-number"> 30</span>
                  <span> Apr 2018</span>
                </span>
                <i class="fas fa-long-arrow-alt-right"></i>
                <span class="sb-info-dates__departure">
                  <i class="fa fa-calendar"></i>
                  <span>Sat</span>
                  <span class="booking__big-number"> 05</span>
                  <span> May 2018</span>
                </span>
                <span class="sb-info-dates__nights">
                  <i class="fas fa-moon"></i> 5 nights
                </span>
              </div>
            </div>
          </div>


          
          <div class="booking-result-hotel">
            <div class="hotel-room flex">
              <div class="room-card-image">
                <div class="card-image-offer">
                  SPECIAL OFFER
                </div>
                <div class="card-img">
                  <!-- <img src="../assets/hotel.jpg"> -->

                  <slider animation="fade" :initIndex='currentIndex' :currentIndex='currentIndex' height="220px">
                    <slider-item v-for="(i, index) in list" :key="index">
                      <!-- <div :style="i">
                        <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
                      </div> -->
                      <img src="../assets/hotel.jpg">
                    </slider-item>
                  </slider>

                  <div class="search-div">
                    <span class="search-icon" @click="showModalForSlider = true"><i class="fas fa-search"></i></span>
                  </div>
                </div>

                <span class="slider-counter"><i class="fa fa-images"></i> 3/3</span>
              </div>

              <div class="room-card-description">
                <div class="room-card-name primary-color">
                  Superior Double Room
                </div>
                <div class="room-card-info flex">
                  <div class="sb-room-card__room-size">
                    <i class="fa fa-cube primary-color"></i> 16 m² 
                  </div>
                  <div class="sb-room-card__max-guests">
                    <b> Max guests:</b>
                    <span>
                      <i class="fa fa-user primary-color"></i>
                      <i class="fa fa-user primary-color"></i>
                    </span>
                  </div>
                </div>

                <div class="sb-room-card__description-text">
                  With a 16 sq. meters, the Superior Room offers our boutique hotel guests a pleasant experi... 
                  <a class="sb-lnk-room-more-info primary-color" href="#">more</a>
                </div>

                <div class="sb-icons-amenities-container"> 
                  <i class="fa fa-snowflake primary-color"></i>Air Conditioning
                  <i class="fa fa-building primary-color" title="City View"></i>City View
                  <i class="fa fa-wifi primary-color" title="Free Wi-Fi"></i>Free Wi-Fi
                  <i class="fa fa-wheelchair primary-color" title="Entire unit wheelchair accessible"></i> unit wheelchair accessible
                </div>

                <div class="last-rooms flex">
                  <span class="room-counts">2</span>
                  <span class="room-tag primary-bg">Only 2 rooms available</span>
                </div>
                
              </div>

              <div class="room-card-price">
                <div class="sb-room-card__price-starting-from">Starting from</div>
                <div class="striked-price">
                  <del>
                  <span class="sb-int-part ">
                    <span>U$$ </span><span>541</span>
                    <span class="sb-dec-part">.26</span>
                  </span>
                  
                  </del>
                </div>
                <div class="offer-price-big">
                  <span class="sb-int-part ">
                    <span>U$$ </span><span>503</span>
                    <span class="sb-dec-part">.37<span class="tootip-info" v-tooltip="'Regular Price'"><i class="fas fa-info-circle"></i></span></span>
                  </span>
                  
                  
                </div>

                <div class="offer-price-big official-price">
                  <span class="sb-int-part "> <span>U$$ </span><span>503</span></span>
                  <span class="sb-dec-part">.37<span class="tootip-info" v-tooltip="'Official Price'"><i class="fas fa-info-circle"></i></span></span>
                </div>

                <div class="sb-room-card__price-nights sb-total-for-txt offer-color">  for 
                  <span>2</span> nights
                </div>
                <div class="toggle-btn-div">
                  <button class="sb-button--secondary toggle-btn primary-color" v-on:click="toggle()">
                    <span v-show="isShowBookingRate">CLOSE <i class="fas fa-chevron-up"></i></span>
                    <span v-show="!isShowBookingRate">DETAILS & BOOK<i class="fas fa-angle-down"></i></span>
                  </button>
                </div>
              </div>
            </div>

            <div v-show="isShowBookingRate" v-for="index in 5">
              <div class="sb-rate-plan flex">
                <div class="sb-rate-plan-header sb-offer-header">
                  <span class="special-rate-tag  special-offer-tag">SPECIAL OFFER</span>
                  <div class="sb-rate-plan-name">Non Refundable Rate - Room Only!
                    <a class="sb-rate-condition-link" @click="showModal = true">
                      <i class="fa fa-info-circle"></i>
                    </a>
                  </div>
                  <div class="sb-rate-plan-descr-container">
                    <div class="sb-rate-plan-descr sb-offer-descr">The cheaper rate you can find! - Room-Only basis, meals are not included at this price.
                      This rate is available within s... 
                      <span class="sb-rate-plan-descr-read-more">more</span>
                    </div>
                    <div class="sb-canc-pol-label">
                      <span class="not-ref">Not refundable</span>
                    </div>
                  </div>
                </div>
                <div class="sb-quotes">
                  <div class="sb-quote flex sb-quote-room-only">
                    <div class="sb-meal-plan-column">
                      <span class="sb-mp-text-container" title="">
                        <i class="fas fa-bed"></i>
                        <span class="sb-meal-plan-name meal-plan-icon meal-plan-icon--RO">Room Only</span>
                      </span>
                    </div>
                    <div class="flex sb-prices-room-only">
                      <div class="sb-price-column" > 
                        <span class="sb-price-link offer-price-small">
                          <span class="sb-int-part ">US$ 473</span>
                          <span class="sb-dec-part">.76</span>
                        </span>
                        <span class="striked-price"><del>509.42</del></span>
                      </div>
                      <div class="sb-book-button-column">
                        <button class="flex sb-select-room-cmd sb-button sb-button--primary sb-button--icon-arrow-right flex" style="align-items:center;" v-on:click="booknow(1)">Book now 
                            <img v-show="isLoadingBtn1" class="booknow-btn-loading" src="../assets/loading.gif">
                        </button>
                      </div>
                    </div>
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


      <Modal v-if="showModal" @close="showModal = false">
        <div slot="header">
          <div class="s-modal-header">
            <div class="header-title">SPECIAL OFFER</div>
            <span class="header-close-btn" @click="showModal = false">
              <i class="fas fa-times"></i>
            </span>
          </div>
        </div>

        <div slot="body">
          <div class="popupContent">
            <div class="SBCSS_Tit"><h2>Non Refundable Special Offer!</h2></div>
            <div class="info-offerta__desc">Special non refundable offer - Upon reservation 10% reduction off regular price!<br>This rate is available within seven days prior to the arrival date and includes breakfast, daily housekeeping, cable TV, Wi-Fi free of charge, complimentary minibar and Nespresso coffee machine, slippers and free luxury toiletries in the bathroom.<br><br>Rate includes 10% VAT but doesn't include city tax (€4.80 per person, per night).<br></div>
            
            <br>
            
            <div class="info-offerta__cancpol"><br><div style="font-weight:bold;">Cancellation policy valid for the offer "Non Refundable Special Offer!"</div>The reservation cannot be canceled or modified and prepayment is required. <br>In case of no-show of early departure, no refunds will be issued.<br></div>
          </div>
        </div>
        <div slot="footer" class="s-modal-footer">
            <button class="s-modal-footer-close-btn" @click="showModal=false">CLOSE</button>
        </div>
      </Modal>

      <Modal v-if="showModalForSlider" @close="showModalForSlider = false">
         <div slot="header" class="slider-modal-header"></div>

         <div slot="body" class="slider-modal-body flex">
           <div class="slider-side">
             <slider animation="fade" :initIndex='currentIndex2' :currentIndex='currentIndex2' height="90%" @changeSlide="changeSlider2($event)">
              <slider-item v-for="(i, index) in list" :key="index" @onClick="imageSelect(i)">
                <!-- <div :style="i">
                  <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
                </div> -->
                <img src="../assets/hotel.jpg" style="width: 100%; height: 100%;" >
              </slider-item>
            </slider>

            <div class="more-sliderviews">
              <div v-for="index in 3" class="more-slide-img-div" >
                <img src="../assets/hotel.jpg" style="height: 100%;" :class="{activeSliderItem: index-1 == currentIndex2}">
              </div>
            </div>
           </div>

           <div class="slider-detail-side">
            <div class="flex" style="justify-content: flex-end;">
              <span class="header-close-btn" @click="showModalForSlider = false" style="padding: 5px;">
                <i class="fas fa-times"></i>
              </span>
            </div>

            <div>
              <div class="sb-room-info-content">
                <h2 class="sb-room-info-name">Superior Double Room</h2>
                <div class="sb-room-info-descr">With a 16 sq. meters, the Superior Room offers our boutique hotel guests a pleasant experience. Contemporary décor and designed for comfort, the Superior Room can accommodate up to 2 people.</div>  
                <div class="sb-room-info-size">Size: <span>16 m²</span></div>   
                <div class="sb-room-info-features-container">
                  <h3><span>Room Features:</span></h3> 
                  <ul class="sb-room-info-top-features">  
                    <li class="sb-top-feature"><span class="sb-icon-amenities"><i class="fas fa-snowflake"></i></span> Air Conditioning</li>  
                    <li class="sb-top-feature"><span class="sb-icon-amenities"><i class="fas fa-building"></i></span> City View</li>  
                    <li class="sb-top-feature"><span class="sb-icon-amenities"><i class="fas fa-wifi"></i></span> Free Wi-Fi</li>  
                    <li class="sb-top-feature"><span class="sb-icon-amenities"><i class="fas fa-wheelchair"></i></span> Entire unit wheelchair accessible</li>  
                  </ul>
                  <ul class="sb-room-info-other-features">  
                    <li>Wardrobe/Closet</li>  
                    <li>Fan</li>  
                    <li>Heating</li>  
                  </ul>
                </div> 
              </div>
            </div>
           </div>
         </div>

         <div slot="footer"></div>
      </Modal>
  </div>
</template>

<script>
import Header from './Header.vue';
import AirbnbStyleDatepicker from './AirbnbStyleDatepicker.vue';
import PersonOpen from  './PersonOpen.vue';
import Modal from './Modal.vue';
import { Slider, SliderItem } from 'vue-easy-slider';
export default {
  name: 'Booking',
  data() {
    return{
      dateFormat: 'D MMM',
      inputDateOne: '',
      inputDateTwo: '',
      buttonDateOne: '',
      buttonDateTwo: '',
      inlineDateOne: '',
      sundayDateOne: '',
      sundayFirst: false,
      alignRight: false,
      isShowBookingRate: false,
      isShowloading: false,
      isLoadingBtn1:false,
      isLoadingBtn2:false,
      showModal : false,
      list: [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
        { backgroundColor: '#eee', width: '100%', height: '100%' },
        { backgroundColor: '#f44336', width: '100%', height: '100%' },
      ],
      currentIndex: 2,
      showModalForSlider : false,
      currentIndex2: 0
    }
  },

    created () {
      function getPosition(el) {
        var xPos = 0;
        var yPos = 0;
       
        while (el) {
          if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
       
            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
          } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
          }
       
          el = el.offsetParent;
        }
        return {
          x: xPos,
          y: yPos
        };
      }

      var isScrolling;
      window.document.body.onscroll = function() {

        window.clearTimeout( isScrolling );

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {

          var testDiv = document.getElementById("left-div-side");
          var restultdiv = document.getElementById("booking-result-id");
    
          var position = getPosition(restultdiv);
          console.log(position);

          console.log(testDiv.style.marginTop);

          testDiv.style.marginTop = (78 - position.y) + 'px';

          }, 100);
        
       
      }
      
    },

  methods:{
    formatDates: function(dateOne, dateTwo) {
        let formattedDates = ''
        if (dateOne) {
          formattedDates = dateFns.format(dateOne, this.dateFormat)
        }
        if (dateTwo) {
          formattedDates += ' - ' + dateFns.format(dateTwo, this.dateFormat)
        }
        return formattedDates
      },
      onClosed: function() {
        var datesStr = this.formatDates(this.inputDateOne, this.inputDateTwo)
        console.log('Dates Selected: ' + datesStr)
      },
      toggleAlign: function() {
        this.alignRight = !this.alignRight
      },

      toggle(){
        this.isShowBookingRate = !this.isShowBookingRate;
        this.currentIndex = 1;
        console.log(this.currentIndex);
      },

      booknow(number){
         //this.$router.push({ path:'book-now' });
         this.isShowloading = true;
         if(number == 1){
           this.isLoadingBtn1 = true;
         }else{
           this.isLoadingBtn2 = true;
         }
        var me = this;
         setTimeout(function(){
           me.$router.push({ path:'book-now' });
         }, 3000);
      },

      changeSlider2($event){
        this.currentIndex2 = $event.index;
        console.log($event.index);
      },
      imageSelect(index){
        console.log(index);
      },

      scrollFunction(){
        console.log('aaaaaaa');
      },

      
  },
  components:{
      Header,
      AirbnbStyleDatepicker,
      PersonOpen,
      Modal,
      Slider,
    SliderItem
  }
}
</script>

<style scoped>
.booking{width: 80%; margin: 0 auto;}

.booking .booking-content{margin-top: 10px;flex-wrap: wrap;}

.booking .booking-content .booking-date-div{width:32%;padding: 8px;}

.booking .booking-content .booking-date-div .booking-date{background: white;border:solid 1px #aaa;padding: 8px;transition: all 1s;}

.booking .booking-content .booking-date-div .booking-date .check-date{margin-top: 10px;justify-content: space-between;align-items: center;}

.booking .booking-content .booking-date-div .booking-date .check-date label{color: #8a8b8c;font-size: .625rem;font-weight: 500;width: 65px;}

.booking .booking-content .booking-date-div .booking-date .check-date select{cursor: pointer;position: relative;font-size: .8125rem;border: 0; padding: 3px 10px;border-radius: 3px;}

.booking .booking-content .booking-date-div .booking-date .check-date select:hover{box-shadow: inset 0 0 0 2px #3e1855;}

.check-vailability-btn{width: 100%;margin-top: 10px;}

.promo-code{border: solid 2px #3d0355;margin-top: 10px;}

.promo-code .promo-code-title{color: white;font-weight: 500;white-space: nowrap;padding: 3px 5px;}

.promo-code .promo-code-val{width: 100%;}

.booking .booking-content .booking-result{width: 68%;padding: 8px;flex-wrap: wrap;}

.booking-result-hotel{background: white;border: solid 1px #888;padding: 10px;}

.booking-result-hotel .hotel-room{background: #fff;flex-wrap: wrap; position: relative; cursor: pointer;}

.booking-result-hotel .hotel-room .room-card-image{padding: 16px 0 16px 16px;width: 35%;position: relative;}

.booking-result-hotel .hotel-room .room-card-image .card-image-offer{background: #61b361;border: 1px solid #fff; color: #fff; font-weight: 700; height: 20px; left: 10px; line-height: 20px; padding: 0 8px; position: absolute;    text-transform: uppercase; top: 24px; z-index: 20;}

.booking-result-hotel .hotel-room .room-card-image .card-img{width: 100%;height: 100%;transition: all .2s ease;position: relative;}

.booking-result-hotel .hotel-room .room-card-image .card-img img{width: 100%;}

.booking-result-hotel .hotel-room .room-card-image .slider-counter{position: absolute; bottom: 20px; right: 0;background: rgba(51,51,51,.5);padding: 2px 3px;font-size: 15px;color: #fff;z-index: 4;}

.booking-result-hotel .hotel-room .room-card-description{width: 45%;padding: 16px;position: relative;transition: width .2s ease;}

.room-card-description .room-card-name{margin-bottom: 4px;line-height: 1.1;font-size: 1.25rem;font-weight: 500;}

.room-card-description .room-card-info{font-size: 12px;border-bottom: 1px solid #eaeaea;padding-bottom: 3px;}

.room-card-description .room-card-info .sb-room-card__max-guests{margin: 0 5px;}

.room-card-price{text-align: center;width: 20%;position: relative;}

.room-card-price .sb-room-card__price-starting-from{display: block;font-size: .75rem;margin-bottom: 2px;position: relative;}

.sb-room-card__price-nights span{font-size: 1.5rem;vertical-align: top;line-height: .8;position: relative;}

.striked-price del{color: #aaabad;}

.striked-price .sb-int-part{font-size: 20px;color: #aaabad;position: relative;    font-weight: 700;}

.offer-price-big{color: #449d44; font-size: 1.5rem; font-weight: 700;display: inline-block;line-height: 1;}

.official-price{font-size: 1.2rem!important;font-weight: 500;margin-top: 10px;    display: flex;justify-content: center;}

.sb-dec-part {font-size: 1rem;font-weight: 700;display: inline-block;line-height: 1;}

.sb-room-card__description-text{display: block;font-size: .8125rem;color: #5a5b5c;border-bottom: 1px solid #eaeaea;padding-bottom: 4px;margin-bottom: 4px;}

.sb-lnk-room-more-info{text-decoration: none;}

.sb-button--secondary:hover {background: #3e1855;color: #fff;border: 1px solid #3e1855;}

.sb-button--secondary{}

.toggle-btn-div{margin-top: 15px;z-index: 2;position: absolute;bottom: 10px;width: 100%;padding: 0 11px;}

.toggle-btn{text-decoration: none;border: solid 1px #eeddee;padding: 10px;margin-top: auto;width: 100%;}

.last-rooms{align-items: center;}

.last-rooms .room-counts{color:#3d0355; border: solid 2px #3d0355; padding: 0px 3px;border-radius: 5px;}

.last-rooms .room-tag{color: white; padding: 0 5px;margin: 0 5px;}

.sb-rate-plan:first-child {box-shadow: inset 0 16px 16px -16px rgba(0,0,0,.5);}

.sb-rate-plan {margin: 0 -10px;padding: 16px;transition: background .2s ease;flex-wrap: wrap;position: relative;}

.sb-rate-plan-header {width: 50%;padding-right: 16px;border-right: 1px solid #cacbcd;}

.sb-quotes {width: 50%;padding-left: 16px;}

.special-rate-tag {background: #61b361;color: #fff;text-align: center;margin-right: 4px;padding: 1px 3px 0;font-size: .5625rem;font-weight: 700;position: relative;}

.sb-rate-plan-name{font-size: .875rem;font-weight: 700;color:#3d0355;line-height: 1.1;cursor: pointer;position: relative;padding-right: 16px;}

.sb-rate-condition-link {font-size: .75rem;position: absolute;top: 0;right: 0;color: #3e1855;}

.sb-rate-plan-descr-container {width: 100%;}

.sb-rate-plan-descr {margin-top: 4px;font-size: .75rem;font-weight: 400;max-height: 34px;overflow: hidden;cursor: pointer;line-height: 1.4;}

.sb-canc-pol-label {font-size: .75rem;font-weight: 700;margin-top: 2px;}

.not-ref {color: #3a3b3c;font-style: italic;}

.sb-meal-plan-column {flex: 1;line-height: 1.2;color: #5a5b5c;}

.sb-quote .offer-price-small {margin-right: 0;display: block;white-space: nowrap;display: flex;align-items: flex-end;}

.offer-price-small {color: #449d44;}

.sb-price-link .sb-int-part {font-size: 1.125rem;}

.sb-int-part {font-weight: 700;display: flex;line-height: 1;align-items: flex-end;justify-content:center;}

.sb-price-link .sb-dec-part {font-size: .875rem;}

.sb-quote .striked-price {margin-bottom: 0;font-size: .6875rem;color: #8a8b8c;}

.sb-book-button-column {align-self: flex-start;}

.sb-select-room-cmd, .sb-unlock-offers-cmd {padding: 7px 8px 8px;}

.sb-rate-plan+.sb-rate-plan {border-top: 1px solid #cacbcd;}

.sb-price-column{margin: 0 5px;}

.tootip-info{margin: 0 5px;    position: absolute;}

.booknow-btn-loading{
  height: 15px;
}

.pa-container {background: #fff;padding: 16px;display: flex;align-items: center;border-top: 1px solid #cacbcd;border-right: 1px solid #cacbcd;border-left: 1px solid #cacbcd;position: relative;justify-content: space-between;}

.sb-results-sharing-container {}

.sb-sharing-toolbar {display: flex;flex-wrap: wrap;padding-right: 0;margin-left: auto;}

.sb-sharing-toolbar.addthis_toolbox a {margin-bottom: 0;    border: solid 1px #aaa;border-radius: 3px;color: #3d0355;}

.sb-sharing-toolbar.addthis_toolbox a:hover{
  background: #3e1855;
  color: white;
}

.sb-theme-default [class^=addthis_button_] {box-shadow: inset 0 0 0 1px #cacbcd;border-radius: 3px;color: #006d8d;}

.addthis_toolbox a {line-height: initial;}

[class^=addthis_button_]+[class^=addthis_button_] {margin-left: 4px;}

[class^=addthis_button_] {display: flex;align-items: center;justify-content: center;font-size: .875rem;width: 32px;height: 32px;transition: background .3s ease,color .3s ease,box-shadow .3s ease;}

#at15s.atm {background: none!important;padding: 0!important;width: 10pc!important;}

.atm-i {background: #fff;border: 1px solid #d5d6d6;padding: 0;margin: 0;box-shadow: 1px 1px 5px rgba(0,0,0,.15);}

.atm-s {margin: 0!important;padding: 0!important;}

#at_hover.atm-s a, .atm-s a {display: block;text-decoration: none;padding: 4px 10px;color: #235dab!important;font-weight: 400;font-style: normal;transition: none;border: 0;}

#at15s a, #at15s span {outline: 0;direction: ltr;text-transform: none;}

#at15s .at-icon-wrapper {width: 1pc;height: 1pc;vertical-align: middle;padding: 4px 1px;}

#at15s .at-icon {width: 1pc;height: 1pc;}

.at-icon {fill: #fff;border: 0;}

#at15s a, #at15s span {outline: 0;direction: ltr;text-transform: none;}

.atm-s a .at-label {vertical-align: middle;}

.atm-f {text-align: right;border-top: 1px solid #ddd;padding: 5px 8px;}

#at15s a, #at15s span {outline: 0;direction: ltr;text-transform: none;}

.at-branding-logo .at-branding-icon, .at-branding-logo .at-privacy-icon {    display: inline-block;    height: 10px;    width: 10px;margin-left: 4px;margin-right: 3px;margin-bottom: -1px;background-repeat: no-repeat;}

.at-branding-logo .at-branding-icon {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFW…cc1QAAAB1JREFUeNpiYIQDBjQmAwMmkwEM0JnY1WIxFyDAABGeAFEudiZsAAAAAElFTkSuQmCC);}

#at15s a, #at15s span {outline: 0;direction: ltr;text-transform: none;text-decoration:none;border:none;}

#at15s a:hover{background:none;}

.at-branding-logo .at-branding-addthis, .at-branding-logo .at-branding-powered-by {color: #666;}

.at-branding-logo span {text-decoration: none;}

#at_hover.atm-s a:hover, .atm-s a:hover {background: #2095f0;text-decoration: none;color: #fff!important;}

.addthis_button_compact:hover #at15s{display:block!important;}

.room-card-description:before {content: "";position: absolute;bottom: 16px;right: 0;width: 1px;height: 50%;
    border-right: 1px solid #eaeaea;-webkit-transform-origin: bottom right;transform-origin: bottom right;-webkit-transform: rotate(0);transform: rotate(0);transition: all .2s ease;z-index: 10;}

.room-card-description:after {content: "";position: absolute;top: 16px;right: 0;width: 1px;height: 50%;border-right: 1px solid #eaeaea;-webkit-transform-origin: top right;transform-origin: top right;-webkit-transform: rotate(0);transform: rotate(0);transition: all .2s ease;z-index: 10;}

.rtl .room-card-description:before {right: auto;left: 0;}

.rtl .room-card-description:after {right: auto;left: 0;}

.hotel-room:hover .room-card-description:before {border-right: 4px solid #785d88;transform: rotate(8deg);height: 51%;background: #fff;width: 20px;bottom: 0;}

.rtl .hotel-room:hover .room-card-description:before{transform: rotate(-8deg);}

.rtl .hotel-room:hover .room-card-description:after {transform: rotate(8deg);}

.hotel-room:hover .room-card-description:after {border-right: 4px solid #785d88;transform: rotate(-8deg);height: 51%;background: #fff;width: 20px;top: 0;}

.room-card-price:before {content: "";position: absolute;top: 0;left: 0;bottom: 0;right: 100%;background: #fff;transition: right .3s ease;transition-delay: .1s;z-index: 0;opacity: 0.3;}

.hotel-room:hover .room-card-price:before {background: #f5f5f5;right: 0;}

.hotel-room:hover .offer-price-big{font-size: 1.8rem;}

.sb-step-room-alloc {background: #f5f5f5;padding: 8px 16px;margin-bottom: 8px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;border: 1px solid #cacbcd;}

.sb-header-results-container {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;width: 100%;color: #aaa;justify-content: space-between;}

.sb-header-room-n-of-n {font-size: 1rem;margin-right: 16px;}

.sb-header-room-n-of-n .icon-adult {font-size: 1rem;color: #cacbcd;}

.sb-info-dates {      color: #8a8b8c;    font-size: .6875rem;    font-weight: 700;    text-transform: uppercase;}


.sb-nights-selection {background: none repeat scroll 0 0 #785d88;color: #fff;position: relative;    z-index: 0;    margin-left: 0;    text-align: left;    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-orient: vertical;    -webkit-box-direction: normal;    -ms-flex-direction: column;    flex-direction: column;    -webkit-box-align: center;    -ms-flex-align: center;
    align-items: center;    -webkit-box-pack: center;    -ms-flex-pack: center;    justify-content: center;    min-width: 60px;    padding: 10px;}

.sb-range-selector .sb-nights-selection .count {font-size: 1.25rem;text-align: center;display: block;}

 .sb-nights-selection .text {font-size: .625rem;display: block;line-height: 1.2;text-align: center;}

.s-modal-header{  position: relative;}

.s-modal-header .header-title{text-align: center;  background: #449d44;color: white;padding: 15px;font-size: 20px;font-weight: 700;}
.s-modal-header .header-close-btn{position: absolute;top: 7px;right: 7px;background: #eee;opacity: 0.7;padding: 5px 10px;
    font-size: 21px;}

.popupContent{color: #888;padding: 20px;}

.s-modal-footer{border-top: solid 1px #ddd; padding: 10px; display: flex;justify-content: flex-end;}

.s-modal-footer-close-btn{    background: #fff;color: #3e1855;border: 1px solid #aaa;padding: 10px 20px;font-size: 15px;font-weight: 700;border-radius: 5px;}

.s-modal-footer-close-btn:hover{background: #3e1855;color: #fff;}

.card-img .btn{display: none;}

.card-img .search-div{position: absolute;top: 0;left: 0;width: 100%;height: 100%;display: flex;align-items: center;
    justify-content: center;}

.card-img .search-icon{    padding: 9px 10px;background: black;opacity: 0.6;color: white;border-radius: 50%;font-size: 21px;display: none;}

.card-img:hover .search-icon{display: block;}

.slider-modal-body{height: 700px; overflow: scroll;color: #5a5b5c;}

.slider-modal-body .slider-side{width: 75%;}

.slider-modal-body .slider-detail-side{width: 25%;}

.sb-room-info-size {background: none repeat scroll 0 0 #eee;font-size: .875rem;font-weight: 500;margin-top: 5px;padding: 2px 6px;    text-align: center;}

.sb-room-info-size span {font-size: 1rem;font-weight: 700;}

.sb-room-info-features-container {margin-top: 16px;}

.sb-room-info-features-container h3 {position: relative;text-align: center;font-size: .875rem;}

.sb-room-info-features-container h3:before {content: "";width: 100%;height: 1px;background: #cacbcd;position: absolute;top: 50%;left: 0;right: 0;margin-top: -1px;}

.sb-room-info-features-container h3 span {position: relative;background: #fff;padding: 2px 8px;z-index: 1;}

.sb-room-info-top-features {padding-top: 8px;}

ol, ul {list-style: none;}

.sb-room-info-top-features li {margin: 0 0 4px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}

.sb-top-feature svg{    color: #3e1855;}

.sb-icon-amenities {margin: 0 4px 0 0;background: 0;font-size: .6875rem;float: left;letter-spacing: .25px;font-weight: 500;}

.sb-room-info-other-features {padding-top: 16px;margin-top: 16px;border-top: 1px solid #cacbcd;}

.sb-room-info-other-features li {display: inline-block;background-color: #eaeaea;border-radius: 8px 0;padding: 2px 6px;margin: 2px 2px 2px 0;text-transform: uppercase;font-size: .6875rem;box-shadow: inset 2px 0 0 0 rgba(0,0,0,.15);font-weight: 500;    letter-spacing: .25px;}

.more-sliderviews{height: 10%;background: black;display: flex; justify-content: center;align-items: center;}

.more-slide-img-div{height: 90%;padding: 5px;width: 100px;}

.more-slide-img-div img{height: 100%;}

.activeSliderItem{border:solid 2px #3e1855;}

.sb-room-info-content{padding: 0 10px;}
@media only screen and (max-width: 600px) {
   .booking{width: 100%;}

   .booking .booking-content .booking-date-div{width:100%;padding: 8px;}

   .booking .booking-content .booking-result{width: 100%;}

   .booking-result-hotel .hotel-room .room-card-image{width: 100%;}

   .booking-result-hotel .hotel-room .room-card-description{width: 100%;}

   .room-card-price{width: 100%;}

   .sb-rate-plan-header{width: 100%;}

   .sb-quotes{width: 100%;}

   .offer-price-big{width: 100%;}

   .sb-rate-plan-header{border-right: 0;}

   .toggle-btn-div{position: relative;}

   .room-card-description:before, .room-card-description:after{display: none;}

   .sb-quote-room-only{flex-wrap: wrap;}

   .sb-meal-plan-column{width: 100%;}

   .sb-prices-room-only{width: 100%;justify-content: space-between;}
}
</style>
