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
	      		<img src="../assets/warning.png" class="warning-icon">
	      	</div>
	      	<div class="col-xs-10">
	      		<p>Your booking was cancelled.</p>
	      		<p>Confirmation number: 3124256</p>
	      		
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
            <div class="col-xs-4 text-right">Chck-in</div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-8">Thursday February 22, 2018</div>
            <div class="col-xs-4 text-right">Check-out</div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-8">1 night, 1 room, 2 adults</div>
            <div class="col-xs-4 text-right">For</div>
          </div>

          <div class="hr"></div>


          <hr>

          <div class='row margintop10'>
            <div class="col-xs-6">Room Subtotal:</div>
            <div class="col-xs-6 text-right text-danger"><del>USD95.57</del></div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-6"></div>
            <div class="col-xs-6 text-right text-success">USD79.64</div>
          </div>

          <div class="row margintop10">
            <div class="col-xs-6"><u>Taxes:</u></div>
            <div class="col-xs-6 text-right" >USD10.36</div>
          </div>
          
          <hr>

          <div class="row margintop10">
            <div class="col-xs-6"><b>Total Price:</b></div>
            <div class="col-xs-6 text-right"><b>USD90.00</b></div>
          </div>

          <div class="margintop10 text-danger">
            <i>Note: Total Price exculdes resort fees directly collected by the hotel at checkin. <u data-toggle="modal" data-target="#more-info-modal">More info</u></i>
          </div>

          
	    </div>

	    <!--modals-->

	    

		<!--end modal-->
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

.warning-icon{
	width: 50px;
}

.hotel-image{
  width: 50%;
  border-radius: 5px;
}

</style>