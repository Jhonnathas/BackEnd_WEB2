import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';

let usuarios: Usuario[] = []; // Simulando um banco de dados na memória

export class UsuarioController {
    // Cria um novo usuário
    static createUsuario(req: Request, res: Response): Response {
        const { id, nome, email, telefone, idade } = req.body;

        // Verifica se já existe um usuário com o mesmo ID
        const usuarioExistente = usuarios.find(usuario => usuario.getID() === id);
        if (usuarioExistente) {
            return res.status(400).json({ error: "Usuário já existe." });
        }

        else {
            const novoUsuario = new Usuario(id, nome, email, telefone, idade);
            usuarios.push(novoUsuario); // Adiciona o usuário ao "banco de dados"
            return res.status(201).json({ message: "Usuário criado com sucesso!", usuario: novoUsuario });
        }
    }

    // Busca informações de um usuário específico
    static getUsuarioById(req: Request, res: Response): Response {
        const { id } = req.params;

        const usuario = usuarios.find(usuario => usuario.getID() === id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        else {
            return res.status(200).json(usuario);
        }
    }

    // Lista todos os usuários
    static getAllUsuarios(req: Request, res: Response): void {
        res.status(200).json(usuarios);
    }

    // Atualiza informações de um usuário
    static updateUsuario(req: Request, res: Response): Response {
        const { id } = req.params;
        const { nome, email, telefone, idade } = req.body;

        const usuario = usuarios.find(usuario => usuario.getID() === id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
        
        else{
            // Atualiza as informações do usuário
            usuario['nome'] = nome || usuario.getNomeU();
            usuario['email'] = email || usuario['email'];
            usuario['telefone'] = telefone || usuario['telefone'];
            usuario['idade'] = idade || usuario['idade'];
            return res.status(200).json({ message: "Usuário atualizado com sucesso!", usuario });
        }
    }

    // Remove um usuário
    static deleteUsuario(req: Request, res: Response): Response {
        const { id } = req.params;

        const usuarioIndex = usuarios.findIndex(usuario => usuario.getID() === id);

        if (usuarioIndex === -1) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        else{
            usuarios.splice(usuarioIndex, 1); // Remove o usuário do array
            return res.status(200).json({ message: "Usuário deletado com sucesso!" });
        }
    }
}
