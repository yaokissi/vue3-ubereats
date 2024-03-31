<template>
  <section>
    <div class="back-arrow-section">
  <RouterLink to="/">
    <div class="arrow-back-div"><i class="fa-solid fa-circle-arrow-left fa-2xl" style="color: #ffffff;"></i></div>
  </RouterLink>   
 </div>
 <div class="restaurant--details">
    <div :style="backgroundStyle" class="restaurantimage">
      <!-- <img :src="restaurant.image"  alt=""> -->
    </div>
    <div class="restaurantinfo">
      <h1>{{restaurant.name }}</h1>
      <p>Note du restaurant : <span> {{ restaurant.note }} <i class="fa-solid fa-star" style="color: #000000;"></i> </span> </p>
      <p>Temps de livraison : <span> {{ restaurant.drive_time}} <i class="fa-solid fa-clock" style="color: #000000;"></i> </span></p>
    </div> 
 </div>
  </section>

 
</template> 

<script>
import BDD from '../BDD'

import {useRoute} from 'vue-router'

export default {
name:'restaurantPage',
 
setup (){
  const route = useRoute()
  const restaurant=  BDD.find((restaurant) => restaurant.name === route.params.name)

  const backgroundStyle = {
      backgroundImage: `url(${restaurant.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '300px', 
      borderRadius: '10px',
    };

   
return {
  restaurant,
  backgroundStyle
}
}
}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: inherit;
  
  
}
section {
  margin-left: auto;
  margin-right: auto;
}
.arrow-back-div {
  position: absolute;
  top:10px;
  left: 50px;
}
.restaurantimage {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
}
.restaurantimage img{
  width: 50%;
height: 400px;
display: block;
 margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
}
.restaurantinfo {
  
  width: 50%;
  
}
</style>  