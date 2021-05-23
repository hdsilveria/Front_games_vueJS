<template>
  <div>

<ul id="menu" class="navbar justify-content-center fixed-top">
  <div class="nav-item">
    <a class="btn btn-outline-light" @click="mostraCad()"> Comentar </a>
  </div>
</ul>
    <cadastrar v-show="mostraCadastrar"/>
    <listar v-show="mostraListar"/>
  
  </div>
</template>

<script>

import listar from './components/listar'
import cadastrar from './components/cadastrar'



export default {
  data(){
    return { mostraListar: true, mostraCadastrar: false }
  },
 
  components: {
    listar,
    cadastrar
  },

methods:{

  mostraCad: function(){
  this.mostraCadastrar = !this.mostraCadastrar;
  this.mostraListar = !this.mostraListar;
  },
}
}
</script>

<style>

#menu {
  background-color: rgb(75, 75, 75);
  color: white;
  padding: 1%;
}

body {
   background: rgb(0, 0, 0);
}

</style>
