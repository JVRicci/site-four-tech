<template>
  <div id="content">
  
    <div id="title">
      <img src="@/assets/img/logo.png" id="logo" >
      <h1>Four Tech</h1>
      <p>Uma equipe dedicada a você!</p>

    </div>
    <div id="topo-inf-div">

      <svg id="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" id="wave-1" fill-opacity="4" d="M0,128L40,154.7C80,181,160,235,240,266.7C320,299,400,309,480,277.3C560,245,640,171,720,133.3C800,96,880,96,960,133.3C1040,171,1120,245,1200,272C1280,299,1360,277,1400,266.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>

        <path fill="#263cff" id="wave-2" fill-opacity="4" d="M0,64L40,101.3C80,139,160,213,240,208C320,203,400,117,480,101.3C560,85,640,139,720,181.3C800,224,880,256,960,229.3C1040,203,1120,117,1200,96C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        
        
        <path fill="#955FFF" id="wave-3" fill-opacity="4" d="M0,192L40,165.3C80,139,160,85,240,106.7C320,128,400,224,480,229.3C560,235,640,149,720,138.7C800,128,880,192,960,192C1040,192,1120,128,1200,128C1280,128,1360,192,1400,224L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        
      </svg>

    </div>
    <div id="fundo-baixo">
      
    </div>
    
  </div>
</template>

<script>

  import logo from "@/assets/img/logo.png";

    data: () => ({
        logo: '../assets/imgs/logo.png'    
    })
  export default{
    name:'inicio',
    image:logo,
    props:{}
  }


</script>

<style scoped>
  @import url('style.css');
</style>