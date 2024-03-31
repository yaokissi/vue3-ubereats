<template>

<div id="app">
 <!-- <AppHome></AppHome>-->
 <router-view></router-view>
</div>

</template>

<script>
// IMPORT
import bdd from './BDD'
// import AppHome from './pages/AppHome.vue'

// COMPONENTS
export default {
  name: 'App',
  // components : {
  //   AppHome,
  // },
  setup(){
    console.log(bdd)
  }
}
</script>

<style>
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap');

#app{
  font-family: 'Roboto', 'sans-serif';
  padding:0px 20px;
}

</style>
