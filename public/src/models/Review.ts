import { Jogo } from './Jogo';
import { Usuario } from './Usuario';

export class Review {
    private idReview: string;
    private idJogo: number;
    private idUsuario: string;
    private titulo: string;
    private notaGrafico: number;
    private notaJogabilidade: number;
    private notaHistoria: number;
    private texto: string;
    private media!: number;
    private jogo!: Jogo;
    private usuario!: Usuario;
    //private const curtida! = new Map<string, string>();

    constructor(idReview: string, idJogo: number, idUsuario: string, titulo: string, notaGrafico: number,
        notaJogabilidade: number, notaHistoria: number, texto: string) {
        this.idReview = idReview;
        this.idJogo = idJogo;
        this.idUsuario = idUsuario;
        this.titulo = titulo;
        this.notaGrafico = notaGrafico;
        this.notaJogabilidade = notaJogabilidade;
        this.notaHistoria = notaHistoria;
        this.texto = texto;
    }

    editarReview(novoTitulo: string, novaNotaGrafico: number, novaNotaJogabilidade: number,
        novaNotaHistoria: number, novoTexto: string): void {
            this.titulo = novoTitulo;
            this.notaGrafico = novaNotaGrafico;
            this.notaJogabilidade = novaNotaJogabilidade;
            this.notaHistoria = novaNotaHistoria;
            this.texto = novoTexto;
    }

    exibirReview(): void {
        console.log(`Review do jogo ${this.jogo.getNomeJogo()} pelo usuário ${this.usuario.getNomeU()}`);
        console.log(`Nota: ${this.media}/10`);
        console.log(`Comentário: ${this.texto}`);
    }

    getID(): string {
        return this.idReview;
    }

    calculaMedia(): void {
        this.media = this.notaJogabilidade * 0.40 + this.notaGrafico * 0.30 + this.notaHistoria * 0.30;
    }

    getMedia(): number {
        return this.media;
    }

    getJogoReview(): Jogo{
        return this.jogo.getJogo(this.idJogo);
    }
}
