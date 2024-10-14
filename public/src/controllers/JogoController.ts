import { Request, Response } from 'express';
import { Jogo } from '../models/Jogo';

let jogos: Jogo[] = []; // Simulação de banco de dados para jogos

export class JogoController {
    
    // Cria um novo jogo
    static createJogo(req: Request, res: Response): Response {
        const { idJogo, nomeJogo, genero, anoLancamento, plataformas, descricao, media, desenvolvedor } = req.body;

        // Verifica se o jogo já existe
        const jogoExistente = jogos.find(j => j['idJogo'] === idJogo);
        if (jogoExistente) {
            return res.status(400).json({ error: "Jogo já existe com este ID." });
        }

        const novoJogo = new Jogo(idJogo, nomeJogo, genero, anoLancamento, plataformas, descricao, media, desenvolvedor);
        jogos.push(novoJogo);

        return res.status(201).json({ message: "Jogo criado com sucesso!", jogo: novoJogo });
    }

    // Retorna um jogo específico pelo ID
    static getJogoById(req: Request, res: Response): Response {
        const { idJogo } = req.params;

        const jogo = jogos.find(j => j['idJogo'] === parseInt(idJogo));

        if (!jogo) {
            return res.status(404).json({ error: "Jogo não encontrado." });
        }

        return res.status(200).json(jogo);
    }

    // Retorna todos os jogos
    static getAllJogos(req: Request, res: Response): Response {
        return res.status(200).json(jogos);
    }

    // Atualiza os detalhes de um jogo
    static updateJogo(req: Request, res: Response): Response {
        const { idJogo } = req.params;
        const { nomeJogo, genero, anoLancamento, plataformas, descricao, media, desenvolvedor } = req.body;

        const jogo = jogos.find(j => j['idJogo'] === parseInt(idJogo));

        if (!jogo) {
            return res.status(404).json({ error: "Jogo não encontrado." });
        }

        // Atualiza os dados
        jogo['nomeJogo'] = nomeJogo || jogo['nomeJogo'];
        jogo['genero'] = genero || jogo['genero'];
        jogo['anoLancamento'] = anoLancamento || jogo['anoLancamento'];
        jogo['plataformas'] = plataformas || jogo['plataformas'];
        jogo['descricao'] = descricao || jogo['descricao'];
        jogo['media'] = media || jogo['media'];
        jogo['desenvolvedor'] = desenvolvedor || jogo['desenvolvedor'];

        return res.status(200).json({ message: "Jogo atualizado com sucesso!", jogo });
    }

    // Deleta um jogo pelo ID
    static deleteJogo(req: Request, res: Response): Response {
        const { idJogo } = req.params;

        const jogoIndex = jogos.findIndex(j => j['idJogo'] === parseInt(idJogo));

        if (jogoIndex === -1) {
            return res.status(404).json({ error: "Jogo não encontrado." });
        }

        jogos.splice(jogoIndex, 1);

        return res.status(200).json({ message: "Jogo deletado com sucesso!" });
    }

    // Adiciona uma avaliação (mídia registrada) para um jogo
    static addMediaToJogo(req: Request, res: Response): Response {
        const { idJogo } = req.params;
        const { idUsuario, media } = req.body;

        const jogo = jogos.find(j => j['idJogo'] === parseInt(idJogo));

        if (!jogo) {
            return res.status(404).json({ error: "Jogo não encontrado." });
        }

        jogo.setMediaRegistradas(idUsuario, media);

        return res.status(200).json({ message: "Avaliação registrada com sucesso!", jogo });
    }

    // Calcula a média geral de avaliações de um jogo
    static getMediaGeral(req: Request, res: Response): Response {
        const { idJogo } = req.params;

        const jogo = jogos.find(j => j['idJogo'] === parseInt(idJogo));

        if (!jogo) {
            return res.status(404).json({ error: "Jogo não encontrado." });
        }

        const mediaGeral = jogo.calculaMediaGeral();

        return res.status(200).json({ message: `Média geral: ${mediaGeral}` });
    }
}
