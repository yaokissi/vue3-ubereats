<template>
  <section>
    <article>
        <div class="caroussel">
          <span><i class="fa-solid fa-circle-arrow-left fa-2xl" style="color: #d1d1d1;"></i></span>
            <img src="https://d1g1f25tn8m2e6.cloudfront.net/64ee9be9-acd7-4501-90b2-2bfd4842eafa.png" style="border-radius: 15px;" class="mcdo" width="390">
            <img src="../assets/1.png" style="border-radius: 15px;" width="390">
            <img src="../assets/2.png" style="border-radius: 15px;" width="390">
            <!-- <img src="../assets/3.png" width="340">
            <img src="../assets/4.png" width="340"> -->
            <span> <i class="fa-solid fa-circle-arrow-right fa-2xl" style="color: #d1d7e0;"></i> </span>
        </div>
    </article>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
section {
margin-top:20px;
}
.caroussel {
display: flex;
justify-content: space-evenly;
span {
  display: flex;
  align-items: center;
}
i {
  width:15px;
}
}
</style>