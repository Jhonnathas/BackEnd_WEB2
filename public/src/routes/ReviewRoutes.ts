import { Router } from 'express';
import ReviewController from '../controllers/ReviewController';

const router = Router();

// Definindo as rotas e associando os métodos do controller
router.post('/reviews', ReviewController.createReview); // Cria uma nova review
router.get('/reviews', ReviewController.getAllReviews); // Obtém todas as reviews
router.get('/reviews/:id', ReviewController.getReviewById); // Obtém uma review por ID
router.put('/reviews/:id', ReviewController.updateReview); // Atualiza uma review existente
router.delete('/reviews/:id', ReviewController.deleteReview); // Deleta uma review

export default router;
