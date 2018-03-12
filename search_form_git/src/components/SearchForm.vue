<template>
  <div class="search-form">
    <div class="wrapper rtl">
	 	<div id="content">
	 		<nav class="nav-secondary" id="products_search_tabs">
	            <ul>
	                <li class="default current">
	                    <a href="#hotels-section" class="index-tab-toggle" data-id="hotels-section" data-tab-name="Hotels" rel="nofollow">
	                        <i class="icon-hotels"></i>
	                        Hotels
	                    </a>
	                </li>
	            </ul>
	        </nav><!-- /.nav-secondary -->
	        <div class="tabbed-content">
	        	<div id="hotels-section" class="section-tab current">
	        		<div class="form-search" id="search-hotels">

	        			<form id="hotel-search-form" method="GET">
						    <input type="hidden" name="persons" id="hotel_persons">
						    <div class="form-body">
						        <div class="form-container">
						            <div class="form-row">
						                <div class="form-group form-group-primary current">
						                    <label class="form-label">Destination/Hotel Name</label>
						                    <div class="form-controls">
						                        <input ignore="" type="text" id="hotels-city" class="field"
						                               placeholder="Paris"
						                               data-value-field="#hotels-city" data-focus="modal" data-target="#modalAutocompleteHotels" data-type="autocomplete" readonly="readonly">
						                    </div><!-- /.form-controls -->
						                    <i class="icon-place"></i>
						                </div><!-- /.form-group -->
						            </div><!-- /.form-row -->

						            <div class="form-row" style="display: none;">
						                <div class="form-cols form-cols-primary">
						                    <div class="form-col form-col-1of2">
						                        <div class="form-group form-group-primary">
						                            <label for="hotels-depart" class="form-label hidden">Check In Date</label>
						                            <div class="form-controls">
						                                <input type="text" name="timeStart" id="hotels-depart" class="field date-field" placeholder="Check In Date" data-focus="modal" data-target="#modalDatePicker" data-type="datepicker" data-placeholder="from" readonly="readonly" data-value-type="date" data-required-message="יש לבחור תאריך צ'ק-אין" data-required="true"  data-min-message="תאריך צ'ק-אין שבחרת לא תקין" data-max-message="תאריך צ'ק-אין חייב להיות בטווח של שנה מהיום">
						                            </div><!-- /.form-controls -->
						                            <i class="icon-calendar"></i>
						                        </div><!-- /.form-group -->
						                    </div><!-- /.form-col -->

						                    <div class="form-col form-col-1of2" @click="showDuration">
						                        <div class="form-group form-group-primary">
						                            <label for="hotels-arrive" class="form-label hidden">Check Out Date</label>
						                            <div class="form-controls">
						                                <input type="text" name="timeEnd" id="hotels-arrive" class="field date-field" placeholder="Check Out Date" data-focus="modal" data-target="#modalDatePicker" data-type="datepicker" data-placeholder="to" readonly="readonly" data-value-type="date" data-required="true" data-required-message="יש לבחור תאריך צ'ק-אאוט" data-unequal="[[name='timeStart']]" data-unequal-message="תאריך החזרה חייב להיות גדול מתאריך היציאה" data-min-value="[[name='timeStart']]" data-max-value="+30" data-max-message="לא ניתן לבצע הזמנה של מעל 30 יום">
						                            </div><!-- /.form-controls -->
						                            <i class="icon-calendar"></i>
						                        </div><!-- /.form-group -->
						                    </div><!-- /.form-col -->
						                    <i class="ico-arrow-left"></i>
						                </div><!-- /.form-cols -->
						            </div><!-- /.form-row -->
 									
									<div class="form-row">
						            	<div class="form-group form-group-primary current">
											<mydatepicker ></mydatepicker>
						            	</div>
									</div>
									<!-- <mydatepicker1 ></mydatepicker1> -->

						            <div class="form-row" @click="showOccupancy">
						                <div class="form-group abroad-capacities " id="abroad_capacities">
						                    <a class="dropdown-link more-capacities" data-init-method="InitCapacitySelect" data-target="#hotelPersons" data-type="options" data-focus="modal">
						                        
												<div class="occupancy-span">Occupancy</div>
												<span>
						                            <i class="ico-plus"></i>
						                        </span>
						                    </a>
						                </div><!-- /.form-group -->
						            </div><!-- /.form-row -->
						            <div class="form-actions">
						                <input type="button" id="search_hotels_btn" value="Search" class="btn btn-block">
						            </div><!-- /.form-actions -->
						        </div><!-- /.form-container.tab -->
						        <div class="hiddens-area hidden"></div>
						    </div><!-- /.form-body -->
						</form>

	        		</div>

	        		<div class="modal modal-primary" id="hotelPersons" v-bind:class="{'modal-show':isShowOccupancy}">
					    <div class="modal-container">
					        <div class="modal-head">
					            <i class="logo"></i>
					            <button type="button" class="modal-close" @click="closeOccupancy">
					                <i class="ico-cross"></i>
					            </button>
					        </div><!-- /.modal-head -->
					        <div class="modal-body">
					            <div class="form-options">
					                <div class="person-rooms">
					                    <form class="hotel-persons-room" data-room="1" v-for="(room, index) in rooms">
					                        <div class="room-head">
					                            <h4 class="text-center">Room <span class="room-number-place">{{index+1}}</span></h4>
					                        </div>
					                        <div class="form-body form-container">
					                            <div class="form-section">
					                                <!-- /.form-section-head -->
					                                <div class="form-row">
					                                    <div class="form-cols">
					                                        <div class="form-col form-col-1of2">
					                                            <div class="form-group">
					                                                <label for="options-adults-0" class="form-label form-label-primary">
					                                                    Adults
					                                                </label>
					                                                <div class="form-controls form-select form-control-custom">
					                                                   
					                                                    <select name="adults"  class="select">
					                                                        <option value="1" selected>1</option>
					                                                        <option value="2">2</option>
					                                                        <option value="3">3</option>
					                                                        <option value="4">4</option>
					                                                    </select>
																		 <i class="ico-chevron-down"></i>
					                                                </div><!-- /.form-controls -->
					                                            </div><!-- /.form-group -->
					                                        </div><!-- /.form-col -->
					                                        <div class="form-col form-col-1of2">
					                                            <div class="form-group">
					                                                <label for="options-children-0" class="form-label form-label-primary">
					                                                    Children*
					                                                </label>
					                                                <div class="form-controls form-select form-control-custom">
					                                                    
					                                                    <select name="children" class="select" v-model="room.children">
					                                                       <option selected="selected" value="1">1</option>
																			<option value="2">2</option>
																			<option value="3">3</option>
																			<option value="4">4</option>
					                                                    </select>

																		<i class="ico-chevron-down"></i>
                                                              
					                                                </div><!-- /.form-controls -->
					                                            </div><!-- /.form-group -->
					                                        </div><!-- /.form-col -->
					                                    </div><!-- /.form-cols -->
					                                </div><!-- /.form-row -->
					                                <div class="form-row">
					                                    <div class="form-cols form-cloning"><!-- /.form-col form-col-1of4 -->
					                                        <!-- /.form-col form-col-1of4 -->
					                                        
                                                  <div class="form-col form-col-1of4 hidden" style="display: block;" v-for="(children_count,index) in 4" v-show="children_count<=room.children || children_count == 1">
					                                            <div class="form-group">
					                                                <label for="child-age" class="form-label form-label-primary">גיל</label>
					                                                <div class="form-controls form-select form-control-custom">
					                                                    <select name="child-age"  class="select">
					                                                        <option value="-1">בחר</option>
					                                                        <option value="0">0-1</option>
					                                                        <option value="1">1</option>
					                                                        <option value="2">2</option>
					                                                        <option value="3">3</option>
					                                                        <option value="4">4</option>
					                                                        <option value="5">5</option>
					                                                        <option value="6">6</option>
					                                                        <option value="7">7</option>
					                                                        <option value="8">8</option>
					                                                        <option value="9">9</option>
					                                                        <option value="10">10</option>
					                                                        <option value="11" selected>11</option>
					                                                        <option value="12">12</option>
					                                                        <option value="13">13</option>
					                                                        <option value="14">14</option>
					                                                        <option value="15">15</option>
					                                                        <option value="16">16</option>
					                                                    </select>
																		<i class="ico-chevron-down"></i>
					                                                </div><!-- /.form-controls -->
					                                            </div><!-- /.form-group -->
					                                        </div><!-- /.form-col form-col-1of4 -->


     

                                                </div><!-- /.form-cols -->

                                                  
					                                </div><!-- /.form-row -->
					                            </div><!-- /.form-section -->
					                        </div><!-- /.form-body -->
					                    </form>
					                </div>
					                <div class="form-actions">
					                    <button type="button" id="add_room_persons" class="btn btn-block" @click="addRoom">Add room</button>
					                    <input type="button" value="Confirmation" class="btn btn-block close-modal" id="confirm_hotel_persons_btn" @click="closeOccupancy">
					                </div><!-- /.form-actions -->
					            </div><!-- /.form-options -->
					        </div><!-- /.modal-body -->
					    </div><!-- /.modal-container -->
					</div>

					<div class="modal" id="modalAutocompleteHotels">
					    <div class="modal-container">
					        <div class="modal-head">
					            <i class="logo"></i>
					            <button type="button" class="modal-close">
					                <i class="ico-cross"></i>
					            </button>
					        </div>
					        <div class="modal-body autocomplete-container">
					            <div class="search">
					                <form action="?" method="get">
					                    <input type="search" class="search-field autocomplete" name="searchField" id="searchField" value="" placeholder="בחר יעד">
					                    <button type="submit" class="search-btn">
					                        <i class="ico-search"></i>
					                    </button>
					                </form>
					            </div>
					            <header class="form-head">
					                <h2>יעדים פופולריים</h2>
					            </header>
					            <div class="loader hidden" style="text-align :center; padding-top:20px;">
					                <img src="https://m.bon-voyage.magpaylabs.com/images/mobile/icons/rolling.gif">
					            </div>
					            <div class="modal-content">
					                <div class="section-destinations">
					                    <ul class="list-destinations dropdown-list"></ul>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
	        	</div>
	        </div>

	        <div class="modal modal-calendar" id="modalDatePicker" v-bind:class="{'modal-show':isShowDuration}">
			    <div class="modal-container">
			        <div class="modal-head">
			            <i class="logo"></i>
			            <button type="button" class="modal-close" @click="closeDuration">
			                <i class="ico-cross"></i>
			            </button>
			        </div><!-- /.modal-head -->
			        <div class="modal-body">
			            <div class="modal-content">
			                <nav class="modal-nav">
			                    <ul class="calendar-top">
			                        <li class="current">
			                            <i class="icon-calendar"></i>
			                            יציאה:
			                            <strong id="from" data-initial="בחר תאריך" data-initialdate="בחר תאריך">בחר תאריך</strong>
			                            <strong id="fromYear" class="year"></strong>
			                        </li>
			                        <li>
			                            <i class="icon-calendar"></i>
			                            חזרה:
			                            <strong id="to" data-initial="בחר תאריך" data-initialdate="בחר תאריך">בחר תאריך</strong>
			                            <strong id="toYear" class="year"></strong>
			                        </li>
			                    </ul>
			                </nav><!-- /.modal-nav -->
			                <!--<div id="datepickerDual" class="datepicker-dual"></div>--><!-- /#datepickerDual.datepicker-dual -->
			            </div><!-- /.modal-content -->
			        </div><!-- /.modal-body -->
			        <div class="modal-footer">
			            <!-- /.modal-legend -->
			            <button type="button" class="btn btn-primary modal-dismiss"><strong>המשך</strong> (<span id="numNights">0</span> לילות) </button>
			        </div><!-- /.modal-footer -->
			    </div><!-- /.modal-container -->
			</div><!-- /#modalDatePicker.modal -->

		
	 	</div>
	 </div>
  </div>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker'
// import HotelDatePicker from './DatePicker.vue';
export default {
  name: 'SearchForm',
  data () {
    return {
      isShowOccupancy: false,
      isShowDuration: false,
      rooms: [
        {chidren: "1"},
      ],
      ok: true,
      object: { a: "1" },
      
    }
  },
ready(){
 
},
  methods:{
    showOccupancy(){
      this.isShowOccupancy = true;
    },
    closeOccupancy(){
      this.isShowOccupancy = false;
    },

    showDuration(){
      //this.isShowDuration = true;
      this.components.mydatepicker.showDatePicker();
      console.log(this.$children[0]);
      // this.$children[0].methods.showDatePicker();
      
    },
    closeDuration(){
      this.isShowDuration = false;
    },

    addRoom(){
      this.rooms.push({chidren: "1"});
    },
    onChangeCountChildren(room) {
      // room.chidren = 2;
    },
    inputChanged: function() {
      alert();
    }
  },

  components: {
   'mydatepicker': HotelDatePicker,
  //  'mydatepicker1': HotelDatePicker,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo,
[class^="ico-"],
.slider-gallery .owl-prev:before,
.slider-gallery .owl-next:before { display: inline-block; vertical-align: middle; background-repeat: no-repeat; background-position: 0 0; background-size: 100% 100%; }

.clear:after,
.header:after,
.form-cols:after,
.form-search .form-section-head:after,
.form-options .form-section-head:after,
.list-products:after,
.list-deals:after,
.modal-head:after,
.nav-secondary ul:after { content: ''; line-height: 0; display: table; clear: both; }

.logo,
.notext,
[class^="ico-"],
.slider-gallery .owl-prev:before,
.slider-gallery .owl-next:before
.sys-datepicker-disabled { white-space: nowrap; text-indent: 100%; text-shadow: none; overflow: hidden; }

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="month"],
input[type="week"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
input[type="color"],
textarea,
a[href^="tel"],
.header .nav-toggle,
.btn,
.btn-remove,
.btn-add,
.form-time input,
.select,
.form-options .form-actions .modal-dismiss,
.search-btn { -webkit-appearance: none; -moz-appearance: none; appearance: none; }

/* ------------------------------------------------------------ *\
	I.   Generic
\* ------------------------------------------------------------ */

#modalAutocompleteIsraelHotels .modal-container,
#modalAutocompleteIsraelFlights .modal-container,
#modalAutocompleteFlights .modal-container,
#modalAutocompleteHotels .modal-container,
#modalAutocompletePackagesALP .modal-container,
#modalAutocompleteIsraelPackages .modal-container,
#modalAirlines .form-body
{
    background-color: #fafdff;
    /*padding: 10px 0px 10px 0px;*/
    background-image: url('https://m.bon-voyage.magpaylabs.com/images/mobile/shadow.png');
    background-position-y: top;
    background-position-x: center;
    background-repeat: no-repeat;
}
#modalCarRentalDropoff .modal-container,
#modalSearch .modal-container,
#modalCarRentalTerms .modal-container,
#modalFuelTerms .modal-container
 {
    background-color: #e9eff5;
}

/* ------------------------------------------------------------ *\
	Reset
\* ------------------------------------------------------------ */

*,
*:before,
*:after { padding: 0; margin: 0; outline: 0; box-sizing: border-box; }

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
main { display: block; }

template { display: none; }

html { 
    -webkit-tap-highlight-color: rgba(0,0,0,0); tap-highlight-color: rgba(0,0,0,0); 

    /*Changed for footer By Max Dev 28.12.2016* for solution in page if no results* + changed in [line 607 .footer] and [line 418 body{ }] */ 
    position: relative; 
    min-height: 100%;
}

body { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; font-smoothing: antialiased; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; text-size-adjust: none; 
       /*Changed for footer By Max Dev 28.12.2016* for solution in page if no results* + changed in [line 410 html{ }] and [line 607 .footer] */ 
       margin: 0 0 119px;  /*bottom = footer height*/ 
}

img,
iframe,
video,
audio,
object { max-width: 100%; }

img,
iframe { border: 0 none; }

img { height: auto; display: inline-block; vertical-align: middle; }

b,
strong { font-weight: bold; }

address { font-style: normal;display: inline-block; }

svg:not(:root) { overflow: hidden; }
.rtl {direction:rtl}
a,
button,
input[type="submit"],
input[type="button"],
input[type="reset"],
input[type="file"],
input[type="image"],
label[for] { cursor: pointer; }

a[href^="tel"],
button[disabled],
input[disabled],
textarea[disabled],
select[disabled] { cursor: default; }

button::-moz-focus-inner,
input::-moz-focus-inner { padding: 0; border: 0; }

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="month"],
input[type="week"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
input[type="color"],
textarea,
a[href^="tel"] { }

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration,
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-inner-outer-button { -webkit-appearance: none; }

input[type="number"] { -moz-appearance: textfield; }

textarea { overflow: auto; -webkit-overflow-scrolling: touch; overflow-scrolling: touch; }

button,
input,
optgroup,
select,
textarea { font-family: inherit; font-size: inherit; color: inherit; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; font-smoothing: antialiased; }

button,
select { text-transform: none; }

table { width: 100%; border-collapse: collapse; border-spacing: 0; }

nav ul,
nav ol { list-style: none outside none; margin: 0; display: flex;}

/* ------------------------------------------------------------ *\
	Base
\* ------------------------------------------------------------ */

body { font-family: 'FBKolya', 'Arial', 'Helvetica', sans-serif; font-size: 14px; line-height: 1.3; color: #2a3335; font-weight: 400; font-style: normal; text-transform: none; text-decoration: none; letter-spacing: 0; word-spacing: 0; direction: ltr; min-width: 320px; background: #fff; }

a { color: inherit; text-decoration: none; }

h1 { font-size: 28px; font-weight: 400; }

h2 { font-size: 23px; font-weight: 400; }

h3 { font-size: 19px; font-weight: 700; }

h4 { font-size: 19px; font-weight: 400; }

.overflow,
.overflow body { height: 100%; overflow: hidden; }
.overflow-hidden { overflow: hidden; }

/*  Clear  */

.clear:after { }

/*  Notext  */

.logo,
.notext,
[class^="ico-"] { }

/*  Hidden  */

[hidden],
.hidden { display: none; }

/*  Disabled  */

[disabled],
.disabled { cursor: default; }

/*  English Text  */

.text-en {font-family: 'Open Sans', Helvetica, Arial, sans-serif;}

.wrapper .btn { font-size: 27px; line-height: 30px; color: #fff; font-weight: 700; text-decoration: none; text-align: center; display: inline-block; vertical-align: middle; padding: 9px 10px; border: 0; background: #209c2e; cursor: pointer; border-radius: 3px; box-shadow: none; }

/*  Button Block  */

.btn-block { width: 100%; display: block; padding-left: 0; padding-right: 0; box-shadow: 0 3px 0 #0a6714; text-shadow: 0 2px 0 #0a6714; }

/*  Button Remove  */

.btn-remove { font-size: 12px; line-height: 25px; color: #2a3335; font-weight: 400; display: inline-block; vertical-align: middle; padding: 0; border: 0; margin: 0; background: none; border-radius: 0; box-shadow: none; }

.btn-remove span { width: 23px; height: 23px; display: inline-block; vertical-align: middle; position: relative; margin: -2px 2px 0 0; background-color: #8b909e; border-radius: 50%; }

.btn-remove span i { display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }

/*  Button Add  */

.btn-add { font-size: 17px; line-height: 24px; color: #2a3335; text-align: center; padding: 7px 10px; border: 3px solid #c4cdd9; background: #fff; border-radius: 2px; box-shadow: none; }

.btn-add span { width: 23px; height: 23px; display: inline-block; vertical-align: middle; position: relative; margin: -1px 0 0 2px; background-color: #209c2e; border-radius: 50%; }

.btn-add span i { width: 11px; height: 11px; display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }

/*  Btn login  */

.btn-login { background: #edf3fa; display: block; height: 66px; color: #64778f; font-size: 16px; }

.btn-login figure,
.btn-login span { display: inline-block; vertical-align: middle; }

.btn-login figure { position: relative; height: 66px; width: 80px; background: #178125; text-align: center; line-height: 66px; }
.btn-login figure:before { content: ''; position: absolute; top: 50%; left: 50%; width: 50px; height: 50px; border-radius: 50%; margin: -25px 0 0 -25px; background: #69b072; border: 3px solid #298c36; }
.btn-login figure i { position: relative; z-index: 2; }
.btn-login span { margin-right: 9px; }

/*  Btn fav  */

.btn-fav { border: none; background: #fff; width: 25px; height: 25px; }
.btn-fav.active .ico-heart { 
  /* background-image: url(ico-heart-active.png);  */
  }

/*  btn-blue  */

.btn-blue { display: inline-block; vertical-align: middle; background: #fff; color: #4a5767; font-size: 16px; height: 48px; line-height: 48px; border: none; min-width: 65px; padding: 0 10px; border-radius: 2px; -webkit-appearance: none; }
.btn-blue-sm { height: 18px; line-height: 18px; font-size: 12px; padding: 0 10px; color: #fff; background: #95a5b9; }

/*  btn-green  */

.btn-green { display: inline-block; vertical-align: middle; padding: 4px 8px 5px; border-radius: 2px; background: #40a14a; color: #fff; font-size: 12px; }

/*  btn-gray  */

.btn-gray { display: inline-block; vertical-align: middle; background: #f6f9fc; border-radius: 2px; font-size: 12px; color: #000; padding: 4px 6px 5px; }

/* ------------------------------------------------------------ *\
	Dropdown
\* ------------------------------------------------------------ */

.dropdown { position: relative; z-index: 1; }

.dropdown .ico-adult-more:before { left: 8px; }

.dropdown .ico-adult-more-child:before { left: 9px; }

.dropdown .ico-adult-more-child-more:before { left: 8px; }

.dropdown .ico-adult-more-child-more:after { top: 6px; }

.dropdown-button { font-size: 17px; line-height: 20px; position: relative; z-index: 2; padding: 9px 35px 9px 31px; border: 1px solid #fff; background-color: #fff; border-radius: 3px; cursor: pointer; }
.dropdown-button.disabled {background-color:#ebebeb; color:#bbbbbb}
.dropdown-button.no-icon {     padding: 9px 15px 9px 31px; }
.dropdown-button i { text-indent: 0; display: block; position: absolute; top: 0; bottom: 0; margin: auto; }
.airline-company:before { content: "\e971"; margin-left: 5px; float: right; font-family: 'icomoon' !important; font-size: 14px; }
/*.airline-class:before { content: "\e90c"; margin-left: 5px; float: right; font-family: 'icomoon' !important; font-size: 14px; }*/
.dropdown-button i:before,
.dropdown-button i:after,
.dropdown-icon i:before,
.dropdown-icon i:after { font-size: 8px; line-height: 1; color: #fff; font-style: normal; position: absolute; }

.dropdown-button i:before,
.dropdown-icon i:before { content: attr(data-adult); top: 1px; }

.dropdown-button i:after,
.dropdown-icon i:after { content: attr(data-child); top: 1px; right: 2px; }

.dropdown-button i:first-child { right: 9px; }

.dropdown-button i:last-child { left: 12px; }

.dropdown-text { display: block; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }

.dropdown-label { font-size: 14px; line-height: 15px; display: block; }

.dropdown-menu { max-height: 0px; position: absolute; top: 100%; right: 0; left: 0; z-index: 1; margin-top: -3px; overflow: hidden; background-color: #fff; border-radius: 0 0 3px 3px; box-shadow: 0 3px 5px rgba(0,0,0,.45), 0 0 0 3px #f1f1f1 inset; }

.dropdown-item,
.dropdown-link { font-size: 17px; line-height: 25px; position: relative; padding: 10px 15px 10px 20px; border-bottom: 1px solid #eff5f9; }

.dropdown-item:first-child { margin-top: 3px; }
.dropdown-item .dropdown-icon img {    position: absolute;right: 7px;top: 13px;}
.dropdown-icon { display:none; width: 35px; position: absolute; top: 0; right: 0; bottom: 0; }

.dropdown-icon i { text-indent: 0; display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }

.dropdown-link { display: flex; padding-right:7px; justify-content: space-between;}

.dropdown-link span { width: 15px; height: 15px; display: block; position: relative; top: 0; right: auto; bottom: 0; margin: 0; background-color: #209c2e; border-radius: 50%; }

.dropdown-link span i { display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }

.dropdown-open .dropdown-button { border-color: #209c2e; }

.dropdown-open .dropdown-menu { max-height: 67vh; overflow-x: hidden; overflow-y: auto; -webkit-overflow-scrolling: touch; }

/*  Dropdown Primary  */

.dropdown-primary .dropdown-button { padding-right: 10px; }

/* ------------------------------------------------------------ *\
	Form Elements
\* ------------------------------------------------------------ */

input::-webkit-input-placeholder { color: inherit; opacity: 1; }

input::-moz-placeholder { color: inherit; opacity: 1; }

input:-ms-input-placeholder { color: inherit; opacity: 1; }

input::placeholder { color: inherit; opacity: 1; }

textarea::-webkit-input-placeholder { color: inherit; opacity: 1; }

textarea::-moz-placeholder { color: inherit; opacity: 1; }

textarea:-ms-input-placeholder { color: inherit; opacity: 1; }

textarea::placeholder { color: inherit; opacity: 1; }

input:-webkit-autofill { -webkit-text-fill-color: inherit; -webkit-box-shadow: 0 0 0 1000px #fff inset; }

.form-row { padding-bottom: 11px; }

.form-cols { margin: 0 -4px; display: flex;}

.form-cols:after { }

.form-col { width: 100%; float: right; padding: 0 4px; }

.form-col-1of2 { width: 50%; }

.form-col-1of3 {width: 33.33333%; }

.form-col-1of4 { width: 25%; }

.form-col-2of3 {width: 66.66666%}

.form-col-1of5 {width:20%}
.form-col-2of5 {width:40%}

.form-col-1of10 {width:10%} 
.form-col-2of10 {width:20%} 
.form-col-4of10 {width:40%} 
.form-cols-primary { position: relative; }

.form-cols-primary > i { position: absolute; top: 15px; right: 0; left: 0; margin: auto; }

.form-cols-primary .form-col-1of2:nth-of-type(odd) { padding-left: 13px; }

.form-cols-primary .form-col-1of2:nth-of-type(even) { padding-right: 13px; }

.form-cols-primary .form-col-1of2:only-of-type ~ i { display: none; }

.form-group { position: relative; background-color: #fff; border-radius: 3px; }

.form-group.current { /*box-shadow: 0 0 0 2px #209c2e;*/ }

.form-group-primary { padding: 7px 7px 7px 0; }

.form-group-primary i { position: absolute; top: 11px; right: 10px; bottom: 0; margin: auto; font-size:16px; }

.form-group-primary i.ico-calendar-default { right: 12px; }

.form-group-primary i.ico-marker { right: 15px; }

.form-group-primary i.ico-hotel { right: 12px; }

.form-group-primary i.ico-globe { right: 12px; }

.form-group-secondary { position: relative; }

.form-group-secondary i { display: block; position: absolute; top: 0; right: 11px; bottom: 0; margin: auto; }

.form-group-secondary .field { font-size: 17px; line-height: 20px; height: 40px; padding: 10px 37px 10px 0; border-radius: 3px; }

.form-label { font-size: 17px; line-height: 1; color: #209c2e; padding: 0 10px; }

.form-label:not(.hidden) { display: flex; }

.form-label:not(.hidden) ~ i { top: 13px; bottom: auto;font-size: 16px; }

.form-label:not(.hidden) ~ i.ico-globe { top: 10px; }

.form-label:not(.hidden) ~ .form-controls .field { font-weight: 600; height: 20px; padding: 0 10px; }

.form-label-primary { font-size: 15px; color: #2a3335; position: absolute; top: 5px; z-index: 1; }

.form-select i { position: relative; top: 0;  bottom: 0; margin: auto 10px; pointer-events: none; }

.form-select .select { position: relative; z-index: 2; background-color: transparent; width: 100%;}

.select.basic-select { padding:0 10px; font-size:18px}

.form-controls i {  }

.form-actions { padding-top: 5px; }

.form-date { font-size: 14px; line-height: 32px; color: #647283; text-align: center; padding-bottom: 5px; margin-top: -3px; background-color: #fff; }
.form-date p { min-height: 32px; }

.form-date em,
.form-date span,
.form-date small,
.form-date strong { display: inline-block; vertical-align: middle; margin-top: -2px; }

.form-date strong,
.form-date span { color: #000; }

.form-date em { font-style: normal; }
.form-date small { font-size: 100%; }
.form-date strong { font-size: 31px; margin-top: -4px; }

.form-time { font-size: 17px; line-height: 20px; color: #647283; text-align: center; padding: 3px 0; border-top: 2px solid #f2f2f2; background-color: #fff; border-radius: 0 0 3px 3px; }
.form-time label { display: inline-block; vertical-align: middle; }
.form-time input { font-size: 17px; line-height: 20px; color: #000; height: 20px; max-width: 90px; display: inline-block; vertical-align: middle; padding: 0 2px; border: 0; margin: 0; background: none; border-radius: 0; box-shadow: none; }
.form-time input::-webkit-datetime-edit { direction: ltr; }

.form-time input::-webkit-clear-button,
.form-time input::-webkit-inner-spin-button,
.form-time input::-webkit-calendar-picker-indicator { display: none; margin: 0; }

.field,
.select,
.textarea { font-size: 18px; line-height: 20px; color: #2a3335; width: 100%; height: 26px; display: block; padding: 3px 10px; border: 0; background: #fff; border-radius: 0; box-shadow: none; }

.field.date-field {font-size:17px}

.field[type="hidden"] { display: none; }

.select { height: 40px; padding: 15px 10px 0 20px; border-radius: 3px; }

.textarea { height: 100px; resize: none; }

.checkbox { position: relative; overflow: hidden; margin: 4px 0; }

.checkbox input { position: absolute; top: 0; right: -50px; }

.checkbox label { font-size: 17px; line-height: 18px; display: block; position: relative; padding-right: 26px; }

.checkbox label:before { content: ''; width: 18px; height: 18px; display: block; position: absolute; top: 0; right: 0; background-color: #fff; border-radius: 2px; }

.checkbox label i { display: none; position: absolute; top: 5px; right: 3px; }

.checkbox input:checked ~ label i { display: block; }

.checkbox-secondary { margin: 0; }
.checkbox-secondary ~ .checkbox-secondary { margin-top: 13px; }
.checkbox-secondary label { overflow: hidden; padding-right: 25px; font-size: 16px; min-height: 18px; }
.checkbox-secondary label i { display: block; top: 5px; }
.checkbox-secondary label:before { top: 0; background: #e5e9ef; border-radius: 50%; transition: background .3s; }
.checkbox-secondary label em { font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; font-style: normal; }
.checkbox-secondary label span:not([class]) { float: left; font-size: 15px; color: #9aaaad; margin-top: 1px; }
.checkbox-secondary label span strong { font-weight: normal; color: #2a3335; }
.checkbox-secondary label .label { margin: 2px 0 0 2px; }

.checkbox-secondary input:checked ~ label:before { background: #188626; }

.radio { position: relative; overflow: hidden; }
.radio ~ .radio { margin-top: 12px; }
.radio input { position: absolute; top: 0; right: -50px; }
.radio label { display: block; position: relative; min-height: 19px; font-size: 17px; padding-right: 30px; }
.radio label:before { content: ''; position: absolute; top: 1px; right: 0; width: 19px; height: 19px; background: #e5e9ef; border-radius: 50%; border: 2px solid #e5e9ef; transition: background .3s; }
.radio input:checked ~ label:before { background: #188626; }

/* ------------------------------------------------------------ *\
	Form Search
\* ------------------------------------------------------------ */

.form-search { position: relative; z-index: 8; padding: 12px 10px 20px; border-bottom: 1px solid #e2e7ed; background-color: #e9eff5; }

.form-search .btn-add { margin: -9px 0 16px; }

.form-search .field { display: block !important; }

.form-search .comiseo-daterangepicker-triggerbutton { display: none; }

.form-search .btn-remove { float: left; }

.form-search .form-container { counter-reset: section; }

.form-search .form-section { position: relative; z-index: 1; counter-increment: section; }

.form-search .form-section-head { padding-bottom: 7px; }

.form-search .form-section-head:after { }

.form-search .form-section-head h4 { font-size: 18px; line-height: 25px; font-weight: 700; float: right; }

.form-search .form-section-head h4:before { content: ''; width: 9px; height: 9px; display: inline-block; vertical-align: middle; margin: -2px 0 0 7px; background-color: #209c2e; }

.form-search .form-section-head h4:after { content: counter(section, decimal-leading-zero); }

.form-search-secondary { background: none; border: none; padding: 0; }
.form-search-secondary .form-head { text-align: center; padding: 10px 10px 9px; background: #fff; }
.form-search-secondary .form-head h2 { font-size: 22px; }
.form-search-secondary .form-body { padding: 10px; }

.form-search-secondary .form-actions .modal-close { text-align: center; font-size: 16px; float: none; width: 100%; text-decoration: underline; margin-top: 12px; }

/* ------------------------------------------------------------ *\
	Form Options
\* ------------------------------------------------------------ */

.form-options .form-head { text-align: center; padding: 8px 10px; background-color: #fff; }

.form-options .form-body { padding: 0 10px; counter-reset: option; }

.form-options .form-section { position: relative; z-index: 1; padding-bottom: 15px; counter-increment: option; }

.form-options .form-section h4 { font-size: 18px; line-height: 1.33; font-weight: 700; float: right; padding: 7px 0; }

.form-options .form-section h4:before { content: ''; width: 9px; height: 9px; display: inline-block; vertical-align: middle; margin: -2px 0 0 7px; background-color: #209c2e; }

.form-options .form-section h4:after { content: ' ' counter(option); }

.form-options .form-section .btn-remove { float: left; margin-top: 6px; }

.form-options .form-section-head:after { }

.form-options .form-actions { padding:10px; }

.form-options .form-actions .btn { margin-bottom: 10px; }

.form-options .form-actions .modal-dismiss { font-size: 16px; line-height: 1.5; text-decoration: underline; width: 100%; display: block; padding: 0; border: 0; margin: 0; background: none; border-radius: 0; box-shadow: none; }

.form-options .form-row { padding: 11px 0 0; }

.form-options .form-section-head + .form-row { padding: 0; }

.form-options .form-cloning { margin-bottom: -11px; }

.form-options .form-cloning .form-col { padding-bottom: 11px; }



/* ------------------------------------------------------------ *\
	Nav Secondary
\* ------------------------------------------------------------ */

.nav-secondary { text-align: center; position: relative; z-index: 1; padding: 0 5px; border-bottom: 1px solid #e2e7ed; }

.nav-secondary ul:after { }

.nav-secondary li { width: 20%; float: right; }

.nav-secondary a { font-size: 13px; line-height: 1.29; display: block; position: relative; padding: 35px 0 12px; text-decoration: none; }

.nav-secondary i { display: block; position: absolute; bottom: 34px; right: 0; left: 0; margin: auto; font-size:20px; }
.nav-secondary i.icon-pnim {font-size:23px;}
.nav-secondary .current i {color:#209c2e}
.nav-secondary a:before, .nav-secondary a:after, 
.nav-deals a:after { content: ''; display: none; position: absolute; bottom: 0; left: 50%; border: 8px solid transparent; border-bottom-width: 9px; margin-left: -8px; }

.nav-secondary a:before, .nav-deals a:before { z-index: 1; border-bottom-color: #e2e7ed; }

.nav-secondary a:after, .nav-deals a:after { z-index: 2; border-bottom-color: #e9eff5; margin-bottom: -2px; }

.nav-secondary .current a { color: #209c2e; }

.nav-secondary .current a:before, .nav-secondary .current a:after, .nav-deals .current a:after { display: block; }




/* ------------------------------------------------------------ *\
	Animations
\* ------------------------------------------------------------ */

@-webkit-keyframes toTop {
	70% { opacity: 1; transform: scale(1); }
	100% { top: 0; opacity: 0; transform: scale(.5); }
}

@keyframes toTop {
	70% { opacity: 1; transform: scale(1); }
	100% { top: 0; opacity: 0; transform: scale(.5); }
}



/* ------------------------------------------------------------ *\
	Tabs
\* ------------------------------------------------------------ */

.tabs { position: relative; }

.tab,
.tab-secondary { height: 0; opacity: 0; visibility: hidden; position: absolute; top: 0; right: 0; left: 0; z-index: -1; overflow: hidden; transition: opacity .4s ease, visibility .4s ease; }

.tab-secondary { background-color: #fff; }

.tab.current,
.tab-secondary.current { height: auto; opacity: 1; visibility: visible; position: relative; top: auto; right: auto; left: auto; z-index: 1; overflow: visible; }




/* ------------------------------------------------------------ *\
	IV.  Themes
\* ------------------------------------------------------------ */

/* ------------------------------------------------------------ *\
	jQuery UI theme
\* ------------------------------------------------------------ */

/*  UI Autocomplete  */

.autocomplete-open .modal-content { display: none; }

.ui-autocomplete { font-size: 18px; line-height: 1.44; color: #2a3335; width: 100% !important; position: static !important; left: auto !important; top: auto !important; border: 0; }

.ui-autocomplete.ui-widget-content { padding: 0 10px; border: 0; }

.ui-autocomplete .ui-menu-item { list-style: none outside none; position: relative; padding: 15px 0; margin: 0; }

.ui-autocomplete .ui-menu-item i { position: absolute; top: 0; right: 7px; bottom: 0; margin: auto; }

.ui-autocomplete .ui-menu-item small { font-size: 15px; line-height: 1.75; color: #9aaaad; float: left; padding-left: 13px; }

.ui-autocomplete .ui-menu-item small:first-letter { color: #2a3335; }

.ui-autocomplete .ui-menu-item.ui-state-focus { color: #2a3335; border: 0; margin: 0; background: none; }

.ui-autocomplete .ui-menu-item.ui-item-has-icon { padding-right: 35px; }

.ui-autocomplete .ui-menu-item + .ui-menu-item { border-top: 1px solid #e2e7ed; }

.ui-autocomplete .ui-menu-item-wrapper { padding: 0; }

.ui-autocomplete .ui-autocomplete-item-icon { width: 35px; position: absolute; top: 0; right: 0; bottom: 0; }

.ui-autocomplete .ui-autocomplete-item-icon i { display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }


/* ------------------------------------------------------------ *\
	Tabs
\* ------------------------------------------------------------ */
.tabbed-content .section-tab { display: none;  }
.tabbed-content .section-tab.current { display: block; }


/* ------------------------------------------------------------ *\
	Datepicker
\* ------------------------------------------------------------ */

.datepicker-widget { height: -webkit-calc(100% - 55px); height: calc(100% - 55px); overflow-x: hidden; overflow-y: auto; -webkit-overflow-scrolling: touch; }
.datepicker-widget .rd-container { display: block !important; border: 0; }
.datepicker-widget .rd-month { display: block; margin: 0; }
.datepicker-widget .rd-month + .rd-month { margin-top: 10px; }
.datepicker-widget .rd-month-label { font-size: 23px; line-height: 28px; color: #2a3335; font-weight: 400; text-align: center; padding: 10px 0; background-color: #f7f7f7; }

.datepicker-widget .rd-back,
.datepicker-widget .rd-next { display: none; }

.datepicker-widget .rd-days { table-layout: fixed; border-collapse: separate; border-spacing: 0; }
.datepicker-widget .rd-day-head { font-size: 17px; line-height: 20px; color: #188924; font-weight: 400; text-align: center; padding: 6px 0 9px; }

.datepicker-widget .rd-day-body { font-size: 17px; line-height: 20px; color: #000; font-weight: 400; text-align: center; height: 42px; position: relative; z-index: 2; border-top: 1px solid #f0f5fa; border-left: 1px solid #f0f5fa; }
.datepicker-widget .rd-day-body:before { content: ''; width: 31px; display: block; position: absolute; top: 5px; bottom: 5px; left: 50%; z-index: -1; margin-left: -15px; margin-left: -15.5px; border-radius: 50%; }
.datepicker-widget .rd-day-body:first-child { border-right: 0; }
.datepicker-widget .rd-day-body:last-child { border-left: 0; }
.datepicker-widget .rd-days-row .rd-day-prev-month,
.datepicker-widget .rd-days-row .rd-day-next-month { color: transparent; pointer-events: none; }

.datepicker-widget .rd-days-row:first-child .rd-day-body { border-top: 0; }
.datepicker-widget .rd-days-row:last-child .rd-day-body { border-bottom: 0; }

.datepicker-widget .rd-day-disabled { color: transparent; }
.datepicker-widget .rd-day-concealed { visibility: visible; }

.datepicker-widget .rd-day-today { color: #95a5b9; }
.datepicker-widget .rd-day-today:before { background-color: #e5e9ef; }

.datepicker-widget .rd-day-selected { color: #000; background-color: transparent; }
.datepicker-widget .rd-day-selected:before { background-color: #bee4be; }

.datepicker-widget .rd-day-highlight:after { content: ''; width: 6px; height: 6px; position: absolute; top: 2px; left: 2px; border-radius: 50%; }
.datepicker-widget .rd-day-highlight-blue:after { background-color: #79a4d9; }
.datepicker-widget .rd-day-highlight-red:after { background-color: #f21515; }
.datepicker-widget .rd-day-highlight-yellow:after { background-color: #ebca11; }
.datepicker-widget .rd-day-highlight-green:after { background-color: #bee4be; }

.datepicker-widget .rd-day-disabled:before,
.datepicker-widget .rd-day-disabled:after { content: none; }

.datepicker-dual { height: -webkit-calc(100% - 55px); height: calc(100% - 55px); position: relative; overflow-x: hidden; overflow-y: auto; -webkit-overflow-scrolling: touch; }

.datepicker-dual .ui-widget { top: auto !important; left: auto !important; right: auto !important; bottom: auto !important; padding-top: 10px; border: 0; }

.datepicker-dual .ui-widget .ui-datepicker-prev,
.datepicker-dual .ui-widget .ui-datepicker-next,
.datepicker-dual .ui-widget .comiseo-daterangepicker-presets,
.datepicker-dual .comiseo-daterangepicker > .ui-helper-clearfix { display: none; }

.datepicker-dual .ui-widget .ui-widget-content { border: 0; }
.datepicker-dual .ui-widget .ui-datepicker-inline { width: 100% !important; padding: 0; }
.datepicker-dual .ui-widget .ui-datepicker-group { width: 100%; float: none; /*padding-top:21px*/}
.datepicker-dual .ui-widget .ui-datepicker-group + .ui-datepicker-group { /*margin-top: 10px;*/ }
.datepicker-dual .ui-widget .ui-datepicker-multi .ui-datepicker-group table { width: 100%; table-layout: fixed; margin: 0; }
.datepicker-dual .ui-widget .ui-datepicker-header { padding: 10px; background-color: #fafdff }
.datepicker-dual .ui-widget .ui-datepicker-title { font-size: 26px; line-height: 18px; color: #2a3335; font-weight: 400; padding: 5px 0; }

.datepicker-dual .ui-datepicker table { font-size: 17px; line-height: 20px; color: #000; }

.datepicker-dual .ui-datepicker table th { font-size: 17px; line-height: 21px; color: #188924; font-weight: 400; text-align: center; padding: 7px 0; }
.datepicker-dual .ui-datepicker table td { padding: 3px; border: 1px solid #f5f9fc; }

.datepicker-dual .ui-datepicker table td:first-child { border-right: 0; }
.datepicker-dual .ui-datepicker table td:last-child { border-left: 0; }
.datepicker-dual .ui-datepicker table tr:first-child td { border-top: 0; }
.datepicker-dual .ui-datepicker table tr:last-child td { border-bottom: 0; }

.datepicker-dual .ui-datepicker table .highlight-reserved .ui-state-default { color: #000; background-color: #bee4be; }

.datepicker-dual .ui-datepicker table .ui-state-default { font-size: 17px; line-height: 20px; color: #000; text-align: center; width: 36px; padding: 8px 0; border: 0; margin: auto; background: none; border-radius: 50%; }
.datepicker-dual .ui-datepicker table .ui-datepicker-today .ui-state-default { color: #95a5b9; background-color: #e5e9ef; }
.datepicker-dual .ui-datepicker table .ui-state-disabled .ui-state-default { color: transparent; background-color: transparent; }

.datepicker-dual .ui-datepicker table .ui-state-highlight { border-width: 1px; background-color: transparent; }
.datepicker-dual .ui-datepicker table .ui-state-highlight .ui-state-default { color: #fff; background-color: #069d39; }

.datepicker-dual .ui-datepicker table .ui-datepicker-first-day .ui-state-default,
.datepicker-dual .ui-datepicker table .ui-datepicker-last-day .ui-state-default { color: #fff; position: relative; overflow: hidden; background-color: #08772d; }

.datepicker-dual .ui-datepicker table .ui-state-visible-only,
.datepicker-dual .ui-datepicker table .ui-state-visible-only .ui-state-default { pointer-events: none; }

.datepicker-dual .ui-datepicker table .ui-datepicker-first-day.ui-state-visible-only,
.datepicker-dual .ui-datepicker table .ui-datepicker-last-day.ui-state-visible-only ,
.datepicker-dual .ui-datepicker table .ui-datepicker-first-day.ui-state-visible-only .ui-state-default,
.datepicker-dual .ui-datepicker table .ui-datepicker-last-day.ui-state-visible-only .ui-state-default { color: #fff; pointer-events: all; }
.datepicker-dual .ui-datepicker table .ui-datepicker-first-day .ui-state-default,
.datepicker-dual .ui-datepicker table .ui-datepicker-last-day .ui-state-default{width: 100%;background-color: transparent !important;background-size: 100% 100%;border-radius: 0;}
.datepicker-dual .ui-datepicker table .ui-datepicker-first-day .ui-state-default{background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/first-date.png);}
.datepicker-dual .ui-datepicker table .ui-datepicker-last-day .ui-state-default{background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/last-date.png);}

.datepicker-dual .ui-datepicker table .highlight { position: relative; }
.datepicker-dual .ui-datepicker table .highlight:before { content: ''; width: 6px; height: 6px; position: absolute; top: 2px; left: 2px; border-radius: 50%; }
.datepicker-dual .ui-datepicker table .highlight-blue:before { background-color: #79a4d9; }
.datepicker-dual .ui-datepicker table .highlight-red:before { background-color: #f21515; }
.datepicker-dual .ui-datepicker table .highlight-yellow:before { background-color: #ebca11; }
.datepicker-dual .ui-datepicker table .highlight-green:before { background-color: #bee4be; }

.datepicker-dual .ui-widget .comiseo-daterangepicker-calendar { width: 100%; height: auto; display: block; padding: 0; }

.modal-calendar:not(.modal-calendar-single) .modal-body { height: -webkit-calc(100% - 147px); height: calc(100% - 104px); }  /* Before remove holidays bar - calc(100% - 147px)*/

.modal-calendar:not(.modal-calendar-single) .modal-footer:before { height: 50%; }
.modal-calendar:not(.modal-calendar-single) .modal-footer .btn { width: -webkit-calc(100% + 20px); width: calc(100% + 20px); display: block; margin-right: -10px;border-radius: 0;font-size: 20px;}
.modal-calendar:not(.modal-calendar-single) .modal-footer .btn strong {font-size: 27px;}

.datepicker-dual {height: calc(100% - 75px);}
.modal-calendar .modal-nav li {height: 70px;}
.modal-calendar .modal-nav li:not(.current) {color: black;}

.ui-datepicker-rtl {
  direction: rtl;
}
.datepicker-dual .ui-datepicker table .ui-datepicker-last-day .ui-state-default {
  background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/last-date.png);
}
.datepicker-dual .ui-datepicker table .ui-datepicker-first-day .ui-state-default {
  background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/first-date.png);
}
.modal-nav li {
  float: right;
}


/* ------------------------------------------------------------ *\
	Search
\* ------------------------------------------------------------ */

.search { padding: 10px; border-bottom: 1px solid #e2e7ed; background-color: #95a5b9; }

.search form { position: relative; }

.search-field { font-size: 23px; line-height: 26px; color: #2a3335; width: 100%; height: 48px; display: block; padding: 10px 17px 10px 44px; border: 1px solid #95a5b9; background: #fff; border-radius: 3px; box-shadow: none; }

.search-field::-webkit-input-placeholder { color: #7f8283; }

.search-field::-moz-placeholder { color: #7f8283; }

.search-field:-ms-input-placeholder { color: #7f8283; }

.search-field::placeholder { color: #7f8283; }

.search-btn { width: 44px; height: 48px; display: block; position: absolute; top: 0; left: 1px; padding: 0; border: 0; margin: 0; background: none; border-radius: 0; box-shadow: none; }

.advance-search-toggle {margin-top: 10px;}
.advance-search-toggle .toggle-btn {font-size: 17px;vertical-align: central;}
.advance-search-toggle .toggle-btn i {font-size: 22px;vertical-align: sub;}
.advance-search-toggle .toggle-btn.open i:before {content: "\e911";}
.advance-search-toggle .toggle-content:before {content: '';width: 0;height: 0;border-left: 10px solid transparent;border-right: 10px solid transparent;border-bottom: 10px solid #e0eaf2;position: relative;top: -31px;right: 3px;}
.advance-search-toggle .toggle-content {display: none;background-color: #e0eaf2;padding: 5px 0;margin-top: 10px;}



/* ------------------------------------------------------------ *\
	Modal
\* ------------------------------------------------------------ */

.modal,
.modal-container { height: 100%; }

.modal { opacity: 0; visibility: hidden; position: fixed; top: -100%; bottom:0; right: 0; left: 0; z-index: -1; background-color: #fff; transition: opacity .7s ease, visibility .7s ease; }

.modal-container { overflow-x: hidden; overflow-y: auto; -webkit-overflow-scrolling: touch; }

.modal-head { text-align:center; padding: 11px 10px 12px 12px; border-bottom: 1px solid #e2e7ed; background-color: #fff; }
/*.modal-head { text-align:center; padding: 16px 10px 15px; border-bottom: 1px solid #e2e7ed; background-color: #fff; }*/

.modal-head:after { }

.modal-head .logo { margin-left: 4px; margin-top: 1px; }

.modal-close { text-align: center; width: 37px; height: 20px; float: left; padding: 0; border: 0; margin: 0; background: none; }

.modal-content { padding: 0 10px; background-color: #fafdff; background-image:url('https://m.bon-voyage.magpaylabs.com/images/mobile/shadow.png'); background-position-y:top; background-position-x:center; background-repeat: no-repeat; }

.modal-shown,
.modal-shown body  {overflow: hidden; height: 100%; }
.modal-shown .modal-visible { opacity: 1; visibility: visible; top: 0%; z-index: 11; display: block;}

.modal-nav ul { overflow: hidden; }

.modal-nav li { font-size: 15px; line-height: 1.25; color: #fff; width: 50%; float: right; position: relative; padding: 6px 40px 6px 10px; background-color: #bcc8d7; }

.modal-nav li:before { content: ''; width: 0; height: 0; display: block; position: absolute; bottom: 0; right: 20px; border: 7px solid transparent; }

.modal-nav i { position: absolute; top: 10px; right: 20px; }

.modal-nav strong { font-size: 19px; line-height: 20px; display: block; }

.modal-nav .current { background-color: #209c2e; }

.calendar-top .icon-calendar { color: #000; font-size: 16px; margin-right: -4px; }

.calendar-top .current .icon-calendar { color: #fff; font-size: 16px; margin-right: -4px; }

.modal-nav .current:before { border-bottom-color: #fff; }

.modal-nav .current i { opacity: .6; }

.modal-footer { color: #000; position: relative;}
/*.modal-footer { color: #000; position: relative; padding: 0 10px; }*/

.modal-footer:before { content: ''; height: 100%; position: absolute; bottom: 100%; right: 0; left: 0; background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); }

.modal-legend { font-size: 0; line-height: 0; }

.modal-legend li { font-size: 11px; line-height: 17px; display: inline-block; vertical-align: top; padding: 15px 6px; }

.modal-legend li:before { content: ''; width: 6px; height: 6px; display: inline-block; vertical-align: middle; margin: -2px 0 0 4px; border-radius: 50%; }

.modal-legend-blue:before { background-color: #79a4d9; }

.modal-legend-red:before { background-color: #f21515; }

.modal-legend-yellow:before { background-color: #ebca11; }

.modal-legend-green:before { background-color: #bee4be; }

.modal .map { height: calc(100vh - 213px); width: 100%; }

/*  Modal Primary  */

.modal-primary { background-color: #f2f2f2; }

/*  Modal Calendar  */

.modal-calendar .modal-body { height: calc(100% - 88px); }

.modal-calendar .modal-content { height: 100%; padding: 0; }

.modal-calendar .modal-container { -webkit-overflow-scrolling: auto; }
.modal-calendar .sys-datepicker-wrapper { height: calc(100% - 50px); padding-top: 10px; }


#hotelPersons .room-head {
  position: relative;
  display: flex;
  padding: 0 10px;
}
#hotelPersons .room-head .ico-cross {
  position: absolute;
  top: 7px;
  right: 15px;
  width: 10px;
  height: 10px;
}



.rtl {
    direction: rtl;
}


.ltr{
	direction: ltr;
}

/* Datepicker */
.ui-datepicker-rtl {
     direction: ltr;
}
.datepicker-dual .ui-datepicker table .ui-datepicker-last-day .ui-state-default {
    background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/first-date.png);
}
.datepicker-dual .ui-datepicker table .ui-datepicker-first-day .ui-state-default {
    background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/last-date.png);
}
.modal-nav li {
    float: left;
}
/* End Datepicker */



.ico-toggle { width: 18px; height: 18px; background: #bccadc; border-radius: 2px; position: relative; }
.ico-toggle:before,
.ico-toggle:after { content: ''; position: absolute; top: 50%; left: 50%; width: 8px; height: 1px; background: #fff; margin-left: -4px; }
.ico-toggle:after { transform: rotate(90deg); transition: transform .3s; }
.ico-toggle-rounded { width: 14px; height: 14px; background: #72849a; border-radius: 50%; }
.ico-toggle-rounded:before,
.ico-toggle-rounded:after { width: 6px; margin-left: -3px; }

/*.ico-plane-left-sm { width: 8px; height: 8px; background-image: url(/images/mobile/icons/ico-plane-left-sm.png); }*/
/*.ico-plane-right-sm { width: 8px; height: 8px; background-image: url(/images/mobile/icons/ico-plane-right-sm.png); }*/

/*.ico-back { width: 16px; height: 16px; background-image: url(/images/mobile/icons/ico-back.png); }*/

/*.ico-cross-circle { width: 10px; height: 10px; background-image: url(/images/mobile/icons/ico-cross-circle.png); }*/

.ico-check { width: 12px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-check.png); }

/*.ico-plane-white { width: 20px; height: 11px; background-image: url(/images/mobile/icons/ico-plane-white.png); }*/

/*.ico-hotel-white { width: 16px; height: 16px; background-image: url(/images/mobile/icons/ico-hotel-white.png); }*/

.ico-square { width: 10px; height: 10px; background: #188626; }

.ico-angle-left { width: 6px; height: 10px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-angle-left.png); }

/*.ico-pin-alt { width: 10px; height: 15px; background-image: url(/images/mobile/icons/ico-pin-alt.png); }*/

.ico-clock { width: 14px; height: 14px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-clock.png); }

.ico-clock-white { width: 14px; height: 14px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-clock-white.png); }

.ico-search-white { width: 12px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-search-white.png); }

.ico-search-sm { width: 14px; height: 14px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-search-sm.png); }

.ico-plane-left { width: 15px; height: 15px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-plane-left.png); }

.ico-plane-right { width: 15px; height: 15px; background-image: url(/images/mobile/icons/ico-plane-right.png); }

.ico-calendar-sm { width: 12px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-calendar-sm.png); }
.ico-filter { width: 16px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-filter.png); }

.ico-sort { width: 14px; height: 10px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-sort.png); }

/*.ico-heart { width: 18px; height: 16px; background-image: url(/images/mobile/icons/ico-heart.png); }*/

/*.ico-like { width: 13px; height: 13px; background-image: url(/images/mobile/icons/ico-like.png); }*/

/*.ico-login { width: 24px; height: 24px; background-image: url(/images/mobile/icons/ico-login.png); }*/

.ico-globe-lg { width: 20px; height: 24px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-globe-lg.png); }

.ico-pin-lg { width: 18px; height: 24px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-pin-lg.png); }

.ico-star-lg { width: 24px; height: 24px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-star-lg.png); }

.ico-star-filled { background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/../img/rating-star-full.png); width: 25px; height: 22px; }

.ico-star { background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/../img/rating-star.png); width: 25px; height: 22px; }

.ico-add { width: 12px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-add.png); }

.ico-adult { width: 10px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-adult.png); }

.ico-adult-child { width: 16px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-adult-child.png); }

.ico-adult-child-more { width: 22px; height: 14px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-adult-child-more.png); }

.ico-adult-more { width: 14px; height: 18px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-adult-more.png); }

.ico-adult-more-child { width: 16px; height: 19px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-adult-more-child.png); }

.ico-adult-more-child-more { width: 21px; height: 19px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-adult-more-child-more.png); }

.ico-airplane { width: 16px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-airplane.png); }

.ico-airplane-arrive { width: 20px; height: 11px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-airplane-arrive.png); }

.ico-airplane-depart { width: 20px; height: 11px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-airplane-depart.png); }

.ico-arrow-left { width: 14px; height: 11px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-arrow-left.png); }

.ico-arrow-left-dark { width: 18px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-arrow-left-dark.png); }

.ico-arrows { background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-arrows.png); width: 44px; height: 38px; }

.ico-burger { width: 17px; height: 15px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-burger.png); }
.ico-burger-white { width: 17px; height: 15px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-burger-white.png); }

.ico-calendar { width: 13px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-calendar.png); }

.ico-calendar-default { width: 13px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-calendar-default.png); }

.ico-calendar-faded { width: 13px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-calendar-faded.png); }

.ico-camera { width: 16px; height: 13px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-camera.png); }

.ico-cars-rental { width: 26px; height: 20px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-cars-rental.png); }

.ico-chevron-down { width: 9px; height: 6px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-chevron-down.png); }

.ico-chevron-left { width: 10px; height: 17px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-chevron-left.png); }

.ico-compass { width: 16px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-compass.png); }

.ico-cross { width: 15px; height: 15px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-cross.png); }

.ico-dismiss { width: 8px; height: 8px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-dismiss.png); }

.ico-dual-person { width: 16px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-dual-person.png); }

.ico-eye { width: 25px; height: 13px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-eye.png); }

.ico-facebook { width: 5px; height: 10px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-facebook2.png); }

.ico-youtube { width: 23px; height: 23px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-youtube.png); }

.ico-family { width: 34px; height: 28px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-family.png); }

.ico-flame { width: 19px; height: 23px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-flame.png); }

.ico-flame-large { width: 25px; height: 30px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-flame-large.png); }

.ico-flights { width: 21px; height: 22px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-flights.png); }

.ico-flights-abroad { width: 28px; height: 26px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-flights-abroad.png); }

.ico-flights-eilat { width: 23px; height: 23px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-flights-eilat.png); }

.ico-gift { width: 14px; height: 13px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-gift.png); }

.ico-globe { width: 14px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-globe.png); }

.ico-hotel { width: 15px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-hotel.png); }

.ico-hotels { width: 20px; height: 22px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-hotels.png); }

.ico-hotels-eilat { width: 24px; height: 23px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-hotels-eilat.png); }

.ico-instagram { width: 9px; height: 9px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-instagram.png); }

.ico-marker { width: 10px; height: 15px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-marker.png); }

.ico-notebook { width: 14px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-notebook.png); }

.ico-packages { width: 24px; height: 24px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-packages.png); }

.ico-people { width: 20px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-people.png); }

.ico-person { width: 16px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-person.png); }

.ico-phone { width: 11px; height: 15px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-phone.png); }

.ico-plus { width: 7px; height: 7px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-plus.png); }

.ico-rural { width: 30px; height: 26px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-rural.png); }

.ico-search { width: 19px; height: 19px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-search.png); }

.ico-smiley { width: 16px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-smiley.png); }

.ico-speedometer { width: 14px; height: 13px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-speedometer.png); }

.ico-sports-and-concerts { width: 30px; height: 26px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-sports-and-concerts.png); }

.ico-thumb-up { width: 17px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-thumb-up.png); }

.ico-tick { width: 12px; height: 8px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-tick.png); }

.ico-tick-white { width: 12px; height: 8px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-tick-white.png); }

.ico-tours { width: 25px; height: 21px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-tours.png); }

.ico-twitter { width: 11px; height: 9px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-twitter2.png); }
.ico-google-plus { width: 11px; height: 9px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-google-plus.png); }

.ico-vacations { width: 22px; height: 22px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-vacations.png); }

.ico-wand { width: 17px; height: 16px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-wand.png); }

.ico-worldwide-flights { width: 29px; height: 27px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-worldwide-flights.png); }

.ico-cars-rental-active,
.current .ico-cars-rental { width: 26px; height: 20px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-cars-rental-active.png); }

.ico-flights-active,
.current .ico-flights { width: 21px; height: 22px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-flights-active.png); }

.ico-hotels-active,
.current .ico-hotels { width: 20px; height: 22px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-hotels-active.png); }

.ico-tours-active,
.current .ico-tours { width: 25px; height: 21px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-tours-active.png); }

.ico-vacations-active,
.current .ico-vacations { width: 22px; height: 22px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-vacations-active.png); }

.ico-3g { width: 12px; height: 9px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-3g.png); }
.ico-add-alt { width: 18px; height: 18px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-add-alt.png); }
.ico-alert-red { width: 12px; height: 12px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-alert-red.png); }
.ico-alert-red-small { width: 10px; height: 10px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-alert-red-small.png); }
.ico-book { width: 12px; height: 14px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-book.png); }
.ico-briefcase { width: 10px; height: 8px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-briefcase.png); }
.ico-burger-dark { width: 18px; height: 15px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-burger-dark.png); }
.ico-calendar-alt { width: 12px; height: 13px; background-image: url(https://m.bon-voyage.magpaylabs.com/images/mobile/icons/ico-calendar-alt.png); }
.ico-car-door { width: 10px; height: 11px; background-image: url(/images/mobile/icons/ico-car-door.png); }
.ico-car-from { width: 13px; height: 6px; background-image: url(/images/mobile/icons/ico-car-from.png); }
.ico-car-from-alt { width: 18px; height: 8px; background-image: url(/images/mobile/icons/ico-car-from-alt.png); }
.ico-car-to { width: 13px; height: 6px; background-image: url(/images/mobile/icons/ico-car-to.png); }
.ico-car-to-alt { width: 18px; height: 8px; background-image: url(/images/mobile/icons/ico-car-to-alt.png); }
.ico-check-active { width: 18px; height: 18px; background-image: url(/images/mobile/icons/ico-check-active.png); }
.ico-check-faded { width: 18px; height: 18px; background-image: url(/images/mobile/icons/ico-check-faded.png); }
.ico-check-large { width: 25px; height: 25px; background-image: url(/images/mobile/icons/ico-check-large.png); }
.ico-check-small { width: 6px; height: 6px; background-image: url(/images/mobile/icons/ico-check-small.png); }
.ico-chevron-active-left { width: 9px; height: 15px; background-image: url(/images/mobile/icons/ico-chevron-active-left.png); }
.ico-chevron-active-right { width: 9px; height: 15px; background-image: url(/images/mobile/icons/ico-chevron-active-right.png); }
.ico-chevron-inactive-left { width: 9px; height: 15px; background-image: url(/images/mobile/icons/ico-chevron-inactive-left.png); }
.ico-chevron-inactive-right { width: 9px; height: 15px; background-image: url(/images/mobile/icons/ico-chevron-inactive-right.png); }
.ico-clover { width: 9px; height: 9px; background-image: url(/images/mobile/icons/ico-clover.png); }
.ico-close-white { width: 14px; height: 14px; background-image: url(/images/mobile/icons/ico-close-white.png); }
.ico-collapse { width: 12px; height: 12px; background-image: url(/images/mobile/icons/ico-collapse.png); }
.ico-cutlery { width: 17px; height: 16px; background-image: url(/images/mobile/icons/ico-cutlery.png); }
.ico-dialer { width: 11px; height: 11px; background-image: url(/images/mobile/icons/ico-dialer.png); }
.ico-egg { width: 12px; height: 10px; background-image: url(/images/mobile/icons/ico-egg.png); }
.ico-exchange { width: 12px; height: 11px; background-image: url(/images/mobile/icons/ico-exchange.png); }
.ico-exchange-alt { width: 17px; height: 16px; background-image: url(/images/mobile/icons/ico-exchange-alt.png); }
.ico-eye-alt { width: 17px; height: 12px; background-image: url(/images/mobile/icons/ico-eye-alt.png); }
.ico-flight-from { width: 14px; height: 14px; background-image: url(/images/mobile/icons/ico-flight-from.png); }
.ico-flight-from-alt { width: 12px; height: 11px; background-image: url(/images/mobile/icons/ico-flight-from-alt.png); }
.ico-flight-from-small { width: 13px; height: 13px; background-image: url(/images/mobile/icons/ico-flight-from-small.png); }
.ico-flight-to { width: 14px; height: 14px; background-image: url(/images/mobile/icons/ico-flight-to.png); }
.ico-flight-to-small { width: 13px; height: 13px; background-image: url(/images/mobile/icons/ico-flight-to-small.png); }
.ico-fuel { width: 8px; height: 10px; background-image: url(/images/mobile/icons/ico-fuel.png); }
.ico-gallery { width: 18px; height: 15px; background-image: url(/images/mobile/icons/ico-gallery.png); vertical-align: text-bottom; }
.ico-globe-alt { width: 32px; height: 32px; background-image: url(/images/mobile/icons/ico-globe-alt.png); }
.ico-google-play { width: 12px; height: 13px; background-image: url(/images/mobile/icons/ico-google-play.png); }
.ico-info { width: 12px; height: 12px; background-image: url(/images/mobile/icons/ico-info.png); }
.ico-info-blue-alt { width: 12px; height: 12px; background-image: url(/images/mobile/icons/ico-info-blue-alt.png); }
.ico-info-green { width: 9px; height: 9px; background-image: url(/images/mobile/icons/ico-info-green.png); }
.ico-info-green-alt { width: 12px; height: 12px; background-image: url(/images/mobile/icons/ico-info-green-alt.png); }
.ico-info-red { width: 12px; height: 12px; background-image: url(/images/mobile/icons/ico-info-red.png); }
.ico-luggage { width: 9px; height: 13px; background-image: url(/images/mobile/icons/ico-luggage.png); }
.ico-map-marker { width: 13px; height: 17px; background-image: url(/images/mobile/icons/ico-map-marker.png); }
.ico-odometer { width: 12px; height: 12px; background-image: url(/images/mobile/icons/ico-odometer.png); }
.ico-person-dark { width: 10px; height: 12px; background-image: url(/images/mobile/icons/ico-person-dark.png); }
.ico-person-small { width: 9px; height: 11px; background-image: url(/images/mobile/icons/ico-person-small.png); }
.ico-person-smaller { width: 7px; height: 8px; background-image: url(/images/mobile/icons/ico-person-smaller.png); }
.ico-phone-alt { width: 8px; height: 11px; background-image: url(/images/mobile/icons/ico-phone-alt.png); }
.ico-pin { width: 10px; height: 13px; background-image: url(/images/mobile/icons/ico-pin.png); }
.ico-plus-blue { width: 11px; height: 11px; background-image: url(/images/mobile/icons/ico-plus-blue.png); }
.ico-remove { width: 18px; height: 18px; background-image: url(/images/mobile/icons/ico-remove.png); }
.ico-shield { width: 30px; height: 40px; background-image: url(/images/mobile/icons/ico-shield.png); }
.ico-sir { width: 9px; height: 12px; background-image: url(/images/mobile/icons/ico-sir.png); }
.ico-sofa { width: 15px; height: 11px; background-image: url(/images/mobile/icons/ico-sofa.png); }
.ico-temperature { width: 9px; height: 15px; background-image: url(/images/mobile/icons/ico-temperature.png); }
.ico-thumb-up-alt { width: 12px; height: 12px; background-image: url(/images/mobile/icons/ico-thumb-up-alt.png); }
.ico-time { width: 13px; height: 13px; background-image: url(/images/mobile/icons/ico-time.png); }
.ico-transmission { width: 13px; height: 13px; background-image: url(/images/mobile/icons/ico-transmission.png); }
.ico-tripadvisor { width: 82px; height: 12px; background-image: url(/images/mobile/icons/ico-tripadvisor.png); }
.ico-gift-alt { width: 10px; height: 9px; background-image: url(/images/mobile/icons/ico-gift-alt.png); }
.ico-adult-two-children { width: 19px; height: 15px; background-image: url(/images/mobile/icons/ico-adult-two-children.png); }


.modal-show{
    top: 0;
    z-index: 11;
    visibility: visible;
    display: block;
    opacity: 1;
}

.occupancy-span{width: 100%;}

.form-control-custom{display: flex;justify-content: space-between;}
</style>
