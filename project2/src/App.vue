<template>
  <div id="app" class="booking-app">
    <Header></Header>
    <div id="content" class="booking-content">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
.booking-app { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; width: 800px; max-width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: center;}

.booking-app .booking-content {margin-top: 50px; width: 100%;}

body{margin: 0;}

*, *:before, *:after { padding: 0;margin: 0;outline: 0;box-sizing: border-box;}

.flex{display: flex;}
</style>
