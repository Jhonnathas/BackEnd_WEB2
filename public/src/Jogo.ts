export class Jogo {
    idJogo: number;
    nomeJogo: string;
    categoria: string;
    anoLancamento: number;
    plataformas: string;
    descricao: string;
    media : number;
    mediaJogabilidade: number;
    mediaGraficos: number;
    mediaHistoria: number;

    constructor(id: number, nome: string, genero: string, anoLancamento: number, 
        plataformas: string, descricao: string, media: number, mediaJogabilidade: number,
        mediaGraficos: number, mediaHistoria: number
    ) {
        this.idJogo = id;
        this.nomeJogo = nome;
        this.categoria = genero;
        this.anoLancamento = anoLancamento;
        this.plataformas = plataformas;
        this.descricao = descricao;
        this.media = media;
        this.mediaJogabilidade = mediaJogabilidade;
        this.mediaGraficos = mediaGraficos;
        this.mediaHistoria = mediaHistoria;
    }

    exibirDetalhes(): void {
        console.log(`Jogo: ${this.nomeJogo}, Gênero: ${this.categoria}, Ano de Lançamento: ${this.anoLancamento}`);
    }

    calculaMedia(): void {
        this.media = this.mediaJogabilidade * 0.40 + this.mediaGraficos * 0.30 + this.mediaHistoria * 0.30;
    }
    
}
