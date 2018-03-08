<template>
  <div  class="booking-app">
    <div class="booking-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.booking-app { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; width: 800px; max-width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: center;}

.booking-app .booking-content {}

body{margin: 0;}

.flex{display: flex;}

</style>
