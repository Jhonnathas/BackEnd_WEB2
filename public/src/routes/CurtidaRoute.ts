import express from 'express';
import { CurtidaController } from '../controllers/CurtidaController';

const app = express();
app.use(express.json()); // Middleware para permitir requisições JSON

// Rotas para o gerenciamento de curtidas
app.post('/curtidas', CurtidaController.createCurtida); // Criar curtida
app.get('/curtidas', CurtidaController.getAllCurtidas); // Listar todas as curtidas
app.get('/curtidas/review/:idReview', CurtidaController.getCurtidasByReview); // Listar curtidas por review
app.delete('/curtidas/:idUsuario/:idReview', CurtidaController.deleteCurtida); // Deletar curtida

// Inicializa o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
