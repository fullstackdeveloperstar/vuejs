<template>
  <div class="header flex">
      <div class="logo-part">
          <img src="../assets/logo.png">
      </div>

      <div class="logo-part-mobile">
          <div class="sb-hotel-name-address-container">
            <span class="sb-hotel-name">Milu Hotel</span>
                <div class="sb-hotel-stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            <span class="sb-hotel-address">Via de' Tornabuoni, 8 - 50123 Firenze, Italy</span>
        </div>
      </div>

      <div class="official-website-title">
          Official website: best rate guarantee
      </div>

      <div class="contacts flex">
          <div class="sb-info">
            <a href="#/hotelinfo"><i class="fa fa-info-circle"></i> info</a>
          </div>

          <div class="sb-email">
            <a href="mailto:info@hotelmilu.com&nbsp;"><i class="fa fa-envelope"></i> Email</a>
          </div>

          <div class="sb-phone-number">
            <a href="tel:+39 055 217103&nbsp;"><i class="fa fa-phone"></i> +39 055 217103&nbsp;</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header{flex-wrap: wrap;}

.header .logo-part{width: 32%;}

.header .logo-part img{max-height: 60px;vertical-align: bottom;}

.header .logo-part-mobile{display: none;width: 100%;text-align: center;}

.header .logo-part-mobile .sb-hotel-name{font-size: 1rem;font-weight: 500;line-height: 1.2;}

.header .logo-part-mobile .sb-hotel-stars {color: #ffcb00;font-size: .6875rem;}

.header .logo-part-mobile .sb-hotel-address {display: inline-block;font-size: .75rem;}

.header .official-website-title{color: #fff;font-size: 1rem;text-shadow: 0 1px 2px #000;}

.header .contacts{margin-left: auto;text-shadow: 0 1px 2px #000;}

.header .contacts .sb-info{}

.header .contacts .sb-info a{color: white; text-decoration: none;}

.header .contacts .sb-email{margin:0 16px;}

.header .contacts .sb-email a{color: white; text-decoration: none;}

.header .contacts .sb-phone-number{}

.header .contacts .sb-phone-number a{color: white; text-decoration: none;}

@media only screen and (max-width: 600px) {
    .header .logo-part{display: none;}

    .header .logo-part-mobile{display: block;}

    .header .official-website-title{display: none;}

    .header .contacts .sb-email{display: none;}

    .header .contacts{flex-wrap: wrap;margin: none;width: 100%;}

    .header .contacts .sb-info{text-align: center;width: 100%;display: flex; margin-top: 20px;}

    .header .contacts .sb-info a{background: #3e1855;padding: 8px;margin-left: 0;text-align: center;font-size: 1rem;border-radius: 3px;text-shadow: none;width: 100%;}

    .header .contacts .sb-phone-number{text-align: center;width: 100%;display: flex;margin-top: 10px;}

    .header .contacts .sb-phone-number a{background: #3e1855;padding: 8px;margin-left: 0;text-align: center;font-size: 1rem;border-radius: 3px;text-shadow: none;width: 100%;}

}
</style>

