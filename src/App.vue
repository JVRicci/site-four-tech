<template>

  <div>
    <section>
      <inicio/>
    </section>
    <section >
      <quemSomos/>
    </section>
    
  </div>
  
</template>

<script>
import inicio from './components/inicio/inicio.vue'
import quemSomos from './components/quemSomos/quem-somos.vue'

export default {
  name: 'App',
  components: {
    inicio,
    quemSomos
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

body{
  background: #6313FF;
  height:100%
}
</style>
