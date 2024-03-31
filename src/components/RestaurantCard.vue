<template>
  <div class="restaurant--card">
    <div class="favoris--button">
      
      <i class="fa-regular fa-heart fa-lg" style="color: #ffffff;"></i>
    </div>
    <div :style="changeBackground" class="restaurant--image">
    </div>
    <div class="restaurant--informations">
      <div class="top">
        <p class="name">
         {{info_restaurant.name}}  
        </p>
        <p class="note">
          <span>
            {{ info_restaurant.note }} 
          </span>
        </p>
      </div>
      <p class="time">
        {{ info_restaurant.drive_time }}  
      </p>
    </div>
  </div>
</template>

<script>
// import 
import {computed} from 'vue'

export default {
name: "RestaurantCard",
props: {
  info_restaurant: Object
},
setup(props){
const changeBackground = computed(() => {
  return {
    backgroundImage: `url(${props.info_restaurant.image})`
  }
})
return {
  changeBackground
}

}

}
</script>

<style scoped lang="scss">

.restaurant--card{
    width: 100%;
    height: 30vh;

  
   p{
    margin: 0px;
   }
  
}
.restaurant--image {
background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
height: 70%;
border-radius: 10px;
background-size: cover;
background-position: center;
}
.restaurant--informations {
  .top {
  margin: 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name {
    text-transform: uppercase;
    font-weight: bold;
  }
  .note {
background-color: #eeeeee;
height: 30px;
width: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
border-radius: 50%;
}
.time {
  font-size: 0.9rem;
}
}

}

.favoris--button{
 
  position: absolute;
  margin-left: 370px;
  margin-top: 15px;
  border-radius: 100%;
  height: 25px;
  
  
}
</style>