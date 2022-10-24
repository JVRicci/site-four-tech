<template>
 <div id="projeto-div">
 
  <div class="row mb-4" data-aos="zoom-in" data-aos-duration="1500">
   <h1  >Em quais tipos de projetos também podemos te ajudar?</h1>
   <img src="" alt="">
  </div>

  <div id="carousel-projetos" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner row w-200 mx-auto">

   <div class="carousel-item active ">

    <div class="row justify-content-center">


      <div class="col-sm-3 col-md-4 col-lg-3 " data-aos="flip-up" data-aos-duration="1000">

       <div class="card-projeto">
         
        <img src="@/assets/img/smartphone.png" width="50" height="150" class="py-5">
        <h2>Mobile</h2>
         <p>Cras vitae maximus nunc, vitae rutrum ligula. Etiam ac porta lectus. Praesent eget pretium nulla, vitae auctor enim. </p>
       </div>

      </div>

      <div class=" col-sm-3 col-md-4 col-lg-3" data-aos="flip-up" data-aos-duration="1500">

       <div class="card-projeto">
        <img src="@/assets/img/hibrido.png" class="py-5">
        <h3>Todos os Lugares</h3>
        <p>Cras vitae maximus nunc, vitae rutrum ligula. Etiam ac porta lectus. Praesent eget pretium nulla, vitae auctor enim. </p>
      
       </div>

      </div>

      <div class="col-sm-3 col-md-4 col-lg-3" data-aos="flip-up" data-aos-duration="2000">

       <div class="card-projeto">
          <img src="@/assets/img/design.png" width="50" height="150"  class="py-5">
          <h2>Design</h2>
          <p>Cras vitae maximus nunc, vitae rutrum ligula. Etiam ac porta lectus. Praesent eget pretium nulla, vitae auctor enim. </p>
       </div>

      </div>
    </div>

   </div>

   <div class="carousel-item">

    <div class="row justify-content-center">


      <div class="col-sm-3 col-md-4 col-lg-3 " data-aos="flip-right" data-aos-duration="1500">

       <div class="card-projeto">
        <h2>Mobile</h2>
         
        <img src="@/assets/img/smartphone.png" width="50" height="150" class="py-5">
         <p>Cras vitae maximus nunc, vitae rutrum ligula. Etiam ac porta lectus. Praesent eget pretium nulla, vitae auctor enim. </p>
       </div>

      </div>

      <div class=" col-sm-3 col-md-4 col-lg-3" data-aos="flip-up" data-aos-duration="1500">

       <div class="card-projeto">
        <h3>Todos os Lugares</h3>
        <img src="@/assets/img/hibrido.png" class="py-5">
        <p>Cras vitae maximus nunc, vitae rutrum ligula. Etiam ac porta lectus. Praesent eget pretium nulla, vitae auctor enim. </p>
      
       </div>

      </div>

    </div>

   </div>

  

 </div>
  <a class="carousel-control-prev" href="#carousel-projetos" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a class="carousel-control-next" href="#carousel-projetos" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
 </div>



 </div>
</template>

<script>
 export default{
  name:'projetos',
  props:{}
  
 }
</script>

<style scoped>
 @import url("style.css");
</style>
