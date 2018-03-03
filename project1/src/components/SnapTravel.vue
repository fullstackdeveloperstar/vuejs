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

            <div class="flex">
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

          <div class="row text-center">
            You got our best rate! Prices may change anytime so <b>Book Now</b> to avoid disappointment.
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
            <div class="col-xs-6 text-right"><b>USD90.00</b></div>
          </div>

          <div class='row margintop20'>
            <div class="col-xs-6"><b>Credit Card Number</b></div>
            <div class="col-xs-6 text-right">
              <img src="../assets/card.jpg" class="creditcard">
            </div>
          </div>

          <div class="form-group margintop20">
            <input class="form-control" type="text">
          </div>

          <div class="form-group row">
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
                <option value="Albania">Albania</option> 
                <option value="Algeria">Algeria</option> 
                <option value="American Samoa">American Samoa</option> 
                <option value="Andorra">Andorra</option> 
                <option value="Angola">Angola</option> 
                <option value="Anguilla">Anguilla</option> 
                <option value="Antarctica">Antarctica</option> 
                <option value="Antigua and Barbuda">Antigua and Barbuda</option> 
                <option value="Argentina">Argentina</option> 
                <option value="Armenia">Armenia</option> 
                <option value="Aruba">Aruba</option> 
                <option value="Australia">Australia</option> 
                <option value="Austria">Austria</option> 
                <option value="Azerbaijan">Azerbaijan</option> 
                <option value="Bahamas">Bahamas</option> 
                <option value="Bahrain">Bahrain</option> 
                <option value="Bangladesh">Bangladesh</option> 
                <option value="Barbados">Barbados</option> 
                <option value="Belarus">Belarus</option> 
                <option value="Belgium">Belgium</option> 
                <option value="Belize">Belize</option> 
                <option value="Benin">Benin</option> 
                <option value="Bermuda">Bermuda</option> 
                <option value="Bhutan">Bhutan</option> 
                <option value="Bolivia">Bolivia</option> 
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> 
                <option value="Botswana">Botswana</option> 
                <option value="Bouvet Island">Bouvet Island</option> 
                <option value="Brazil">Brazil</option> 
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> 
                <option value="Brunei Darussalam">Brunei Darussalam</option> 
                <option value="Bulgaria">Bulgaria</option> 
                <option value="Burkina Faso">Burkina Faso</option> 
                <option value="Burundi">Burundi</option> 
                <option value="Cambodia">Cambodia</option> 
                <option value="Cameroon">Cameroon</option> 
                <option value="Canada">Canada</option> 
                <option value="Cape Verde">Cape Verde</option> 
                <option value="Cayman Islands">Cayman Islands</option> 
                <option value="Central African Republic">Central African Republic</option> 
                <option value="Chad">Chad</option> 
                <option value="Chile">Chile</option> 
                <option value="China">China</option> 
                <option value="Christmas Island">Christmas Island</option> 
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> 
                <option value="Colombia">Colombia</option> 
                <option value="Comoros">Comoros</option> 
                <option value="Congo">Congo</option> 
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> 
                <option value="Cook Islands">Cook Islands</option> 
                <option value="Costa Rica">Costa Rica</option> 
                <option value="Cote D'ivoire">Cote D'ivoire</option> 
                <option value="Croatia">Croatia</option> 
                <option value="Cuba">Cuba</option> 
                <option value="Cyprus">Cyprus</option> 
                <option value="Czech Republic">Czech Republic</option> 
                <option value="Denmark">Denmark</option> 
                <option value="Djibouti">Djibouti</option> 
                <option value="Dominica">Dominica</option> 
                <option value="Dominican Republic">Dominican Republic</option> 
                <option value="Ecuador">Ecuador</option> 
                <option value="Egypt">Egypt</option> 
                <option value="El Salvador">El Salvador</option> 
                <option value="Equatorial Guinea">Equatorial Guinea</option> 
                <option value="Eritrea">Eritrea</option> 
                <option value="Estonia">Estonia</option> 
                <option value="Ethiopia">Ethiopia</option> 
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> 
                <option value="Faroe Islands">Faroe Islands</option> 
                <option value="Fiji">Fiji</option> 
                <option value="Finland">Finland</option> 
                <option value="France">France</option> 
                <option value="French Guiana">French Guiana</option> 
                <option value="French Polynesia">French Polynesia</option> 
                <option value="French Southern Territories">French Southern Territories</option> 
                <option value="Gabon">Gabon</option> 
                <option value="Gambia">Gambia</option> 
                <option value="Georgia">Georgia</option> 
                <option value="Germany">Germany</option> 
                <option value="Ghana">Ghana</option> 
                <option value="Gibraltar">Gibraltar</option> 
                <option value="Greece">Greece</option> 
                <option value="Greenland">Greenland</option> 
                <option value="Grenada">Grenada</option> 
                <option value="Guadeloupe">Guadeloupe</option> 
                <option value="Guam">Guam</option> 
                <option value="Guatemala">Guatemala</option> 
                <option value="Guinea">Guinea</option> 
                <option value="Guinea-bissau">Guinea-bissau</option> 
                <option value="Guyana">Guyana</option> 
                <option value="Haiti">Haiti</option> 
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> 
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> 
                <option value="Honduras">Honduras</option> 
                <option value="Hong Kong">Hong Kong</option> 
                <option value="Hungary">Hungary</option> 
                <option value="Iceland">Iceland</option> 
                <option value="India">India</option> 
                <option value="Indonesia">Indonesia</option> 
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> 
                <option value="Iraq">Iraq</option> 
                <option value="Ireland">Ireland</option> 
                <option value="Israel">Israel</option> 
                <option value="Italy">Italy</option> 
                <option value="Jamaica">Jamaica</option> 
                <option value="Japan">Japan</option> 
                <option value="Jordan">Jordan</option> 
                <option value="Kazakhstan">Kazakhstan</option> 
                <option value="Kenya">Kenya</option> 
                <option value="Kiribati">Kiribati</option> 
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> 
                <option value="Korea, Republic of">Korea, Republic of</option> 
                <option value="Kuwait">Kuwait</option> 
                <option value="Kyrgyzstan">Kyrgyzstan</option> 
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> 
                <option value="Latvia">Latvia</option> 
                <option value="Lebanon">Lebanon</option> 
                <option value="Lesotho">Lesotho</option> 
                <option value="Liberia">Liberia</option> 
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> 
                <option value="Liechtenstein">Liechtenstein</option> 
                <option value="Lithuania">Lithuania</option> 
                <option value="Luxembourg">Luxembourg</option> 
                <option value="Macao">Macao</option> 
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> 
                <option value="Madagascar">Madagascar</option> 
                <option value="Malawi">Malawi</option> 
                <option value="Malaysia">Malaysia</option> 
                <option value="Maldives">Maldives</option> 
                <option value="Mali">Mali</option> 
                <option value="Malta">Malta</option> 
                <option value="Marshall Islands">Marshall Islands</option> 
                <option value="Martinique">Martinique</option> 
                <option value="Mauritania">Mauritania</option> 
                <option value="Mauritius">Mauritius</option> 
                <option value="Mayotte">Mayotte</option> 
                <option value="Mexico">Mexico</option> 
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> 
                <option value="Moldova, Republic of">Moldova, Republic of</option> 
                <option value="Monaco">Monaco</option> 
                <option value="Mongolia">Mongolia</option> 
                <option value="Montserrat">Montserrat</option> 
                <option value="Morocco">Morocco</option> 
                <option value="Mozambique">Mozambique</option> 
                <option value="Myanmar">Myanmar</option> 
                <option value="Namibia">Namibia</option> 
                <option value="Nauru">Nauru</option> 
                <option value="Nepal">Nepal</option> 
                <option value="Netherlands">Netherlands</option> 
                <option value="Netherlands Antilles">Netherlands Antilles</option> 
                <option value="New Caledonia">New Caledonia</option> 
                <option value="New Zealand">New Zealand</option> 
                <option value="Nicaragua">Nicaragua</option> 
                <option value="Niger">Niger</option> 
                <option value="Nigeria">Nigeria</option> 
                <option value="Niue">Niue</option> 
                <option value="Norfolk Island">Norfolk Island</option> 
                <option value="Northern Mariana Islands">Northern Mariana Islands</option> 
                <option value="Norway">Norway</option> 
                <option value="Oman">Oman</option> 
                <option value="Pakistan">Pakistan</option> 
                <option value="Palau">Palau</option> 
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> 
                <option value="Panama">Panama</option> 
                <option value="Papua New Guinea">Papua New Guinea</option> 
                <option value="Paraguay">Paraguay</option> 
                <option value="Peru">Peru</option> 
                <option value="Philippines">Philippines</option> 
                <option value="Pitcairn">Pitcairn</option> 
                <option value="Poland">Poland</option> 
                <option value="Portugal">Portugal</option> 
                <option value="Puerto Rico">Puerto Rico</option> 
                <option value="Qatar">Qatar</option> 
                <option value="Reunion">Reunion</option> 
                <option value="Romania">Romania</option> 
                <option value="Russian Federation">Russian Federation</option> 
                <option value="Rwanda">Rwanda</option> 
                <option value="Saint Helena">Saint Helena</option> 
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                <option value="Saint Lucia">Saint Lucia</option> 
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> 
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> 
                <option value="Samoa">Samoa</option> 
                <option value="San Marino">San Marino</option> 
                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                <option value="Saudi Arabia">Saudi Arabia</option> 
                <option value="Senegal">Senegal</option> 
                <option value="Serbia and Montenegro">Serbia and Montenegro</option> 
                <option value="Seychelles">Seychelles</option> 
                <option value="Sierra Leone">Sierra Leone</option> 
                <option value="Singapore">Singapore</option> 
                <option value="Slovakia">Slovakia</option> 
                <option value="Slovenia">Slovenia</option> 
                <option value="Solomon Islands">Solomon Islands</option> 
                <option value="Somalia">Somalia</option> 
                <option value="South Africa">South Africa</option> 
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> 
                <option value="Spain">Spain</option> 
                <option value="Sri Lanka">Sri Lanka</option> 
                <option value="Sudan">Sudan</option> 
                <option value="Suriname">Suriname</option> 
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> 
                <option value="Swaziland">Swaziland</option> 
                <option value="Sweden">Sweden</option> 
                <option value="Switzerland">Switzerland</option> 
                <option value="Syrian Arab Republic">Syrian Arab Republic</option> 
                <option value="Taiwan, Province of China">Taiwan, Province of China</option> 
                <option value="Tajikistan">Tajikistan</option> 
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> 
                <option value="Thailand">Thailand</option> 
                <option value="Timor-leste">Timor-leste</option> 
                <option value="Togo">Togo</option> 
                <option value="Tokelau">Tokelau</option> 
                <option value="Tonga">Tonga</option> 
                <option value="Trinidad and Tobago">Trinidad and Tobago</option> 
                <option value="Tunisia">Tunisia</option> 
                <option value="Turkey">Turkey</option> 
                <option value="Turkmenistan">Turkmenistan</option> 
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> 
                <option value="Tuvalu">Tuvalu</option> 
                <option value="Uganda">Uganda</option> 
                <option value="Ukraine">Ukraine</option> 
                <option value="United Arab Emirates">United Arab Emirates</option> 
                <option value="United Kingdom">United Kingdom</option> 
                <option value="United States">United States</option> 
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> 
                <option value="Uruguay">Uruguay</option> 
                <option value="Uzbekistan">Uzbekistan</option> 
                <option value="Vanuatu">Vanuatu</option> 
                <option value="Venezuela">Venezuela</option> 
                <option value="Viet Nam">Viet Nam</option> 
                <option value="Virgin Islands, British">Virgin Islands, British</option> 
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> 
                <option value="Wallis and Futuna">Wallis and Futuna</option> 
                <option value="Western Sahara">Western Sahara</option> 
                <option value="Yemen">Yemen</option> 
                <option value="Zambia">Zambia</option> 
                <option value="Zimbabwe">Zimbabwe</option>
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

          <div class="row text-center">
            <button class="btn btn-success" v-on:click="completBooking">Complete Booking</button>          
          </div>

          <div class="hr"></div>
          <hr>

          <div class="row">
            <div class='col-md-12 secure-note'>
              <img src="../assets/lock.png" class="lock-icon">
              <div>We use secure and encrypted transmission to protect your personal information</div>
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

.booking{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.booking-process{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.booking-process-bg{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  background: #fff;
}

.booking-process-content{
  z-index: 1;
}

.header{
    height: 50px;
    width: 100%;
    background: #f49244;
    display: inline-flex;
    color: white;
  }

.header .log-div{
  padding-left: 5%;
  display: inline-flex;
  line-height: 50px;
  font-weight: 700;
}

.header .log-div .logo300{
  width: 50px;
  height: 50px;
}

.header .detail-div{
  width: 100%;
  margin-right: 5px;
  line-height: 50px;
  font-weight: 700;
  text-align: right;
}

body.rtl .header .detail-div{
  text-align: left;
}

.booking-content{
  padding: 5px;

}

.booking-detail-panel{
  padding: 5px;
}

.booking-detail-panel .booking-detail-panel-header {
  padding: 5px;
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px #ddd;
}

.booking-detail-panel .booking-detail-panel-body{
  padding: 20px 10px;
}

.hotel-panel-header{
  line-height: 40px;
}

.hotel-title{
  font-size: 12px;
}

.hotel-image{
  margin-top: 20px;
}

.hotel-image img{
  width: 50%;
  border-radius: 5px;
}

.room-info{
 margin-top: 15px;
}

.mute{
color: darkgrey;
}

.check-div{
  margin-top: 10px;
}

.apply-text{
  width: 30%;
  text-align: center;
  line-height: 30px;
  color:rgb(47,121,187);
}

.lock-icon{
  width:20px;
  height: 25px; 
  float: left;
  margin-right:5px;
}

.creditcard{
  height: 20px;
}

.cvv-icon{
  font-size:12px; 
  color: #ddd;
}

.secure-note{
  padding: 20px;
}

.secure-icon{
  width: 80%;
}

.btn-success{
  width: 50%;
  margin: auto;
}

body.rtl .dir-option{
  text-align: left;
}
</style>
