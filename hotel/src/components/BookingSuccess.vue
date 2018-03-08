<template>
<div class="booking-success">
  <div class="header">
    <div class="log-div">
      <img src="../assets/logo300.png" class="logo300">
      <div>SnapTravel</div>
      </div>
      </div>
      <div class="booking-content">
        <div class="flex virtical-center">
          <div class="text-center">
            <img src="../assets/success.png" class="success-icon">
          </div>
          <div class="col-xs-10">
            <p>Success! Your booking was successful. Want to book another room at the same hotel! <b class="text-primary">Click here.</b></p>
            <p>Confirmation number:3124256</p>
            <p class="text-primary">Resend confirmation email</p>
          </div>
        </div>
        <div class="flex justify-space-between">
          <div class="hotel-title">The New CarltonNahariya Hotel!</div>
          <div class="">
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
            <div class=" ">1 night, 1 room, 2 adults</div>
            <div class="">For</div>
          </div>

          <div class="hr"></div>
          <hr >

          <div class='flex justify-space-between margintop10'>
            <div class="">Room Subtotal:</div>
            <div class="text-danger"><del>USD95.57</del></div>
          </div>

          <div class="flex justify-space-between margintop10">
            <div class=""></div>
            <div class="text-success">USD79.64</div>
          </div>

          <div class="flex justify-space-between margintop10">
            <div class=""><u>Taxes:</u></div>
            <div class="">USD10.36</div>
          </div>
          
          <hr>

          <div class="flex justify-space-between margintop10">
            <div class=""><b>Total Price:</b></div>
            <div class=""><b>USD90.00</b></div>
          </div>

          <div class="text-danger margintop10">
            <i>Note: Total Price exculdes resort fees directly collected by the hotel at checkin. <u @click="showModalNon=true">More info</u></i>
          </div>

          <div class="flex justify-space-between margintop20">
            <div class="">Refund Policy</div>
            <div class=""><u @click="showModal=true">Non Refundable</u></div>
          </div>
      </div>
    <!--modals-->
    <Modal v-if="showModalNon">
      <h3 slot="header">Mandatory Fees</h3>
      <div slot="body">
        <p>We do not charge any booking fees. Howerver, the The New Carlton Nahariya Hotel charges the following fees that are payable directly to the hotel upon checkin:</p>
            <div class="well">All citizens of Israel will be charged the national value-added tax</div>
      </div>
      <button slot="footer" class="close-default-btn" @click="showModalNon = false">Close</button>
    </Modal>
    
    <Modal v-if="showModal">
      <h3 slot="header">Cancllation Details</h3>
      <div slot="body"><p>We do not charge any booking fees. Howerver, the The New Carlton Nahariya Hotel charges the following fees that are payable directly to the hotel upon checkin:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Cost</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$90.00</td>
                <td>Applicable until checkin date</td>
              </tr>
            </tbody>
          </table></div>
      <button slot="footer" class="close-default-btn" @click="showModal = false">Close</button>
  </Modal>
  <!--end modal-->
</div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'BookingSuccess',
  data () {
    return {
      showModal: false,
      showModalNon: false
    }
  },

  methods: {
    
  },

  components: {
    Modal
  }
}
</script>

<style scoped>

  .booking-success{ }

  .booking-success .header{height: 50px; width: 100%; background: #f49244;display: inline-flex; color: white; }

  .booking-success .header .log-div{padding-left: 5%; display: inline-flex;line-height: 50px; font-weight: 700;}

  .booking-success .header .log-div .logo300{width: 50px; height: 50px;}

  .booking-success .booking-content{padding: 20px;}

  .booking-success .success-icon{width: 50px;}

  .booking-success .hotel-image{width: 50%;border-radius: 5px;}
  
  .booking-success .table {width: 100%; max-width: 100%; margin-bottom: 1rem; background-color: transparent; }

  .booking-success table { border-collapse: collapse; }

  .booking-success .table thead th { vertical-align: bottom; border-bottom: 2px solid #dee2e6;}

  .booking-success .table td, .table th { padding: .75rem; vertical-align: top; }
  
  .booking-success th { text-align: inherit; }

  .booking-success .row {justify-content: space-between}

  .booking-success .virtical-center{align-items: center;}


  .booking-success.badge{ border-radius: 50%; background: #f49244; color: white; padding: 5px 7px; font-size: 15px;}

.booking-success .rating{ font-size: 20px; padding: 0 5px; border: solid 1px #ffcb00; border-radius: 7px; display: inline-flex; float: right;}

.booking-success .rating .star-fill{ margin: 0px;}

.booking-success .rating .star-fill:before{ content: "\2605"; color: rgb(255, 203, 0); }

.booking-success .rating .star-empty{ margin: 0px; }

.booking-success .rating .star-empty:before{ content: "\2605"; color: rgb(178, 187, 178); }

.booking-success .text-center{text-align: center;}

.booking-success .text-danger{color: #a94442;}

.booking-success .text-success{color: #3c763d;}

.booking-success .text-primary{color: #337ab7;}

.booking-success .text-muted{color: #888;}

.booking-success .justify-space-between{justify-content: space-between}

.booking-success.margintop20{margin-top:20px;}

.booking-success hr, .booking-success .hr{border:0;border-bottom: solid 0.5px gray; margin-top: 20px; margin-bottom: 20px; }

.booking-success .margintop10{margin-top: 10px;}

.booking-success .well{border: solid 1px #888; border-radius: 5px;padding: 10px;background: #ddd;}

.booking-success .close-default-btn{background: white;color: #888; border: solid 1px #888; border-radius: 5px;padding: 5px 10px;}
</style>
