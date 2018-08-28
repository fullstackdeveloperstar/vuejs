<template>
  <div class="reservation">
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
                            <a href="#" class="sb-cart-new-search sb-button sb-button--secondary sb-button--small sb-button--icon-edit sb-info-link">modify your search</a>
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
                                                            <span class="sb-int-part ">
                                                                <span>US$ </span><span>509</span>
                                                            
                                                                <span class="sb-dec-part">.42</span>
                                                            </span>
                                                        </span>
                                                        <span class="offer-color">
                                                            <span class="sb-int-part ">
                                                                <span>US$ </span><span>473</span>
                                                                <span class="sb-dec-part">.76</span>
                                                            </span>
                                                            
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="sb-packages-container"></div>
                           
                           
                            <div class="sb-services-taxes-container"></div>
                            <div class="sb-mandatory-services-container"></div>
                            <div class="sb-mandatory-services-taxes-container"></div> 
                            <div class="sb-cart-total-container"> Total amount 
                                <span class="sb-cart-total-price-container js-sb-cart-total-currency" style="">
                                    <span class="sb-cart-total striked-price">
                                        <span>US$ </span><span>509</span>                    
                                        <span class="sb-dec-part">.42</span>
                                    </span>
                                    <span class="sb-cart-discounted-total offer-color">
                                        <span>US$ </span><span>473</span>
                                        <span class="sb-dec-part">.76</span>
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
                        <!-- <div class="sb-commands">
                            <button class="sb-cart-book-cmd sb-button sb-button--primary sb-button--big sb-button--block">Reserve</button>
                        </div> -->
                    </div>
                </div>
        </div>
        
    <div class="sb-results-view">
        <div class="inner sb-main-view">
            
            <div class="sb-current-view clearfix-new">
                <div style="">
                    <div class="sb-login-wrapper ">
                        <div class="sb-login-form">
                            <div id="sb-login-panel">
                                <div class="clearfix-new sb-login-panel">
                                    <h2 class="">Enter Your Details</h2>
                                    <div class="sb-login-form__social">
                                        <span>Sign in with your social account to make faster reservations</span>
                                        <button value="Facebook" data-provider="Facebook" class="sb-button sb-button--fb">Facebook</button>
                                        <button data-provider="Google" value="Google" class="sb-button sb-button--google">Google</button>
                                    </div>
                                    <span class="sb-login-form__divider">
                                        <span>Otherwise Enter Your Details</span>
                                    </span>
                                </div>
                            </div>
                            <div class="sb-login-form__wrapper">
                                <form action="/ibe/hotelbooking/customertemplatestepone?hid=4392&amp;lang=EN&amp;SUNRISE" method="post">
                                <div class="sb-input-wrapper">
                                    <input data-val="true" data-val-required="Please fill in name field" id="customer-first-name" name="Name" type="text" value="">
                                    <label>Name</label>
                                    <span class="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                                </div>
                                <div class="sb-input-wrapper">
                                    <input data-val="true" data-val-required="Please fill in last name field" id="customer-last-name" name="LastName" type="text" value="">
                                    <label for="customer-last-name">Lastname</label>
                                    <span class="field-validation-valid" data-valmsg-for="LastName" data-valmsg-replace="true"></span>
                                </div>
                                <div class="sb-input-wrapper">
                                    <input data-val="true" data-val-email="Please insert a correct e-mail address" data-val-required="Please fill in e-mail field" id="customer-email" name="Email" type="email" value="">
                                    <label for="customer-email">Email</label>
                                    <span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                                </div>
                                <div class="sb-input-wrapper">
                                    <input data-val="true" data-val-email="Please insert a correct e-mail address" data-val-equalto="The e-mail addresses provided mismatch" data-val-equalto-other="*.Email" data-val-required="Please fill in e-mail field" id="customer-conf-email" name="ConfirmEmail" type="email" value="">
                                    <label for="customer-conf-email">Confirm e-mail</label>
                                    <span class="field-validation-valid" data-valmsg-for="ConfirmEmail" data-valmsg-replace="true"></span>
                                </div>
                                <div class="sb-textarea-wrapper">
                                    <textarea cols="20" id="reservation-notes" name="Note" rows="2"></textarea>
                                    <label for="reservation-notes">Special requests</label>
                                    <span class="field-validation-valid" data-valmsg-for="Note" data-valmsg-replace="true"></span>
                                </div>
                                <div class="sb-checkbox-wrapper">
                                    <label>
                                        <input data-val="true" data-val-brequired="To proceed you must agree with the handling of my personal details." data-val-required="The AcceptPrivacy field is required." id="fl-privacy" name="AcceptPrivacy" type="checkbox" value="allowed">
                                        <input name="AcceptPrivacy" type="hidden" value="false">
                                        <span class="sb-checkbox__icon"></span>I have read the information regarding the handling of my personal data and I agree. (<a class="sb-privacy-popup-link">Privacy Policy</a>)                            
                                        <span class="field-validation-valid" data-valmsg-for="AcceptPrivacy" data-valmsg-replace="true"></span>
                                    </label>
                                </div>
                                <div class="sb-commands">
                                    <button class="sb-done-cmd sb-button sb-button--primary sb-button--big sb-button--block" type="submit">Continue</button>
                                    <span class="sb-commands__message">Best Price Guarantee.</span>
                                </div>
                            </form>
                        </div>
                        <div class="sb-login-form__has-account">
                            <a href="#" id="sb-login-button">I have an account</a>
                            </div>
                        </div>
                        <div class="sb-login-sidebar">
                            <span class="sb-login-sidebar__subtitle">The <b>benefits</b> of<br><b>direct booking</b></span>
                            <ul class="sb-advantages">
                                <li>Direct reservation with hotel, No booking fees</li>
                                <li>Free cancellation within terms</li>
                                <li>Exclusive offers &amp; benefits</li>
                                <li>Best rate Guaranteed</li> 
                                <li>Direct reservation with hotel, No booking fees</li> 
                            </ul>            
                            <div class="sb-bubble-wrapper"> 
                                <div class="sb-bubble sb-bubble--green">   
                                    You are booking at the <b>best price</b> guaranteed and at the <b>best policy</b>
                                </div>
                                <div class="sb-people-viewing sb-bubble sb-bubble--red">3 other people are booking this hotel right now</div>
                            </div>
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
import Header from './Header.vue';
export default {
  name: 'Reservation',
  components:{
      Header
  }
}
</script>

<style>
.reservation{width: 90%; margin: 10px auto;}
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

    .sb-login-wrapper {display: flex;border: 1px solid #cacbcd;background: #fff;}
    
    .sb-login-form {width: 65%;padding: 24px;}

    .sb-login-form h2 {text-align: center;}

    .h2, h2 {font-size: 1.5rem;font-weight: 500;font-style: normal;line-height: 1.1;}

    .sb-login-form__social {display: flex;flex-wrap: wrap;margin-top: 16px;}

    .sb-login-form__social span {width: 100%;text-align: center;margin-bottom: 8px;}

    .sb-login-form__social .sb-button--fb {margin-right: 4px;flex: 1;}

    .sb-button--fb {color: #fff;background: #3b5998;border-color: #324c81;}

    .sb-button {padding: 12px 16px 11px;display: inline-block;border-radius: 3px;border: 0;line-height: 1.1;transition: background-color .2s ease;font-size: .75rem;font-weight: 700;letter-spacing: .5px;text-align: center;text-decoration: none;text-transform: uppercase;cursor: pointer;position: relative;}

    .sb-button--fb:before {display: inline-block;font-family: FontAwesome;font-style: normal;font-weight: 400;font-size: .875rem;text-decoration: inherit;content: "\f09a";margin-right: 8px;position: absolute;left: 12px;}

    .sb-login-form__social .sb-button--google {margin-left: 4px;flex: 1;}

    .sb-button--google {color: #fff;background: #dd381d;border-color: #bc3019;}

    .sb-login-form__divider {text-align: center;display: block;position: relative;margin-top: 16px;}

    .sb-login-form__divider:before {content: "";height: 1px;position: absolute;top: 50%;left: 0;border-bottom: 1px dotted #cacbcd;width: 100%;}

    .sb-login-form__divider span {background: #fff;padding: 0 8px;position: relative;font-size: .6875rem;color: #aaabad;}

    .clearfix-new:after {content: "";display: block;clear: both;}

    .sb-login-form__wrapper {margin-top: 16px;}

    .sb-input-wrapper {position: relative;}

    input[type=email], input[type=number], input[type=text], textarea {border: 0;}
    
    .sb-input-wrapper input {background: #fff;border-bottom: 1px solid #cacbcd;box-shadow: none;box-sizing: border-box;color: #3a3b3c;font-size: 1rem;font-weight: 400;height: 40px;outline: 0;padding: 8px 0 0;position: relative;transition: all .2s ease;width: 100%;z-index: 1;}

    .sb-input-wrapper label {position: absolute;top: 0;left: 0;color: #aaabad;font-size: 1rem;line-height: 40px;pointer-events: none;transform-origin: 0 0;transition: transform .2s ease-out;z-index: 1;}

    .sb-input-wrapper+.sb-checkbox-wrapper, .sb-input-wrapper+.sb-form__row, .sb-input-wrapper+.sb-input-wrapper, .sb-input-wrapper+.sb-select-wrapper, .sb-input-wrapper+.sb-textarea-wrapper {margin-top: 24px;}

    .sb-textarea-wrapper textarea {background: #fff;border-bottom: 1px solid #cacbcd;box-shadow: none;box-sizing: border-box;color: #3a3b3c;font-size: 1rem;font-weight: 400;height: 40px;outline: 0;padding: 0;position: relative;transition: all .2s ease;width: 100%;z-index: 1;}

    .sb-textarea-wrapper label {position: absolute;top: 0;left: 0;color: #aaabad;font-size: 1rem;line-height: 40px;pointer-events: none;transform-origin: 0 0;transition: transform .2s ease-out;z-index: 1;}

    .sb-textarea-wrapper {position: relative;}

    .sb-input-wrapper input:focus {border-bottom: 1px solid #3e1855;box-shadow: 0 1px 0 0 #3e1855;}

    .sb-input-wrapper input:focus~label {color: #3e1855;}

    .sb-input-wrapper input:focus~label {transform: translate(0,-26%) scale(.75);left: 0;padding: 0;}

    
    .sb-textarea-wrapper textarea:focus {border-bottom: 1px solid #3e1855;box-shadow: 0 1px 0 0 #3e1855;height: 68px;margin: 12px 0 0;}

    .sb-textarea-wrapper textarea:focus~label {color: #3e1855;transform: translate(0,-26%) scale(.75);left: 0;padding: 0;}
    
    .sb-checkbox-wrapper {margin: 32px 0;line-height: 16px;}

    .sb-checkbox-wrapper label {position: relative;cursor: pointer;padding-left: 24px;text-align: left;color: #8a8b8c;font-size: .75rem;font-weight: 500;display: block;}

    .sb-checkbox-wrapper input {width: auto;opacity: 0;position: absolute;left: 0;}

    button, input, select, textarea {font-family: Roboto,sans-serif;color: #3a3b3c;}

    .sb-textarea-wrapper {position: relative;}

    .sb-checkbox__icon {color: #aaabad;position: absolute;top: 0;left: 0;width: 16px;height: 16px;z-index: 0;border: 2px solid currentColor;border-radius: 2px;}

    .sb-checkbox-wrapper input:checked~.sb-checkbox__icon:before {height: 18px;transition-delay: .15s;}

    .sb-checkbox-wrapper input:checked~.sb-checkbox__icon:after, .sb-checkbox-wrapper input:checked~.sb-checkbox__icon:before {opacity: 1;transition: height .15s ease;}

    .sb-checkbox__icon:before, .sb-checkbox__icon:after {background-color: #3e1855;}

    .sb-checkbox__icon:before {top: 11px;left: 7px;transform: rotate(-135deg);box-shadow: 0 0 0 1px #fff;}

    .sb-checkbox__icon:after, .sb-checkbox__icon:before {position: absolute;height: 0;width: 3px;display: block;transform-origin: left top;content: '';opacity: 0;}

    .sb-checkbox__icon:after {top: 5px;left: 1px;transform: rotate(-45deg);}

    .sb-checkbox-wrapper input:checked~.sb-checkbox__icon:after {height: 6px;}

    .sb-checkbox-wrapper input:checked~.sb-checkbox__icon:after, .sb-checkbox-wrapper input:checked~.sb-checkbox__icon:before {opacity: 1;transition: height .15s ease;}

    .sb-condition-popup-link, .sb-privacy-popup-link {text-decoration: underline;cursor: pointer;}

    a {color: #3e1855;}

    .sb-commands__message {display: block;text-align: center;font-size: .6875rem;margin-top: 4px;}

    .sb-login-form__has-account {text-align: center;margin-top: 8px;}

    .sb-login-form__has-account a {color: #3e1855;border-bottom: 1px dotted rgba(62,24,85,0.8);}

    .sb-login-sidebar {width: 35%;padding: 24px;border-left: 1px solid #eaeaea;display: flex;flex-direction: column;}

    .sb-login-sidebar__subtitle {display: block;text-align: center;font-size: 1.125rem;line-height: 1.2;color: #3a3b3c;}

    .sb-advantages {margin-top: 24px;margin-bottom: 24px;}

    ol, ul {list-style: none;}

    .no-touch .sb-advantages li:nth-child(1) {animation: .8s 1s flipIn cubic-bezier(.25,.46,.45,.94) forwards;}

    .no-touch .sb-advantages li {opacity: 0;}

    .sb-advantages li {color: #449d44;}

    .sb-advantages li {display: flex;line-height: 1.1;font-weight: 500;font-size: .875rem;}

    .sb-advantages li+li {margin-top: 12px;border-top: 1px dotted #cacbcd;padding-top: 12px;}

    .sb-advantages li:before {content: "\f00c";font-family: FontAwesome;font-style: normal;font-weight: 400;margin-right: 4px;color: #61b361;}

    .sb-bubble-wrapper {margin-top: auto;}

    .sb-bubble--green {background: rgba(68,157,68,0.15);border: 1px solid #449d44;color: #449d44;}

    .sb-bubble {padding: 16px 16px 16px 24px;border-radius: 4px;line-height: 1.2;position: relative;}

    .sb-bubble--green:before {content: "\f129";}

    .sb-bubble:before {font-family: FontAwesome;font-style: normal;font-weight: 400;position: absolute;top: 50%;margin-top: -16px;background: #fff;width: 32px;height: 32px;left: -16px;display: flex;align-items: center;border: 1px solid;text-align: center;border-radius: 50%;justify-content: center;}

    .sb-bubble+.sb-bubble {margin-top: 8px;}

    .sb-bubble--red {background: rgba(220,53,34,.15);border: 1px solid #dc3522;color: #dc3522;}

    .sb-bubble--red:before {content: "\f0c0";}

    .sb-login-sidebar {width: 35%;padding: 24px;border-left: 1px solid #eaeaea;display: flex;flex-direction: column;}

    .rtl .sb-input-wrapper label{left: auto; right:0;    }

    .rtl .sb-input-wrapper input:focus~label{left:auto;right:0;}

    .rtl .sb-textarea-wrapper textarea:focus~label{left:auto;right:0;}

    .rtl .sb-textarea-wrapper label{left:auto; right:0;}

    /* .rtl .sb-advantages li:after {content: "\F00C";font-family: FontAwesome;font-style: normal;font-weight: 400;margin-right: 4px;color: #61b361;}

    .rtl .sb-advantages li:before{display:none;} */

    @media only screen and (max-width: 600px) {
        .reservation{width: 100%;}

        .sb-cart-view {width: 100%;}

        .sb-results-view {width: 100%;}

        .sb-service-card{flex-wrap: wrap;}

        .sb-service-card__img-container{width: 100%;padding: 0;}

        .sb-service-card__description{width: 100%;}

        .sb-service-card__price-container{width: 100%;}

        .sb-login-wrapper{flex-wrap: wrap;}

        .sb-login-form{width: 100%;}

        .sb-login-sidebar{width: 100%;}

        .sb-cart-view {padding: 0;}

        .sb-login-form__social .sb-button--fb{flex:none;width: 100%;}

        .rtl .sb-login-form__social .sb-button--fb{margin-right:0px;}

        .sb-login-form__social .sb-button--google{flex: none; width: 100%;    margin-left: 0px;margin-top:10px;}
    }
</style>
