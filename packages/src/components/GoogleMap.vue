<template>
  <div class="google-map" id="testmap"></div>
</template>
<script>
export default {
  name: 'GoogleMap',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
    }
  },

  mounted: function () {
    const element = document.getElementById("testmap");
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527,-0.1921837)
    }
    const map = new google.maps.Map(element, options);
  }
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  background: gray;
}
</style>