<template>
 <div id="contato-div" >

  <div class="row justify-content-center">
  
   <div class="col-5">
    <img src="@/assets/img/contato.png" data-aos="zoom-in">
   </div>

   <div class="col-3 py-3" data-aos="fade-down">
   <h1>Bora fazer um orçamento?</h1>
   <p class="text-center mt-4 mb-3">
    Nos fale sua necessidade que iremos te atender da melhor forma possível!
   </p>
   <form action="">
    <input type="email" name="emailTxt"  class="form-control my-3" 
    placeholder="E-mail" data-aos="zoom-in-right" data-aos-duration="1000">
    
    <textarea class="form-control" name="descricao"  rows="3" style="resize:none;"
      placeholder="Decrição" data-aos="zoom-in-right" data-aos-duration="1500"></textarea>

    <input type="submit" value="Enviar" class="btn btn-primary mt-3" data-aos="zoom-in-right" data-aos-duration="2000">
   </form>
   </div>
  </div>

  
 </div>
</template>

<script>
export default{
 name:'contato'
}

</script>

<style>
@import url('./style.css');
</style>