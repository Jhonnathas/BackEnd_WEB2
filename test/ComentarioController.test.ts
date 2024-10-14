import request from 'supertest';
import express, { Express } from 'express';
import { ComentarioController } from '../public/src/controllers/ComentarioController';

// Configurando o app Express para os testes
const app: Express = express();
app.use(express.json());

// Configurando as rotas do ComentarioController
app.post('/comentarios', ComentarioController.createComentario);
app.get('/comentarios', ComentarioController.getAllComentarios);
app.get('/comentarios/:idComentario', ComentarioController.getComentarioById);
app.put('/comentarios/:idComentario', ComentarioController.updateComentario);
app.delete('/comentarios/:idComentario', ComentarioController.deleteComentario);

// Testes para o ComentarioController
describe('ComentarioController', () => {
    beforeEach(() => {
        (global as any).comentarios = []; // Limpa o array de comentários antes de cada teste
    });

    it('should create a new comentario', async () => {
        const comentarioData = {
            idComentario: 1,
            textoComentario: 'Este jogo é excelente!',
            idReview: '101',
            idUsuario: '1001'
        };

        const response = await request(app)
            .post('/comentarios')
            .send(comentarioData)
            .expect(201);

        expect(response.body).toHaveProperty('message', 'Comentário criado com sucesso!');
        expect(response.body.comentario).toHaveProperty('idComentario', 1);
        expect(response.body.comentario).toHaveProperty('textoComentario', 'Este jogo é excelente!');
    });

    it('should get all comentarios', async () => {
        const comentarioData = {
            idComentario: 1,
            textoComentario: 'Este jogo é excelente!',
            idReview: '101',
            idUsuario: '1001'
        };

        // Criar um comentário
        await request(app)
            .post('/comentarios')
            .send(comentarioData)
            .expect(201);

        const response = await request(app)
            .get('/comentarios')
            .expect(200);

        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty('idComentario', 1);
    });

    it('should get a comentario by id', async () => {
        const comentarioData = {
            idComentario: 1,
            textoComentario: 'Este jogo é excelente!',
            idReview: '101',
            idUsuario: '1001'
        };

        // Criar um comentário
        await request(app)
            .post('/comentarios')
            .send(comentarioData)
            .expect(201);

        const response = await request(app)
            .get('/comentarios/1')
            .expect(200);

        expect(response.body).toHaveProperty('idComentario', 1);
        expect(response.body).toHaveProperty('textoComentario', 'Este jogo é excelente!');
    });

    it('should return 404 if comentario not found', async () => {
        const response = await request(app)
            .get('/comentarios/999') // Comentário com ID inexistente
            .expect(404);

        expect(response.body).toHaveProperty('error', 'Comentário não encontrado.');
    });

    it('should update a comentario', async () => {
        const comentarioData = {
            idComentario: 1,
            textoComentario: 'Este jogo é excelente!',
            idReview: '101',
            idUsuario: '1001'
        };

        // Criar um comentário
        await request(app)
            .post('/comentarios')
            .send(comentarioData)
            .expect(201);

        const updateData = {
            textoComentario: 'Mudei de ideia, o jogo é apenas bom.'
        };

        const response = await request(app)
            .put('/comentarios/1')
            .send(updateData)
            .expect(200);

        expect(response.body).toHaveProperty('message', 'Comentário atualizado com sucesso!');
        expect(response.body.comentario).toHaveProperty('textoComentario', 'Mudei de ideia, o jogo é apenas bom.');
    });

    it('should delete a comentario', async () => {
        const comentarioData = {
            idComentario: 1,
            textoComentario: 'Este jogo é excelente!',
            idReview: '101',
            idUsuario: '1001'
        };

        // Criar um comentário
        await request(app)
            .post('/comentarios')
            .send(comentarioData)
            .expect(201);

        // Deletar o comentário
        await request(app)
            .delete('/comentarios/1')
            .expect(200);

        const response = await request(app)
            .get('/comentarios/1')
            .expect(404);

        expect(response.body).toHaveProperty('error', 'Comentário não encontrado.');
    });
});
