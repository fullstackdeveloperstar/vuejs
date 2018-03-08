<template>
<div class="checkout">  
  <div class="car-top-image">
    <img src="../assets/car.jpg">
  </div>

  <div class="content">
    <div class="car-title flex">
      <div class="car-name">Smart ForFour</div>
      <div class="car-subname"> namd andnmadf</div>
    </div>

    <div class="info-1 flex">
      <div class="mini">Mini</div>
      <div class="like"><i class="fas fa-thumbs-up"></i> 7.2 mnm asjdf</div>
    </div>

    <div class="info-2">
      <div class="title">asdfa alsag n:</div>
      <div class="details flex">
        <div class="item flex">
          <span class="info">
            <i class="fab fa-nintendo-switch"></i>
          </span>
          <span class="info">asdfa:</span>
          <span class="count">4</span>
        </div>
        <div class="item flex">
          <span class="info">
            <i class="fas fa-certificate"></i>
          </span>
          <span class="info">asdfa:</span>
          <span class="count">4</span>
        </div>
        <div class="item flex">
          <span class="info">
            <i class="fas fa-building"></i>
          </span>
          <span class="info">asdfa:</span>
          <span class="count">4</span>
        </div>
        <div class="item flex">
          <span class="info">
            <i class="fas fa-user"></i>
          </span>
          <span class="info">asdfa:</span>
          <span class="count">4</span>
        </div>
        <div class="item flex">
          <span class="info">
            <i class="fas fa-coffee"></i>
          </span>
          <span class="info">asdfa:</span>
          <span class="count">4</span>
        </div>
        
      </div>
    </div>

    <div class="info-3">
      <div class="title">
        <i class="fas fa-gift"></i>
        asdj f askdj lasdk faldj
      </div>

      <div class="details flex">
        <div class="item">
          <i class="fas fa-circle"></i>asdfa
        </div>

         <div class="item">
          <i class="fas fa-circle"></i>asda faasdf
         </div>

          <div class="item">
            <i class="fas fa-circle"></i>asdfa df
          </div>

           <div class="item">
            <i class="fas fa-circle"></i>asa dfa
          </div>
      </div>
    </div>

    <div class="info-4">
      <div class="item">
        <i class="fas fa-book"></i>
        <b>asdf aasd f:</b>
        lasdkfj 
      </div>

      <div class="item">
        <i class="fas fa-user-circle"></i>
        <b>mnadjf aasa sdfd f:</b>
        lasdkfj sadf
      </div>
    </div>

    <div class="car-panel">
      <div class="header">
        <h3>asdf  laksdj  askdj:</h3>
      </div>

      <div class="body">
        <div class="content-1 flex">
          <div class="car-image-div">
            <img src="../assets/car.jpg">
          </div>

          <div class="car-info">
            <div class="title flex">
              <span class="name">Smar ForFour</span>
              <span class="subname">alsdj dfa</span>
            </div>

            <div class="mini">
              <span class="mini">Mini</span>
            </div>

            <div class="goldcar">
              <img src="../assets/goldcarlogo.png">
            </div>

            <div>
              asdfj laksdjf:
            </div>
          </div>
        </div>

        <div class="content-2">
          <h4>asdf ajdfakj:</h4>
          <div class="flex">
            <span class="title">dfjsdlfg :</span>
            <span class="title-info">asdfas</span>
          </div>

          <div class="flex">
            <span class="title">ads fdlfg :</span>
            <span class="title-info">10/04/2018</span>
          </div>

          <div class="flex">
            <span class="title">dlfg :</span>
            <span class="title-info">10:00</span>
          </div>
        </div>

        <div class="content-3">

          <h4>asdf ajdfakj:</h4>
          <div class="flex">
            <span class="title">dfjsdlfg :</span>
            <span class="title-info">asdfas</span>
          </div>

          <div class="flex">
            <span class="title">ads fdlfg :</span>
            <span class="title-info">10/04/2018</span>
          </div>

          <div class="flex">
            <span class="title">dlfg :</span>
            <span class="title-info">10:00</span>
          </div>
        </div>
      </div>

      <div class="footer flex">
        <div class="title">lasdj alsd :</div>
        <div class="price">$92</div>
      </div>
    </div>

    <DropDown>
      <span slot="header"> adlkf asd flkad  df</span>
      <div class="flex" slot="body">
        <ul>
          <li>alsdjf aasld  asldkfj as alskdjf asdklj adkfj</li>
          <li>sadkjff a alskdjf bekrjnksdfjjalsdk  askdjf ksldjf  lkasdjf alskdj alajds</li>
          <li>ajsjd flkjd oeru093esd asdkjfdyuwej sdfna dojwe </li>
          <li>asdkljs d woeiur09 aksdjf ajier0df o</li>
        </ul>
      </div>
    </DropDown>

    <div class="info-5">
      <div class="title">adskfjal</div>
      <div class="price">$92</div>

      <div class="title">asdlf asdfka asdk</div>
      <div class="price">$328.44</div>

      <div class="price-line flex">
          <div class="item">ald 1 : adkjfl</div>
          <i class="dots"></i>
          <div class="price">$328.44</div>
      </div>

      <p class="description description1">*alsdkjf akdjfl asdlkjf aalskdj flajdfl ksdjf</p>

      <p class="description">alsdkjf akdjfl asdlkjf aalskdj flajdfl ksdjf asdjf aldkjf al aslkdjf aslkdjf asdklfj aslkdjf asldkfj alksdjflaksjdflakjdf al alsdkjfl aksdjflaksdjflaksjdfl a aslkdfjlasd flkasdjf afaj</p>
    </div>
  </div>
</div>
</template>

<script>
import DropDown from "./DropDown.vue"
export default {
  name: "CheckOut",
  components:{
    DropDown
  }
}
</script>

<style scoped>
  .checkout{}

  .checkout .car-top-image{}

  .checkout .car-top-image img{width: 100%;}

  .checkout .content{margin: 10px;}

  .checkout .content .car-title{align-items: center;}

  .checkout .content .car-title .car-name{font-size: 20px;font-weight: 700;}

  .checkout .content .car-title .car-subname{font-size: 15px;font-weight: 700;padding: 5px;}

  .checkout .content .info-1{align-items: center; padding-bottom: 10px;border-bottom: solid 1px #ddd;}

  .checkout .content .info-1 .mini{background: #decfbb;padding: 2px;border-radius: 3px;color: #7b561c;font-size: 12px;}

  .checkout .content .info-1 .like{margin: 0 5px;color: #018096;}

  .checkout .content .info-2{padding: 10px 0;}

  .checkout .content .info-2 .title{font-size: 20px; font-weight: 700;}

  .checkout .content .info-2 .details{align-items: center;flex-wrap: wrap; padding: 10px 0; border-bottom: solid 1px #ddd;}

  .checkout .content .info-2 .details .item{padding: 0 5px; font-size: 15px;}

  .checkout .content .info-2 .details .item .info{color: #888; padding: 0 2px;}

  .checkout .content .info-3{padding: 10px 0; border-bottom: solid 1px #ddd;}

  .checkout .content .info-3 .title{font-size: 15px; font-weight: 700;}

  .checkout .content .info-3 .title svg{color:#5bb962;}

  .checkout .content .info-3 .details{align-items: center}

  .checkout .content .info-3 .details .item{font-size: 12px;padding: 0 5px;}

  .checkout .content .info-3 .details .item svg{font-size: 8px;color: #5bb962}

  .checkout .content .info-4{margin: 10px 0;}

  .checkout .content .info-4 .item{margin: 5px 0; color: #888; font-size: 12px;}

  .checkout .content .info-4 .item b{color: #000;}

  .checkout .content .car-panel{border: solid 3px #ddd;border-radius: 5px;}

  .checkout .content .car-panel .header{padding: 5px;border-bottom: solid 1px #ddd;}

  .checkout .content .car-panel .header h3{margin: 0;}

  .checkout .content .car-panel .body{}

  .checkout .content .car-panel .body .content-1{align-items: center;}

  .checkout .content .car-panel .body .content-1 .car-image-div{}

  .checkout .content .car-panel .body .content-1 .car-image-div img{width: 100px;}

  .checkout .content .car-panel .body .content-1 .car-info{padding: 0 5px;}

  .checkout .content .car-panel .body .content-1 .car-info .title{align-items: flex-end;}

  .checkout .content .car-panel .body .content-1 .car-info .title .name{font-size: 15px;font-weight: 700;}

  .checkout .content .car-panel .body .content-1 .car-info .title .subname{font-size: 12px;}

  .checkout .content .car-panel .body .content-1 .car-info .mini{}

  .checkout .content .car-panel .body .content-1 .car-info .mini .mini{background: #decfbb;padding: 2px;border-radius: 3px;color: #7b561c;font-size: 12px;}

  .checkout .content .car-panel .body .content-1 .car-info .goldcar img{width: 50px;height: 50px;margin: 0 -10px;}

  .checkout .content .car-panel .body .content-2{padding: 5px;border-bottom: solid 1px #ddd;}

  .checkout .content .car-panel .body .content-2 .title{color: #888;}

  .checkout .content .car-panel .body .content-3{padding: 5px;}

  .checkout .content .car-panel .body .content-3 .title{color: #888;}

  .checkout .content .car-panel .footer{background: #eee;padding: 10px;align-items: center;justify-content: space-between;}

  .checkout .content .car-panel .footer .title{color: #888;font-size: 20px}

  .checkout .content .car-panel .footer .price{font-size: 30px; font-weight: 700;}

  .checkout .content ul {padding: 5px 15px;}

  .checkout .content .info-5{padding: 10px;background: #eee;margin: 5px;border-radius: 3px;}

  .checkout .content .info-5 .title{color: #888;} 

  .checkout .content .info-5 .price{font-size: 20px; font-weight: 700;} 

  .checkout .content .info-5 .price-line{justify-content: space-between;align-items: center;margin-top: 10px;}

  .checkout .content .info-5 .price-line .item{flex-grow: 5;font-size: 12px;}

  .checkout .content .info-5 .price-line .dots{border-width:0.5px; height: 0.5px; border-style: dashed; flex-grow: 30;}

  .checkout .content .info-5 .price-line .price{flex-grow: 5;text-align: center;font-weight: 700; font-size: 20px;color: darkgray;}

  .checkout .content .info-5 .description {font-size: 12px; color: #888;}

  .checkout .content .info-5 .description1 {margin-bottom: 20px;}


</style>

