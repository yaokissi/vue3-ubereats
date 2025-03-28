<template>
  <div class="home">
    <div class="header">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" class="logo" alt="">
      <div class="form-box">
        <div class="button-box">
          <div id="btn"></div>
          <button type="button" class="toggle-btn" @click="leftClick">Livraison</button>
          <button type="button" class="toggle-btn" @click="rightClick">Emporter</button>
        </div>
      </div>
      <button class="location--delivery"><i class="fa-solid fa-location-dot" style="color: #000000; padding-right: 10px;;"></i> 2 rue de la bastille . Maintenant</button>
     <div class="wrapper--input">
      <i class="fa-solid fa-magnifying-glass"> </i><input type="text" placeholder="courses, fast food ect ..." v-model="user_search_restaurant"> 
      <div class="search">
       <router-link v-for="(restaurant, i) in search_restaurant_string" :key="i" :to="{name:'RestaurantPage', params: {name: restaurant.name}}">
        <div class="container--restaurant--search">
          <div class="wrapper--img">
            <img :src="restaurant.image" alt="" srcset="">
          </div>
          <p>{{restaurant.name}}</p>
        </div>
       </router-link>
      </div>
     </div>
      <button class="cart"> <i class="fa-solid fa-cart-shopping"></i> Panier | <span>0 </span></button>
      <button class="sign--in--button"><i class="fa-solid fa-user"></i> Connexion</button>
      <button class="sign--up--button">Inscription</button>
        </div>
    <div class="banner">
      
      <cuisineType></cuisineType>
      
        
      </div>
      <div class="filter-buttons-section">
        <ul class="filter-buttons">
          <li> <i class="fa-solid fa-tag"></i> Offres</li>
          <li>Prix <i class="fa-solid fa-chevron-down" style="color: #000000;"></i> </li>
          <li> <i class="fa-solid fa-truck" style="color: #000000;"></i> Frais de livraison</li>
          <li><i class="fa-solid fa-medal"></i>Mieux Notés </li>
          <li>Trier <i class="fa-solid fa-chevron-down" style="color: #000000;"></i></li>
        </ul>
        <div class="results-filters-counter">
      <p>137 Résultats</p>
      <button class="reinitialiser">Réinitialiser</button>
    </div>
    </div>
    <caroussel></caroussel>
    <RestaurantRow v-for="(data, i) in restaurantData" :key="i" :three_restaurant="data"/>
 
  </div>
</template>

<script>
//IMPORT
import BDD from '../BDD'
import { onMounted, ref, watch } from 'vue'


// COMPONENTS
import RestaurantRow from '../components/RestaurantRow.vue'
import cuisineType from '../components/cuisinieType.vue'
import caroussel from '../components/CarousselComponent.vue'
export default {
  name: 'AppHome',
  components:{
    RestaurantRow,
    cuisineType,
    caroussel
  },
  setup() {
   
    
    const leftClick = () => {
      const btn = document.getElementById('btn');
      if (btn) {
        btn.style.left = '0';
      }
    }

    const rightClick = () => {
      const btn = document.getElementById('btn');
      if (btn) {
        btn.style.left = '110px';
      }
    }

    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.drive_time = drive_time;
      }
    }

    let restaurantData = ref([]);
    let all_restaurant = [];

    const makeRestaurantData = () => {
      let three_restaurant = [];
      for (const restaurant of BDD) {
        const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);
// all restaurant array
all_restaurant.push(new_restaurant);

        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant);
          restaurantData.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
    }

    // restaurant search input 

    let user_search_restaurant = ref('');
    let search_restaurant_string =ref([]);
    watch(user_search_restaurant,(new_value) => {
      
      let regex = RegExp(new_value);

    let search_restaurant =  all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()))

    
    if (new_value==0) {
      search_restaurant_string.value = [] 
    }
    else {
      search_restaurant_string.value = search_restaurant; 
    }

    })
 
    onMounted(makeRestaurantData);

    return {
      restaurantData,
      user_search_restaurant,
      search_restaurant_string,
      leftClick,
      rightClick
    }
  }
};
</script>

<style scoped lang="scss">



.home {
  .header {
    height: 120px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    img {
      width: 200px;
    }
    .wrapper--input {
      position: relative;
      
    
    input {
      background-color: #EEEEEE;
      border: none;
      border-radius: 50px;
      height: 48px;
      width: 280px;
      outline: none;
      padding-left: 50px;
    }
    .search {
      position:absolute;
      top:100%;
      width:100%;
      background-color:#E8E8E8;
      
    }
    .fa-magnifying-glass {
    position: absolute;
    left: 25px;
    top:18px;
  }
  .container--restaurant--search {
    display: flex;
    align-items: center;
    padding:10px;
    text-decoration: none;
    color: black;
    &:hover {
      background-color: white;
    }
  .wrapper--img {
    height: 60px;
    width: 60px;
    margin-right: 25px;
    margin-top: 10px;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width:auto;
    }
    
  }
  }
  
}
    .cart {
      padding: 5px;
      border-radius: 50px;
      background-color: black;
      color: #f6f6f6;
      width: 120px;
      height: 36px;
    }
  }
 
  .location--delivery {
    width: 280px;
    height: 48px;
    padding: 20px;
    border-radius: 50px;
    background-color: #EEEEEE;
    border: none;
    font-size: 14px;
  }
  .sign--in--button {
    padding: 10px;
    border-radius: 50px;
    background-color: #EEEEEE;
    border: none;
    width: 130px;
  }
  .sign--up--button {
    padding: 10px;
    border-radius: 50px;
    background-color: #EEEEEE;
    border: none;
    width: 130px;
  }

  .button-box {
    width: 210px;
    // margin: 35px auto;
    position: relative;
    border-radius: 30px;
    background: #EEEEEE;
    height: 53px;
    display: flex;
    align-items: center;
    font-size: 14px;
  
  
    
  }
  .toggle-btn {
    padding: 10px 25px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    text-align: center;
  

  }
  #btn {
    
    left: 0;
    top: 2;
    margin-right: 5px;
    margin-left: 5px;
    position: absolute;
    width: 90px;
    height: 90%;
    background: white;
    border-radius: 30px;
    transition: .5s;
    text-align: center;
    
  }
  .logo {
     height: 24px;
  }

ul li{
  list-style-type: none;
  background-color:#E8E8E8;
  padding: 10px;
  text-align: center;
  border-radius: 50px;
  // margin-right: 20px;
  // width: 100px;

}
.filter-buttons-section {
  
  margin-left: auto;
    margin-right: auto;
    width: 100%;
}
.filter-buttons {
  display: flex;
  justify-content: space-around;
  // width: 80%;
  font-size:15px;
 
  width: 50%;
  // margin-left: auto;
  //   margin-right: auto;
  margin-left: 15px;
  i {
    padding-right: 10px;
  }
  .fa-chevron-down {
    padding-left: 10px;
  }
}
.madimi-one-regular {
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.results-filters-counter {
  
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left:auto;
  margin-right: auto;
  button {
    background-color: #E8E8E8;
    border:none;
    border-radius: 55px;
    padding:10px;
    cursor:pointer;
    // height: 35px;
   
    // font-size:13px;
  }
}

}
@media


</style>
