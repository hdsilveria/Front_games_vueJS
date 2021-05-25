<template>

  <div id="comentarios">

    <div class="row row-cols-1 row-cols-md-3">

      <div v-for="game of games" :key="game._id">
        <div class="card" style="background: rgb(75, 75, 75); margin: 10px;">
            <h4 class="card-header">&#127918; {{game.game}} </h4>
          <div class="card-body">
                <p class="card-text">{{game.comentario}}</p><br>
                <span style="padding: 10px; margin-left: 2px;" class="badge bg-info rounded-pill">{{game.plataforma}} </span>
                <span style="padding: 10px; margin-left: 20px;" class="badge bg-warning rounded-pill"> {{game.genero}} </span>

                <span v-if="(game.nota >= 5 )" style="padding: 10px; margin-left: 20px;" class="badge bg-success rounded-pill">&#127894; {{game.nota}} </span>

                <span v-if="(game.nota < 5 )" style="padding: 10px; margin-left: 20px;" class="badge bg-danger rounded-pill">&#127894; {{game.nota}} </span>
                
                <br><br>

                <small class="card-title">&#128488; {{game.nome}} </small>

                <button @click="remover(game)" id="apagar" class="badge bg-dark rounded-pill">&#128465; Deletar </button>        
          </div>
          </div>
          </div>

      </div>
  </div>

</template>

<script>

import games from '../services/games'


export default {
  
  mounted(){
    this.listar()
  },

  data(){
    return { games: [] }
  },

  methods: {

        listar(){
        games.listar().then(response =>{
        this.games = response.data
        console.log(games)
        })
    },
    
        remover(deletGame){
          if ( confirm('deseja excluir o comentario?') ){
            games.apagar(deletGame).then(response => {
              this.listar(),
              console.log(response)
            }).catch(err =>{
              console.log(err)
            })
           }
         }
  }
}
</script>



<style scoped>

#comentarios {
  color: white;
  margin-top: 60px;
  padding: 1%;
}

h1 {
  text-align: center;
  padding: 50px;
}

#apagar {
  margin-left: 100px;
  position: relative; 
}



</style>
