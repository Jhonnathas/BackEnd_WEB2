import request from 'supertest';
import express, { Express } from 'express';
import { UsuarioController } from '../public/src/controllers/UsuarioController';

// Configurando o app Express para os testes
const app: Express = express();
app.use(express.json());

// Configurando as rotas do UsuarioController
app.post('/usuarios', UsuarioController.createUsuario);
app.get('/usuarios', UsuarioController.getAllUsuarios);
app.get('/usuarios/:id', UsuarioController.getUsuarioById);
app.put('/usuarios/:id', UsuarioController.updateUsuario);
app.delete('/usuarios/:id', UsuarioController.deleteUsuario);

// Testes para o UsuarioController
describe('UsuarioController', () => {
    beforeEach(() => {
        (global as any).usuarios = []; // Limpa o array de usuários antes de cada teste
    });

    it('should create a new usuario', async () => {
        const usuarioData = {
            id: '1',
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            telefone: 999999999,
            idade: 30
        };

        const response = await request(app)
            .post('/usuarios')
            .send(usuarioData)
            .expect(201);

        expect(response.body).toHaveProperty('message', 'Usuário criado com sucesso!');
        expect(response.body.usuario).toHaveProperty('id', '1');
        expect(response.body.usuario).toHaveProperty('nome', 'João Silva');
    });

    it('should not create a usuario with an existing id', async () => {
        const usuarioData = {
            id: '1',
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            telefone: 999999999,
            idade: 30
        };

        await request(app)
            .post('/usuarios')
            .send(usuarioData)
            .expect(201);

        const response = await request(app)
            .post('/usuarios')
            .send(usuarioData) // Tentativa de criar com o mesmo ID
            .expect(400);

        expect(response.body).toHaveProperty('error', 'Usuário já existe.');
    });

    it('should get a usuario by id', async () => {
        const usuarioData = {
            id: '1',
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            telefone: 999999999,
            idade: 30
        };

        // Cria um usuário
        await request(app)
            .post('/usuarios')
            .send(usuarioData)
            .expect(201);

        const response = await request(app)
            .get('/usuarios/1')
            .expect(200);

        expect(response.body).toHaveProperty('id', '1');
        expect(response.body).toHaveProperty('nome', 'João Silva');
    });

    it('should return 404 if usuario not found', async () => {
        const response = await request(app)
            .get('/usuarios/999') // ID inexistente
            .expect(404);

        expect(response.body).toHaveProperty('error', 'Usuário não encontrado.');
    });

    it('should get all usuarios', async () => {
        const usuarioData1 = {
            id: '1',
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            telefone: 999999999,
            idade: 30
        };

        const usuarioData2 = {
            id: '2',
            nome: 'Maria Souza',
            email: 'maria.souza@example.com',
            telefone: 888888888,
            idade: 25
        };

        // Cria dois usuários
        await request(app)
            .post('/usuarios')
            .send(usuarioData1)
            .expect(201);

        await request(app)
            .post('/usuarios')
            .send(usuarioData2)
            .expect(201);

        const response = await request(app)
            .get('/usuarios')
            .expect(200);

        expect(response.body.length).toBe(2);
        expect(response.body[0]).toHaveProperty('id', '1');
        expect(response.body[1]).toHaveProperty('id', '2');
    });

    it('should update a usuario', async () => {
        const usuarioData = {
            id: '1',
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            telefone: 999999999,
            idade: 30
        };

        // Cria um usuário
        await request(app)
            .post('/usuarios')
            .send(usuarioData)
            .expect(201);

        const updateData = {
            nome: 'João Silva Atualizado',
            email: 'joao.silva.atualizado@example.com'
        };

        const response = await request(app)
            .put('/usuarios/1')
            .send(updateData)
            .expect(200);

        expect(response.body).toHaveProperty('message', 'Usuário atualizado com sucesso!');
        expect(response.body.usuario).toHaveProperty('nome', 'João Silva Atualizado');
        expect(response.body.usuario).toHaveProperty('email', 'joao.silva.atualizado@example.com');
    });

    it('should return 404 when updating non-existent usuario', async () => {
        const updateData = {
            nome: 'Usuário Não Existente',
            email: 'naoexiste@example.com'
        };

        const response = await request(app)
            .put('/usuarios/999') // ID inexistente
            .send(updateData)
            .expect(404);

        expect(response.body).toHaveProperty('error', 'Usuário não encontrado.');
    });

    it('should delete a usuario', async () => {
        const usuarioData = {
            id: '1',
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            telefone: 999999999,
            idade: 30
        };

        // Cria um usuário
        await request(app)
            .post('/usuarios')
            .send(usuarioData)
            .expect(201);

        // Deleta o usuário
        await request(app)
            .delete('/usuarios/1')
            .expect(200);

        const response = await request(app)
            .get('/usuarios/1')
            .expect(404);

        expect(response.body).toHaveProperty('error', 'Usuário não encontrado.');
    });

    it('should return 404 when deleting non-existent usuario', async () => {
        const response = await request(app)
            .delete('/usuarios/999') // ID inexistente
            .expect(404);

        expect(response.body).toHaveProperty('error', 'Usuário não encontrado.');
    });
});
