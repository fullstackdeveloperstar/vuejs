<template>
  <div class="booking">
    <div class="header">
      <div class="log-div">
        <img src="../assets/logo300.png" class="logo300">
        <div>SnapTravel</div>
      </div>

      <div class="detail-div">
        Rate Expires In 29:28
      </div>
    </div>

    <div class="booking-content">
      
      <!-- hotel details start-->

      <div class="booking-detail-panel">
        <div class="booking-detail-panel-header" data-toggle="collapse" data-target="#hotel-panel-body">
          <span class="badge">1</span>
          <span class="title">HOTEL DETAILS</span>
        </div>

        <div class="booking-detail-panel-body" id="hotel-panel-body">
          <div class="row hotel-panel-header">
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

          <div class="hotel-image text-center">
            <img src="../assets/hotel.jpg">
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
            <label class="mute">Room Only, Non Refundable</label>
          </div>

          <hr>

          
          <div class="row check-div">
            <div class="col-xs-8">Wednesday February21, 2018</div>
            <div class="col-xs-4 text-right dir-option">Check-in</div>
          </div>

          <div class="row check-div">
            <div class="col-xs-8">Thursday February 22, 2018</div>
            <div class="col-xs-4 text-right dir-option">Check-out</div>
          </div>

          <div class="row check-div">
            <div class="col-xs-8 ">1 night, 1 room, 2 adults</div>
            <div class="col-xs-4 text-right dir-option">For</div>
          </div>

          <div class="hr"></div>


          <hr>

          <div class="row check-div">
            <div class="col-xs-6">Room Subtotal:</div>
            <div class="col-xs-6 text-right text-danger dir-option"><del>USD95.57</del></div>
          </div>

          <div class="row check-div">
            <div class="col-xs-6"></div>
            <div class="col-xs-6 text-right text-success dir-option">USD79.64</div>
          </div>

          <div class="row check-div">
            <div class="col-xs-6"><u>Taxes:</u></div>
            <div class="col-xs-6 text-right dir-option">USD10.36</div>
          </div>

          <div class="hr"></div>

          <hr>

          <div class="row check-div">
            <div class="col-xs-6"><b>Total Price:</b></div>
            <div class="col-xs-6 text-right dir-option"><b>USD90.00</b></div>
          </div>

          <div class="text-danger check-div">
            <i>Note: Total Price exculdes resort fees directly collected by the hotel at checkin. <u>More info</u></i>
          </div>

          <div class="check-div">
            <p class="dir-option"><b>Referral Code</b></p>

            <div class="row">
              <input class="form-control"> 
              <div class="apply-text">Apply</div>
            </div>
          </div>

          <div class="row check-div">
            <div class="col-xs-6">Refund Policy</div>
            <div class="col-xs-6 text-right dir-option"><u>Non Refundable</u></div>
          </div>

          <div class="check-div row text-center">
            <button class="btn btn-success">Continue</button>
          </div>

           <div class="margintop20 text-center">
            <b>Book with Confidence !</b>
           </div>

           <div class="row margintop20">
            <div class="col-xs-5">
              <img src="../assets/traveler.png" class="col-xs-12">
            </div>
            <div class="col-xs-7 text-center" >"SnapTravel is the Best New Way to Get a Hotel Deal"
              <p class="mute"><i>July 2016</i></p>
            </div>
           </div>

        </div>
      </div>
      
      <!-- hotel details end-->
      
      <!-- guest details start-->

      <div class="booking-detail-panel" >
        <div class="booking-detail-panel-header" data-toggle="collapse" data-target="#guest-panel-body">
          <span class="badge">2</span>
          <span class="title">GUEST DETAILS</span>
        </div>

        <div class="booking-detail-panel-body collapse" id="guest-panel-body">
          
          <div class="form-group row">
            <div class="col-xs-4">
              <label>Sal.</label>
              <select class="form-control">
                <option>Mr.</option>
                <option>Mrs.</option>
              </select>
            </div>
            <div class="col-xs-4">
              <label>First Name</label>
              <input class="form-control" type="text" value="Ika">
            </div>
            <div class="col-xs-4">
              <label>Last Name</label>
              <input class="form-control" type="text" value="Key">
            </div>
          </div>

          <div class="text-right">
            <u>Add another guest</u>
          </div>

          <div class="form-group">
            <label>Email</label>
            <input class="form-control" type="email">
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <input class="form-control" type="text">
          </div>

          <div class="form-group">
            <label>Special Requests(optional)</label>
            <textarea class="form-control"
              placeholder="Enter andy special requests here and we will pass this along to the hotel.

Our agents will also call the hotel to negotiate a free upgrade(subject to availability)." rows="5"></textarea>
          </div>

          <div class="row text-center">
            <button class="btn btn-success">Next</button>          
          </div>

          <div class="row text-center check-div">  
            <b>Congratulations!</b>  
          </div>

          <div class="row">
            <div class="col-xs-12 text-center">You got our best rate! Prices may change anytime so <b>Book Now</b> to avoid disappointment.</div>
          </div>

        </div>
      </div>

      <!-- guest details end-->

      <!--payment details start -->

      <div class="booking-detail-panel" >
        <div class="booking-detail-panel-header" data-toggle="collapse" data-target="#payment-panel-body">
          <span class="badge">3</span>
          <span class="title">PAYMENT DETAILS</span>
        </div>

        <div class="booking-detail-panel-body collapse" id="payment-panel-body">
          
          <div class='row'>
            <div class="col-xs-6"><b>Total Charged:</b></div>
            <div class="col-xs-6 text-right dir-option"><b>USD90.00</b></div>
          </div>

          <div class='row margintop20'>
            <div class="col-xs-6"><b>Credit Card Number</b></div>
            <div class="col-xs-6 text-right dir-option">
              <img src="../assets/card.jpg" class="creditcard">
            </div>
          </div>

          <div class="form-group margintop20">
            <input class="form-control" type="text">
          </div>

          <div class="form-group row card-info-2">
            <div class="col-xs-4">
              <label>Expiry Date</label>
              <select class="form-control">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>20</option>
                <option>31</option>
              </select>
            </div>
            <div class="col-xs-4">
              <label>&nbsp;</label>
              <input class="form-control" type="text" value="" placeholder="YY">
            </div>
            <div class="col-xs-4">
              <label>CVV/CVC
                <i class="cvv-icon glyphicon glyphicon-info-sign"></i>
              </label>
              <input class="form-control" type="text" value="">
            </div>
          </div>

          <div class="form-group margintop20">
            <label>Name on Card</label>
            <input class="form-control" type="text">
          </div>

          <div class="form-group margintop20">
            <label>Billing Address</label>
            <input class="form-control" type="text" placeholder="Enter a location">
          </div>

          <div class="form-group row">
            <div class="col-xs-6">
              <label>City</label>
              <input class="form-control" type="text" value="">  
            </div>
            <div class="col-xs-6">
              <label>State/Province</label>
              <select class="form-control">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>


          <div class="form-group row">
            <div class="col-xs-6">
              <label>Country</label>
              <select class="form-control">
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Afghanistan">Afghanistan</option>
              </select>
            </div>

            <div class="col-xs-6">
              <label>Zip/Postal Code</label>
              <input class="form-control" type="text" value="">  
            </div>

          </div>

          <div class="form-group margintop20">
            <label>Phone Number</label>
            <input class="form-control" type="text" placeholder="934598274353">
          </div>

          <div class="form-group"> 
            <div class="checkbox">
              <label><input type="checkbox"> Save credit card for future bookings</label>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12">
              <b>I agree</b> with the  privacy statement, and general <u>terms and conditions</u> and Priceline.com's <u class="text-primary">terms and conditions and privacy policy</u> by booking this room
            </div>
          </div>

          <div class="row text-center margin-t-20">
            <button class="btn btn-success" v-on:click="completBooking">Complete Booking</button>          
          </div>

          <div class="hr"></div>
          <hr>

          <div class="row">
            <div class='col-md-12 secure-note'>
              <img src="../assets/lock.png" class="lock-icon">
              <div class="lock-text">We use secure and encrypted transmission to protect your personal information</div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 text-center">
              <img src="../assets/verisign.png" class="secure-icon">
            </div>
          </div>
      </div>
      <!--payment details end -->

  </div>

    <div class="booking-process" v-show="isProcessing">
      <div class="booking-process-bg">
      </div>
      <div class="booking-process-content text-center">
        <p>Processing Payment... </p>
        <p>Please do not press back or refresh the page</p>
        <p><u v-on:click="gotosuccess">success</u></p>
        <p><u v-on:click="gotofailed">faild</u></p>
      </div>
    </div>
    </div>

  <Modal v-if="showModal">
    <h3 slot="header">Booking Failed</h3>
    <p slot="body">Your bank has declined this transaction, please contact your card provider for more information. Alternatively, you can try again with a different credit card.</p>
    <button slot="footer" class="btn btn-success" @click="showModal = false">Ok</button>
  </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';
export default {
  name: 'SnapTravel',
  data () {
    return {
      isProcessing: false,
      showModal: false
    }
  },

  methods: {
    completBooking() {
      this.isProcessing = true;
    },

    gotosuccess() {
      this.$router.push({ path:'bookingsuccess' });
    },

    gotofailed() {
      this.isProcessing = false;
      this.showModal = true;
    },

    hideModal() {
    }
  },

  components:{
    Modal
  }
}
</script>


<style scoped>

.booking{}

.booking .booking-process{ width: 100%; height: 100%; position: fixed; top: 0; left: 0; display: flex; align-items: center; justify-content: center;}

.booking .booking-process-bg{ width: 100%; height: 100%; position: absolute; top: 0; left: 0; opacity: 0.7; background: #fff;}

.booking .booking-process-content{ z-index: 1;}

.booking .header{ height: 50px; width: 100%; background: #f49244; display: inline-flex; color: white;}

.booking .header .log-div{ padding-left: 5%; display: inline-flex; line-height: 50px; font-weight: 700;}

.booking .header .log-div .logo300{ width: 50px; height: 50px;}

.booking .header .detail-div{ width: 100%; margin-right: 5px; line-height: 50px; font-weight: 700; text-align: right;}

.booking .booking-content{ padding: 5px; }

.booking .booking-detail-panel{ padding: 5px;}

.booking .booking-detail-panel .booking-detail-panel-header { padding: 5px; height: 50px; line-height: 50px; border-bottom: solid 1px #ddd;}

.booking .booking-detail-panel .booking-detail-panel-body{ padding: 20px 10px;}

.booking .hotel-panel-header{ line-height: 40px; justify-content: space-between;}

.booking .hotel-title{ font-size: 12px;}

.booking .hotel-image{ margin-top: 20px;}

.booking .hotel-image img{ width: 50%; border-radius: 5px;}

.booking .room-info{ margin-top: 15px;}

.booking .check-div{  margin-top: 10px; justify-content: center;}

.booking .apply-text{ width: 30%; text-align: center; line-height: 30px; color:rgb(47,121,187);}

.booking .creditcard{ height: 20px;}

.booking .cvv-icon{ font-size:12px; color: #ddd;}

.booking .secure-note{ padding: 20px;}

.booking .secure-note .lock-icon{ width:20px; height: 25px; float: left; margin-right:5px;}

.booking .secure-note .lock-text{ padding: 0 28px;}

.booking .secure-icon{ width: 80%;}

.booking .btn-success{ width: 50%; margin: auto;}

.booking .margin-t-20{margin-top: 20px; }

.booking .card-info-2{ align-items: flex-end;}
</style>
