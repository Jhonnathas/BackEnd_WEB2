import request from 'supertest';
import express from 'express';
import { JogoController } from '../public/src/controllers/JogoController';

const app = express();
app.use(express.json());
app.post('/jogos', JogoController.createJogo);
app.get('/jogos', JogoController.getAllJogos);
app.get('/jogos/:idJogo', JogoController.getJogoById);
app.put('/jogos/:idJogo', JogoController.updateJogo);
app.delete('/jogos/:idJogo', JogoController.deleteJogo);

describe('JogoController', () => {
    it('should create a new jogo', async () => {
        const response = await request(app)
            .post('/jogos')
            .send({
                idJogo: 1,
                nomeJogo: 'Test Game',
                genero: 'Action',
                anoLancamento: 2024,
                plataformas: 'PC',
                descricao: 'A test game.',
                media: 80,
                desenvolvedor: 'Test Dev',
            });
        
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Jogo criado com sucesso!');
    });

    it('should get a jogo by ID', async () => {
        const response = await request(app).get('/jogos/1');
        expect(response.status).toBe(200);
        expect(response.body.nomeJogo).toBe('Test Game');
    });

    it('should update a jogo', async () => {
        const response = await request(app)
            .put('/jogos/1')
            .send({ nomeJogo: 'Updated Game' });
        
        expect(response.status).toBe(200);
        expect(response.body.jogo.nomeJogo).toBe('Updated Game');
    });

    it('should delete a jogo', async () => {
        const response = await request(app).delete('/jogos/1');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Jogo deletado com sucesso!');
    });

    it('should return 404 for a non-existent jogo', async () => {
        const response = await request(app).get('/jogos/999');
        expect(response.status).toBe(404);
    });
});
