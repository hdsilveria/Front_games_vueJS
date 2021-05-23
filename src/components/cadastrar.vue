<template>

<div>
<div id="cadastrar">

<form @submit.prevent="salvar">

<div class="form-group col-md-5"><br>
    <label class="form-label"><b>Seu nome e Sobrenome: </b></label>
    <input type="text" v-model="Novocomentario.nome" class="form-control" minlength="15" maxlength="40" autocomplete="off" required>
</div><br>

<div class="row g-9">

        <div class="col-auto">
          <label class="form-label"><b>Game: </b></label>
          <input type="text" v-model="Novocomentario.game" class="form-control" autocomplete="off" required>
        </div>


        <div class="col-auto">
          <label class="form-label"><b>Plataforma:</b></label>
          <select class="form-control" v-model="Novocomentario.plataforma" required>
            <option>Playstation</option>
            <option>Xbox </option>
            <option>Nintendo </option>
            <option>PC </option>
          </select>
        </div>

        <div class="col-auto">
          <label class="form-label"><b>Gênero:</b></label>
          <select class="form-control" v-model="Novocomentario.genero" required>
            <option>Ação e Aventura</option>
            <option>RPG</option>
            <option>Plataforma</option>
            <option>Corrida</option>
            <option>Esporte</option>
            <option>Luta</option>
            <option>Horror</option>
          </select>
        </div>

        <div class="col-auto">
          <label class="form-label"><b>Nota: </b></label><br>
          <input type="number" v-model="Novocomentario.nota" min="0" max="10" class="form-control" required>
        </div>

        </div>

        <br>

        <div class="form-group col-md-7">
            <label class="form-label"><b>Insira o Comentario: </b></label>
            <textarea v-model="Novocomentario.comentario" class="form-control"  maxlength="250" required></textarea>
        </div>
        <br>

        <button type="submit" class="btn btn-outline-light">Enviar</button>
      <br><br>
</form>
</div>
</div>

</template>

<script>

import games from '../services/games'

export default {

  data(){
    return {
      Novocomentario: {
          nome: '',
          game: '',
          genero: '',
          plataforma: '',
          comentario: '',
          nota:'',
      }
    }
  },

  methods: {

      salvar(){       
        games.cadastrar(this.Novocomentario).then(response =>{
        alert('Comentario realizado com sucesso! ' + response.data),
        console.log(response),
        location.href = "/"
        })
      },


  }
}
</script>


<style scoped>

#cadastrar{
    
    margin-top: 30px;
    padding: 70px;
    background: rgb(0, 0, 0);
    color: white;
}


</style>
