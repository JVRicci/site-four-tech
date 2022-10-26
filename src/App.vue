<template>

  <div>
   <nav class="navbar navbar-expand-sm  fixed-top">
    <a class="navbar-brand" href="#">
      <img src="@/assets/img/logo.png"  width="50" height="30" class="d-inline-block align-top" alt="">
    </a>

    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown" >
          
      <ul class="navbar-nav">

        <li class="nav-item active">
          <a class="nav-link" href="#quem-somos">Quem somos?</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#projetos">Projetos</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#contato">Contato</a>
        </li>

      </ul>
    </div>

    <div class="navbar navbar-expand-sm" id="div-body">  </div>

    </nav>

    <section id="inicio">
      <inicio/>
    </section>


    <section id="quem-somos" >
      <quemSomos/>
    </section>

    <section id="projetos">
      <projetos/>
    </section>
    

    <section id="contato">
      <contato/>
    </section>
    
    <footer>
      
    </footer>

    
  </div>
  
</template>

<script>
import inicio from './components/inicio/inicio.vue'
import quemSomos from './components/quemSomos/quem-somos.vue'
import projetos from './components/projetos/projetos.vue';
import contato from './components/contato/contato.vue';

export default {
  name: 'App',
  components: {
    inicio,
    quemSomos,
    projetos,
    contato
  }
}
</script>

<style>

#app {
  /*font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;*/
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 60px;
  
}
nav{
  background-color: transparent;
}
.nav-link{
  color:#fff;
  font-size: 20px;
  text-shadow: 0px 4px 4px rgba(82, 0, 74, 0.48);
}
body{
  background: #ff1313;
  height:100%
}
p{
  color: white
}
h1{
  
 text-shadow: 0px 6px 6px rgba(219, 0, 197, 0.48);
}
</style>
