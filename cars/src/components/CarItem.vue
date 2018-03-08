<template>
  <div class="caritem" @click="gotonext">
      <div class="header flex">
          <div class="car-image-div">
              <img src="../assets/car.jpg" class="car-image">
          </div>

          <div class="car-info">
              <div class="car-title flex">
                <div class="car-name">Smart ForFour</div>
                <div class="car-sub-name"> asdfa nnmn</div>
              </div>

              <div class="car-info-1 flex">
                  <img src="../assets/goldcarlogo.png" class="car-logo">
                  <div class="mini">Mini</div>
                  <div class="size-info">asdf adfja 7.2</div>
              </div>

              <div>adsfa adfa dfas afa hdefg</div>
              <div>asmdl,.asdmf.as dndfa,</div>
          </div>
      </div>

      <div class="footer">
          <div class="note"><i class="fas fa-info-circle"></i>nalsdfj asdfnd</div>
          <div class="note"><i class="fas fa-info-circle"></i>lansdlf amsdlf asndl</div>
          <div class="description">alsdf j asdmfla asdmf, jadfzm djf,asm </div>
          <div class="price flex">
              <div class="price-1"><del>403</del></div>
              <div class="price-2">$92</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"CarItem",

    methods: {
        gotonext() {
            this.$router.push({ path: 'stepflow' })
        }
    }
}
</script>

<style scoped>
    .caritem{ margin: 10px; border: solid 2px #ddd;}

    .caritem .header{border-bottom: solid 2px #ddd; align-items: center;}

    .caritem .header .car-image-div{}

    .caritem .header .car-image-div .car-image{width: 100px;}

    .caritem .header .car-info{padding: 5px;}

    .caritem .header .car-info .car-title{}

    .caritem .header .car-info .car-title .car-name{font-size:15px; font-weight: 700;}

    .caritem .header .car-info .car-info-1{align-items: center;}

    .caritem .header .car-info .car-info-1 .car-logo{width: 50px;height: 50px;}

    .caritem .header .car-info .car-info-1 .mini{background: #decfbb;padding: 2px;border-radius: 3px;color: #7b561c;font-size: 12px;}

    .caritem .header .car-info .car-info-1 .size-info{font-size: 15px; color: #4993d1; font-weight: 700; padding: 2px;}

    .caritem .footer{padding: 10px;}

    .caritem .footer .note{color: #3baf45;padding: 5px 0;}

    .caritem .footer .description{color: #888;}

    .caritem .footer .price{justify-content: space-between;margin: 5px;}

    .caritem .footer .price .price-1{color: #888;font-size: 20px;}

    .caritem .footer .price .price-2{color: red;font-size: 25px; font-weight: 900;}
</style>

