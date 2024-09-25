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
    private mediaJogabilidade: number;
    private mediaGraficos: number;
    private mediaHistoria: number;
    private media!: number
    //comentario: string; vai ser uma entidade
    

    constructor(idReview: string, jogo: Jogo, usuario: Usuario, titulo: string, 
        nota: number, notaGrafico: number, notaJogabilidade: number, notaHistoria: number, 
        texto: string, curtidas: number, jogabilidade: number, graficos: number, historia: number) {
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
        this.mediaJogabilidade = jogabilidade;
        this.mediaGraficos = graficos;
        this.mediaHistoria = historia;
    }

    exibirReview(): void {
        console.log(`Review do jogo ${this.jogo.getNomeJogo()} pelo usuário ${this.usuario.getNomeU()}`);
        console.log(`Nota: ${this.nota}/10`);
        console.log(`Comentário: ${this.texto}`);
    }

    getID(): string {
        return this.idReview;
    }

    calculaMedia(): void {
        this.media = this.mediaJogabilidade * 0.40 + this.mediaGraficos * 0.30 + this.mediaHistoria * 0.30;
    }

    getMedia(): number {
        return this.media;
    }

}
