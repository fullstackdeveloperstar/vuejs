<template>
	<div class="booking">
	    <div class="header">
	      <div class="log-div">
	        <img src="../assets/logo300.png" class="logo300">
	        <div>SnapTravel</div>
	      </div>

	    </div>

	    <div class="booking-content">

	      <div class="row flex">
	      	<div class="col-xs-2 text-center virtical-center">
	      		<img src="../assets/success.png" class="success-icon">
	      	</div>
	      	<div class="col-xs-10">
	      		<p>Success! Your booking was successful. Want to book another room at the same hotel! <b class="text-primary">Click here.</b></p>
	      		<p>Confirmation number:3124256</p>
	      		<p class="text-primary">Resend confirmation email</p>
	      	</div>
	      </div>

	      <div class="row">
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

          <div class="row margintop10">
            <div class="col-xs-8">Wednesday February21, 2018</div>
            <div class="col-xs-4 text-right dir-option">Check-in</div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-8">Thursday February 22, 2018</div>
            <div class="col-xs-4 text-right dir-option">Check-out</div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-8 ">1 night, 1 room, 2 adults</div>
            <div class="col-xs-4 text-right dir-option">For</div>
          </div>

          <div class="hr"></div>


          <hr >

          <div class='row margintop10'>
            <div class="col-xs-6">Room Subtotal:</div>
            <div class="col-xs-6 text-right text-danger dir-option"><del>USD95.57</del></div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-6"></div>
            <div class="col-xs-6 text-right text-success dir-option">USD79.64</div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-6"><u>Taxes:</u></div>
            <div class="col-xs-6 text-right dir-option">USD10.36</div>
          </div>
          
          <hr>

          <div class="row margintop10">
            <div class="col-xs-6"><b>Total Price:</b></div>
            <div class="col-xs-6 text-right dir-option"><b>USD90.00</b></div>
          </div>

          <div class="text-danger margintop10">
            <i>Note: Total Price exculdes resort fees directly collected by the hotel at checkin. <u @click="showModalNon=true">More info</u></i>
          </div>

          <div class="row margintop20">
            <div class="col-xs-6">Refund Policy</div>
            <div class="col-xs-6 text-right"><u @click="showModal=true">Non Refundable</u></div>
          </div>
	    </div>

	    <!--modals-->

	    

    <Modal v-if="showModalNon">
      <h3 slot="header">Mandatory Fees</h3>
      <div slot="body">
        <p>We do not charge any booking fees. Howerver, the The New Carlton Nahariya Hotel charges the following fees that are payable directly to the hotel upon checkin:</p>
            <div class="well">All citizens of Israel will be charged the national value-added tax</div>
      </div>
      <button slot="footer" class="btn btn-default" @click="showModalNon = false">Close</button>
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
      <button slot="footer" class="btn btn-default" @click="showModal = false">Close</button>
  </Modal>
		<!--end modal-->
	</div>
</template>

<script>
  import Modal from './Modal.vue';
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

.booking{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.booking-content{
	padding: 20px;
}

.success-icon{
  width: 50px;
}

.hotel-image{
  width: 50%;
  border-radius: 5px;
}
body.rtl .dir-option{
  text-align: left;
}
</style>