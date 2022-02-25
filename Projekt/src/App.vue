<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import WeatherView from './components/WeatherView.vue'
  import PlaylistView from './components/PlaylistView.vue'
</script>

<template>
  <WeatherView msg="Hello Vue 3 + Vite" />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  
  #app {
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #ececec;
    height: 100%;
    width: 100%;
    display: flex;
  }
</style>
