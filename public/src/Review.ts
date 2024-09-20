import { Jogo } from './Jogo';
import { Usuario } from './Usuario';

export class Review {
    private idReview: string;
    private jogo: Jogo;
    private usuario: Usuario;
    private titulo: string;
    private nota: number;
    private notaGrafico: number;
    private notaJogabilidade: number;
    private notaHistoria: number;
    private texto: string;
    private curtidas: number;
    //comentario: string; vai ser uma entidade

    constructor(idReview: string, jogo: Jogo, usuario: Usuario, titulo: string, 
        nota: number, notaGrafico: number, notaJogabilidade: number, notaHistoria: number, 
        texto: string, curtidas: number) {
        this.idReview = idReview;
        this.jogo = jogo;
        this.usuario = usuario;
        this.titulo = titulo;
        this.nota = nota;
        this.notaGrafico = notaGrafico;
        this.notaJogabilidade = notaJogabilidade;
        this.notaHistoria = notaHistoria;
        this.texto = texto;
        this.curtidas = curtidas;
    }

    exibirReview(): void {
        console.log(`Review do jogo ${this.jogo.nomeJogo} pelo usuário ${this.usuario.nome}`);
        console.log(`Nota: ${this.nota}/10`);
        console.log(`Comentário: ${this.texto}`);
    }

    getID(): string {
        return this.idReview;
    }

}
