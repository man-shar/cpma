<template lang="html">
  <div id="home-container" class="pt">
    <div id="view-photos">
      <div id="home-photo">
        <div class="overlay" id="home-photo-overlay">
          <div class="huge">Catchy motivating line<br>Take a tour of our school</div>
          <router-link :to="{ name: 'Photos'}" class="medium">
            View Photos
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Carousel,
  Slide
} from 'vue-carousel';

export default {
  name: "Home",
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
#view-photos {
  max-width: 1300px;
  margin: 0 auto;
}

#home-photo {
  background: url("../assets/kids.jpeg") no-repeat center right;
  background-size: cover;
  height: 500px;
  color: white;
}

#home-photo-overlay {
  height: 100%;
  width: 100%;
  float: left;
  text-align: center;
  vertical-align: middle;
  padding: 160px 60px;
  a {
    color: white;
    text-decoration: none;
    margin: 30px 10px;
    padding: 6px 8px;
    border-radius: 4px;
    display: inline-block;
    border: 2px solid white;
  }
}
</style>
