<template>
  <div class="section-results">
    <div class="section-head">
      <h1 class="dir-option-left">Flight + hotel in Amsterdam</h1>
      <p class="dates dir-option-left">Thursday 15/03 - Friday 30/03 (15 nights)</p>
      <span class="ribbon">Number of results:<strong id="number_of_results">87</strong>
      </span>
      <div class="section-head-inner">
        <nav class="nav-tertiary">
          <ul>
            <li>
                <a href="#modalFilters" class="js-modal-toggle" data-type="filters">
                    <i class="icon-filter"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    filtering
                </font></font></a>
            </li>
                                        <li>
                <a href="#modalSort" class="js-modal-toggle" data-type="sort">
                    <i class="icon-sort"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    sort
                </font></font></a>
            </li>
                                        <li class="alignleft">
                <a href="#modalSearch" class="js-modal-toggle" data-type="search">
                    <i class="icon-search"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    Change Search
                </font></font></a>
            </li>



          </ul>
        </nav><!-- /.nav-tertiary -->
      </div>
    </div>

    <div class="hotels">
      <Hotel></Hotel>
      <Hotel></Hotel>
      <Hotel></Hotel>
      <Hotel></Hotel>
    </div>
  </div>
</template>

<script>
import Hotel from "./Hotel.vue";
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },

  components: {
    Hotel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section-results .section-head {
    position: relative;
    padding: 10px;
    color: #fff;
    /* color: #c6e1c8; */
    /* background: #198624 url(../img/results-head.png) no-repeat 0 -26px; */
    background-image: url(../assets/top.jpg);
    font-size: 15px;
  }

  .section-results .section-head h1 {
    color: #fff;
    font-size: 15px;
    line-height: 1;
    font-weight: 600;
    padding-bottom: 2px;
    letter-spacing: 0.2px;
    text-align: right;
  }

  .section-results .section-head p {
    padding-bottom: 15px;
    color: #88c6d8;
    text-align: right;
    font-size: 12px;
  }

  .section-results .section-head .ribbon {
    position: absolute;
    bottom: -4px;
    left: 10px;
}

.ribbon {
    display: inline-block;
    vertical-align: middle;
    width: 89px;
    height: 63px;
    padding: 10px 11px 0 0;
    background: url(../assets/ribbon.png) no-repeat 0 0;
    background-size: 100% auto;
    color: #fff;
    font-size: 11px;
}

.ribbon strong {
    display: block;
    font-size: 25px;
    line-height: 1;
    font-weight: normal;
    margin-top: -4px;
}

.section-results .section-head-inner {
    background: #f3f5f7;
    margin: 0 -10px -10px;
    padding: 0 10px;
}

.nav-tertiary ul {
    list-style: none outside none;
    margin-right: -10px;
}

.nav-tertiary ul li:first-child {
    margin-right: 1px;
}

.nav-tertiary li {
    float: right;
    border-left: 1px solid #fcfdfd;
}

.nav-tertiary a {
    display: block;
    height: 50px;
    padding: 16px 10px 0;
    color: #72849a;
}

a {
    color: inherit;
    text-decoration: none;
}

[class^="icon-"], [class*=" icon-"] {
    color: #687b93;
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.nav-tertiary .alignleft {
    float: left;
    border-width: 0 1px 0 0;
    border-style: solid;
    border-color: #fcfdfd;
    padding-right: 1px;
}

.hotels{
  margin-top: 55px;
  padding: 5px;
}

body.rtl .ribbon{
    left: auto;
    right: 10px;
}

body.rtl .dir-option-left{
  text-align: left;
}
</style>
