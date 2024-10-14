import { Request, Response } from 'express';
import { Curtida } from '../models/Curtida';

let curtidas: Curtida[] = []; // Simulação de um banco de dados para curtidas

export class CurtidaController {

    // Cria uma nova curtida
    static createCurtida(req: Request, res: Response): Response {
        const { idUsuario, idReview } = req.body;

        // Verifica se a curtida já existe
        const curtidaExistente = curtidas.find(c => c['idUsuario'] === idUsuario && c['idReview'] === idReview);
        if (curtidaExistente) {
            return res.status(400).json({ error: "Usuário já curtiu esta review." });
        }

        const novaCurtida = new Curtida(idUsuario, idReview);
        curtidas.push(novaCurtida);

        return res.status(201).json({ message: "Curtida registrada com sucesso!", curtida: novaCurtida });
    }

    // Retorna todas as curtidas
    static getAllCurtidas(req: Request, res: Response): Response {
        return res.status(200).json(curtidas);
    }

    // Retorna todas as curtidas de uma review específica
    static getCurtidasByReview(req: Request, res: Response): Response {
        const { idReview } = req.params;

        const curtidasDaReview = curtidas.filter(c => c['idReview'] === idReview);

        if (curtidasDaReview.length === 0) {
            return res.status(404).json({ error: "Nenhuma curtida encontrada para esta review." });
        }

        return res.status(200).json(curtidasDaReview);
    }

    // Deleta uma curtida pelo ID do usuário e ID da review
    static deleteCurtida(req: Request, res: Response): Response {
        const { idUsuario, idReview } = req.params;

        const curtidaIndex = curtidas.findIndex(c => c['idUsuario'] === idUsuario && c['idReview'] === idReview);

        if (curtidaIndex === -1) {
            return res.status(404).json({ error: "Curtida não encontrada." });
        }

        curtidas.splice(curtidaIndex, 1);

        return res.status(200).json({ message: "Curtida deletada com sucesso!" });
    }
}
