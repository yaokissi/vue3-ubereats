<template>
    <div class="restaurantTypeBloc">
      <div v-for="cuisine in cuisineTypeContainer" :key="cuisine.id">
      <div class="typeContainer">
        <img :src="cuisine.image" alt="Type de cuisine">
        <p>{{ cuisine.type }}</p> 
      </div>
    </div>
    </div>
    
  </template>
  
  <script>
  import { ref } from 'vue'; // Importez la fonction ref de vue
  
  import bdd2 from '../bdd2'
  export default {
    name: 'cuisineType',
    setup () {
      const cuisineTypeContainer = ref([]); // Créez une référence réactive
  
      for (const cuisine of bdd2) {
        console.log(cuisine)
        cuisineTypeContainer.value.push(cuisine)
      }
      return {
        cuisineTypeContainer // Renvoie la référence réactive pour pouvoir l'utiliser dans le template
      }; 
    }
  }
  </script>
  
  <style lang ="scss">
  /* Styles du composant ici */
.restaurantTypeBloc {
    overflow: auto;
    display: flex;  
    // box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset;
    justify-content: space-evenly;
    font-size: 12px;
    width: 90%;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
   
    img {
      height: 75px;
    }  
}


.typeContainer {
  margin-left: 12px;
  text-align: center;
  display: inline-block;
  flex-wrap: wrap;
}
      
::-webkit-scrollbar-track {
    background-color: #F5F5F5;
}

::-webkit-scrollbar {
    height: 6px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
    background-color: #3d4852;
    border-radius: 3px;
}

  </style>
  