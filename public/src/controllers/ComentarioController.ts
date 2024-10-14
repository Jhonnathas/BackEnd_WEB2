import { Request, Response } from 'express';
import { Comentario } from '../models/Comentario';
import { Review } from '../models/Review';

let comentarios: Comentario[] = []; // Simulação de banco de dados para comentários

export class ComentarioController {
    
    // Cria um novo comentário
    static createComentario(req: Request, res: Response): Response {
        const { idComentario, textoComentario, idReview, idUsuario } = req.body;

        
        const novoComentario = new Comentario(idComentario, textoComentario, idReview, idUsuario);
        comentarios.push(novoComentario);

        return res.status(201).json({ message: "Comentário criado com sucesso!", comentario: novoComentario });
    }

    // Retorna um comentário específico pelo ID
    static getComentarioById(req: Request, res: Response): Response {
        const { idComentario } = req.params;

        const comentario = comentarios.find(c => c['idComentario'] === parseInt(idComentario));

        if (!comentario) {
            return res.status(404).json({ error: "Comentário não encontrado." });
        }

        return res.status(200).json(comentario);
    }

    // Retorna todos os comentários
    static getAllComentarios(req: Request, res: Response): Response {
        return res.status(200).json(comentarios);
    }

    // Atualiza um comentário pelo ID
    static updateComentario(req: Request, res: Response): Response {
        const { idComentario } = req.params;
        const { textoComentario } = req.body;

        const comentario = comentarios.find(c => c['idComentario'] === parseInt(idComentario));

        if (!comentario) {
            return res.status(404).json({ error: "Comentário não encontrado." });
        }

        comentario['textoComentario'] = textoComentario || comentario['textoComentario'];

        return res.status(200).json({ message: "Comentário atualizado com sucesso!", comentario });
    }

    // Deleta um comentário pelo ID
    static deleteComentario(req: Request, res: Response): Response {
        const { idComentario } = req.params;

        const comentarioIndex = comentarios.findIndex(c => c['idComentario'] === parseInt(idComentario));

        if (comentarioIndex === -1) {
            return res.status(404).json({ error: "Comentário não encontrado." });
        }

        comentarios.splice(comentarioIndex, 1);

        return res.status(200).json({ message: "Comentário deletado com sucesso!" });
    }
}
