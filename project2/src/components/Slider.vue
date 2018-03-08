<template>
 <div>
 <div class="slideshow-container">

  <div class="mySlides fade ">
    <div class="numbertext">1 / 3</div>
    <img src="../assets/slider1.jpg" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="../assets/slider2.jpg" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="../assets/slider1.jpg" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <a class="prev" @click="plusSlides(-1)">&#10094;</a>
  <a class="next" @click="plusSlides(1)">&#10095;</a>
</div>
  <br>

  <div style="text-align:center">
    <span class="dot"></span> 
    <span class="dot"></span> 
    <span class="dot"></span> 
  </div>
</div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
      return{
       slideIndex:0
      }
    },

  methods: {
    showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {this.slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].style.display = "block";  
      dots[this.slideIndex-1].className += " active";
      setTimeout(this.showSlides, 5000); // Change image every 2 seconds
    },

    plusSlides(n) {
      this.showSlidesN(this.slideIndex += n);
    },

    currentSlide(n) {
      this.showSlidesN(this.slideIndex = n);
    },

    showSlidesN(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}    
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].style.display = "block";  
      dots[this.slideIndex-1].className += " active";
    }
  },
    mounted: function () {
      this.showSlides()
  }

}
</script>

<style scoped>


* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;height: 100%;}
img {vertical-align: middle; height: 100%;}

/* Slideshow container */
.slideshow-container {  max-width: 1000px;  position: relative;  margin: auto;  height: 300px;}

.prev, .next {  cursor: pointer;  position: absolute;  top: 50%;  width: auto;  padding: 16px;  margin-top: -22px;  color: white;  font-weight: bold;  font-size: 18px; transition: 0.6s ease;  border-radius: 0 3px 3px 0;}

/* Position the "next button" to the right */
.next {  right: 0;  border-radius: 3px 0 0 3px;}

.prev{  left: 0;}

.rtl .next{right: auto;left: 0;}

.rtl .prev {left: auto;right: 0;}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {  background-color: rgba(0,0,0,0.8);}

/* Caption text */
.text {  color: #f2f2f2;  font-size: 15px;  padding: 8px 12px;  position: absolute;  bottom: 8px;  width: 100%;  text-align: center;}

/* Number text (1/3 etc) */
.numbertext {  color: #f2f2f2;  font-size: 12px;  padding: 8px 12px;  position: absolute;  top: 10px;  left: 10px;  background: black;  opacity: 0.7;  border-radius: 3px;}

/* The dots/bullets/indicators */
.dot {  height: 15px;  width: 15px;  margin: 0 2px;  background-color: #bbb;  border-radius: 50%;  display: inline-block;  transition: background-color 0.6s ease;}

.active {  background-color: #717171;}

/* Fading animation */
.fade {  -webkit-animation-name: fade;  -webkit-animation-duration: 2.5s;  animation-name: fade;  animation-duration: 2.5s;}

.left-to-right{ -webkit-animation-name: lefttoright;  -webkit-animation-duration: 2.5s;  animation-name: lefttoright;  animation-duration: 2.5s; }

@-webkit-keyframes fade {  from {opacity: .4; }   to {opacity: 1; }}

@keyframes fade {  from {opacity: .4;}   to {opacity: 1; }}

@-webkit-keyframes lefttoright {  from { width: 0%;}   to {width:100%}}

@keyframes lefttoright {  from { width: 0%;}   to { width: 100%;}}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {  .text {font-size: 11px}}
</style>

