<template>
  <div class=" text-center row d-flex justify-content-between" id="nav">
    <div class="col">
      <router-link to="/">Home</router-link> 
    </div>
    <div class="col">
      <router-link to="/about">About</router-link>
      </div>
     <div class="col">
       <router-link to="/weatherapp">WeatherApp</router-link>
       </div>
     <div class="col">
       <router-link to="/compositionapi">Composition Api</router-link>
       </div>
       <div class="col">
       <router-link to="Event">Event</router-link>
       </div>
       <div>
       </div>
  </div>
  <router-view/>
  
</template>
<script>
// import BootstrapVue from 'bootstrap-vue'
// import Home from '@/views/Home.vue'
export default {
 
   component:{
    // BootstrapVue,
  },
  data() {
    return{
    }
    
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
  background-color: aliceblue;
 

}

#nav a {
  font-weight: bold;
  color: #0a0a0a;
   text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #083ce6;
  text-decoration: none;
}
</style>
