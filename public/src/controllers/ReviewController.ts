import { Request, Response } from 'express';
import { Review } from '../models/Review';
import { Jogo } from '../models/Jogo'; // Importa o modelo Jogo
import { Usuario } from '../models/Usuario'; // Importa o modelo Usuario

// Simulando um banco de dados em memória (temporário)
let reviews: Review[] = [];

class ReviewController {
    
    // Método para criar uma nova review (POST)
    public createReview(req: Request, res: Response): Response {
        const { idReview, idJogo, idUsuario, titulo, notaGrafico, notaJogabilidade, notaHistoria, texto} = req.body;

        // Criando a nova review
        const newReview = new Review(idReview, idJogo, idUsuario, titulo, notaGrafico, notaJogabilidade, notaHistoria, texto);

        // Calculando a média antes de salvar a review
        newReview.calculaMedia();

        // Adicionando a review na "lista"
        reviews.push(newReview);

        // Retornando a nova review criada
        return res.status(201).json(newReview);
    }

    // Método para obter todas as reviews (GET)
    public getAllReviews(req: Request, res: Response): Response {
        return res.status(200).json(reviews);
    }

    // Método para obter uma review específica por ID (GET)
    public getReviewById(req: Request, res: Response): Response {
        const { id } = req.params;
        const review = reviews.find(r => r.getID() === id);

        if (!review) {
            return res.status(404).json({ message: 'Review não encontrada' });
        }

        return res.status(200).json(review);
    }

    // Método para atualizar uma review existente (PUT)
    public updateReview(req: Request, res: Response): Response {
        const { id } = req.params;
        const { titulo, texto, nota, notaGrafico, notaJogabilidade, notaHistoria, curtidas } = req.body;

        const review = reviews.find(r => r.getID() === id);

        if (!review) {
            return res.status(404).json({ message: 'Review não encontrada' });
        }



        // Recalculando a média
        review.calculaMedia();

        return res.status(200).json(review);
    }

    // Método para deletar uma review (DELETE)
    public deleteReview(req: Request, res: Response): Response {
        const { id } = req.params;
        const reviewIndex = reviews.findIndex(r => r.getID() === id);

        if (reviewIndex === -1) {
            return res.status(404).json({ message: 'Review não encontrada' });
        }

        // Removendo a review da lista
        reviews.splice(reviewIndex, 1);

        return res.status(204).send(); // Sucesso, mas sem conteúdo
    }
}

export default new ReviewController();
