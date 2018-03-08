<template>
    <div class="stepflow">
        <div class="section-checkout">
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
            </div>
        </div>

        <div class="user-info">
            <i class="fas fa-user"></i>
            <b>adfa adfads</b>
            <p>alkdfjal alsdkjflasd lasdkjflasd fal alkdjf</p>
            <p>alkdfjal<span> adfa</span></p>
        </div>

        <div class="user-general-info flex">
            <div><b> adfalj </b></div>
            <div> (24 - 64) </div>
        </div>

        <div class="user-general-info-item">
            <input placeholder="we dla'" type="text" class="full-size-input">
        </div>

        <div class="user-general-info-item">
            <input placeholder="adfja adfjal" type="text" class="full-size-input">
        </div>

        <div class="user-general-info-item flex">
            <div class="gender-info">
                <select>
                    <option>jalsd</option>
                    <option>adf</option>
                </select>
            </div>
            <div class="date-info flex">
                <label>adsfa </label>
                <input type="text" placeholder="01/01/1990">
            </div>

        </div>


        <div class="user-info-2 flex">
            <div><b>adfa</b></div>
            <div><img src="../assets/logo-thawte-alt.png"></div>
        </div>

        <div class="user-info-3">
            <p>adsfasdfa adfasdfad adfadf dfad adfad</p>
            <p>ada adfad adf d</p>
        </div>

        <div class="user-contact">
            <div class="input-item flex">
                <div class="input-icon"><i class="fas fa-user"></i></div>
                <input type="text" placeholder="adalk asdklfj">
            </div>

            <div class="input-item flex">
                <div class="input-icon"><i class="fas fa-user"></i></div>
                <input type="text" placeholder="addklfj">
            </div>

            <div class="input-item flex">
                <div class="input-icon"><i class="fas fa-envelope"></i></div>
                <input type="text" placeholder="add">
            </div>

             <div class="input-item flex">
                <div class="input-icon"><i class="fas fa-phone"></i></div>
                <input type="text" placeholder="adjfl asdkjf">
            </div>
        </div>

        <div class="user-card-info">
            <div class="card-input">
                <input type="text" placeholder="adlkfj fka">
            </div>

            <div class="card-input">
                <input type="text" placeholder="adlkfj fka">
            </div>

            <div class="card-note flex">
                <div class="note"><i class="fas fa-plus-circle"></i>asdjfla asdkfjladkj</div>
                <div class="cards flex">
                    <img src="../assets/credit-card1.png">
                    <img src="../assets/credit-card2.png">
                    <img src="../assets/credit-card3.png">
                    <img src="../assets/credit-card4.png">
                    <img src="../assets/credit-card5.png">
                </div>
            </div>
        </div>
        
        <div class="user-info-4">
            <h3>asdfjl a :</h3>
            <h4><span>aadf 2</span><span> : </span> <span> jasd kja</span> </h4>

            <div class="price-line flex">
                <div class="item">ald 1 : adkjfl</div>
                <i class="dots"></i>
                <div class="price">$398</div>
            </div>

            <div class="note"><i class="fas fa-plus-circle"></i>asdjfla asdkfjladkj</div>
        </div>

        <div class="user-info-5">
            <p><span>-</span>asdfa adfjalkd  askdjf asdkjfla </p>
            <p><span>-</span>asdfa adfjalkd  askdjf asdkjfla </p>
            <p><span>-</span>asdfa adfjalkd  askdjf asdkjfla </p>
            <p><span>-</span>asdfa adfjalkd  askdjf asdkjfla </p>
            <div class="flex">
                <input type="checkbox">alkdjfa klfjaldj
            </div>

            <div class="flex total-price">
                <div class="price">
                    <p class="description">adfadfa:</p>
                    <p class="amount">$92</p>
                </div>

                <div class="checkout-btn">
                    <button @click="gotonext">adfad adfa</button>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
export default{
    name: "StepFlow",
    methods: {
        gotonext(){
            this.$router.push({ path: 'checkout' })
        }
    }
}
</script>

<style scope>
.section-checkout .section-nav {font-size: 10px; line-height: 0; padding: 11px 6px; background: linear-gradient(to bottom, #ecf1f7 0%, #fff 75%);}

.section-checkout .section-nav ol { text-align: justify; counter-reset: step;position: relative; padding: 0; margin: 0; list-style: none outside none;}

.section-checkout .section-nav ol:before { content: ''; height: 15px;display: block; position: absolute; top: 12px; right: 0; left: 0; z-index: 1;   background-color: #dae3ed; border-width: 7px 0; border-style: solid; border-color: #fff;}

.section-checkout .checkout .section-nav li.step-current { color: #35993f;}

.section-checkout .section-nav li:first-child { text-align: right; z-index: 3;}

.section-checkout .section-nav li {counter-increment: step; color: #9aacc1; letter-spacing: -0.01em; display: inline-block; vertical-align: middle; position: relative; padding-bottom: 20px; z-index: 2;}

.section-checkout .section-nav li.step-done:before, .section-checkout .section-nav li.step-current:before { background-color: #35993f;}

.section-checkout .section-nav li:first-child:before { margin: 0 0 0 auto;}

.section-checkout .section-nav li:before {content: counter(step); font-size: 25px; line-height: 27px; color: #fff; font-weight: 700; text-align: center; width: 39px; height: 39px; display: block; position: relative; z-index: 1; border: 5px solid #fff; margin: auto; background-color: #dae2ed; box-shadow: inset 0 1px 0 rgba(0,0,0,.05); border-radius: 50%;}

.section-checkout .section-nav li:first-child span {right: 0;}
	
.section-checkout .section-nav li span {font-size: 1.35em; line-height: 1.48; white-space: nowrap; display: block; position: absolute; bottom: -3px;}

.section-checkout .section-nav li.step-current i { display: block;}

.section-checkout .section-nav li i {display: none; position: absolute; top: 0; bottom: 21px; right: 60px; z-index: 3; margin: auto;}

.ltr .section-checkout .section-nav li i{right: -60px;transform: rotate(180deg);}

.section-checkout .ico-airplane-checkout {width: 29px; height: 35px; background-image: url(../assets/ico-airplane-checkout.png);}

.section-checkout .logo, [class^="ico-"], .slider-gallery .owl-prev:before, .slider-gallery .owl-next:before {display: inline-block; vertical-align: middle; background-repeat: no-repeat; background-position: 0 0; background-size: 100% 100%;}

.section-checkout .section-nav li.step-current:after { width: 50px; height: 0; border-width: 3px 55px 2px 0; border-style: solid; border-color: transparent #35993f transparent transparent; background-color: transparent;}

.ltr .section-checkout .section-nav li.step-current:after{ border-width: 3px 0px 2px 55px;border-color: transparent transparent transparent #35993f;}

.section-checkout .section-nav li.step-done:after, .section-checkout .section-nav li.step-current:after { display: block;}

.section-checkout .section-nav li:after { content: ''; width: calc(50vw - 48px); height: 6px; display: none; position: absolute; top: 50%; right: 32px; z-index: 2; margin-top: -13px; background-color: #35993f;}

.ltr .section-checkout .section-nav li:after {left: 32px; right: auto;}

.section-checkout .section-nav li:nth-child(2) { z-index: 2;}

.section-checkout .section-nav li[data-v-1b863436] {counter-increment: step; color: #9aacc1; letter-spacing: -0.01em; display: inline-block; vertical-align: middle; position: relative; padding-bottom: 20px; z-index: 2;}

.section-checkout .section-nav li:last-child {text-align: left; z-index: 1;}

.section-checkout .section-nav li:last-child:before { margin: 0 auto 0 0;}	

.section-checkout .section-nav li:last-child span {left: 0;}

.section-checkout .section-nav li:last-child i { display: none;}

.section-checkout .section-nav li.step-done, .section-checkout .section-nav li.step-current { color: #35993f;}

.section-checkout .section-nav li:first-child {text-align: right;z-index: 3;}

.section-checkout .section-nav li:nth-child(2) span { left: 50%; -webkit-transform: translateX(-50%);}

.section-checkout .section-nav ol:after { content: ''; width: 100%; display: inline-block;}

*, *:before, *:after { padding: 0; margin: 0; outline: 0; box-sizing: border-box;}

.stepflow .user-info{padding: 10px;}

.stepflow .user-info svg{color: darkgrey;}

.stepflow .user-info p{color: darkgray;}

.stepflow .user-info p span{color: #5ca4dc;}

.stepflow .user-general-info{padding: 10px;}

.stepflow .user-general-info-item{padding: 10px;}

.stepflow .user-general-info-item .full-size-input{width: 100%;}

.stepflow .user-general-info-item.flex .gender-info{flex-grow: 2;padding: 10px;}

.stepflow .user-general-info-item.flex .gender-info select{width: 100%;}

.stepflow .user-general-info-item.flex .date-info{flex-grow: 3;padding: 10px;align-items: center;}

.stepflow .user-general-info-item.flex .date-info input{width: 100%;}

.stepflow .user-general-info-item.flex{justify-content: space-between;}

.stepflow input, .stepflow select{border: solid 1px #888; padding: 10px; border-radius: 3px;}

.stepflow .user-info-1{margin: 5px;padding:10px 5px;background: #efede0;}

.stepflow .user-info-1 p{margin: 10px 0;}

.stepflow .user-info-1 p.focus{color:#5ca4dc;}

.stepflow .user-info-1 select{width: 100%;}

.stepflow .user-info-2{justify-content: space-between;margin: 10px;}

.stepflow .user-info-2 img{width: 100px;}

.stepflow .user-info-3{margin: 10px;font-size: 12px;color: darkgray;}

.stepflow .user-contact{margin: 10px; padding: 10px;background: #eef8f9;}

.stepflow .user-contact .input-item{justify-content: space-between;margin-bottom: 10px;}

.stepflow .user-contact .input-item .input-icon{position: absolute;}

.stepflow .user-contact .input-item input{width: 100%;padding: 10px 50px;}

.stepflow .user-contact .input-item .input-icon{width: 47px; height: 36px; display: flex; align-items: center; justify-content: center;}

.stepflow .user-contact .input-item .input-icon svg{font-size: 20px;color: darkgrey;}

.stepflow .user-card-info{margin: 5px;padding: 5px;background: #adadad}

.stepflow .user-card-info .card-input{margin: 10px 0;}

.stepflow .user-card-info .card-input input{width: 100%;}

.stepflow .user-card-info .card-note{justify-content: space-between;}

.stepflow .user-card-info .card-note .note{color: #5ca4dc;}

.stepflow .user-card-info .card-note .cards{}

.stepflow .user-card-info .card-note .cards img{width: 20px; height: 15px; margin: 3px; background: white; border-radius: 3px;}

.stepflow .user-info-4{margin: 10px;}

.stepflow .user-info-4 .price-line{justify-content: space-between;align-items: center;margin-top: 10px;}

.stepflow .user-info-4 .price-line .item{flex-grow: 5;font-size: 12px;}

.stepflow .user-info-4 .price-line .dots{border-width:0.5px; height: 0.5px; border-style: dashed; flex-grow: 30;}

.stepflow .user-info-4 .price-line .price{flex-grow: 5;text-align: center;font-weight: 700; font-size: 20px;color: darkgray;}

.stepflow .user-info-4 .note{color: #5ca4dc;}

.stepflow .user-info-5{margin: 10px; background: #ccc; padding: 5px;font-size: 15px;}

.stepflow .user-info-5 p{margin: 10px 0;}

.stepflow .user-info-5 .flex{align-items: center;}

.stepflow .total-price {justify-content: space-between;align-items: center;}

.stepflow .total-price .price{text-align: center;padding: 10px;}

.stepflow .total-price .price .description{color: #555;}

.stepflow .total-price .price .amount{font-size: 25px;font-weight: 800;}

.stepflow .total-price .checkout-btn{}

.stepflow .total-price .checkout-btn button{padding: 10px 30px; color: white; background: #2e9439; border: 0; border-radius: 3px 3px 0 0; border-bottom: solid 1px #000; margin: 20px;}


</style>