<template>
<div id="navbar">
  <div class="list-centered">
    <ul class="navbar-list">
      <li v-for="item in navItems" :key="item.text">
        <router-link :to="item.route">
          {{item.text}}
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
    return {
      navItems: [{
          text: 'Home',
          route: '/'
        },
        {
          text: 'General Information',
          route: 'general'
        },
        {
          text: 'Infrastructure',
          route: 'infrastructure'
        },
        {
          text: 'Academics',
          route: 'academics'
        },
        {
          text: 'Activities',
          route: 'activities'
        },
        {
          text: 'Contact Us',
          route: 'contact-us'
        },
        {
          text: 'Ambition',
          route: 'ambition'
        }
      ]
    }
  }
}
</script>

<style scoped>
#navbar {
  font-family: 'Source Sans Pro', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #3d4454;
  font-weight: 700;
  color: white;
  position: fixed;
  width: 100%;
  top: 0px;
  font-size: 0.9em;
}

.list-centered {
  text-align: center;
}

.navbar-list a:before {
  content: '';
  height: 4px;
  left: 0;
  margin: auto;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  -webkit-transition: width .45s, opacity .1s;
  transition: width .45s, opacity .1s;
  width: 0%;
  background: #8693af;
  top: 0;
}

.navbar-list a:hover:before {
  width: 100%;
  opacity: 1;
}

.navbar-list a {
  position: relative;
  display: block;
  padding: 1em 1.25em;
  color: white;
  text-decoration: none;
  -webkit-transition: padding .2s, font-size .2s;
  transition: padding .2s, font-size .2s;
  white-space: nowrap;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  line-height: 1;
  margin-bottom: 0;
  position: relative;
  z-index: 3;
}
</style>
