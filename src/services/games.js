import { http } from './config'

export default {
    
    listar: () =>{
        return http.get('/Comentarios')
    },

    cadastrar: (comentario) =>{
        return http.post('/novoComentario', comentario)
    },

    atualizar: (comentario) => {
        return http.put('/Comentarios', comentario)
    },

    apagar: (game) => {
        return http.delete('/Comentarios', {data: game})
    }

}