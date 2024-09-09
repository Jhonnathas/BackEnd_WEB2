import { Jogo } from './Jogo';
import { Usuario } from './Usuario';

export class Review {
    jogo: Jogo;
    usuario: Usuario;
    nota: number;
    comentario: string;

    constructor(jogo: Jogo, usuario: Usuario, nota: number, comentario: string) {
        this.jogo = jogo;
        this.usuario = usuario;
        this.nota = nota;
        this.comentario = comentario;
    }

    exibirReview(): void {
        console.log(`Review do jogo ${this.jogo.nome} pelo usuário ${this.usuario.nome}`);
        console.log(`Nota: ${this.nota}/10`);
        console.log(`Comentário: ${this.comentario}`);
    }
}
