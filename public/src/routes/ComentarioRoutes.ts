import express from 'express';
import { ComentarioController } from '../controllers/ComentarioController';

const app = express();
app.use(express.json()); // Middleware para permitir requisições JSON

// Rotas para o gerenciamento de comentários
app.post('/comentarios', ComentarioController.createComentario); // Criar comentário
app.get('/comentarios', ComentarioController.getAllComentarios); // Listar todos os comentários
app.get('/comentarios/:idComentario', ComentarioController.getComentarioById); // Buscar comentário por ID
app.put('/comentarios/:idComentario', ComentarioController.updateComentario); // Atualizar comentário
app.delete('/comentarios/:idComentario', ComentarioController.deleteComentario); // Deletar comentário

// Inicializa o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
