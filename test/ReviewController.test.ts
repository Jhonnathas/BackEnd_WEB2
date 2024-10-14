import request from 'supertest'; // Usado para simular requisições HTTP
import express, { Express } from 'express';
import ReviewController from '../public/src/controllers/ReviewController'; // Importe o controller


const app: Express = express();
app.use(express.json());

// Definindo as rotas que serão testadas
app.post('/reviews', ReviewController.createReview);
app.get('/reviews', ReviewController.getAllReviews);
app.get('/reviews/:id', ReviewController.getReviewById);
app.put('/reviews/:id', ReviewController.updateReview);
app.delete('/reviews/:id', ReviewController.deleteReview);

// Testes
describe('ReviewController', () => {
    // Limpar as reviews antes de cada teste para evitar dependências entre os testes
    beforeEach(() => {
        (global as any).reviews = [];
    });

    it('should create a new review', async () => {
        const reviewData = {
            idReview: '1',
            idJogo: '10',
            idUsuario: '100',
            titulo: 'Ótimo Jogo',
            notaGrafico: 8,
            notaJogabilidade: 9,
            notaHistoria: 7,
            texto: 'Adorei o jogo, os gráficos são incríveis!'
        };

        const response = await request(app)
            .post('/reviews')
            .send(reviewData)
            .expect(201);

        expect(response.body).toHaveProperty('idReview', '1');
        expect(response.body).toHaveProperty('titulo', 'Ótimo Jogo');
        expect(response.body).toHaveProperty('media', expect.any(Number));
    });

    it('should get all reviews', async () => {
        const reviewData = {
            idReview: '1',
            idJogo: '10',
            idUsuario: '100',
            titulo: 'Ótimo Jogo',
            notaGrafico: 8,
            notaJogabilidade: 9,
            notaHistoria: 7,
            texto: 'Adorei o jogo, os gráficos são incríveis!'
        };

        // Cria uma review
        await request(app)
            .post('/reviews')
            .send(reviewData)
            .expect(201);

        const response = await request(app)
            .get('/reviews')
            .expect(200);

        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty('idReview', '1');
    });

    it('should get a review by id', async () => {
        const reviewData = {
            idReview: '1',
            idJogo: '10',
            idUsuario: '100',
            titulo: 'Ótimo Jogo',
            notaGrafico: 8,
            notaJogabilidade: 9,
            notaHistoria: 7,
            texto: 'Adorei o jogo, os gráficos são incríveis!'
        };

        // Cria uma review
        await request(app)
            .post('/reviews')
            .send(reviewData)
            .expect(201);

        const response = await request(app)
            .get('/reviews/1')
            .expect(200);

        expect(response.body).toHaveProperty('idReview', '1');
        expect(response.body).toHaveProperty('titulo', 'Ótimo Jogo');
    });

    it('should return 404 if review not found', async () => {
        const response = await request(app)
            .get('/reviews/999') // Um ID inexistente
            .expect(404);

        expect(response.body).toHaveProperty('message', 'Review não encontrada');
    });

    it('should update a review', async () => {
        const reviewData = {
            idReview: '1',
            idJogo: '10',
            idUsuario: '100',
            titulo: 'Ótimo Jogo',
            notaGrafico: 8,
            notaJogabilidade: 9,
            notaHistoria: 7,
            texto: 'Adorei o jogo, os gráficos são incríveis!'
        };

        // Cria uma review
        await request(app)
            .post('/reviews')
            .send(reviewData)
            .expect(201);

        const updateData = {
            titulo: 'Jogo Incrível',
            texto: 'Mudei de ideia, o jogo é ainda melhor!'
        };

        const response = await request(app)
            .put('/reviews/1')
            .send(updateData)
            .expect(200);

        expect(response.body).toHaveProperty('titulo', 'Jogo Incrível');
        expect(response.body).toHaveProperty('texto', 'Mudei de ideia, o jogo é ainda melhor!');
    });

    it('should delete a review', async () => {
        const reviewData = {
            idReview: '1',
            idJogo: '10',
            idUsuario: '100',
            titulo: 'Ótimo Jogo',
            notaGrafico: 8,
            notaJogabilidade: 9,
            notaHistoria: 7,
            texto: 'Adorei o jogo, os gráficos são incríveis!'
        };

        // Cria uma review
        await request(app)
            .post('/reviews')
            .send(reviewData)
            .expect(201);

        // Deleta a review
        await request(app)
            .delete('/reviews/1')
            .expect(204);

        // Verifica se a review foi removida
        const getResponse = await request(app)
            .get('/reviews/1')
            .expect(404);

        expect(getResponse.body).toHaveProperty('message', 'Review não encontrada');
    });
});
