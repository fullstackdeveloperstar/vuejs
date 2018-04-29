<template>
  <div class="homepage">
    <div class="logo-part">
      <img src="../assets/logo.png">
    </div>

    <span class="book-btn primary-bg" v-on:click="toggleSideBar()">BOOK NOW</span>
    <SideBar :sidebarconf="sidebarconf"></SideBar>

  </div>
</template>

<script>
import SideBar from './SideBar.vue';
export default {
  name: 'HomePage',
  data () {
    return {
      sidebarconf :{
        isShow: false
      }
    }
  },
  components:{
    SideBar
  },
  methods:{
    toggleSideBar(){
      this.sidebarconf.isShow = true;
    }
  }
}
</script>

<style>
.homepage{}

.homepage .logo-part{text-align: center;}

.homepage .book-btn{color: white;padding: 10px 20px;}


</style>
