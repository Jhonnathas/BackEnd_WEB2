import express from 'express';
import { JogoController } from '../controllers/JogoController';

const app = express();
app.use(express.json()); // Middleware para permitir requisições JSON

// Rotas para o gerenciamento de jogos
app.post('/jogos', JogoController.createJogo); // Criar jogo
app.get('/jogos', JogoController.getAllJogos); // Listar todos os jogos
app.get('/jogos/:idJogo', JogoController.getJogoById); // Buscar jogo por ID
app.put('/jogos/:idJogo', JogoController.updateJogo); // Atualizar jogo
app.delete('/jogos/:idJogo', JogoController.deleteJogo); // Deletar jogo
app.post('/jogos/:idJogo/media', JogoController.addMediaToJogo); // Adicionar avaliação ao jogo
app.get('/jogos/:idJogo/media-geral', JogoController.getMediaGeral); // Obter média geral do jogo

// Inicializa o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
