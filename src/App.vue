<template>
  <div id="main-container">
    <NavBar/>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans|Source+Sans+Pro:400,700');


body, html {
  margin: 0;
}

.view {
  margin: 60px auto;
  /* width: 90%; */
}

* {
-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
-moz-box-sizing: border-box;    /* Firefox, other Gecko */
box-sizing: border-box;         /* Opera/IE 8+ */
}
</style>
