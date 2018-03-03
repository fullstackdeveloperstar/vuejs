<template>
<div class="section-checkout section-checkout-flights">
	<div class="section-nav">
	    <ol>
	        <li class="step-current">
	            <span>פרטי מזמין</span>

	            <i class="ico-airplane-checkout"></i>
	        </li>

	        <li class="">
	            <span>פרטי הנוסעים ותשלום</span>

	            <i class="ico-airplane-checkout"></i>
	        </li>

	        <li class="">
	            <span>אישור הזמנה</span>

	            <i class="ico-airplane-checkout"></i>
	        </li>
	    </ol>
	</div><!-- /.section-nav -->

	<div class="section-body">
            <div class="form-checkout">
                <form action="/packages/payment/" method="post" id="paymentForm" class="form-to-validate">
                    
                    <div class="form-section">
    <div class="form-section-head">
        <h2 class="dir-option-left-me"><i class="ico-person-dark"></i>פרטי הנוסעים</h2>
            <p class="dir-option-left-me">
                אנא מלאו את פרטי הנוסע <strong>באנגלית בלבד!</strong>
                    <span> כפי שמופיע בדרכון הנוסע <a href="#modalPassport" class="form-link js-modal-toggle">לחצו לדוגמא</a></span>
            </p>
    </div><!-- /.form-section-head -->

    <div class="form-section-body ">
<input data-val="true" data-val-required="The IsPassengerMode field is required." id="PassengerDetailsVM_IsPassengerMode" name="PassengerDetailsVM.IsPassengerMode" type="hidden" value="False" />    <input type="hidden" name="FromDate" value="29/03/2018" />
        <input type="hidden" name="ToDate" value="03/04/2018" />
        <div class="checkout-room">
            <div class="form-section-group form-section-person">
                <div style="background: #F2F0E6; padding: 5px 10px 4px;">
                    <h2 class="dir-option-left-me">חדר 1</h2>
                </div>
            </div>
               <div class="passenger">
                    <div class="form-section-group form-section-person">
                        <h2 style="padding:5px; " class="dir-option-left-me">מבוגר <small dir="ltr">(12+)</small></h2>

                        <div class="form-row ">
                            <div class="form-controls input-field">
                                <input type="text" class="field no-special-chars dir-option-left-me" placeholder="שם פרטי">
                            </div><!-- /.form-controls -->
                        </div><!-- /.form-row -->

                        <div class="form-row">
                            <div class="form-controls input-field">
                                <input type="text" class="field no-special-chars dir-option-left-me" placeholder="שם משפחה">
                            </div><!-- /.form-controls -->
                        </div><!-- /.form-row -->
                       
                        <div class="form-cols row">
                        	<div class="col-xs-1  text-muted"  style="line-height: 40px;">ליה</div>
                            <div class="form-col col-xs-5 ">
                                <div class="form-row">
                                    <div class="form-controls form-controls-select">
                                        <select class="select input-field">
                                                <option selected value="">מין</option>
                                                <option  value="1">זכר</option>
                                                <option  value="2">נקבה</option>
                                        </select>
                                    </div><!-- /.form-controls form-controls-select -->
                                </div><!-- /.form-row -->
                            </div><!-- /.form-col form-col-size1 -->
                                <div class="col-xs-1 text-muted" style="line-height: 40px;">ad</div>
                                <div class="form-col  col-xs-5">
                                    <div class="form-row  ">
                                        <div class="form-controls input-field input-field-Birthdate">
                                            <input type="text" class="field date-mask date-mask-adult dir-option-left-me" placeholder="01/01/1900">
                                            
                                        </div><!-- /.form-controls -->
                                    </div><!-- /.form-row -->
                                </div><!-- /.form-col form-col-size1 -->
                        </div><!-- /.form-cols -->
                      
                            <div class="form-section-group form-section-person-details">
                                <div class="insurance-select">
                                    <h4 class="dir-option-left-me">הוסף ביטוח נסיעות לחו"ל החל מ- $1.50<br /> (מחיר לתכנית הבסיסית ללא כיסוי צד ג' ואיתור וחילוץ) <a href="#" target="_blank">תמצית הכיסויים</a></h4>
                                    <div class="form-row">
                                       
                                        <div class="form-controls form-controls-select">
                                            <select  class="select select-popup-toggle select-insurance input-field">
                                                <option value="">
                                                    בחר סוג הפוליסה
                                                </option>
                                                <option value="4">
                                                    ביטוח נסיעות
                                                </option>
                                                
                                                <option value="0">
                                                    ללא ביטוח
                                                </option>
                                            </select>
                                        </div><!-- /.form-controls form-controls-select -->
                                    </div><!-- /.form-row -->
                                </div>
                            </div><!-- /.form-section-group form-section-person-details -->

                    </div><!-- /.form-section-group form-section-person -->
                    
                </div>
            <div class="passenger">
                    <div class="form-section-group form-section-person">
                        <h2 style="padding:5px;" class="dir-option-left-me">מבוגר <small dir="ltr">(12+)</small></h2>

                        <div class="form-row">

                            <div class="form-controls input-field">
                                <input type="text" class="field no-special-chars dir-option-left-me" placeholder="שם פרטי">
                            </div><!-- /.form-controls -->
                        </div><!-- /.form-row -->

                        <div class="form-row">
                           
                            <div class="form-controls input-field">
                                <input type="text" class="field no-special-chars dir-option-left-me" placeholder="שם משפחה">
                                
                            </div><!-- /.form-controls -->
                        </div><!-- /.form-row -->
                        
                            <div class="form-section-group form-section-person-details">
                                <div class="insurance-select">
                                    <h4 class="dir-option-left-me">הוסף ביטוח נסיעות לחו"ל החל מ- $1.50<br /> (מחיר לתכנית הבסיסית ללא כיסוי צד ג' ואיתור וחילוץ) <a href="#" target="_blank">תמצית הכיסויים</a></h4>
                                    <div class="form-row">
                                        <div class="form-controls form-controls-select">
                                            <select class="select select-popup-toggle select-insurance input-field dir-option-left-me">
                                                <option value="">
                                                    בחר סוג הפוליסה
                                                </option>
                                                <option 
                                                        value="4">
                                                    ביטוח נסיעות
                                                </option>
                                                
                                                <option 
                                                        value="0">
                                                    ללא ביטוח
                                                </option>
                                            </select>
                                        </div><!-- /.form-controls form-controls-select -->
                                    </div><!-- /.form-row -->
                                </div>
                            </div><!-- /.form-section-group form-section-person-details -->

                    </div><!-- /.form-section-group form-section-person -->
                    
                </div>
        </div>
    </div><!-- /.form-section-body -->
</div><!-- /.form-section -->


<div class="form-section">
    <div class="form-section-head form-section-head-primary">
        <h2 class="dir-option-left-me"><i class="ico-wallet"></i>פרטי המשלם ותשלום<img src="../assets/logo-thawte-alt.png" alt="" width="73" height="18"></h2>
        <p class="dir-option-left-me">אתר איסתא מאובטח על ידי תקן-PCI הבינלאומי, סטנדרט האבטחה המחמיר בעולם לרכישות באינטרנט.</p>
    </div><!-- /.form-section-head form-section-head-primary -->

    <div class="form-section-body">
        <input id="idNumber" name="PaymentDetailsVM.CardHolderVM.IdNumber" type="hidden" value="" />    <div class="form-section-group form-section-group-secondary">
        <div class="form-row">
           
            <div class="form-controls input-field">
                <span class="form-controls-icon">
                    <i class="ico-checkout-person"></i>
                </span>
                <input type="text" class="field"  value="adsfa" placeholder="שם פרטי" >
            </div><!-- /.form-controls -->
        </div><!-- /.form-row -->
        <div class="form-row">
            <div class="form-controls input-field">
                <span class="form-controls-icon">
                    <i class="ico-checkout-person"></i>
                </span>
                <input type="text" class="field" value="asdf" placeholder="שם משפחה" >
            </div><!-- /.form-controls -->
        </div><!-- /.form-row -->


        <div class="form-row">
            <div class="form-controls input-field">
                <span class="form-controls-icon">
                    <i class="ico-checkout-email"></i>
                </span>
                <input type="text" class="field" dir="ltr" value="test@mail.com" placeholder="דואר אלקטרוני" >
            </div><!-- /.form-controls -->
        </div><!-- /.form-row -->

        <div class="form-row">
            <div class="form-controls input-field">
                <span class="form-controls-icon">
                    <i class="ico-checkout-phone"></i>
                </span>
                <input type="text" class="field phone-mask" dir="ltr" value="1232342123" placeholder="טלפון">
            </div><!-- /.form-controls -->
        </div><!-- /.form-row -->

        <div class="form-row">
            <div class="form-controls">
                <span class="form-controls-icon">
                    <i class="ico-checkout-phone"></i>
                </span>
                <input type="tel" class="field phone-mask" dir="ltr" placeholder="טלפון משני">
            </div><!-- /.form-controls -->
        </div><!-- /.form-row -->
    </div><!-- /.form-section-group form-section-group-secondary -->
    <div class="form-section-group form-section-group-tertiary">
        <div class="form-row">
            <div class="form-controls input-field">
                <input class="field dir-option-left-me" placeholder="הזן מספר כרטיס אשראי" readonly="readonly" required="True" type="text" value="" />
            </div><!-- /.form-controls -->
        </div><!-- /.form-row -->
        
        

        <div class="form-row">
            <input type="text" class="field dir-option-left-me" id="payments_select" value="$1978.00 בתשלום אחד" data-target="#modalPayments" data-focus="modal" readonly>
        </div>
        <div class="form-section-actions">
            <a href="#modalPaymentsDetails" class="form-link js-modal-toggle" id="payments_details"><i class="ico-plus-blue"></i>פירוט תשלומים</a>
            <ul class="list-payment-cards">
                <li><img src="../assets/credit-card1.png" alt="" width="26" height="8"></li>
                <li><img src="../assets/credit-card2.png" alt="" width="25" height="15"></li>
                <li><img src="../assets/credit-card3.png" alt="" width="17" height="17"></li>
                <li><img src="../assets/credit-card4.png" alt="" width="22" height="15"></li>
                <li><img src="../assets/credit-card5.png" alt="" width="19" height="15"></li>
            </ul><!-- /.list-payment-cards -->
        </div><!-- /.form-section-actions -->
    </div><!-- /.form-section-group form-section-group-tertiary -->


        <div class="form-section-subtotal">
        <h2 class="dir-option-left-me">סיכום הזמנה:</h2>
        <h3 class="dir-option-left-me">חבילת נופש בחו&quot;ל </h3>
            <ul>
                <li >
                    <span>
                        חדר 1<text class="desc">: 2 מבוגרים</text>
                    </span>
                        <strong>$1978</strong>
                </li>
            </ul>


    <p class="dir-option-left-me"><a href="#modalOrderDetails" class="form-link js-modal-toggle" data-type="checkout-more"><i class="ico-plus-blue"></i>הצג פרטי הזמנה מלאים</a></p>
</div><!-- /.form-section-subtotal -->


        <div class="form-section-total">
            <div class="checkbox">

                <div style="padding:0 0 5px; font-size:1.35em;">
                    <p style="display:inline;" class="dir-option-left-me"><span>- באחריותך לקרוא את</span> <a href="#modalTerms" class="form-link js-modal-toggle" style="font-size:inherit;vertical-align: initial ;display:inherit;">תנאי השימוש באתר ואת כל התנאים וההגבלות</a><span> לגבי הזמנתך</span></p>
                    <p class="dir-option-left-me">- מסמכי הנסיעה יתקבלו בדואר אלקטרוני, במקרה הצורך יתואם איסוף המסמכים מבית איסתא.</p>
                </div>
                <p class="dir-option-left-me"><input type="checkbox" value="1" required ><span>*אני מאשר/ת שקראתי ומסכים/ה לכל תנאי העסקה בהזמנה זו</span></p>
            </div><!-- /.checkbox -->

            <div class="form-actions">
                <p>
                    סה"כ לתשלום:
                    <strong><small>$</small><span id="checkoutTotal">1978</span></strong>
                </p>
                <input type="submit" value="בצע הזמנה" class="btn form-btn" style="color: white;" @click="gotoCreditCard">
            </div><!-- /.form-actions -->
        </div><!-- /.form-section-total -->
        <!-- הערות חשובות-->
    </div><!-- /.form-section-body -->
</div>                    
</form>
</div>
</div>

</div>

</template>

<script>
	export default{
		name: "CheckOut",

		methods: {
			gotoCreditCard() {
				this.$router.push({ path:'creditcard' });
			}
		}
	}
</script>

<style scoped>


.section-checkout .section-nav {
    font-size: 10px;
    line-height: 0;
    padding: 11px 6px;
    background: linear-gradient(to bottom, #ecf1f7 0%, #fff 75%);
}

.section-checkout .section-nav ol {
    text-align: justify;
    counter-reset: step;
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none outside none;
}

.section-checkout .section-nav ol:before {
    content: '';
    height: 15px;
    display: block;
    position: absolute;
    top: 12px;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: #dae3ed;
    border-width: 7px 0;
    border-style: solid;
    border-color: #fff;
}

.checkout .section-nav li.step-current {
    color: #35993f;
}

.section-checkout .section-nav li:first-child {
    text-align: right;
    z-index: 3;
}

.section-checkout .section-nav li {
    counter-increment: step;
    color: #9aacc1;
    letter-spacing: -0.01em;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-bottom: 20px;
    z-index: 2;
}

.section-checkout .section-nav li.step-done:before, .section-checkout .section-nav li.step-current:before {
    background-color: #35993f;
}

.section-checkout .section-nav li:first-child:before {
    margin: 0 0 0 auto;
}

.section-checkout .section-nav li:before {
    content: counter(step);
    font-size: 25px;
    line-height: 27px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    width: 39px;
    height: 39px;
    display: block;
    position: relative;
    z-index: 1;
    border: 5px solid #fff;
    margin: auto;
    background-color: #dae2ed;
    box-shadow: inset 0 1px 0 rgba(0,0,0,.05);
    border-radius: 50%;
}

.section-checkout .section-nav li:first-child span {
    right: 0;
}
	
.section-checkout .section-nav li span {
    font-size: 1.35em;
    line-height: 1.48;
    white-space: nowrap;
    display: block;
    position: absolute;
    bottom: -3px;
}

.section-checkout .section-nav li.step-current i {
    display: block;
}

.section-checkout .section-nav li i {
    display: none;
    position: absolute;
    top: 0;
    bottom: 21px;
    right: 60px;
    z-index: 3;
    margin: auto;
}

body.ltr .section-checkout .section-nav li i{
    right: -60px;
    transform: rotate(180deg);
}

.ico-airplane-checkout {
    width: 29px;
    height: 35px;
    background-image: url(../assets/ico-airplane-checkout.png);
}

.logo, [class^="ico-"], .slider-gallery .owl-prev:before, .slider-gallery .owl-next:before {
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
}

.section-checkout .section-nav li.step-current:after {
    width: 50px;
    height: 0;
    border-width: 3px 55px 2px 0;
    border-style: solid;
    border-color: transparent #35993f transparent transparent;
    background-color: transparent;
}

body.ltr .section-checkout .section-nav li.step-current:after{
    border-width: 3px 0px 2px 55px;
    border-color: transparent transparent transparent #35993f;
}

.section-checkout .section-nav li.step-done:after, .section-checkout .section-nav li.step-current:after {
    display: block;
}

.section-checkout .section-nav li:after {
    content: '';
    width: calc(50vw - 48px);
    height: 6px;
    display: none;
    position: absolute;
    top: 50%;
    right: 32px;
    z-index: 2;
    margin-top: -13px;
    background-color: #35993f;
}

body.ltr .section-checkout .section-nav li:after {
    left: 32px;
    right: auto;
}

.section-checkout .section-nav li:nth-child(2) {
    z-index: 2;
}

.section-checkout .section-nav li[data-v-1b863436] {
    counter-increment: step;
    color: #9aacc1;
    letter-spacing: -0.01em;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-bottom: 20px;
    z-index: 2;
}

.section-checkout .section-nav li:last-child {
    text-align: left;
    z-index: 1;
}

.section-checkout .section-nav li:last-child:before {
    margin: 0 auto 0 0;
}	

.section-checkout .section-nav li:last-child span {
    left: 0;
}

.section-checkout .section-nav li:last-child i {
    display: none;
}

.section-checkout .section-nav li.step-done, .section-checkout .section-nav li.step-current {
    color: #35993f;
}

.section-checkout .section-nav li:first-child {
    text-align: right;
    z-index: 3;
}

.section-checkout .section-nav li:nth-child(2) span {
    left: 50%;
    -webkit-transform: translateX(-50%);
}

.section-checkout .section-nav ol:after {
    content: '';
    width: 100%;
    display: inline-block;
}

.section-checkout .section-body {
    padding: 14px 10px 0;
    background: linear-gradient(to bottom, #ecf1f7 0%, #fff 75%) no-repeat 0 0;
    -webkit-background-size: 100% 80px;
    background-size: 100% 80px;
    text-align: right;
}



.form-checkout{
	padding: 10px;
}
.form-checkout .form-section-body hr { height: 1px; border: 0; margin: 0 7px; background-color: #eaeae0; }


.form-checkout h2 { font-size: 18px; line-height: 20px; color: #2a3335; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 5px; }
.form-checkout h2 i { margin: -1px 0 0 4px; }
.form-checkout h2 img { float: left; }

body.ltr .form-checkout h2 img {
    float: right;
}
.form-checkout .field,
.form-checkout .select,
.form-checkout .textarea { font-size: 17px; line-height: 20px; color: #2a3335; font-weight: 400; width: 100%; height: 42px; display: block; padding: 10px; border: 1px solid #e9eff7; border-radius: 2px; background: #fff; box-shadow: none; text-align:right;}
.form-checkout .form-link { font-size: 12px; line-height: 1.33; color: #48a0dc; display: inline-block; vertical-align: middle; }
.form-checkout .form-link i { float: right; margin: 2px 0 0 3px; }
.form-checkout .form-row { padding-bottom: 10px; }
.form-checkout .form-col { padding: 0 7px; }
.form-checkout .form-col-size1 { width: 39%; }
.form-checkout .form-col-size2 { width: 61%; }
.form-checkout .form-label { font-size: 17px; line-height: 20px; color: #2a3335; float: right; padding: 11px 0 11px 6px; }
.form-checkout .form-label:not(.hidden) + .form-controls { overflow: hidden; }
.form-checkout .form-label:not(.hidden) + .form-controls .field { font-weight: 400; height: 42px; padding: 10px; text-align:right; }
.form-checkout .form-controls { position: relative; }
.form-checkout .form-controls-icon,
.form-checkout .form-controls-icon i { display: block; position: absolute; top: 0; right: 0; bottom: 0; margin: auto; }
.form-checkout .form-controls-icon { width: 35px; pointer-events: none; }
body.ltr .form-checkout .form-controls-icon{
    left: 0;
    right: auto;
}
.form-checkout .form-controls-icon i { left: 0; }
.form-checkout .form-controls-icon + .field,
.form-checkout .form-controls-icon + .select,
.form-checkout .form-controls-icon + .textarea { padding-right: 35px; text-align:right; }

body.ltr .form-checkout .form-controls-icon + .field,
.form-checkout .form-controls-icon + .select,
.form-checkout .form-controls-icon + .textarea { padding-right: 0; padding-left: 35px; text-align:left; }

.form-checkout .form-controls-select .select { padding-left: 32px; }
.form-checkout .form-controls-select .select:disabled{ background: #eee;}
.form-checkout .form-cols { margin: 0 -7px; }
.form-checkout .form-section { padding-bottom: 21px; }
.form-checkout .form-section-head { font-size: 10px; padding-bottom: 11px; }
.form-checkout .form-section-head p { font-size: 1.35em; line-height: 1.11; color: #72849a; letter-spacing: -0.02em; }
.form-checkout .form-section-head p a,
.modal-tabs-section .tabs a { color: #48a0dc; }
.form-checkout .form-section-head p .text-red { color: #e04955; font-weight: 400; }
.form-checkout .form-section-head-primary { padding-bottom: 8px; }
.form-checkout .form-section-head-primary h2 { margin-bottom: 9px; }
.form-checkout .form-section-head-primary p { letter-spacing: 0; }
.form-checkout .form-section-group { padding: 14px 7px 4px; }
.form-checkout .form-section-group .textarea { height: 60px !important;    }
.form-checkout .form-section-group-primary { background-color: #fafaf8 ; }
.form-checkout .form-section-group-primary .field,
.form-checkout .form-section-group-primary .textarea,
.form-checkout .form-section-group-primary .select { border-color: #e5e5d8; }
.form-checkout .form-section-group-secondary { padding: 10px 7px 0; background-color: #f1f5f9; border-radius: 5px 5px 0 0}
.form-checkout .form-section-group-secondary .form-row { padding-bottom: 11px; }
.form-checkout .form-section-group-secondary .form-row:last-child { padding-bottom: 9px; }
.form-checkout .form-section-group-tertiary { padding-bottom: 12px; background-color: #c5d2df; }
.form-checkout .form-section-group-tertiary .dropdown-button { padding: 9px 10px 9px 31px;}
.form-checkout .form-section-group-tertiary .dropdown-button .dropdown-text { color:#2a3335;}
.form-checkout .form-section-group-tertiary .dropdown-open .dropdown-menu {  max-height:30vh; }
.form-checkout .form-section-actions { padding-top: 2px; }
.form-checkout .form-section-actions:after { content: ''; line-height: 0; display: table; clear: both; }
.form-checkout .form-section-actions ul { float: left; padding: 0; margin: 0; list-style: none outside none; }

body.ltr .form-checkout .form-section-actions ul { float: right;}

.form-checkout .form-section-actions ul li { width: 33px; height: 24px; float: right; position: relative; margin-right: 3px; background: linear-gradient(to bottom, #efefef 0%, #fff 100%); border-radius: 2px; box-shadow: 0 1px 0 #93a8be; }
.form-checkout .form-section-actions ul img { display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }
.form-checkout .form-section-actions .form-link { float: right; padding: 4px 0; }

body.ltr .form-checkout .form-section-actions .form-link { float: left; padding: 4px 0; }

.form-checkout .form-section-subtotal { font-size: 10px; padding: 10px 9px 13px; border: 1px solid #f5f5f5; border-top: 0; background-color: #fcfcfc; }
.form-checkout .form-section-subtotal h3 { font-size: 15px; font-size: 14.5px; padding-top: 3px; }
.form-checkout .form-section-subtotal li h3 { float: right; background-color: #fcfcfc; position: relative; padding-left: 9px; }
.form-checkout .form-section-subtotal h3 + ul { padding-bottom: 4px; }
.form-checkout .form-section-subtotal ul { font-size: 1.35em; line-height: 1.5; color: #2a3335; padding: 6px 0; margin: 0; list-style: none outside none; }
.form-checkout .form-section-subtotal li { position: relative; }
.form-checkout .form-section-subtotal li.insurance-price { margin-top: 5px;}
.form-checkout .form-section-subtotal li:before { content: ''; height: 1px; display: block; position: absolute; bottom: 7px; right: 0; left: 0; border-bottom: 1px dotted #bfc5cd;}
.form-checkout .form-section-subtotal li:after { content: ''; line-height: 0; display: table; clear: both; }
.form-checkout .form-section-subtotal li span { min-width: 64px; float: right; padding-left: 7px; position: relative; z-index: 0; background-color: #fcfcfc; }

body.ltr .form-checkout .form-section-subtotal li span {
    float: left;
    text-align: left;
}

.form-checkout .form-section-subtotal li span.text-alt { font-size: 15px; font-size: 14.5px; margin-top: -5px; padding-bottom: 4px; }
.form-checkout .form-section-subtotal li strong { font-size: 17px; line-height: 1; color: #76869d; text-align: left; min-width: 40px; float: left; position: relative; z-index: 0; background-color: #fcfcfc; }

body.ltr .form-checkout .form-section-subtotal li strong{
    float: right;
}

.form-checkout .form-section-subtotal li strong:first-letter { font-size: 13px; }
.form-checkout .form-section-total { padding: 10px 10px 12px; background-color: #f1f5f9; box-shadow: 0 2px 1px rgba(0,0,0,.06); border-radius: 0 0 5px 5px; }
.form-checkout .form-section-total .checkbox { font-size: 10px; padding: 4px 0; margin: 0; }
.form-checkout .form-section-total .checkbox label { font-size: 1.35em; line-height: 1.07; padding: 0 22px 11px 0; }
.form-checkout .form-section-total .checkbox label i { top: 3px; }
.form-checkout .form-section-total .checkbox label:before { top: -2px; border: 1px solid #C5CAD0;}
.form-checkout .form-section-info { padding: 14px 0 0; }
.form-checkout .form-section-info ul { font-size: 12px; line-height: 1.08; color: #72849a; padding: 0; margin: 0; list-style: none outside none; }
.form-checkout .form-section-info li { position: relative; padding: 9px 20px 0 0; }
.form-checkout .form-section-info li i { position: absolute; top: 9px; right: 0; }
.form-checkout .form-section-info li a { color: #48a0dc; }
.form-checkout .form-section-info li.text-red { color: #e04955; margin-bottom: -2px; }
.form-checkout .form-section-info li.text-red + li:not([class]) { margin-top: 7px; }
.form-checkout .form-section-initial { padding: 2px 0 6px; }
.form-checkout .form-section-initial .checkbox { margin: 2px 0 7px; }
.form-checkout .form-section-initial .checkbox label { font-size: 14px; font-size: 13.51px; line-height: 15px; line-height: 14.51px; }
.form-checkout .form-section-initial .checkbox label:before { border: 1px solid #eaf0f7; }
.form-checkout .form-section-initial .form-row { padding-bottom: 11px; }
.form-checkout .form-section-initial .form-section-head { padding-bottom: 12px; }
.form-checkout .form-section-initial .form-actions { border-top: 0; padding: 13px 0 20px; }
.form-checkout .form-section-initial .form-actions .form-btn { width: 100%; display: block; float: none; }
.form-checkout .form-section-person { padding-bottom: 2px; background-color: #fafaf8; }
.form-checkout .form-section-person h3 { font-size: 15px; font-size: 15.5px; line-height: 18px; color: #2a3335; padding-bottom: 7px; }
.form-checkout .form-section-person-details { position: relative; padding-bottom: 2px; margin-bottom: 10px; background-color: #f2f0e6; }
.form-checkout .form-section-person-details:before { content: ''; width: 0; height: 0; display: block; position: absolute; top: 0; left: 50%; border: 8px solid transparent; border-top-color: #fafaf8; margin-left: -8px; }
.form-checkout .form-section-person-details h4 { font-size: 15px; font-size: 14.5px; line-height: 1.19; letter-spacing: -0.01em; padding-bottom: 1px; }
.form-checkout .form-section-person-details h4:first-child { padding-bottom: 8px; }
.form-checkout .form-section-person-details h4 a { color: #48a0dc; display: block; }
.form-checkout .form-section-person-details hr { height: 1px; border: 0; margin: 0 -7px 10px; background-color: #e3e2d0; }
.form-checkout .form-section-person-details p { font-size: 15px; font-size: 14.5px; line-height: 1.32; letter-spacing: 0.008em; padding-bottom: 10px; }
.form-checkout .form-section-person-details p.form-section-warning { color: #e04955; }
.form-checkout .form-section-person-details p.form-section-warning i { margin-top: -2px; }
.form-checkout .form-actions { padding-top: 12px; border-top: 1px solid #e1e7f0; overflow: hidden; }
.form-checkout .form-actions p { font-size: 12px; line-height: 1.25; color: #72849a; font-weight: 700; max-width: 115px; float: right; padding-top: 4px; }

body.ltr .form-checkout .form-actions p {
    float: left;
}

.form-checkout .form-actions p strong { font-size: 36px; line-height: 1; color: #010101; letter-spacing: -0.03em; display: block; margin-top: -4px; }
.form-checkout .form-actions p strong small { font-size: 65%; }
.form-checkout .form-actions .btn { font-size: 27px; line-height: 28px; text-shadow: 0 1px 0 #14721d; width: 168px; float: left; padding: 10px; background-color: #209c2e; border-radius: 2px; box-shadow: 0 3px 0 #0a6714; }

body.ltr .form-checkout .form-actions .btn{
    float: right;
}


.form-checkout input[type="date"] { color: transparent; text-align: right; }
.form-checkout input[type="date"]::-webkit-datetime-edit,
.form-checkout input[type="date"]::-webkit-datetime-edit-fields-wrapper { width: 100%; }

.form-checkout input[type="date"]::-webkit-clear-button,
.form-checkout input[type="date"]::-webkit-inner-spin-button,
.form-checkout input[type="date"]::-webkit-calendar-picker-indicator { display: none; -webkit-appearance: none; }

.form-checkout .date-placeholder { font-size: 17px; line-height: 20px; color: #2a3335; font-weight: 400; width: 100%; height: 40px; display: none; padding: 11px; position: absolute; top: 0; right: 0; left: 0; bottom: 0; pointer-events: none; }
.form-checkout input[type="date"] + .date-placeholder { display: block; }

.form-checkout input[type="date"]:focus,
.form-checkout input[type="date"]:valid { color: #000; }

.form-checkout input[type="date"]:focus + .date-placeholder,
.form-checkout input[type="date"]:valid + .date-placeholder { opacity: 0; }

.ico-airplane-checkout {
    width: 29px;
    height: 35px;
    background-image: url(../assets/ico-airplane-checkout.png);
}

.ico-checkout-email {
    width: 18px;
    height: 13px;
    background-image: url(../assets/ico-checkout-email.png);
}

.ico-checkout-person {
    width: 16px;
    height: 20px;
    background-image: url(../assets/ico-checkout-person.png);
}

.ico-checkout-phone {
    width: 16px;
    height: 17px;
    background-image: url(../assets/ico-checkout-phone.png);
}

body.ltr .dir-option-left-me{
    text-align: left;
}

body.ltr .dir-option-right-me{
    text-align: right;
}
</style>