<template>
  <div class="header">
    <div class="header-menu">
         <i class="fas fa-align-justify"></i>
    </div>
    
    <div class="header-logo">
        <img src="../assets/logo.png">
    </div>

    <div class="header-empty">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
    .header{display: flex; justify-content: space-between; align-items: center; border-bottom: solid 1px #ddd;padding: 5px;height: 40px;position: fixed; top: 0;left: auto; width: 800px; max-width: 100%;background: #fff; opacity: 0.9;z-index:1;}

    .header .header-logo img{height: 30px;}
</style>
