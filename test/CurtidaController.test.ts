import request from 'supertest';
import express from 'express';
import { CurtidaController } from '../public/src/controllers/CurtidaController';

const app = express();
app.use(express.json());
app.post('/curtidas', CurtidaController.createCurtida);
app.get('/curtidas', CurtidaController.getAllCurtidas);
app.get('/curtidas/review/:idReview', CurtidaController.getCurtidasByReview);
app.delete('/curtidas/:idUsuario/:idReview', CurtidaController.deleteCurtida);

describe('CurtidaController', () => {
    it('should create a new curtida', async () => {
        const response = await request(app)
            .post('/curtidas')
            .send({
                idUsuario: 'user1',
                idReview: 'review1',
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Curtida registrada com sucesso!');
    });

    it('should get all curtidas', async () => {
        const response = await request(app).get('/curtidas');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should get curtidas by review', async () => {
        const response = await request(app).get('/curtidas/review/review1');
        expect(response.status).toBe(200);
    });

    it('should delete a curtida', async () => {
        const response = await request(app).delete('/curtidas/user1/review1');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Curtida deletada com sucesso!');
    });

    it('should return 404 for a non-existent curtida', async () => {
        const response = await request(app).delete('/curtidas/user1/review2');
        expect(response.status).toBe(404);
    });
});
