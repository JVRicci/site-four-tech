<template>
 <div id="contato-div" >

  <div class="row justify-content-center">
  
   <div class="col-5">
    <img src="@/assets/img/contato.png" data-aos="zoom-in">
   </div>

   <div class="col-3 py-3" data-aos="fade-down">
   <h1>Bora fazer um orçamento?</h1>
   <p class="text-center mt-3 mb-3">
    Nos fale sua necessidade que iremos te atender da melhor forma possível!
   </p>
   <form id="formulario">
    <input type="nome" name="nome" v-model="name"  class="form-control my-3" 
    placeholder="Nome" data-aos="zoom-in-right" data-aos-duration="1000" required>

    <input type="email" name="email" v-model="email" class="form-control my-3" 
    placeholder="E-mail" data-aos="zoom-in-right" data-aos-duration="1000" required>
    
    <textarea class="form-control" name="descricao" v-model="message"  rows="2" style="resize:none;"
      placeholder="Decrição" data-aos="zoom-in-right" data-aos-duration="1500" required></textarea>

    <input type="submit" value="Enviar" class="btn btn-primary mt-3" v-on:click="enviaEmail(this)"
    data-aos="zoom-in-right" data-aos-duration="2000">
   </form>
   </div>
  </div>

  
 </div>
</template>

<script>

import emailjs from 'emailjs-com';

export default{
 name:'contato',
 data(){
  return{
    name: '',
    email:'',
    message:''
  }

 },

 methods:{
  enviaEmail(e){
    event.preventDefault(e);
    try{
      emailjs.sendForm('service_lsktdmy','template_guz0wpf','#formulario','Irju26dK9NGQHziBU')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
          console.log('FAILED...', err);
        });

        alert(nome);
    }
    catch(error){
      console.log({error})
    }
    this.name = ''
    this.email = ''
    this.message = ''
  }
 }
}


</script>

<style>
@import url('./style.css');
</style>

