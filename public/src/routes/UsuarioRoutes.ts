import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

const app = express();
app.use(express.json()); // Para permitir o uso de JSON no body da requisição

// Rotas para o gerenciamento de usuários
app.post('/usuarios', UsuarioController.createUsuario); // Criar usuário
app.get('/usuarios', UsuarioController.getAllUsuarios); // Listar todos os usuários
app.get('/usuarios/:id', UsuarioController.getUsuarioById); // Buscar usuário por ID
app.put('/usuarios/:id', UsuarioController.updateUsuario); // Atualizar usuário
app.delete('/usuarios/:id', UsuarioController.deleteUsuario); // Deletar usuário

// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
