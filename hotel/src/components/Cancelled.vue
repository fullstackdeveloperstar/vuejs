<template>
  <div class="cancelled">
    <div class="header">
        <div class="log-div">
          <img src="../assets/logo300.png" class="logo300">
          <div>SnapTravel</div>
          </div>
        </div>
      <div class="cancelled-content">
        <div class="flex">
          <div class="text-center virtical-center">
            <img src="../assets/warning.png" class="warning-icon">
          </div>
          <div class="col-xs-10">
            <p>Your booking was cancelled.</p>
            <p>Confirmation number: 3124256</p>
          </div>
        </div>
        <div class="flex justify-space-between">
            <div class="hotel-title col-xs-7">The New CarltonNahariya Hotel!</div>
            <div class="col-xs-5">
              <div class="rating">
                <span class="star-fill"></span>
                <span class="star-fill"></span>
                <span class="star-fill"></span>
                <span class="star-fill"></span>
                <span class="star-empty"></span>
              </div>
            </div>
          </div>

          <div class="margintop20 text-center">
            <img src="../assets/hotel.jpg" class="hotel-image">
          </div>

          <div class="room-info">
            Ga'aton 23 Nahariya IL
          </div>

          <div  class="room-info">
            Hotel Phone Number: +97249005555
          </div>

          <div class="room-info">
            Double Or Twin Room - Non-Refundable
          </div>

          <div class="room-info">
            <label class="text-muted">Room Only, Non Refundable</label>
          </div>

          <hr>

          <div class="flex justify-space-between margintop10">
            <div class="">Wednesday February21, 2018</div>
            <div class="">Check-in</div>
          </div>

          <div class="flex justify-space-between margintop10">
            <div class="">Thursday February 22, 2018</div>
            <div class="">Check-out</div>
          </div>

          <div class="flex justify-space-between margintop10">
            <div class="">1 night, 1 room, 2 adults</div>
            <div class="">For</div>
          </div>

         
          <hr>

          <div class='flex justify-space-between margintop10'>
            <div class="">Room Subtotal:</div>
            <div class="text-danger"><del>USD95.57</del></div>
          </div>

          <div class="flex justify-space-between margintop10">
            <div class=""></div>
            <div class=" text-success">USD79.64</div>
          </div>

          <div class="flex justify-space-between margintop10">
            <div class=""><u>Taxes:</u></div>
            <div class="" >USD10.36</div>
          </div>
          
          <hr>

          <div class="flex justify-space-between margintop10">
            <div class=""><b>Total Price:</b></div>
            <div class=""><b>USD90.00</b></div>
          </div>

          <div class="margintop10 text-danger">
            <i><i>Note:</i> Total Price exculdes resort fees directly collected by the hotel at checkin. <u data-toggle="modal" data-target="#more-info-modal">More info</u></i>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Cancelled  ',
  data () {
    return {
      
    }
  },

  methods: {
    
  }
}
</script>

<style scoped>

.cancelled .header{height: 50px;width: 100%; background: #f49244;display: inline-flex;color: white;}

.cancelled .header .log-div{ padding-left: 5%;display: inline-flex;line-height: 50px;font-weight: 700;}

.cancelled .header .log-div .logo300{width: 50px; height: 50px; }

.cancelled .cancelled-content{padding: 20px;}

.cancelled .warning-icon{ width: 50px;}

.cancelled .hotel-image{ width: 50%; border-radius: 5px;}

.cancelled .row{justify-content: space-between;}

.cancelled .rating{ font-size: 20px; padding: 0 5px; border: solid 1px #ffcb00; border-radius: 7px; display: inline-flex; float: right;}

.cancelled .rating .star-fill{ margin: 0px;}

.cancelled .rating .star-fill:before{ content: "\2605"; color: rgb(255, 203, 0); }

.cancelled .rating .star-empty{ margin: 0px; }

.cancelled .rating .star-empty:before{ content: "\2605"; color: rgb(178, 187, 178); }

.cancelled .text-center{text-align: center;}

.cancelled .text-danger{color: #a94442;}

.cancelled .text-success{color: #3c763d;}

.cancelled .text-primary{color: #337ab7;}

.cancelled .text-muted{color: #888;}

.cancelled .justify-space-between{justify-content: space-between}

.cancelled .margintop20{margin-top:20px;}

.cancelled hr, .cancelled .hr{border:0;border-bottom: solid 1px gray; margin-top: 20px; margin-bottom: 20px; }

.cancelled .margintop10{margin-top: 10px;}
</style>
