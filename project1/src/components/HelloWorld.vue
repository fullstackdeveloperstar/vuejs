<template>
  <div class="hellopage">
    <p>"Two things are infinite:</p>
    <p>The universe & SnapTravel deals.</p>
    <p>-Albert Einstein</p>
    <img src="../assets/logoround.png" class="logo-round" v-on:click = "gotoSnapTravel">
    
    <p>Searching for the best deals...</p>
    <h5>Carlton Hotel Nahariya, Feb 21-Feb 22</h5>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },

  methods: {
    gotoSnapTravel() {
      this.$router.push({ path:'snaptravel' });
    }
  }
}
</script>


<style scoped>
.hellopage{
  margin-top: 30%;
  text-align: center;  
}

.hellopage .logo-round{
  width: 50px;
  margin-top: 50px;
}

</style>
