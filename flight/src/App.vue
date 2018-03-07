<template>
  <div id="app" class="flight-app rtl">
    <Header></Header>
    <div class="flight-app-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
body{margin: 0;}

.flight-app{width: 800px;max-width: 100%; margin: auto;}

.flight-app .flight-app-content{margin-top: 50px;}

.flight-app p{margin: 0px;}

.rtl{direction: rtl;}

.ltr{direction: ltr;}

.flex{display: flex;}
</style>
