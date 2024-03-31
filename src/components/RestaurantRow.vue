<template>
     <h2 class="title"> Populaire à proximité </h2>
  <div class="restaurant--row">
    <div class="wrapper--card">
       
        <router-link class="wrapper--restaurant" v-for="(restaurant, index) in three_restaurant" :key="index" :to="{name:'RestaurantPage', params: {name: restaurant.name}}">
            <RestaurantCard  :info_restaurant="restaurant"/> 
        </router-link>
    </div>
</div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
name:"RestaurantRow",
components: {
    RestaurantCard
},
props:{
    three_restaurant: Array
}

}
</script>

<style scoped lang="scss">
.restaurant--row{
   .wrapper--card {
        display: flex;
        align-items: center;
        justify-content: space-evenly ;
    }
    .wrapper--restaurant {
        width: 30%;
        text-decoration: none;
        color: black;
        font-size: 17px;
    }
   
}
</style>