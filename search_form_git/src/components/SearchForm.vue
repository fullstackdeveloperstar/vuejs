<template>
  <div class="search-form">
    <div class="wrapper ltr">
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
						                               :placeholder="currentCity"
						                               data-value-field="#hotels-city" data-focus="modal" data-target="#modalAutocompleteHotels" data-type="autocomplete" readonly="readonly" @click="showCity">
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
 									
									<mydatepicker ></mydatepicker>

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

					<div class="modal" id="modalAutocompleteHotels" v-bind:class="{'modal-show':isShowCity}">
					    <div class="modal-container">
					        <div class="modal-head">
					            <i class="logo"></i>
					            <button type="button" class="modal-close" @click="closeCity">
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
					            <div class="" style="padding-top:20px;">
					                <div class="city-item" v-for="city in cities" @click="selectCity(city.city)">
										<span class="location-mark-icon">
											<i class="fas fa-map-marker-alt"></i>
										</span>
										<span class="city-name">{{city.city}}</span>
									</div>
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

	 	</div>
	 </div>
  </div>
</template>

<script>
import HotelDatePicker from './DatePicker.vue';
export default {
  name: 'SearchForm',
  data () {
    return {
      isShowOccupancy: false,
      isShowDuration: false,
	  isShowCity: false,
      rooms: [
        {chidren: "1"},
      ],
      ok: true,
      object: { a: "1" },
      cities: [
		  {city: 'Paris'},
		  {city: 'New York'},
	  ], 
	  currentCity: 'Paris'
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
      this.components.mydatepicker.showDatePicker();
      console.log(this.$children[0]);
    },
    closeDuration(){
      this.isShowDuration = false;
    },

	showCity(){
		this.isShowCity = true;
	},

	closeCity(){
		this.isShowCity = false;
	},

	selectCity(city){
		this.currentCity = city;
		this.isShowCity = false;
	},
	
	addRoom(){
      this.rooms.push({chidren: "1"});
    },
    onChangeCountChildren(room) {
    
    },
    inputChanged: function() {
      alert();
    }
  },

  components: {
   'mydatepicker': HotelDatePicker,
  },

}
</script>

<style scoped>
*,
*:before,
*:after { padding: 0; margin: 0; outline: 0; box-sizing: border-box; }

nav ul,
nav ol { list-style: none outside none; margin: 0; display: flex;}

body { font-family: 'FBKolya', 'Arial', 'Helvetica', sans-serif; font-size: 14px; line-height: 1.3; color: #2a3335; font-weight: 400; font-style: normal; text-transform: none; text-decoration: none; letter-spacing: 0; word-spacing: 0; direction: ltr; min-width: 320px; background: #fff; }

a { color: inherit; text-decoration: none; }

h1 { font-size: 28px; font-weight: 400; }

h2 { font-size: 23px; font-weight: 400; }

h3 { font-size: 19px; font-weight: 700; }

h4 { font-size: 19px; font-weight: 400; }

[hidden],
.hidden { display: none; }

[disabled],
.disabled { cursor: default; }

.wrapper .btn { font-size: 27px; line-height: 30px; color: #fff; font-weight: 700; text-decoration: none; text-align: center; display: inline-block; vertical-align: middle; padding: 9px 10px; border: 0; background: #209c2e; cursor: pointer; border-radius: 3px; box-shadow: none; }

.btn-block { width: 100%; display: block; padding-left: 0; padding-right: 0; box-shadow: 0 3px 0 #0a6714; text-shadow: 0 2px 0 #0a6714; }

.dropdown-item,
.dropdown-link { font-size: 17px; line-height: 25px; position: relative; padding: 10px 15px 10px 20px; border-bottom: 1px solid #eff5f9; }


.dropdown-link { display: flex; padding-right:7px; justify-content: space-between;}

.dropdown-link span { width: 15px; height: 15px; display: block; position: relative; top: 0; right: auto; bottom: 0; margin: 0; background-color: #209c2e; border-radius: 50%; }

.dropdown-link span i { display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }


.dropdown-primary .dropdown-button { padding-right: 10px; }


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


.form-group-primary { padding: 7px 7px 7px 0; }

.form-group-primary i { position: absolute; top: 11px; right: 10px; bottom: 0; margin: auto; font-size:16px; }

.form-group-primary i.ico-calendar-default { right: 12px; }

.form-group-primary i.ico-marker { right: 15px; }

.form-group-primary i.ico-hotel { right: 12px; }

.form-group-primary i.ico-globe { right: 12px; }

.form-label { font-size: 17px; line-height: 1; color: #209c2e; padding: 0 10px; }

.form-label:not(.hidden) { display: flex; }

.form-label:not(.hidden) ~ i { top: 13px; bottom: auto;font-size: 16px; }

.form-label:not(.hidden) ~ i.ico-globe { top: 10px; }

.form-label:not(.hidden) ~ .form-controls .field { font-weight: 600; height: 20px; padding: 0 10px; }

.form-label-primary { font-size: 15px; color: #2a3335; position: absolute; top: 5px; z-index: 1; }

.form-select i { position: relative; top: 0;  bottom: 0; margin: auto 10px; pointer-events: none; }

.form-select .select { position: relative; z-index: 2; background-color: transparent; width: 100%;}

.select.basic-select { padding:0 10px; font-size:18px}

.form-controls i { display: none; }

.form-actions { padding-top: 5px; }

.field,
.select,
.textarea { font-size: 18px; line-height: 20px; color: #2a3335; width: 100%; height: 26px; display: block; padding: 3px 10px; border: 0; background: #fff; border-radius: 0; box-shadow: none; }

.field.date-field {font-size:17px}

.field[type="hidden"] { display: none; }

.select { height: 40px; padding: 15px 10px 0 20px; border-radius: 3px; }

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

@-webkit-keyframes toTop {
	70% { opacity: 1; transform: scale(1); }
	100% { top: 0; opacity: 0; transform: scale(.5); }
}

@keyframes toTop {
	70% { opacity: 1; transform: scale(1); }
	100% { top: 0; opacity: 0; transform: scale(.5); }
}

.tabbed-content .section-tab { display: none;  }

.tabbed-content .section-tab.current { display: block; }

.modal-nav li {float: right;}

.search { padding: 10px; border-bottom: 1px solid #e2e7ed; background-color: #95a5b9; }

.search form { position: relative; }

.search-field { font-size: 23px; line-height: 26px; color: #2a3335; width: 100%; height: 48px; display: block; padding: 10px 44px 10px 44px; border: 1px solid #95a5b9; background: #fff; border-radius: 3px; box-shadow: none; }

.search-field::-webkit-input-placeholder { color: #7f8283; }

.search-field::-moz-placeholder { color: #7f8283; }

.search-field:-ms-input-placeholder { color: #7f8283; }

.search-field::placeholder { color: #7f8283; }

.search-btn { width: 44px; height: 48px; display: block; position: absolute; top: 0; padding: 0; border: 0; margin: 0; background: none; border-radius: 0; box-shadow: none; }

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

.modal-footer:before { content: ''; height: 100%; position: absolute; bottom: 100%; right: 0; left: 0; background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); }

.modal .map { height: calc(100vh - 213px); width: 100%; }

.modal-primary { background-color: #f2f2f2; }

#hotelPersons .room-head {  position: relative;  display: flex;  padding: 0 10px;}

#hotelPersons .room-head .ico-cross {position: absolute; top: 7px;right: 15px;width: 10px; height: 10px;}

.rtl {direction: rtl;}

.ltr{direction: ltr;}

.modal-show{top: 0; z-index: 11;visibility: visible; display: block;  opacity: 1;}

.occupancy-span{width: 100%;}

.form-control-custom{display: flex;justify-content: space-between;}

.search-form .city-item{display: flex; padding: 15px; background: #fff;border-bottom: solid 1px #aaa; cursor:pointer;}

.search-form .city-item:hover{background: #eee;}

.search-form .city-item .city-name{margin: 0 10px;}

</style>
